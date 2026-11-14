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

/* Preloader */
const pageLoader=document.getElementById('pageLoader');
window.addEventListener('load',()=>window.setTimeout(()=>pageLoader?.classList.add('is-hidden'),350));
window.setTimeout(()=>pageLoader?.classList.add('is-hidden'),2400);

/* Reveal on scroll */
const revealTargets=document.querySelectorAll('.section,.timeline-item,.project-card,.award-card,.gallery-tile,.impact-card,.contact-inner,.hero-copy,.hero-visual');
if('IntersectionObserver' in window){
 const revealObserver=new IntersectionObserver((entries,observer)=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
 }),{threshold:.08,rootMargin:'0px 0px -35px 0px'});
 revealTargets.forEach((el,i)=>{el.classList.add('reveal');if(el.classList.contains('project-card'))el.style.setProperty('--delay',`${(i%3)*110}ms`);revealObserver.observe(el);});
}else revealTargets.forEach(el=>el.classList.add('is-visible'));

/* Project detail modal */
const modal=document.getElementById('projectModal');
const closeModal=()=>{modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');};
document.querySelectorAll('.project-open').forEach(card=>card.addEventListener('click',()=>{
 document.getElementById('modalTitle').textContent=card.dataset.title;
 document.getElementById('modalCategory').textContent=card.dataset.category;
 document.getElementById('modalDescription').textContent=language==='ar'?card.dataset.descriptionAr:card.dataset.descriptionEn;
 document.getElementById('modalRole').textContent=card.dataset.role;
 document.getElementById('modalStage').textContent=language==='ar'?card.dataset.stageAr:card.dataset.stageEn;
 modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');
 modal.querySelector('.modal-close').focus();
}));
modal.querySelectorAll('[data-modal-close]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

/* Animated reading progress */
const progress=document.createElement('div');progress.id='readingProgress';document.body.appendChild(progress);
let ticking=false;
window.addEventListener('scroll',()=>{if(!ticking){window.requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?(window.scrollY/max)*100:0)+'%';ticking=false;});ticking=true;}},{passive:true});
