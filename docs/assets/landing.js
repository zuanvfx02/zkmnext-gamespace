const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const EXPERIENCES = {
  Explore: {kicker:'01 / EXPLORE', title:'Your everyday command center.', text:'Library game, profil, pengaturan dan monitor dalam satu ruang. Mulai dengan tur singkat yang bisa kamu coba langsung.', route:'explore', items:['Library game', 'Profil per game', 'Tur pertama'], label:'Kenali Explore'},
  Handheld: {kicker:'02 / HANDHELD', title:'Turn your phone into a lobby.', text:'Ruang bermain landscape, wallpaper pilihanmu dan kontrol cepat yang selalu dekat. Pilih game, atur sesi, lalu main.', route:'modes', items:['Landscape lobby', 'Wallpaper pilihan', 'Kontrol sesi'], label:'Masuk ke Handheld'},
  Gamepad: {kicker:'03 / GAMEPAD', title:'Lean back. Take control.', text:'Navigasi dengan controller, fokus pilihan yang jelas dan petunjuk tombol di layar. Library yang sama, cara bermain yang berbeda.', route:'input', items:['Controller navigation', 'Fokus pilihan', 'Petunjuk tombol'], label:'Panduan controller'}
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
        <p class="launch-description">Kenali perangkatmu. Bangun ruang bermainmu.<br>Panduan resmi dari game pertama sampai kontrol yang lebih dalam.</p>
        <div class="launch-actions"><a class="launch-button" href="#start">Mulai menggunakan <span aria-hidden="true">↗</span></a><a class="quiet-button" href="#cara-kerja">Lihat cara kerjanya <span aria-hidden="true">→</span></a></div>
        <p class="launch-platform">ANDROID 10+ <i></i> EXPLORE / HANDHELD / GAMEPAD</p>
      </div>
      <figure class="energy-stage" aria-label="Ilustrasi Energy Cube GameSpace">
        <div class="stage-topline"><span>ZKMNEXT / ENERGY SYSTEM</span><span class="stage-indicator">NATIVE UI</span></div>
        <img class="energy-art" src="assets/energy-scene.svg" width="640" height="600" alt="Kubus Energy Cube dengan cincin cahaya merah, ungu dan biru">
        <figcaption><span>BUILT AROUND YOUR PLAY.</span><span>Ilustrasi antarmuka</span></figcaption>
      </figure>
    </section>
    <div class="platform-strip"><span><b>03</b> cara menikmati GameSpace</span><span><b>04</b> tingkat akses perangkat</span><span><b>LOCAL</b> pengaturan di perangkatmu</span><a href="#whatsnew">${escape(version)} <span>Catatan pembaruan ↗</span></a></div>
    <section class="edition-banner reveal"><div><span class="section-kicker">THE EXPRESSIVE UPDATE</span><h2>A familiar space.<br>A whole new feeling.</h2></div><p>Intro yang lebih hidup. Tur Explore yang langsung mengajak mencoba. Energy Cube dengan anggaran gambar yang lebih terukur.</p><a class="text-link" href="#expressive">Jelajahi pembaruan <span aria-hidden="true">↗</span></a></section>
    <section class="guide-section" id="guide-library" aria-labelledby="guides-title"><div class="editorial-heading reveal"><div><p class="section-kicker">THE FIELD GUIDE</p><h2 id="guides-title">Everything you need.<br>One place to start.</h2></div><p>Baru pertama membuka GameSpace atau sedang mencari satu pengaturan? Mulai dari kebutuhanmu.</p></div><div class="guide-grid">${['start','explore','access','overlays','performance','troubleshooting'].map(guide).join('')}</div></section>
    <section class="experience-section reveal" aria-labelledby="experience-title"><div class="editorial-heading"><div><p class="section-kicker">ONE LIBRARY. THREE EXPERIENCES.</p><h2 id="experience-title">Find your way to play.</h2></div><div class="experience-tabs" role="tablist" aria-label="Pengalaman GameSpace">${Object.keys(EXPERIENCES).map((name,i)=>`<button role="tab" id="tab-${name}" aria-controls="experience-panel" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-experience="${name}">${name}</button>`).join('')}</div></div><div id="experience-panel" role="tabpanel" aria-labelledby="tab-Explore" tabindex="0"></div></section>
    <a class="architecture-feature reveal" href="#cara-kerja"><div><span class="section-kicker">UNDER THE HOOD</span><h2>Understand the system.<br>Own the experience.</h2><p>Ikuti alur dari sentuhanmu sampai ke game lewat peta interaktif GameSpace.</p></div><div class="signal-map" aria-hidden="true"><span>INPUT</span><i></i><span>GAMESPACE</span><i></i><span>YOUR GAME</span></div><span class="architecture-arrow" aria-hidden="true">↗</span></a>
    <section class="community-section" aria-labelledby="community-title"><div class="editorial-heading reveal"><div><p class="section-kicker">BETTER TOGETHER</p><h2 id="community-title">Part of your setup.<br>Part of the community.</h2></div><p>Temukan rilis resmi, bagikan setup, atau ikut mengembangkan GameSpace.</p></div><div class="community">${communityHTML}</div></section>
    <section class="closing-note reveal"><img src="assets/brand.svg" alt="" width="46" height="46"><h2>Make the next session yours.</h2><a class="launch-button" href="#start">Buka panduan awal <span aria-hidden="true">↗</span></a></section>`;
}

export function activateLanding() {
  const panel = document.querySelector('#experience-panel');
  const buttons = [...document.querySelectorAll('[data-experience]')];
  const select = name => {
    const item = EXPERIENCES[name];
    if (!item || !panel) return;
    panel.setAttribute('aria-labelledby', `tab-${name}`);
    panel.innerHTML = `<div class="experience-copy"><span class="section-kicker">${item.kicker}</span><h3>${item.title}</h3><p>${item.text}</p><a class="text-link" href="#${item.route}">${item.label} ↗</a></div><div class="console-preview" data-view="${name}" aria-label="Ilustrasi ${name}"><div class="console-bar"><span>ZKMNEXT</span><span>${name.toUpperCase()} <i></i></span></div><div class="console-shelf"><span class="console-tile selected">G</span><span class="console-tile">+</span><span class="console-tile">◈</span><span class="console-tile">⚙</span></div><div class="console-heading">${name === 'Explore' ? 'Your next session.' : name === 'Handheld' ? 'Ready when you are.' : 'Take the controls.'}</div><div class="console-cells">${item.items.map((text,i)=>`<span><b>0${i+1}</b>${text}</span>`).join('')}</div><small>Ilustrasi tampilan · fitur mengikuti perangkat & akses</small></div>`;
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
