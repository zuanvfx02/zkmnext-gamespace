const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const EXPERIENCES = {
  Explore: {kicker:'01 / EXPLORE', title:'Your everyday command center.', text:'Your game library, profiles, settings and monitor in one space. Start with a short hands-on tour.', route:'explore', items:['Game library', 'Per-game profiles', 'First-time tour'], label:'Discover Explore'},
  Handheld: {kicker:'02 / HANDHELD', title:'Turn your phone into a lobby.', text:'A landscape gaming lobby with your wallpaper and quick controls close at hand. Choose a game, set up your session and play.', route:'modes', items:['Landscape lobby', 'Custom wallpapers', 'Session controls'], label:'Explore Handheld'},
  Gamepad: {kicker:'03 / GAMEPAD', title:'Lean back. Take control.', text:'Controller navigation with visible focus and on-screen button hints. The same library, a different way to play.', route:'input', items:['Controller navigation', 'Visible focus', 'Button hints'], label:'Controller guide'}
};

export function landingMarkup({version, guides, communityHTML}) {
  const guide = (id, number) => {
    const item = guides.find(g => g.id === id);
    return item ? `<a class="guide-card reveal" href="#${escape(id)}"><span class="guide-number">${String(number + 1).padStart(2,'0')} / ${escape(item.group)}</span><h3>${escape(item.title)}</h3><p>${escape(item.description)}</p><span class="guide-arrow" aria-hidden="true">↗</span></a>` : '';
  };
  return `
    <section class="launch-hero" aria-labelledby="hero-title">
      <div class="launch-copy">
        <p class="launch-eyebrow"><span></span> PLAYER & DEVELOPER DOCUMENTATION</p>
        <h1 id="hero-title">Your game.<br><span>Your space.</span><b aria-hidden="true">_</b></h1>
        <p class="launch-description">Know your device. Build your gaming space.<br>Official guides from your first game to deeper controls.</p>
        <div class="launch-actions"><a class="launch-button" href="#start">Get started <span aria-hidden="true">↗</span></a><a class="quiet-button" href="#cara-kerja">See how it works <span aria-hidden="true">→</span></a></div>
        <p class="launch-platform">ANDROID 10+ <i></i> EXPLORE / HANDHELD / GAMEPAD</p>
      </div>
      <figure class="energy-stage zea-hero" aria-label="ZEA, the official anime character of ZKMNEXT GameSpace">
        <div class="stage-topline"><span>ZKMNEXT / MEET YOUR COMPANION</span><span class="stage-indicator">ZEA</span></div>
        <img class="energy-art zea-stage-backdrop" src="assets/energy-scene.svg" width="640" height="600" alt="" aria-hidden="true">
        <img class="hero-zea-art" src="assets/zea/zea-void-wave.png" width="320" height="384" fetchpriority="high" alt="ZEA Void, the official anime character and companion of GameSpace">
        <a class="zea-intro-badge" href="#zea"><span>YOUR GAMESPACE COMPANION</span><b>Meet ZEA <i aria-hidden="true">↗</i></b></a>
        <figcaption><span>ZEA / VOID VANGUARD</span><span>Official ZKMNEXT GameSpace character</span></figcaption>
      </figure>
    </section>
    <div class="platform-strip"><span><b>03</b> ways to enjoy GameSpace</span><span><b>04</b> device access levels</span><span><b>LOCAL</b> settings on your device</span><a href="#whatsnew">${escape(version)} <span>Release notes ↗</span></a></div>
    <section class="edition-banner reveal"><div><span class="section-kicker">THE EXPRESSIVE UPDATE</span><h2>A familiar space.<br>A whole new feeling.</h2></div><p>A livelier introduction. An Explore tour that invites you to try things. Energy Cube with a more measured rendering budget.</p><a class="text-link" href="#expressive">Explore the update <span aria-hidden="true">↗</span></a></section>
    <section class="zea-spotlight" aria-labelledby="zea-title">
      <div class="zea-profile reveal"><div><p class="section-kicker">THE FACE OF OUR SPACE</p><h2 id="zea-title">Meet ZEA.<br>Your game. Your companion.</h2><p>ZEA is the official anime character of ZKMNEXT GameSpace. From the Character Room to the Mini assistant at the edge of your screen, she is the companion of your gaming space.</p><a class="text-link" href="#zea">Discover ZEA Void & Mini <span aria-hidden="true">↗</span></a></div><div class="zea-forms"><figure><img src="assets/zea/zea-void-wave.png" width="320" height="384" loading="lazy" alt="ZEA Void for the Character Room"><figcaption>ZEA VOID <span>Character Room</span></figcaption></figure><figure><img src="assets/zea/zea-void-mini.png" width="160" height="192" loading="lazy" alt="ZEA Mini assistant"><figcaption>ZEA MINI <span>On-screen companion</span></figcaption></figure></div></div>
      <div class="zea-preview-grid">${[['studio-previews/01-room.png','Character Room','ZEA Void in the Character Room'],['studio-previews/02-wardrobe.png','Dressing Room','ZEA Void outfit choices'],['zea-glow-previews/03-zea-ultimate.png','Action Stage','ZEA Void with equipment and an ultimate action']].map(([src,title,alt])=>`<a class="zea-preview reveal" href="${src}" target="_blank" rel="noopener noreferrer"><img src="${src}" width="960" height="540" loading="lazy" alt="${alt}"><span>${title}<b aria-hidden="true">↗</b></span></a>`).join('')}</div>
    </section>
    <section class="guide-section" id="guide-library" aria-labelledby="guides-title"><div class="editorial-heading reveal"><div><p class="section-kicker">THE FIELD GUIDE</p><h2 id="guides-title">Everything you need.<br>One place to start.</h2></div><p>Opening GameSpace for the first time or looking for one setting? Start with what you need.</p></div><div class="guide-grid">${['start','explore','access','overlays','performance','troubleshooting'].map(guide).join('')}</div></section>
    <section class="experience-section reveal" aria-labelledby="experience-title"><div class="editorial-heading"><div><p class="section-kicker">ONE LIBRARY. THREE EXPERIENCES.</p><h2 id="experience-title">Find your way to play.</h2></div><div class="experience-tabs" role="tablist" aria-label="GameSpace experiences">${Object.keys(EXPERIENCES).map((name,i)=>`<button role="tab" id="tab-${name}" aria-controls="experience-panel" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-experience="${name}">${name}</button>`).join('')}</div></div><div id="experience-panel" role="tabpanel" aria-labelledby="tab-Explore" tabindex="0"></div></section>
    <a class="architecture-feature reveal" href="#cara-kerja"><div><span class="section-kicker">UNDER THE HOOD</span><h2>Understand the system.<br>Own the experience.</h2><p>Follow a signal from your touch to the game with GameSpace's interactive system map.</p></div><div class="signal-map" aria-hidden="true"><span>INPUT</span><i></i><span>GAMESPACE</span><i></i><span>YOUR GAME</span></div><span class="architecture-arrow" aria-hidden="true">↗</span></a>
    <section class="community-section" aria-labelledby="community-title"><div class="editorial-heading reveal"><div><p class="section-kicker">BETTER TOGETHER</p><h2 id="community-title">Part of your setup.<br>Part of the community.</h2></div><p>Find official releases, share your setup or help develop GameSpace.</p></div><div class="community">${communityHTML}</div></section>
    <section class="closing-note reveal"><img src="assets/brand.svg" alt="" width="46" height="46"><h2>Make the next session yours.</h2><a class="launch-button" href="#start">Open the getting-started guide <span aria-hidden="true">↗</span></a></section>`;
}

