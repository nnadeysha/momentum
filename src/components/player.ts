import Control from "../control";
let songs = [
  "Aqua Caelestis",
  "Ennio Morricone",
  "River Flows In You",
  "Summer Wind",
];

let songIndex = 0;
export class Player extends Control {
  playerTitle: Control<HTMLDivElement>;
  currentSong: Control<HTMLDivElement>;
  audio: Control<HTMLAudioElement>;
  audioSource: Control<HTMLSourceElement>;
  progressContainer: Control<HTMLDivElement>;
  progress: Control<HTMLInputElement>;
  audioTime: Control<HTMLParagraphElement>;
  playerControl: Control<HTMLDivElement>;
  playerPrevBtn: Control<HTMLButtonElement>;
  playerPlayBtn: Control<HTMLButtonElement>;
  playerNextBtn: Control<HTMLButtonElement>;
  playerPauseBtn: Control<HTMLButtonElement>;
  playList: Control<HTMLUListElement>;
  song1: Control<HTMLLIElement>;
  song2: Control<HTMLLIElement>;
  song3: Control<HTMLLIElement>;
  song4: Control<HTMLLIElement>;
  audioTimeDuration: Control<HTMLParagraphElement>;

  songTrigger: Control<HTMLSpanElement>;
  song: Control<HTMLLIElement>;

  /* song: string;
  songIndex: number;
  songs: Array<any>; */
  //songs: Array<any>

  constructor(parentNode: HTMLElement) {
    super(parentNode, "section", "player-wrapper");

    this.playerTitle = new Control(
      this.node,
      "div",
      "player-title",
      "Now playing"
    );
    this.currentSong = new Control(
      this.node,
      "div",
      "current-song",
      "Aqua Caelestis"
    );
    this.audio = new Control(this.node, "audio", "audio");
    this.audioSource = new Control(this.audio.node, "source", "audio-src");
    this.audioSource.node.type = "audio/mpeg";
    this.audioSource.node.src = "";
    //this.audio.node.src = "./assets/sounds/AquaCaelestis.mp3"
    this.progressContainer = new Control(
      this.node,
      "div",
      "progress-container"
    );
    this.progress = new Control(
      this.progressContainer.node,
      "input",
      "progress"
    );
    this.progress.node.type = "range";
    this.progress.node.max = `${this.audio.node.duration}`;
    this.progress.node.min = "0";
    this.progress.node.step = "1";
    this.progress.node.value = "0";
    this.audioTimeDuration = new Control(
      this.node,
      "p",
      "audio-time-duration",
      "00:00"
    );
    this.audioTime = new Control(this.node, "p", "audio-time");
    const playerControl = new Control(this.node, "div", "player-control");
    this.playerPrevBtn = new Control(
      playerControl.node,
      "button",
      "player-prev-btn"
    );
    this.playerPlayBtn = new Control(
      playerControl.node,
      "button",
      "player-play-btn play-pause-btn-backgraund"
    );

    this.playerNextBtn = new Control(
      playerControl.node,
      "button",
      "player-next-btn"
    );
    this.playList = new Control(this.node, "ul", "play-list");
    this.song1 = new Control(
      this.playList.node,
      "li",
      "play-list-song song1",
      "Aqua Caelestis"
    );
    this.song2 = new Control(
      this.playList.node,
      "li",
      "play-list-song song2",
      "Ennio Morricone"
    );
    this.song3 = new Control(
      this.playList.node,
      "li",
      "play-list-song song3",
      "River Flows In You"
    );
    this.song4 = new Control(
      this.playList.node,
      "li",
      "play-list-song song4",
      "Summer Wind"
    );

    this.loadSong(songs[songIndex]);

    this.playerPlayBtn.node.onclick = () => {
      if (this.playerPlayBtn.node.classList.contains("play")) {
        this.pauseSong();
        
      } else {
        this.playSong();
        this.updateProgress();
        this.updateAudioTime();
        
      }
    };
    this.audio.node.ontimeupdate = () => {
      this.updateProgress();
      this.updateAudioTime();
     
    };
    this.playerNextBtn.node.onclick = () => {
      
      this.nextSong();
      this.updateAudioTime();
      this.updateProgress();
      
      
      
      
    };
    this.playerPrevBtn.node.onclick = () => {
      this.prevSong();
      this.updateProgress();
      this.updateAudioTime();
      
    };
    this.progress.node.oninput = () => this.handProgress();
  }

