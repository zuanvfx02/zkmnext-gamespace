import { landingMarkup, activateLanding } from './landing.js';
// ZKMNEXT GameSpace docs: hash navigation, local search, theme, motion and the "how it works" map. No dependencies.
const $ = s => document.querySelector(s);
const VERSION = 'ZE2 v43f';
// Guides that also exist as Markdown next to index.html (others only live in content.json).
const MARKDOWN = new Set(['access', 'backup', 'build', 'faq', 'kernel']);
const FLOW_ID = 'cara-kerja';
let guides = [];
let destroyFlow = null;
let revealer = null;
let sectionObserver = null;
let stageObserver = null;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const ICON = {
  tg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.4 3.6 2.9 10.7c-1 .4-1 1.8.1 2.1l4.6 1.4 1.8 5.6c.3.9 1.4 1.1 2 .5l2.6-2.4 4.7 3.5c.8.6 1.9.1 2.1-.9l3-14.6c.2-1.2-1-2.1-2.4-1.3ZM9.6 14.6l-.5 3.6-1.3-4.3 9.9-6.3-8.1 7Z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12Z"/><path d="M8.5 11h7M8.5 14.5h4"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.1 0 3.6 1.1 5.2 3 1.6-1.9 3.1-3 5.2-3 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21Z"/></svg>'
};

const community = [
  ['tg', 'Official channel', 'Official APK releases and announcements.', '@ZUANVFXPROJECT3', 'https://t.me/ZUANVFXPROJECT3', '#62e7ce'],
  ['tg', 'Pre-release news', 'Updates on features before release.', '@ZuanvfxArch', 'https://t.me/ZuanvfxArch', '#6fb1ff'],
  ['chat', 'Discussion group', 'Ask questions, report bugs and share your setup.', '@zuanvfx01project3chat', 'https://t.me/zuanvfx01project3chat', '#b18cff'],
  ['chat', 'Kernel Manager Next group', 'Discuss kernels and tuning.', '@zuankernelmanagernextgroup', 'https://t.me/zuankernelmanagernextgroup', '#ffc46b'],
  ['heart', 'Donate', 'Support development through Sociabuzz.', 'sociabuzz.com/zuanvfx01', 'https://sociabuzz.com/zuanvfx01/tribe', '#ff6fae']
];
const ext = 'target="_blank" rel="noopener noreferrer"';

function closeNav() { document.body.classList.remove('nav-open'); $('#menu').setAttribute('aria-expanded', 'false'); }

function communityCards() {
  return community.map(([icon, title, text, handle, url, color], i) =>
    `<a class="reveal${icon === 'heart' ? ' donate' : ''}" style="--c:${color};--d:${(i % 3) * 0.06}s" href="${url}" ${ext}>${ICON[icon]}<span><b>${title}</b><small>${text}</small><em>${handle} ↗</em></span></a>`).join('');
}

function home() {
  document.title = 'ZKMNEXT GameSpace · Docs';
  document.body.classList.add('landing');
  $('#content').innerHTML = landingMarkup({version: VERSION, guides, communityHTML: communityCards()});
  activateLanding();
}

function howItWorks() {
  document.title = 'How it works · ZKMNEXT Docs';
  document.body.classList.add('wide');
  $('#content').innerHTML = `<article class="article"><div class="breadcrumb"><a href="#">Docs</a> / How it works</div><h1>How GameSpace works</h1><p class="lead">Follow a signal from your fingers through plugins and the privileged process to the game. Choose a flow or select any node to learn its role.</p><div id="flow-root"></div><p class="flow-note">This map follows source classes in ${VERSION} (KeymapInjector, IRootService, RootServiceImpl, LegacyNodeJournal, ScoutGuard). Animation simplifies the sequence and timing; it does not represent actual device speed.</p></article>`;
  import('./flow.js').then(m => {
    if (currentId() === FLOW_ID && $('#flow-root')) destroyFlow = m.mountFlow($('#flow-root'));
  }).catch(() => { $('#flow-root').innerHTML = '<p class="lead">The interactive map could not load. Reload the page.</p>'; });
}

