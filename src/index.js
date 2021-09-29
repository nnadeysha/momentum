
//welcome slider
const progress = document.querySelector('.progress');
const progressVolume = document.querySelector('.progress-volume');
const buyBtn = document.querySelector('.buy-button');
const closeBtn = document.querySelector('.form-close-button');
const form = document.querySelector('.form-wrapper');
const overlay = document.querySelector('.overlay');
const bookBtn = document.querySelector('.booking-button')





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
  })
  

  const galleryImgContainer = document.querySelector('.flex-inner-gallery');

let images = [];
for (let i = 1; i < 16; i++) {
	image = `<img src="images/gallery/galery${i}.jpg" alt="gallery${i}">`
	images.push(image)
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
progress.addEventListener9('change', setProgress);

 */
