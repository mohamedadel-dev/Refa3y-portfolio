const toggle=document.getElementById('langToggle');
let language='en';
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -45px 0px'});
function setLanguage(lang){language=lang;document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.dir=document.documentElement.dir;document.querySelectorAll('[data-en][data-ar]').forEach(el=>el.innerHTML=el.dataset[lang]);toggle.textContent=lang==='en'?'العربية':'English';}
toggle.addEventListener('click',()=>setLanguage(language==='en'?'ar':'en'));
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.section,.timeline-item,.project-card,.contact-inner,.hero-copy,.hero-visual').forEach((el,i)=>{el.classList.add('reveal');if(el.classList.contains('project-card'))el.style.setProperty('--delay',`${i%3*110}ms`);observer.observe(el)});