function article(a) {
  document.title = a.title + ' · ZKMNEXT Docs';
  const index = guides.indexOf(a);
  const md = a.id === 'expressive' ? '<a href="expressive-experience.md">Source Markdown ↗</a>' : MARKDOWN.has(a.id) ? `<a href="${a.id}.md">Source Markdown ↗</a>` : '';
  const prev = index ? `<a href="#${guides[index - 1].id}"><small>← PREVIOUS</small>${esc(guides[index - 1].title)}</a>` : '<a href="#"><small>← BACK</small>Overview</a>';
  const next = index < guides.length - 1 ? `<a href="#${guides[index + 1].id}"><small>NEXT →</small>${esc(guides[index + 1].title)}</a>` : '<a href="#start"><small>BACK →</small>Getting started</a>';
  const minutes = Math.max(1, Math.ceil(a.sections.flatMap(s => s.paragraphs).join(' ').split(/\s+/).length / 180));
  const contents = a.sections.map((s, i) => `<a href="#${a.id}/s${i}" data-section="s${i}">${esc(s.title)}</a>`).join('');
  $('#content').innerHTML = `<article class="article"><div class="breadcrumb"><a href="#">Docs</a> / ${esc(a.group)}</div><h1>${esc(a.title)}</h1><p class="lead">${esc(a.description)}</p><div class="article-info"><span>${VERSION} · ${minutes} min read · ${a.sections.length} sections</span><button id="copy-guide" type="button">Copy link ↗</button>${md}</div><details class="mobile-toc"><summary>On this page</summary>${contents}</details>${a.sections.map((s, i) => `<section id="s${i}" class="reveal"><h2>${esc(s.title)}</h2>${s.paragraphs.map(p => `<p class="${/^\d\./.test(p) ? 'step' : ''}">${esc(p)}</p>`).join('')}</section>`).join('')}<div class="pager">${prev}${next}</div></article>`;
  $('#toc').innerHTML = '<strong>On this page</strong>' + a.sections.map((s, i) => `<a href="#${a.id}/s${i}" data-section="s${i}">${esc(s.title)}</a>`).join('');
  $('#copy-guide').onclick = async () => {
    try { await navigator.clipboard.writeText(location.href); $('#copy-guide').textContent = 'Link copied'; }
    catch { $('#copy-guide').textContent = 'Copy the address from your browser'; }
  };
  if ('IntersectionObserver' in window) {
    sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) document.querySelectorAll('#toc [data-section]').forEach(link => link.classList.toggle('active', link.dataset.section === entry.target.id));
    }), {rootMargin: '-100px 0px -55% 0px', threshold: 0});
    document.querySelectorAll('.article section').forEach(section => sectionObserver.observe(section));
  }
  document.querySelectorAll('[data-section]').forEach(l => l.onclick = e => { e.preventDefault(); history.replaceState(null, '', l.hash); document.getElementById(l.dataset.section).scrollIntoView(); });
}

function currentId() { try { return decodeURIComponent(location.hash.slice(1)).split('/')[0]; } catch { return ''; } }

function reveal() {
  revealer?.disconnect();
  const items = document.querySelectorAll('#content .reveal');
  if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('in')); return; }
  revealer = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); revealer.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach(el => revealer.observe(el));
  const stage = document.querySelector('.energy-stage');
  if (stage) {
    stageObserver?.disconnect();
    stageObserver = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('motion-off', !entry.isIntersecting)));
    stageObserver.observe(stage);
  }
}

function render() {
  closeNav();
  if (destroyFlow) { destroyFlow(); destroyFlow = null; }
  document.body.classList.remove('wide', 'landing');
  sectionObserver?.disconnect();
  stageObserver?.disconnect();
  const id = currentId();
  const a = guides.find(g => g.id === id);
  document.querySelectorAll('nav a').forEach(l => l.classList.toggle('active', l.hash === '#' + id));
  $('.flow-link')?.classList.toggle('active', id === FLOW_ID);
  $('#toc').innerHTML = '';
  if (!id) home();
  else if (id === FLOW_ID) howItWorks();
  else if (a) article(a);
  else $('#content').innerHTML = '<h1>Guide not found.</h1><p class="lead">This link may have changed. Return to the overview or use search.</p><a class="cta" href="#">Back to overview</a>';
  const c = $('#content');
  c.classList.remove('enter'); void c.offsetWidth; c.classList.add('enter');
  reveal();
  window.scrollTo({top: 0, behavior: 'instant'});
  updateReadingProgress();
  const sec = location.hash.split('/')[1];
  if (sec) requestAnimationFrame(() => document.getElementById(sec)?.scrollIntoView());
}

