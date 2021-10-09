
import adaptstyle from '/styles/adaptivestyle.css';
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//welcome slider
const progress = document.querySelector('.progress');
const progressVolume = document.querySelector('.progress-volume');
const buyBtn = document.querySelector('.buy-button');
const closeBtn = document.querySelector('.form-close-button');
const form = document.querySelector('.form-wrapper');
const overlay = document.querySelector('.overlay');
const bookBtn = document.querySelector('.booking-button')
const burger = document.querySelector('.burger'),
      nav = document.querySelector('.header-navigation'),
      navList = document.querySelector('.nav-list'),
      links = document.querySelectorAll('.link'),
      welcomeTitle = document.querySelector('.welcome');
const galleryImgContainer = document.querySelector('.flex-inner-gallery');
const welcomeWrapper = document.querySelector('.welcome-wrapper');
const mainMenu768 = document.querySelector('.main-menu-768w');




/* Swiper */
 // import Swiper bundle with all modules installed
 import Swiper from 'swiper/bundle';

 // import styles bundle
 import 'swiper/css/bundle';
 
 // init Swiper:
 const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
 spaceBetween: 10,
 initialSlide: 0,
 speed: 800,

 keyboard: {
  enabled: true,
 
 },
 
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    
    
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  /* hashNavigation: {
    watchState: true
  }, */

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.getElementById("swiper-fraction-current").textContent = "0" + swiper.activeIndex,
swiper.on("slideChange", (function() {
    document.getElementById("swiper-fraction-current").textContent = `0${swiper.realIndex + 1}`
}
));
//FRACTION
/* let allSlides = document.querySelector('.swiper-fraction-total');
let mySliderCurrentSlide = document.querySelector('.swiper-fraction-current');
let imageSlider = document.querySelector('.swiper');
let slides =

allSlides.innerHTML = imageSlider.slides.length;
imageSlider.on('slideChange', function () {
  let currentSlide = ++imageSlider.realIndex;
  mySliderCurrentSlide.innerHTML = currentSlide
}) */



//gamburger-menu


function gamburger () {
  burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      navList.classList.toggle('activenavlist');
      burger.classList.toggle('toggle');
      welcomeTitle.classList.toggle('activewelcome');
      welcomeWrapper.classList.toggle('activewelcomeALL');
      mainMenu768.classList.toggle('active-main-menu-768w');
      


  } )
}

links.forEach(n => n.addEventListener('click', closeMenu));
function closeMenu () {
  nav.classList.remove('active');
  burger.classList.remove('toggle');
  welcomeTitle.classList.remove('activewelcome');
  navList.classList.remove('activenavlist');
  welcomeWrapper.classList.remove('activewelcomeALL');
  mainMenu768.classList.remove('active-main-menu-768w');
}

gamburger();


progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, grey 100%)`
})

progressVolume.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, grey 100%)`
  })
  
  function show()
	{
    buyBtn.addEventListener('click', () => {
      form.classList.toggle('active');
       
      overlay.style.display = 'block'; 
    })
	};
function close() {
  closeBtn.addEventListener('click', () => {
    form.classList.remove('active');
    overlay.style.display = 'none'; 
  })
  
} 
show();
close();
  let ripple;
  bookBtn.addEventListener('click', e => {
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;
    

    ripple = document.createElement('div');
    ripple.classList.add("ripple")
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    bookBtn.prepend(ripple);
  });

  bookBtn.addEventListener('mouseleave', () => {
   bookBtn.removeChild(ripple)
  });
  

  //Art gallery

  /* let images = [];
  for (let i = 1; i < 16; i++) {
    let img = `<img src="images/gallery/galery${i}.jpg" alt="gallery${i}">`
    images.push(img)
  }
  
  let i = 0, arr = [], temp;
  
  while (arr.length < 15) {
    temp = Math.trunc(Math.random() * 15 + 1);
    if (!arr.includes(temp)) {
      arr.push(temp);
    };
  }
  let randomImages = [];
  for (let i = 0; i < 15; i++) {
    randomImages.push(images[arr[i] - 1])
  }
  
  galleryImgContainer.innerHTML = randomImages.join('');
   */

  //art gallery surfacing

  /* const animItams = document.querySelectorAll('.anim-items');

  if (animItams.length > 0) {
    function animOnScroll(params) {
      for (let index = 0; index < animItams.length; index++) {
        const animItem = animItams[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (pageYOffset > (animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('-active')
        } else {
          animItem.classList.remove('-active')
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
  }
 
animOnScroll() */






 /*  buyBtn.forEach(element => {
    element.addEventListener('click', function(e) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
  
      let ripples = document.createElement('span');
      console.log(ripples)
      ripples.style.left = x + 'px';
      ripples.style.top = y + 'px';
      this.appendChild(ripples);
      
    })
  }) */



/* 
const video = document.querySelector('.video');
const progress = document.querySelector('.progress');
const progressVolume = document.querySelector('.progress-volume');
const playBtn = document.querySelector('.video-play');
const playBigBtn = document.querySelector('.video-play-big-btn');
const wrappOfBtnPlay = document.querySelector('.button-control');
const time = document.querySelector('.control-time');
const mute = document.querySelector('.volume-icon') 

//progress volume

progressVolume.oninput = videoVolume;
function videoVolume() {
video.volume = this.value/100;

if(video.volume > 0){
  mute.style.backgroundImage = "url(./images/svg/btn-volume.svg)";
} else {
  mute.style.backgroundImage = "url(./images/svg/mute.svg)";
}
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, grey 100%)`

}

//progress video
progress.oninput = setProgress;
function setProgress() {
  video.currentTime = (progress.value * video.duration) / 100
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, grey 100%)`
}



  //timer
 function updateProgress(){
   progress.value = (video.currentTime / video.duration) * 100

   //minutes
    let minutes = Math.floor(video.currentTime / 60);
    if(minutes < 10) {
      minutes = '0' + String(minutes)
    }
   //seconds
   let seconds = Math.floor(video.currentTime % 60)
   if(seconds < 10) {
    seconds = '0' + String(seconds)
  }

   time.innerHTML = `${minutes}:${seconds}`
 }


  //play & pause
playBtn.onclick = updateToggle;
  function updateToggle() {
    if (video.paused) {
     playBtn.style.backgroundImage = "url(./images/svg/btn-play-mini.svg)";
     playBigBtn.style.display = 'block';
    } else if (video.play) {
      playBtn.style.backgroundImage = "url(./images/svg/pause.svg)";
      playBigBtn.style.display = 'none';
      
    }
  }

 function togglePlay() {
   const method = video.paused ? 'play' : 'pause';
   video[method]()
 }

//rewind

progress.onclick = videoRewind;
function videoRewind(event) {
  let w = this.offsetWidth;
  let o = event.offsetX;
  this.value = 100 * o/w;
  video.pause();
  video.currentTime = video.duration * (o/w)
}
 

//keyboard events

document.body.onkeyup = function(e){
  if(e.keyCode == 32){
    const method = video.paused ? 'play' : 'pause';
   video[method]()
  } 
  if(e.keyCode == 77) {
    video.muted = !video.muted;
    
  }
}




playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
playBigBtn.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggle);
video.addEventListener('pause', updateToggle);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener9('change', setProgress) */