  loadSong(song: string) {
    this.currentSong.node.innerHTML = song;

    this.audio.node.src = `./assets/audio/${song}.mp3`;
  if(song == "Aqua Caelestis"){ this.song4.node.classList.remove('active-song');
  this.song2.node.classList.remove('active-song')
    this.song1.node.classList.add('active-song')};
    if(song == "Ennio Morricone"){ this.song1.node.classList.remove('active-song')
    this.song3.node.classList.remove('active-song')
    this.song4.node.classList.remove('active-song')
    this.song2.node.classList.add('active-song')}
    if(song == "River Flows In You"){ this.song1.node.classList.remove('active-song')
    this.song2.node.classList.remove('active-song')
    this.song4.node.classList.remove('active-song')
    this.song3.node.classList.add('active-song')}
    if(song == "Summer Wind"){this.song1.node.classList.remove('active-song')
    this.song3.node.classList.remove('active-song')
    this.song2.node.classList.remove('active-song')
    this.song4.node.classList.add('active-song')}
    
   
  }

  handProgress() {
    //this.progress.node.value = (this.audio.node.currentTime / this.audio.node.duration *100).toString();
    this.audio.node.currentTime =
      (Number(this.progress.node.value) * this.audio.node.duration) / 100;
  }
  //src/assets/sounds/Aqua Caelestis.mp3

  playSong() {
    this.playerPlayBtn.node.classList.add("play");
    this.audio.node.play();
    this.updateProgress();
    this.updateAudioTime();
  }
  pauseSong() {
    this.playerPlayBtn.node.classList.remove("play");
    this.audio.node.pause();
  }
  nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    this.loadSong(songs[songIndex]);
    this.playSong();
  }
  prevSong() {
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
    this.loadSong(songs[songIndex]);
    this.playSong();
  }

  updateProgress() {
    

    let value = (this.audio.node.currentTime / this.audio.node.duration) * 100;
    this.progress.node.value = `${value}`;
    setInterval(this.updateProgress.bind(this), 1000);
   
  }
  updateAudioTime() {
    let minutes = addZero(Math.floor(this.audio.node.currentTime / 60));
    let seconds = addZero(Math.floor(this.audio.node.currentTime % 60));
    let minutesDur = addZero(Math.floor(this.audio.node.duration/ 60));
    let secondsDur = addZero(Math.floor(this.audio.node.duration % 60));
    function addZero(number: number) {
      return number < 10 ? `0${number}` : number;
    }
    this.audioTime.node.innerHTML = `${minutes} : ${seconds}`;
    this.audioTimeDuration.node.innerHTML = `${minutesDur} : ${secondsDur}`
    /* let minutes = Math.floor(this.audio.node.currentTime / 60) || 0;
    let seconds = (this.audio.node.currentTime - minutes * 60) || 0;
    this.audioTime.node.innerHTML = minutes + ':' + (Number(seconds.toFixed(0)) < 10 ? '0' : '') + seconds.toFixed(0); */
    setInterval(this.updateAudioTime.bind(this), 1000);
  }
 

 
}

 /* const progresPercent =
      (this.audio.node.currentTime / this.audio.node.duration) * 100;
    this.progress.node.style.width = `${progresPercent}%`; */

/*  this.progress.value =
      (this.audio.node.currentTime / this.audio.node.duration) * 100; */


 /* getTrackOfPlaylist(){
   if(){
      this.song1.node.classList.add('active-song');
   }
  } */
/* let progresPercent = ((this.audio.node.currentTime/this.audio.node.duration) * 100)*2;
  this.progress.node.style.width = `${progresPercent}%` */

/* this.progress.value = (this.audio.node.currentTime / this.audio.node.duration) * 100
    const progresPercent = (this.audio.node.currentTime / this.audio.node.duration) * 100;
    this.progress.node.style.width = `${progresPercent}%` */
/* const {duration, currentTime} = e.srcElement
    
    console.log(currentTime) */
/* console.log(this.audio.node.currentTime)
    console.log(this.audio.node.duration) //= (this.progress.value * this.audio.node.duration) / 100;
    this.progress.value = (this.audio.node.currentTime / this.audio.node.duration) * 100;
    
    const value = this.progress.value; */