function results() {
  const q = $('#query').value.trim().toLocaleLowerCase();
  const all = [{ id: FLOW_ID, title: 'How GameSpace works', description: 'An interactive map of fingers, plugins, privileged processes and games.', sections: [{ title: '', paragraphs: ['how it works architecture map flow signal aidl root shizuku keymap macro'] }] }, ...guides];
  const list = q ? all.filter(a => (a.title + ' ' + a.description + ' ' + a.sections.flatMap(s => [s.title, ...s.paragraphs]).join(' ')).toLocaleLowerCase().includes(q)) : all.slice(0, 6);
  $('#results').innerHTML = list.length ? list.map(a => `<a href="#${a.id}">${esc(a.title)}<small>${esc(a.description)}</small></a>`).join('') : '<div class="empty">No results. Try “music”, “permissions” or “overlay”.</div>';
  $('#results').querySelectorAll('a').forEach(l => l.onclick = () => $('#search-dialog').close());
}

$('#menu').onclick = () => { const open = document.body.classList.toggle('nav-open'); $('#menu').setAttribute('aria-expanded', String(open)); };
$('#backdrop').onclick = closeNav;
$('#search').onclick = () => { $('#search-dialog').showModal(); results(); $('#query').focus(); };
$('#close-search').onclick = () => $('#search-dialog').close();
$('#query').oninput = results;
$('#search-dialog').addEventListener('click', e => {
  if (e.target === $('#search-dialog')) {
    const r = e.target.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.target.close();
  }
});
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); $('#search').click(); }
  if (e.key === 'Escape') { closeNav(); if ($('#search-dialog').open) { e.preventDefault(); $('#search-dialog').close(); } }
});
const header = $('header');
function updateReadingProgress() {
  const progress = document.querySelector('.reading-progress');
  const article = document.querySelector('.article');
  const distance = document.documentElement.scrollHeight - innerHeight;
  if (progress) progress.style.transform = `scaleX(${article && distance > 0 ? Math.min(1, Math.max(0, scrollY / distance)) : 0})`;
}
addEventListener('scroll', () => { header.classList.toggle('scrolled', scrollY > 8); updateReadingProgress(); }, { passive: true });
document.addEventListener('visibilitychange', () => document.body.classList.toggle('page-hidden', document.hidden));
document.querySelector('.skip').addEventListener('click', event => { event.preventDefault(); document.querySelector('#main').focus(); });

const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
function syncMotion() { document.body.classList.toggle('motion', !motionPreference.matches); }
syncMotion(); motionPreference.addEventListener('change', syncMotion);

// Theme: saved choice first, otherwise follow the device.
(() => {
  let saved = null;
  try { saved = localStorage.getItem('zkm-docs-theme'); } catch {}
  const light = saved ? saved === 'light' : matchMedia('(prefers-color-scheme: light)').matches;
  document.body.classList.toggle('light', light);
})();
$('#theme').onclick = () => {
  const light = document.body.classList.toggle('light');
  try { localStorage.setItem('zkm-docs-theme', light ? 'light' : 'dark'); } catch {}
};
window.addEventListener('hashchange', render);

try {
  const response = await fetch('assets/content.json');
  if (!response.ok) throw new Error('content');
  guides = await response.json();
  $('#navigation').innerHTML = [...new Set(guides.map(a => a.group))].map(g => `<h3>${esc(g)}</h3>${guides.filter(a => a.group === g).map(a => `<a href="#${a.id}">${esc(a.title)}</a>`).join('')}`).join('');
  render();
} catch {
  $('#content').innerHTML = '<h1>Documentation could not load.</h1><p class="lead">Open the website through an HTTP server or GitHub Pages. Browsers may block data when index.html is opened directly from a file.</p><a class="cta" href="README.md">Open Markdown guides →</a>';
}
