import './styles/styles.css';
//img
import card1 from './assets/card1.jpg';
import card2 from './assets/card2.jpg';
import card3 from './assets/card3.jpg';
import card4 from './assets/card4.jpg';
import card5 from './assets/card5.jpg';
import card6 from './assets/card6.jpg';
import explorer from './assets/explorer.jpg';
import louvre from './assets/louvre.jpg';
import map from './assets/map.png';
import poster from './assets/poster.jpg';
import rectangle6 from './assets/rectangle6.jpg';
import ticketimage from './assets/ticketimage.jpg';
//svg
import back from './assets/back.svg';
import button from './assets/button.jpg';
import ellipse2 from './assets/ellipse2.png';
import facebook from './assets/facebook.svg';
import fullscreen_exit from './assets/fullscreen_exit.svg';
import group from './assets/group.svg';
import Instagram from './assets/Instagram.svg';
import logo from './assets/logo.svg';
import minus from './assets/minus.svg';
import next from './assets/next.svg';
import pause from './assets/pause.svg';
import pinterest from './assets/pinterest.svg';
import playinvideo from './assets/playinvideo.svg';
<<<<<<< HEAD

=======
>>>>>>> ccd4a71684ec7d87d00468f7a5beca7f3542dd33
import plus from './assets/plus.svg';
import rectangle from './assets/rectangle.svg';
import scale from './assets/scale.svg';
import twitter from './assets/twitter.svg';
import volume from './assets/volume.svg';
<<<<<<< HEAD
import youtube from './assets/youtube.svg'
import mute from './assets/mute.svg';
import play from './assets/play.svg';


=======

import mute from './assets/mute.svg';
import play from './assets/play.svg';

>>>>>>> ccd4a71684ec7d87d00468f7a5beca7f3542dd33
const progress = document.querySelector('.progress');
const progressVolume = document.querySelector('.progress-volume');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #C4C4C4 ${value}%, grey 100%)`
})

progressVolume.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #C4C4C4 ${value}%, grey 100%)`
  })
  
<<<<<<< HEAD
/* 

const video = document.querySelector('.video');
=======


  /* const video = document.querySelector('.video');
>>>>>>> ccd4a71684ec7d87d00468f7a5beca7f3542dd33
const progress = document.querySelector('.progress');
const progressVolume = document.querySelector('.progress-volume');
const playBtn = document.querySelector('.video-play');
const playBigBtn = document.querySelector('.video-play-big-btn');
const wrappOfBtnPlay = document.querySelector('.button-control');
const time = document.querySelector('.control-time');
<<<<<<< HEAD
const mute = document.querySelector('.volume-icon') 

=======
const mute = document.querySelector('.volume-icon') */

  
>>>>>>> ccd4a71684ec7d87d00468f7a5beca7f3542dd33
//progress volume

progressVolume.oninput = videoVolume;
function videoVolume() {
video.volume = this.value/100;

if(video.volume > 0){
  mute.style.backgroundImage = "url(./assets/svg/btn-volume.svg)";
} else {
  mute.style.backgroundImage = "url(./assets/svg/mute.svg)";
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
     playBtn.style.backgroundImage = "url(./assets/svg/btn-play-mini.svg)";
     playBigBtn.style.display = 'block';
    } else if (video.play) {
      playBtn.style.backgroundImage = "url(./assets/svg/pause.svg)";
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

<<<<<<< HEAD
 */
=======
>>>>>>> ccd4a71684ec7d87d00468f7a5beca7f3542dd33
