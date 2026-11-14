const toggle=document.getElementById('langToggle');
let language='en';
function setLanguage(lang){
 language=lang;
 document.documentElement.lang=lang;
 document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 document.body.dir=document.documentElement.dir;
 document.querySelectorAll('[data-en][data-ar]').forEach(el=>{el.innerHTML=el.dataset[lang]});
 toggle.textContent=lang==='en'?'العربية':'English';
}
toggle.addEventListener('click',()=>setLanguage(language==='en'?'ar':'en'));
document.getElementById('year').textContent=new Date().getFullYear();

/* Reveal on scroll, with a safe fallback for older browsers */
const revealTargets=document.querySelectorAll('.section,.timeline-item,.project-card,.contact-inner,.hero-copy,.hero-visual');
if('IntersectionObserver' in window){
 const revealObserver=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
  });
 },{threshold:.08,rootMargin:'0px 0px -35px 0px'});
 revealTargets.forEach((el,i)=>{
  el.classList.add('reveal');
  if(el.classList.contains('project-card'))el.style.setProperty('--delay',`${(i%3)*120}ms`);
  revealObserver.observe(el);
 });
}else{revealTargets.forEach(el=>el.classList.add('is-visible'));}

/* Animated reading progress */
const progress=document.createElement('div');
progress.id='readingProgress';
document.body.appendChild(progress);
let ticking=false;
window.addEventListener('scroll',()=>{
 if(!ticking){window.requestAnimationFrame(()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(max>0?(window.scrollY/max)*100:0)+'%';
  ticking=false;
 });ticking=true;}
},{passive:true});
progress.style.width='0%';
