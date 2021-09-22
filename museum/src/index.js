import './style.css';
//img
import card1 from './images/card1.jpg';
import card2 from './images/card2.jpg';
import card3 from './images/card3.jpg';
import card4 from './images/card4.jpg';
import card5 from './images/card5.jpg';
import card6 from './images/card6.jpg';
import explorer from './images/explorer.jpg';
import louvre from './images/louvre.jpg';
import map from './images/map.png';
import poster from './images/poster.jpg';
import rectangle6 from './images/rectangle6.jpg';
import ticketimage from './images/ticketimage.jpg';
//svg

import button from './images/button.jpg';
import ellipse2 from './images/ellipse2.png';
import facebook from './images/facebook.svg';
import fullscreen_exit from './images/fullscreen_exit.svg';
import group from './images/group.svg';
import Instagram from './images/Instagram.svg';
import logo from './images/logo.svg';
import minus from './images/minus.svg';
import next from './images/next.svg';
import pause from './images/pause.svg';
import pinterest from './images/pinterest.svg';
import playinvideo from './images/playinvideo.svg';
import plus from './images/plus.svg';
import rectangle from './images/rectangle.svg';
import scale from './images/scale.svg';
import twitter from './images/twitter.svg';
import volume from './images/volume.svg';
import youtube from './images/youtube.svg'
import mute from './images/mute.svg';
import play from './images/play.svg';

//welcome slider
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
