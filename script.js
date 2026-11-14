const toggle=document.getElementById('langToggle');
let language='en';
function setLanguage(lang){language=lang;document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.dir=document.documentElement.dir;document.querySelectorAll('[data-en][data-ar]').forEach(el=>{el.innerHTML=el.dataset[lang]});toggle.textContent=lang==='en'?'العربية':'English';}
toggle.addEventListener('click',()=>setLanguage(language==='en'?'ar':'en'));
document.getElementById('year').textContent=new Date().getFullYear();
