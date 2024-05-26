const btn = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

btn.addEventListener('click', (e)=>{
    btn.classList.toggle('open');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
});