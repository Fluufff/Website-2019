var scroll = new SmoothScroll('a[href*="#"]');
console.warn('Rawr! Rawr raaar rawr rawr raaaaaaar!');
// AOS.init();

function hamburgerToggle(hamburger) {
	hamburger.classList.toggle("change");
	document.getElementsByClassName('header')[0].classList.toggle('mobile-nav-expanded');
}

// var gallery = document.querySelector('.gallery');

// if(gallery !== null && gallery !== undefined){
// 	var msnry = new Masonry( gallery, {
// 	  itemSelector: '.gallery__item',
// 	  columnWidth: '.gallery__sizer',
// 	  percentPosition: true,
// 	});

// }

var eventslider = document.getElementsByClassName('eventslider');
if(eventslider.length > 0 && eventslider !== null && eventslider !== undefined){
	var slider = tns({
		container: '.eventslider',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		mode: 'gallery',
		nav: false,
		autoplayButton: false,
		controlsContainer: '.nav-buttons',
	});
}

var bannerslider = document.getElementsByClassName('bannerslider');
if(bannerslider.length > 0 && bannerslider !== null && bannerslider !== undefined){
	var slider = tns({
		container: '.bannerslider',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		mode: 'carousel',
		nav: false,
		autoplayButton: false,
		controls: false,
		autoplayTimeout: 8000,
	});
}

// var beaverslider = document.getElementsByClassName('beaverslider');

// if(beaverslider.length > 0 && beaverslider !== null && beaverslider !== undefined){
// 	var slider = tns({
// 		container: '.beaverslider',
// 		items: 10,
// 		nav: false,
// 		autoplayButton: false,
// 		controls: false,
// 		autoplay: true,
//  		infinite: true,
// 		autoplayTimeout: 500,
// 		speed: 500,
// 		rewind: false,
// 	});
// }

document.getElementsByClassName('current-lang')[0].addEventListener('click', function(){
	if(!document.getElementsByClassName('language-popup')[0].classList.contains('language-popup--active')){
		document.getElementsByClassName('language-popup')[0].classList.add('language-popup--active');
	}else{
		document.getElementsByClassName('language-popup')[0].classList.remove('language-popup--active');
	}
});