export function activateLanding() {
  const panel = document.querySelector('#experience-panel');
  const buttons = [...document.querySelectorAll('[data-experience]')];
  const select = name => {
    const item = EXPERIENCES[name];
    if (!item || !panel) return;
    panel.setAttribute('aria-labelledby', `tab-${name}`);
    panel.innerHTML = `<div class="experience-copy"><span class="section-kicker">${item.kicker}</span><h3>${item.title}</h3><p>${item.text}</p><a class="text-link" href="#${item.route}">${item.label} ↗</a></div><div class="console-preview" data-view="${name}" aria-label="${name} interface illustration"><div class="console-bar"><span>ZKMNEXT</span><span>${name.toUpperCase()} <i></i></span></div><div class="console-shelf"><span class="console-tile selected">G</span><span class="console-tile">+</span><span class="console-tile">◈</span><span class="console-tile">⚙</span></div><div class="console-heading">${name === 'Explore' ? 'Your next session.' : name === 'Handheld' ? 'Ready when you are.' : 'Take the controls.'}</div><div class="console-cells">${item.items.map((text,i)=>`<span><b>0${i+1}</b>${text}</span>`).join('')}</div><small>Interface illustration · features depend on device and access</small></div>`;
    buttons.forEach(b => { const active=b.dataset.experience===name; b.setAttribute('aria-selected',String(active)); b.tabIndex=active?0:-1; });
  };
  buttons.forEach((button, i) => {
    button.addEventListener('click', () => select(button.dataset.experience));
    button.addEventListener('keydown', event => {
      const keys={ArrowRight:1,ArrowLeft:-1,Home:-i,End:buttons.length-1-i};
      if (!(event.key in keys)) return;
      event.preventDefault();
      const next=buttons[(i+keys[event.key]+buttons.length)%buttons.length];
      select(next.dataset.experience); next.focus();
    });
  });
  select('Explore');
}
