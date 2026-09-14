window.initSanMarino = function(){
const motionMedia=window.matchMedia('(prefers-reduced-motion: reduce)');
let reduced=motionMedia.matches;
const getConsent=()=>{const value=document.cookie.split(';').map(s=>s.trim()).find(s=>s.startsWith('sm_consent='))?.split('=')[1];return value==='comfort'||value==='necessary'?value:null};
let comfortAllowed=getConsent()==='comfort';
let userPaused=false;
if(comfortAllowed){try{userPaused=localStorage.getItem('sm_motion')==='paused'}catch{}}
else{try{localStorage.removeItem('sm_motion');localStorage.removeItem('sm_heat')}catch{}}
const motionOff=()=>reduced||userPaused;
const activeTweens=[];
const dishes=[{title:'Butter<br><em>Chicken.</em>',overline:'CREMIG. SANFT. EIN KLASSIKER.',description:'Zartes Hühnerfleisch in einer cremigen Tomaten-Sahne-Sauce, sanft gewürzt. Ein schöner Anfang für Ihren Abend.',image:'/restaurant/hero.jpg',alt:'Indisches Curry'}, {title:'Tandoori.<br><em>Voller Aroma.</em>',overline:'FÜR ALLE, DIE ES WÜRZIG MÖGEN.',description:'Kräftige Gewürze und Lust auf etwas Neues? Entdecken Sie die Tandoori-Auswahl auf unserer aktuellen Speisekarte.',image:'/restaurant/tandoori.jpg',alt:'Indisches Tandoori-Gericht'}, {title:'Lassi.<br><em>Auf den Abend.</em>',overline:'EIN FRISCHER BEGLEITER.',description:'Zum Essen gehört auch etwas Gutes im Glas. Entdecken Sie die Getränke auf unserer Speisekarte – wir beraten Sie gerne.',image:'/restaurant/lassi.jpg',alt:'Mango-Lassi im Glas'}];
const tabs=[...document.querySelectorAll('[data-dish]')];
function selectDish(i){const d=dishes[i];tabs.forEach((t,j)=>{t.setAttribute('aria-selected',j===i);t.tabIndex=j===i?0:-1});document.querySelector('#dish-panel').setAttribute('aria-labelledby','tab-'+i);document.querySelector('#dish-title').innerHTML=d.title;document.querySelector('.dish-overline').textContent=d.overline;document.querySelector('#dish-description').textContent=d.description;const img=document.querySelector('#dish-img');img.src=d.image;img.alt=d.alt;document.querySelector('#dish-count').textContent='0'+(i+1);if(window.gsap&&!motionOff())gsap.fromTo(['#dish-panel','#dish-img'],{opacity:.4,y:6},{opacity:1,y:0,duration:.35,overwrite:true});}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>selectDish(i));t.addEventListener('keydown',e=>{let j=i;if(e.key==='ArrowRight')j=(i+1)%3;else if(e.key==='ArrowLeft')j=(i+2)%3;else if(e.key==='Home')j=0;else if(e.key==='End')j=2;else return;e.preventDefault();selectDish(j);tabs[j].focus()})});
const heatCopy=['Sanft gewürzt. Viel Aroma, wenig Schärfe.','Eine angenehme Schärfe, die mit am Tisch sitzt.','Für alle, die es gerne feurig mögen. Sprechen Sie uns an.'];document.querySelectorAll('[data-heat]').forEach(button=>button.addEventListener('click',()=>{const i=Number(button.dataset.heat);if(comfortAllowed){try{localStorage.setItem('sm_heat',String(i))}catch{}}document.querySelectorAll('[data-heat]').forEach((b,j)=>b.setAttribute('aria-pressed',i===j));document.querySelector('#heat-copy').textContent=heatCopy[i];document.querySelectorAll('.heat-meter span').forEach((s,j)=>s.classList.toggle('active',j<=i))}));
const toggle=document.querySelector('.menu-toggle'),mobile=document.querySelector('#mobile-nav');toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',!expanded);toggle.setAttribute('aria-label',expanded?'Menü öffnen':'Menü schließen');mobile.hidden=expanded});mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobile.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Menü öffnen')}));
let revealObserver;
if(window.gsap&&!motionOff()){
  if(document.querySelector('.hero-copy')) activeTweens.push(gsap.from('.hero-copy > *',{opacity:0,y:18,stagger:.09,duration:.7,ease:'power2.out',clearProps:'all'}));
  if(document.querySelector('.arch-photo')) activeTweens.push(gsap.from('.arch-photo',{opacity:0,scale:.96,duration:1,ease:'power2.out',clearProps:'all'}));
  if(document.querySelector('.photo-badge')) activeTweens.push(gsap.from('.photo-badge',{opacity:0,scale:.88,duration:.7,delay:.2,clearProps:'all'}));
  const observer=revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){if(!motionOff()) activeTweens.push(gsap.fromTo(e.target,{opacity:0,y:20},{opacity:1,y:0,duration:.65,clearProps:'all'}));observer.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
const photoDialog=document.querySelector('#photo-dialog');
if(photoDialog){
 const photoTrigger=document.querySelector('.venue-open');
 photoTrigger?.addEventListener('click',()=>photoDialog.showModal());
 photoDialog.querySelector('.photo-close')?.addEventListener('click',()=>photoDialog.close());
 photoDialog.addEventListener('click',e=>{if(e.target===photoDialog){const r=photoDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)photoDialog.close()}});
}
// Restaurant time is always Europe/Berlin, regardless of the visitor's timezone.
function updateOpening(){
 if(typeof getBonnStatus!=='function')return;
 const status=getBonnStatus();
 document.querySelectorAll('.opening-status').forEach(el=>{
  el.classList.toggle('is-open',status.open);el.classList.toggle('is-closed',!status.open);
  el.querySelector('[data-opening-label]').textContent=status.label;
  el.querySelector('[data-opening-detail]').textContent=status.detail;
 });
}
updateOpening();const openingTimer=setInterval(updateOpening,30000);
const onVisibility=()=>{if(!document.hidden)updateOpening()};document.addEventListener('visibilitychange',onVisibility);
// A visitor-controlled text ribbon; the religious symbol stays still.
function applyMotionPreference(){
 document.documentElement.classList.toggle('motion-paused',motionOff());
 document.querySelectorAll('.motion-toggle').forEach(b=>{b.setAttribute('aria-pressed',String(userPaused));b.setAttribute('aria-label',userPaused?'Bewegung fortsetzen':'Bewegung pausieren');b.textContent=userPaused?'▶':'Ⅱ'});
 if(motionOff())activeTweens.forEach(t=>t.progress(1));
}
applyMotionPreference();
document.querySelectorAll('.motion-toggle').forEach(b=>b.addEventListener('click',()=>{userPaused=!userPaused;if(comfortAllowed){try{localStorage.setItem('sm_motion',userPaused?'paused':'playing')}catch{}}applyMotionPreference()}));
const onMotion=e=>{reduced=e.matches;applyMotionPreference()};motionMedia.addEventListener('change',onMotion);
// Explicit, revocable storage consent; no analytics or marketing scripts.
const cookiePanel=document.querySelector('#cookie-panel');
if(comfortAllowed){try{const heat=localStorage.getItem('sm_heat');if(['0','1','2'].includes(heat))document.querySelector('[data-heat="'+heat+'"]')?.click()}catch{}}
if(cookiePanel){
 let returnFocus=null;
 if(!getConsent())cookiePanel.hidden=false;
 const persistChoice=(choice)=>{
  comfortAllowed=choice==='comfort';
  document.cookie='sm_consent='+choice+'; Max-Age=15552000; Path=/; SameSite=Lax'+(location.protocol==='https:'?'; Secure':'');
  document.cookie='sm_notice=; Max-Age=0; Path=/; SameSite=Lax';
  if(comfortAllowed){try{localStorage.setItem('sm_motion',userPaused?'paused':'playing');const heat=document.querySelector('[data-heat][aria-pressed="true"]');if(heat)localStorage.setItem('sm_heat',heat.dataset.heat)}catch{}}
  else{try{localStorage.removeItem('sm_motion');localStorage.removeItem('sm_heat')}catch{}}
  cookiePanel.hidden=true;returnFocus?.focus();
 };
 document.querySelectorAll('.cookie-settings').forEach(b=>b.addEventListener('click',()=>{returnFocus=b;cookiePanel.hidden=false;document.querySelector('#cookie-accept').focus()}));
 document.querySelector('#cookie-accept').addEventListener('click',()=>persistChoice('necessary'));
 document.querySelector('#cookie-comfort').addEventListener('click',()=>persistChoice('comfort'));
 document.querySelector('#cookie-reset').addEventListener('click',()=>{
  document.cookie='sm_consent=; Max-Age=0; Path=/; SameSite=Lax';
  document.cookie='sm_notice=; Max-Age=0; Path=/; SameSite=Lax';
  comfortAllowed=false;
  try{localStorage.removeItem('sm_motion');localStorage.removeItem('sm_heat')}catch{}
  userPaused=false;applyMotionPreference();
  document.querySelector('#cookie-reset').textContent='Zurückgesetzt';
 });
}

return function(){clearInterval(openingTimer);document.removeEventListener('visibilitychange',onVisibility);motionMedia.removeEventListener('change',onMotion);revealObserver?.disconnect();activeTweens.forEach(t=>t.kill())};
};
