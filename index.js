
/* BURGER */

var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


/* COUNTDOWN */




/* CURSOR */

gsap.set('.cursor',{xPercent: -50,yPercent:-50});
var cursor = document.querySelector('.cursor');

window.addEventListener('mousemove',e => {
    gsap.to(cursor,0.2,{x:e.clientX,y:e.clientY});
}); 

const listLi = document.querySelectorAll('.navbar__container ul li a');
const listImage = document.querySelectorAll('.navbar__container .nav__image .images');

let currentZIndex = 100;
let lastSeen = listLi[0];

listLi.forEach(li => {
    li.addEventListener('mouseenter', () => {
        console.log('mouseenter', li)

        const img = [...listImage].find(img => {
            return img.dataset.projectNo === li.dataset.projectNo
        })

        if(lastSeen === li) return

        img.style.transition = null

        img.style.opacity = 0;
        img.style.zIndex = currentZIndex++;

        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transition = "opacity 700ms ease"
        }, 1)

        lastSeen = li;
    })
})