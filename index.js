
/* BURGER */

var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


/* COUNTDOWN */

const countDown = () => {
    const countDate = new Date("March 27, 2022 00:00:00").getTime();
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
 

/* SLIDER */

$(".photo-slider").slick();

$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

var w = $(".photo-slider").width();

$(".photo-slider .slick-slide").each(function() {
	var tlEnter = gsap.timeline({ paused: true });
	var tlLeave = gsap.timeline({ paused: true });

	tlEnter.fromTo($(this).find(".text"), {
		x: w,
		y: "-50%",
		opacity: .5
	}, {
		x: "-100%",
		y: "-50%",
		opacity: 1,
		duration: 15,
		ease: Power0.easeNone,
		repeat: -1
	});
	tlLeave.to($(this).find(".text"), {
		y: "+=100%",
		opacity: 0,
		duration: .3,
		ease: Power0.easeNone
	});

	$(this).on("mouseenter", function() {
		tlEnter.restart();
	});
	$(this).on("mouseleave", function() {
		tlEnter.kill();
		tlLeave.restart();
	});
});