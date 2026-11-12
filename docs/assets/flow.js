// Interactive "how it works" map for ZKMNEXT GameSpace. Canvas 2D, no dependencies.
// Nodes and flows follow the real v25 source: KeymapInjector/TouchLanes, IRootService (AIDL), RootServiceImpl,
// ProcessPulse, LegacyNodeJournal, ScoutGuard, ScreenGate.

const LAYERS = [
  { name: 'You and the game', y: 330, r: 160, off: 0.35 },
  { name: 'Application', y: 196, r: 250, off: 0.95 },
  { name: 'Plugin', y: 64, r: 300, off: 0.2 },
  { name: 'Core', y: -66, r: 215, off: 0.55 },
  { name: 'Access backends', y: -196, r: 245, off: 1.15 },
  { name: 'Android system', y: -330, r: 225, off: 0.4 }
];

// [id, layer, label, description, center]
const NODES = [
  ['game', 0, 'Game', 'The game you are playing. Every mapped touch ends here.'],
  ['finger', 0, 'Your fingers', 'Real fingers on the screen. The shared touch session forwards them alongside mapped fingers.'],
  ['pad', 0, 'Gamepad and buttons', 'Gamepad, keyboard, mouse or a gaming phone\'s L/R shoulder buttons.'],

  ['lobby', 1, 'Lobby', 'Explore, Handheld and Gamepad: three interfaces for the same library.'],
  ['overlay', 1, 'Overlay', 'Energy Cube and Compact. Panels stop drawing when hidden or when the screen is off.'],
  ['detector', 1, 'Game detection', 'Receives process events from the privileged process and starts game sessions without polling.'],
  ['screengate', 1, 'ScreenGate', 'App-wide screen on/off signals. Overlays and FPS sampling pause while the screen is dark.'],

  ['keymap', 2, 'Keymap', 'Large A–D buttons forward touches to target points in the game.'],
  ['shoulder', 2, 'Shoulder', 'Physical L/R buttons become touches at your configured positions.'],
  ['gravity', 2, 'Gravity X', 'Keyboard, mouse and gamepad schemes. Each screen can minimize into a bubble.'],
  ['macro', 2, 'Macro', 'Records and replays touches. Playback works alongside Keymap, Shoulder and Gravity X.'],
  ['scout', 2, 'Scout', 'A zoom lens. Disabling it restores the system settings changed by Scout.'],
  ['monitor', 2, 'Monitor', 'FPS, temperature, CPU and GPU. Shizuku/Axeron readers use the GameSpace server when active.'],
  ['modes', 2, 'Eco / Balance / Rise', 'Three modes with fixed CPU, GPU, memory and scheduler values.'],

  ['ipc', 3, 'AIDL IRootService', 'IPC contract between the app and privileged process, protocol 10. Root and Shizuku share the same stub.', true],
  ['lanes', 3, 'Shared touch session', 'KeymapInjector grants each plugin a lease. TouchLanes maps local finger IDs to 32 physical lanes.'],
  ['journal', 3, 'Node journal', 'LegacyNodeJournal records original values before writes and restores them when the session ends.'],
  ['guard', 3, 'ScoutGuard', 'Records settings changed by Scout and registers a recovery script with the privileged process.'],

  ['privileged', 4, 'Privileged process', 'RootServiceImpl. Shared Root/shell code for injecting touches, reading nodes and running recovery scripts.', true],
  ['root', 4, 'Root · libsu', 'libsu launches the Root process and passes its Binder to the app.'],
  ['shizuku', 4, 'Shizuku', 'Runs the GameSpace server under the shell UID through app_process.'],
  ['axeron', 4, 'Axeron', 'Privileged-shell access through the Axeron backend.'],
  ['basic', 4, 'Basic', 'No privileged access. The library, interface and music remain available.'],

  ['am', 5, 'ActivityManager', 'The privileged process registers an observer for game-open and game-close events.'],
  ['input', 5, 'Android input', 'Touchscreen capture and multi-touch injection. Real and mapped fingers form one gesture.'],
  ['kernel', 5, 'Kernel / sysfs', 'CPU, GPU, scheduler and thermal nodes actually exposed by the device.'],
  ['settings', 5, 'System settings', 'Settings.Secure and Global, including magnification settings and the accessibility-service list.']
];

