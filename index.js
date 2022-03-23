
/* BURGER */

var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


/* COUNTDOWN */

const countDown = () => {
    const countDate = new Date("March 31, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const min = second * 60;
    const hour = min * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMin = Math.floor((gap % hour) / min);
    const textSecond = Math.floor((gap % min) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".min").innerText = textMin;
    document.querySelector(".sec").innerText = textSecond;
};
 
setInterval(countDown, 1000);
 

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