const EDGES = [
  ['finger', 'keymap'], ['finger', 'overlay'], ['pad', 'gravity'], ['pad', 'shoulder'], ['game', 'am'],
  ['lobby', 'detector'], ['detector', 'overlay'], ['detector', 'modes'], ['screengate', 'overlay'], ['screengate', 'monitor'],
  ['overlay', 'monitor'], ['overlay', 'modes'], ['overlay', 'scout'], ['overlay', 'macro'],
  ['keymap', 'lanes'], ['shoulder', 'lanes'], ['gravity', 'lanes'], ['macro', 'lanes'],
  ['scout', 'guard'], ['modes', 'journal'], ['monitor', 'ipc'],
  ['lanes', 'ipc'], ['journal', 'ipc'], ['guard', 'ipc'], ['ipc', 'detector'],
  ['ipc', 'privileged'], ['root', 'privileged'], ['shizuku', 'privileged'], ['axeron', 'privileged'], ['basic', 'lobby'],
  ['am', 'privileged'], ['privileged', 'input'], ['privileged', 'kernel'], ['privileged', 'settings'], ['input', 'game']
];

const SCENARIOS = [
  { name: 'Game launched', steps: [
    { say: 'You open a game. Android starts its process.', go: [['game', 'am']] },
    { say: 'ProcessPulse receives the event in the privileged process. No polling is needed.', go: [['am', 'privileged']] },
    { say: 'The event reaches the app through a oneway Binder call.', go: [['privileged', 'ipc']] },
    { say: 'Game detection wakes immediately and starts a session.', go: [['ipc', 'detector']] },
    { say: 'The overlay appears and the game profile becomes active.', go: [['detector', 'overlay'], ['detector', 'modes']] },
    { say: 'The journal records every node\'s original value before any writes.', go: [['modes', 'journal']] },
    { say: 'New values reach the kernel through the privileged process.', go: [['journal', 'ipc']] },
    { say: 'When the game ends, the journal restores original values.', go: [['ipc', 'privileged']] },
    { say: 'CPU, GPU and scheduler settings return to their pre-session values.', go: [['privileged', 'kernel']] }
  ] },
  { name: 'Press Keymap', steps: [
    { say: 'Your finger presses the large A button.', go: [['finger', 'keymap']] },
    { say: 'Keymap uses its lease. Local finger ID 0 receives an available physical lane.', go: [['keymap', 'lanes']] },
    { say: 'One multi-touch frame travels through AIDL.', go: [['lanes', 'ipc']] },
    { say: 'The privileged process receives the frame.', go: [['ipc', 'privileged']] },
    { say: 'Real and mapped fingers are combined into one gesture.', go: [['privileged', 'input']] },
    { say: 'The game receives a touch at target point A.', go: [['input', 'game']] }
  ] },
  { name: 'Keymap + Macro', steps: [
    { say: 'A macro is playing when you press a Keymap button.', go: [['overlay', 'macro'], ['finger', 'keymap']] },
    { say: 'Two leases share one session. TouchLanes assigns distinct physical IDs to prevent collisions.', go: [['macro', 'lanes'], ['keymap', 'lanes']] },
    { say: 'Both fingers travel in the same frame.', go: [['lanes', 'ipc']] },
    { say: 'The privileged process does not need another session.', go: [['ipc', 'privileged']] },
    { say: 'One gesture contains two virtual fingers and your real fingers.', go: [['privileged', 'input']] },
    { say: 'The game receives both. Stopping Macro does not stop Keymap.', go: [['input', 'game']] }
  ] },
  { name: 'Gravity X', steps: [
    { say: 'You move the gamepad stick.', go: [['pad', 'gravity']] },
    { say: 'Gravity X translates stick movement into a swipe on the game\'s joystick.', go: [['gravity', 'lanes']] },
    { say: 'The GRAVITY lease uses its own lanes.', go: [['lanes', 'ipc']] },
    { say: 'The frame is sent to the privileged process.', go: [['ipc', 'privileged']] },
    { say: 'Multi-touch injection.', go: [['privileged', 'input']] },
    { say: 'Your character moves.', go: [['input', 'game']] }
  ] },
  { name: 'Rise mode', steps: [
    { say: 'You choose Rise in the panel.', go: [['finger', 'overlay']] },
    { say: 'The panel forwards your selection to the mode engine.', go: [['overlay', 'modes']] },
    { say: 'Original values are recorded in the journal first.', go: [['modes', 'journal']] },
    { say: 'The write plan travels through AIDL.', go: [['journal', 'ipc']] },
    { say: 'The privileged process executes it.', go: [['ipc', 'privileged']] },
    { say: 'CPU, GPU and memory use Rise values. Nodes locked by a module are skipped.', go: [['privileged', 'kernel']] }
  ] },
  { name: 'App force-stopped', steps: [
    { say: 'Scout is active. ScoutGuard records the original settings.', go: [['overlay', 'scout'], ['scout', 'guard']] },
    { say: 'A recovery script is registered with the privileged process (armCleanup).', go: [['guard', 'ipc']] },
    { say: 'The privileged process holds the script and monitors the app\'s Binder.', go: [['ipc', 'privileged']] },
    { say: 'You force-stop GameSpace. The app\'s Binder dies.', go: [], kill: true, wait: 1400 },
    { say: 'The privileged process runs the script: the lens closes and magnification settings are restored.', go: [['privileged', 'settings']] }
  ] },
  { name: 'Screen off', steps: [
    { say: 'The screen turns off. ScreenGate notifies every overlay.', go: [['screengate', 'overlay'], ['screengate', 'monitor']] },
    { say: 'Overlays enter CREATED state and stop drawing. FPS sampling waits for the screen to turn on.', go: [], dim: ['overlay', 'monitor'], wait: 2200 }
  ] }
];

const FOV = 1100;

export function mountFlow(root) {
  const byId = {};
  NODES.forEach((n, i) => {
    byId[n[0]] = { id: n[0], layer: n[1], label: n[2], desc: n[3], center: !!n[4], i, flash: 0, dim: 0, dimTarget: 0 };
  });
  LAYERS.forEach((L, li) => {
    const ring = Object.values(byId).filter(n => n.layer === li && !n.center);
    ring.forEach((n, k) => {
      const a = L.off + k * Math.PI * 2 / ring.length;
      n.x = Math.cos(a) * L.r; n.z = Math.sin(a) * L.r; n.y = L.y;
    });
    Object.values(byId).filter(n => n.layer === li && n.center).forEach(n => { n.x = 0; n.z = 0; n.y = L.y; });
  });
  const edges = EDGES.map(([a, b]) => {
    const A = byId[a], B = byId[b];
    const mx = (A.x + B.x) / 2, mz = (A.z + B.z) / 2, my = (A.y + B.y) / 2;
    let d = Math.hypot(mx, mz), dx = d > 1 ? mx / d : 1, dz = d > 1 ? mz / d : 0;
    if (d <= 1) { const o = Math.hypot(A.x + B.x, A.z + B.z) || 1; dx = (A.x - B.x) / o || 1; dz = (A.z - B.z) / o || 0; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l; }
    const dy = Math.abs(A.y - B.y);
    const k = dy > 300 ? 300 : 20 + dy * 0.18;
    return { a, b, A, B, cx: mx + dx * k, cy: my, cz: mz + dz * k, pts: new Float32Array(17 * 3) };
  });
  const edgeKey = {};
  edges.forEach((e, i) => { edgeKey[e.a + '|' + e.b] = i; edgeKey[e.b + '|' + e.a] = i; });

  root.innerHTML = `
<div class="flow">
  <div class="flow-bar">
    <div class="flow-chips" role="group" aria-label="Choose a flow">${SCENARIOS.map((s, i) => `<button data-sc="${i}" aria-pressed="false">${s.name}</button>`).join('')}</div>
    <button class="flow-auto" aria-pressed="true" title="Cycle through flows">▶ Automatic</button>
  </div>
  <div class="flow-stage">
    <canvas role="img" aria-label="A 3D map of ZKMNEXT GameSpace: six layers from fingers and games to the Android system, with signals moving between components."></canvas>
    <ol class="flow-legend" aria-hidden="true">${LAYERS.map((L, i) => `<li style="--c:var(--l${i})"><i></i>${L.name}</li>`).join('')}</ol>
    <div class="flow-card" hidden></div>
    <p class="flow-hint">Drag to rotate · select a node for details</p>
  </div>
  <div class="flow-steps" aria-live="polite"><b>Choose a flow</b><span>Or let the flows play automatically.</span></div>
  <details class="flow-text"><summary>Text version of all components</summary>${LAYERS.map((L, li) => `<h3>${L.name}</h3><ul>${Object.values(byId).filter(n => n.layer === li).map(n => `<li><b>${n.label}</b>: ${n.desc}</li>`).join('')}</ul>`).join('')}</details>
</div>`;

  const stage = root.querySelector('.flow-stage');
  const cv = root.querySelector('canvas');
  const ctx = cv.getContext('2d');
  const card = root.querySelector('.flow-card');
  const steps = root.querySelector('.flow-steps');
  const autoBtn = root.querySelector('.flow-auto');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let W = 0, H = 0, dpr = 1, zoom = 1, cx = 0, cyc = 0;
  let yaw = 0.55, pitch = 0.3, velYaw = 0;
  let C = {}, dark = true, sprites = {};
  let pulses = [], sc = -1, stepIdx = -1, pending = 0, stepTimer = 0, idleTimer = 0, killFx = 0;
  let auto = true, autoNext = 0, selected = null, hover = null, ambientAcc = 0;
  let raf = 0, last = 0, visible = true, running = true;
  const P = {};
  let hit = [];

  function readTheme() {
    const cs = getComputedStyle(document.body);
    dark = !document.body.classList.contains('light');
    const v = n => cs.getPropertyValue(n).trim();
    C = { text: v('--text'), muted: v('--muted'), panel: v('--panel'), line: v('--line') };
    LAYERS.forEach((_, i) => { C['l' + i] = v('--l' + i) || '#b18cff'; });
    sprites = {};
  }
  function rgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const n = parseInt(hex, 16);
    return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
  }
  function sprite(color) {
    if (sprites[color]) return sprites[color];
    const s = document.createElement('canvas'); s.width = s.height = 64;
    const g = s.getContext('2d'), c = rgb(color);
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, `rgba(${c},1)`); gr.addColorStop(0.2, `rgba(${c},.8)`); gr.addColorStop(0.5, `rgba(${c},.18)`); gr.addColorStop(1, `rgba(${c},0)`);
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    return (sprites[color] = s);
  }

  function resize() {
    const r = stage.getBoundingClientRect();
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = Math.max(280, r.width); H = Math.max(360, r.height);
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    zoom = Math.min(W / 800, H / 860) * (W < 560 ? 1.06 : 1);
    cx = W / 2; cyc = H * 0.5;
  }

  let cyw = 1, syw = 0, cp = 1, sp = 0;
  function proj(x, y, z, out) {
    const x1 = x * cyw + z * syw, z1 = -x * syw + z * cyw;
    const y2 = y * cp + z1 * sp, z2 = -y * sp + z1 * cp;
    const s = FOV / (FOV + z2);
    out[0] = cx + x1 * s * zoom; out[1] = cyc - y2 * s * zoom; out[2] = z2; out[3] = s;
    return out;
  }
  const tmp = [0, 0, 0, 0];
  function bez(e, t, out) {
    const u = 1 - t;
    const x = u * u * e.A.x + 2 * u * t * e.cx + t * t * e.B.x;
    const y = u * u * e.A.y + 2 * u * t * e.cy + t * t * e.B.y;
    const z = u * u * e.A.z + 2 * u * t * e.cz + t * t * e.B.z;
    return proj(x, y, z, out);
  }

  // ---- scenarios ---------------------------------------------------------------------------------
  function setPressed() {
    root.querySelectorAll('[data-sc]').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.sc === sc)));
    autoBtn.setAttribute('aria-pressed', String(auto));
    autoBtn.textContent = auto ? '▶ Automatic' : '❚❚ Manual';
  }
  function showStep() {
    const s = SCENARIOS[sc], st = s.steps[stepIdx];
    steps.innerHTML = `<b>${s.name}</b><span class="flow-n">${stepIdx + 1}/${s.steps.length}</span><span>${st.say}</span><div class="flow-prog">${s.steps.map((_, i) => `<i class="${i < stepIdx ? 'done' : i === stepIdx ? 'now' : ''}"></i>`).join('')}</div>`;
  }
  function launch(a, b, tag, ambient) {
    const ei = edgeKey[a + '|' + b];
    if (ei === undefined) return;
    pulses.push({ e: edges[ei], from: byId[a], to: byId[b], fwd: edges[ei].a === a, t: 0, sp: (ambient ? 0.45 : 0.85) * (reduce ? 0.6 : 1), tag, ambient, trail: [] });
  }
  function runStep() {
    const st = SCENARIOS[sc].steps[stepIdx];
    showStep();
    pending = 0;
    st.go.forEach(([a, b]) => { launch(a, b, stepIdx, false); pending++; });
    if (st.kill) killFx = 1;
    if (st.dim) st.dim.forEach(id => { byId[id].dimTarget = 1; });
    if (!pending) stepTimer = st.wait || 900;
  }
  function start(i) {
    Object.values(byId).forEach(n => { n.dimTarget = 0; });
    pulses = pulses.filter(p => p.ambient);
    sc = i; stepIdx = 0; killFx = 0; idleTimer = 0;
    setPressed(); runStep();
  }
  function nextStep() {
    stepIdx++;
    if (stepIdx >= SCENARIOS[sc].steps.length) {
      steps.querySelector('.flow-prog')?.querySelectorAll('i').forEach(i => i.className = 'done');
      idleTimer = 2600; stepIdx = -1;
      autoNext = auto ? 1 : 0;
      return;
    }
    runStep();
  }
  root.querySelectorAll('[data-sc]').forEach(b => b.addEventListener('click', () => { auto = false; start(+b.dataset.sc); }));
  autoBtn.addEventListener('click', () => { auto = !auto; setPressed(); if (auto && stepIdx < 0) start((sc + 1) % SCENARIOS.length); });

  // ---- selection ---------------------------------------------------------------------------------
  function select(n) {
    selected = n;
    if (!n) { card.hidden = true; return; }
    const related = SCENARIOS.map((s, i) => [s, i]).filter(([s]) => s.steps.some(st => st.go.some(([a, b]) => a === n.id || b === n.id)));
    card.innerHTML = `<button class="flow-x" aria-label="Close">×</button><span class="flow-tag" style="--c:var(--l${n.layer})">${LAYERS[n.layer].name}</span><h3>${n.label}</h3><p>${n.desc}</p>${related.length ? `<div class="flow-rel">${related.map(([s, i]) => `<button data-run="${i}">▶ ${s.name}</button>`).join('')}</div>` : ''}`;
    card.hidden = false;
    card.querySelector('.flow-x').onclick = () => select(null);
    card.querySelectorAll('[data-run]').forEach(b => b.onclick = () => { auto = false; start(+b.dataset.run); });
    n.flash = 1;
  }

  // ---- pointer -----------------------------------------------------------------------------------
  let down = false, px = 0, py = 0, moved = 0;
  function pick(x, y) {
    for (let i = hit.length - 1; i >= 0; i--) { const h = hit[i]; if (x >= h.x && x <= h.x + h.w && y >= h.y && y <= h.y + h.h) return h.n; }
    return null;
  }
  function local(e) { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
  const onDown = e => { down = true; [px, py] = local(e); moved = 0; try { cv.setPointerCapture(e.pointerId); } catch {} };
  const onMove = e => {
    const [x, y] = local(e);
    if (!down) { hover = e.pointerType === 'mouse' ? pick(x, y) : null; cv.style.cursor = hover ? 'pointer' : 'grab'; return; }
    const dx = x - px, dy = y - py; px = x; py = y; moved += Math.abs(dx) + Math.abs(dy);
    yaw += dx * 0.006; velYaw = dx * 0.24;
    pitch = Math.max(0.1, Math.min(0.7, pitch + dy * 0.003));
    cv.style.cursor = 'grabbing';
  };
  const onUp = e => {
    if (!down) return; down = false; cv.style.cursor = 'grab';
    if (moved < 7) { const [x, y] = local(e); select(pick(x, y)); }
  };
  cv.addEventListener('pointerdown', onDown);
  cv.addEventListener('pointermove', onMove);
  cv.addEventListener('pointerup', onUp);
  cv.addEventListener('pointercancel', () => { down = false; });

  // ---- drawing -----------------------------------------------------------------------------------
  function pill(x, y, w, h, r) {
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
    else { ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); }
  }
  function frame(now) {
    raf = 0;
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now;
    if (!down) { yaw += (velYaw * 0.004 + (reduce ? 0 : 0.07)) * dt * (selected ? 0.25 : 1); velYaw *= Math.exp(-dt * 2); }
    cyw = Math.cos(yaw); syw = Math.sin(yaw); cp = Math.cos(pitch); sp = Math.sin(pitch);

    // scenario timing
    if (sc >= 0 && stepIdx >= 0 && pending === 0 && stepTimer > 0) { stepTimer -= dt * 1000; if (stepTimer <= 0) nextStep(); }
    if (stepIdx < 0 && idleTimer > 0) {
      idleTimer -= dt * 1000;
      if (idleTimer <= 0) {
        Object.values(byId).forEach(n => { n.dimTarget = 0; }); killFx = 0;
        if (autoNext && auto) start((sc + 1) % SCENARIOS.length);
      }
    }
    killFx = Math.max(0, killFx - dt * 0.35);
    // ambient traffic while idle
    if (stepIdx < 0) {
      ambientAcc += dt;
      if (ambientAcc > (reduce ? 2.4 : 0.9)) { ambientAcc = 0; const e = edges[Math.floor(Math.random() * edges.length)]; const f = Math.random() < 0.5; launch(f ? e.a : e.b, f ? e.b : e.a, -1, true); }
    }

    // project nodes
    Object.values(byId).forEach(n => {
      proj(n.x, n.y, n.z, tmp);
      P[n.id] = { x: tmp[0], y: tmp[1], z: tmp[2], s: tmp[3] };
      n.flash = Math.max(0, n.flash - dt * 1.4);
      n.dim += (n.dimTarget - n.dim) * Math.min(1, dt * 4);
    });
    const fog = z => Math.max(0.35, Math.min(1, 0.68 - z / 700));

    ctx.clearRect(0, 0, W, H);
    ctx.lineCap = 'round';
    // layer plates
    LAYERS.forEach((L, li) => {
      const col = C['l' + li];
      ctx.beginPath();
      let minX = 1e9, minY = 0;
      for (let k = 0; k <= 72; k++) {
        const a = k / 72 * Math.PI * 2;
        proj(Math.cos(a) * (L.r + 26), L.y, Math.sin(a) * (L.r + 26), tmp);
        if (k) ctx.lineTo(tmp[0], tmp[1]); else ctx.moveTo(tmp[0], tmp[1]);
        if (tmp[0] < minX) { minX = tmp[0]; minY = tmp[1]; }
      }
      const killed = killFx > 0 && li >= 1 && li <= 3 ? killFx : 0;
      ctx.fillStyle = `rgba(${rgb(col)},${(dark ? 0.035 : 0.05) * (1 - killed)})`; ctx.fill();
      ctx.strokeStyle = `rgba(${rgb(col)},${(dark ? 0.28 : 0.4) * (1 - killed * 0.8)})`; ctx.lineWidth = 1; ctx.setLineDash([3, 6]); ctx.stroke(); ctx.setLineDash([]);
      if (W > 720) {
        ctx.font = '700 10px Inter, system-ui, sans-serif'; ctx.fillStyle = `rgba(${rgb(col)},.85)`; ctx.textAlign = 'right';
        ctx.fillText(L.name.toUpperCase(), minX - 10, minY + 3);
      }
    });

    // edges
    const sel = selected;
    edges.forEach(e => {
      const on = sel && (e.a === sel.id || e.b === sel.id);
      const killed = killFx > 0 && (e.A.layer >= 1 && e.A.layer <= 3 || e.B.layer >= 1 && e.B.layer <= 3) ? killFx : 0;
      ctx.beginPath();
      let zsum = 0;
      for (let k = 0; k <= 16; k++) { bez(e, k / 16, tmp); zsum += tmp[2]; if (k) ctx.lineTo(tmp[0], tmp[1]); else ctx.moveTo(tmp[0], tmp[1]); }
      const base = (dark ? 0.22 : 0.3) * fog(zsum / 17) * (sel && !on ? 0.35 : 1) * (1 - killed * 0.85);
      const grad = ctx.createLinearGradient(P[e.a].x, P[e.a].y, P[e.b].x, P[e.b].y);
      grad.addColorStop(0, `rgba(${rgb(C['l' + e.A.layer])},${on ? 0.9 : base})`);
      grad.addColorStop(1, `rgba(${rgb(C['l' + e.B.layer])},${on ? 0.9 : base})`);
      ctx.strokeStyle = grad; ctx.lineWidth = on ? 2 : 1.1; ctx.stroke();
    });

    // pulses
    ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over';
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.t += dt * p.sp;
      const t = Math.min(1, p.t), tt = p.fwd ? t : 1 - t;
      bez(p.e, tt, tmp);
      p.trail.unshift([tmp[0], tmp[1]]); if (p.trail.length > 10) p.trail.pop();
      const col = C['l' + p.to.layer], spr = sprite(col);
      const amb = p.ambient ? 0.45 : 1;
      p.trail.forEach(([x, y], k) => {
        const s = (p.ambient ? 10 : 18) * (1 - k / 11);
        ctx.globalAlpha = amb * (1 - k / 10) * 0.7; ctx.drawImage(spr, x - s / 2, y - s / 2, s, s);
      });
      ctx.globalAlpha = amb; const s0 = p.ambient ? 14 : 26; ctx.drawImage(spr, tmp[0] - s0 / 2, tmp[1] - s0 / 2, s0, s0);
      if (p.t >= 1) {
        pulses.splice(i, 1);
        if (!p.ambient) { p.to.flash = 1; if (p.tag === stepIdx && --pending === 0) stepTimer = 380; }
        else p.to.flash = Math.max(p.to.flash, 0.35);
      }
    }
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';

    // nodes: dots far to near, then labels placed near-first so they avoid each other
    hit = [];
    const order = Object.values(byId).sort((a, b) => P[b.id].z - P[a.id].z);
    const fsBase = Math.max(10, Math.min(13.5, 11.5 * zoom * 1.15));
    const look = {};
    order.forEach(n => {
      const q = P[n.id], f = fog(q.z), col = C['l' + n.layer];
      const killed = killFx > 0 && n.layer >= 1 && n.layer <= 3 ? killFx : 0;
      const isSel = selected === n;
      const alpha = f * (1 - n.dim * 0.7) * (1 - killed * 0.75) * (selected && !isSel && !isRelated(n) ? 0.45 : 1);
      const r = (n.center ? 9 : 6) * q.s * Math.max(0.75, zoom);
      look[n.id] = { alpha, r, col };
      ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over';
      const g = r * (4 + n.flash * 4 + (isSel ? 2 : 0));
      ctx.globalAlpha = alpha * (0.55 + n.flash * 0.45); ctx.drawImage(sprite(col), q.x - g, q.y - g, g * 2, g * 2);
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = alpha;
      ctx.beginPath(); ctx.arc(q.x, q.y, r, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill();
      if (n.center) { ctx.beginPath(); ctx.arc(q.x, q.y, r * 1.9, 0, Math.PI * 2); ctx.strokeStyle = col; ctx.lineWidth = 1.2; ctx.stroke(); }
    });
    // Greedy label layout: the nearest node (and the selected one) picks first among below/above/right/left.
    const placed = [];
    const overlaps = (x, y, w, h) => placed.some(b => x < b.x + b.w + 3 && x + w + 3 > b.x && y < b.y + b.h + 2 && y + h + 2 > b.y);
    const labels = [...order].reverse().sort((a, b) => (b === selected) - (a === selected));
    const drawn = [];
    labels.forEach(n => {
      const q = P[n.id], L = look[n.id];
      const fs = fsBase * Math.max(0.85, Math.min(1.12, q.s));
      ctx.font = `650 ${fs.toFixed(1)}px Inter, system-ui, sans-serif`;
      const pw = ctx.measureText(n.label).width + 16, ph = fs + 9, gap = L.r + 5;
      const spots = [
        [q.x - pw / 2, q.y + gap], [q.x - pw / 2, q.y - gap - ph],
        [q.x + gap + 2, q.y - ph / 2], [q.x - gap - 2 - pw, q.y - ph / 2]
      ];
      // Keep every label inside the stage (narrow phones).
      spots.forEach(sp => { sp[0] = Math.max(4, Math.min(W - pw - 4, sp[0])); sp[1] = Math.max(4, Math.min(H - ph - 4, sp[1])); });
      let spot = spots.find(([x, y]) => !overlaps(x, y, pw, ph));
      const crowded = !spot;
      if (!spot) spot = spots[0];
      placed.push({ x: spot[0], y: spot[1], w: pw, h: ph });
      drawn.push({ n, q, L, fs, pw, ph, x: spot[0], y: spot[1], crowded });
    });
    // Paint far labels first so near ones sit on top.
    drawn.reverse().forEach(({ n, q, L, fs, pw, ph, x, y, crowded }) => {
      const isSel = selected === n, isHover = hover === n;
      const a = L.alpha * (crowded && !isSel && !isHover ? 0.32 : 1);
      ctx.font = `650 ${fs.toFixed(1)}px Inter, system-ui, sans-serif`;
      pill(x, y, pw, ph, ph / 2);
      ctx.fillStyle = C.panel; ctx.globalAlpha = a * (dark ? 0.88 : 0.95); ctx.fill();
      ctx.globalAlpha = a; ctx.strokeStyle = isSel || isHover || n.flash > 0.3 ? L.col : `rgba(${rgb(L.col)},.45)`; ctx.lineWidth = isSel ? 1.6 : 1; ctx.stroke();
      ctx.fillStyle = C.text; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(n.label, x + pw / 2, y + ph / 2 + 0.5);
      ctx.textBaseline = 'alphabetic';
      const left = Math.min(x, q.x - L.r * 2), top = Math.min(y, q.y - L.r * 2);
      const right = Math.max(x + pw, q.x + L.r * 2), bottom = Math.max(y + ph, q.y + L.r * 2);
      hit.push({ n, x: left, y: top, w: right - left, h: bottom - top, z: q.z });
    });
    hit.sort((a, b) => b.z - a.z);
    ctx.globalAlpha = 1;
    schedule();
  }
  function isRelated(n) {
    if (!selected) return false;
    return edges.some(e => (e.a === selected.id && e.b === n.id) || (e.b === selected.id && e.a === n.id));
  }
  function schedule() { if (!raf && running && visible && !document.hidden) raf = requestAnimationFrame(frame); }

  // ---- lifecycle ---------------------------------------------------------------------------------
  const ro = new ResizeObserver(() => resize());
  ro.observe(stage);
  const io = new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible) { last = performance.now(); schedule(); } });
  io.observe(cv);
  const onVis = () => { if (!document.hidden) { last = performance.now(); schedule(); } };
  document.addEventListener('visibilitychange', onVis);
  const mo = new MutationObserver(readTheme);
  mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  readTheme(); resize(); setPressed();
  const kick = setTimeout(() => { if (auto && sc < 0) start(0); }, 900);
  last = performance.now(); schedule();

  return () => {
    running = false; clearTimeout(kick);
    if (raf) cancelAnimationFrame(raf);
    ro.disconnect(); io.disconnect(); mo.disconnect();
    document.removeEventListener('visibilitychange', onVis);
  };
}
