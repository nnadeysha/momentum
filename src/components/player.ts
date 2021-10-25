import Control from "../control";
let songs = [
  "AquaCaelestis",
  "EnnioMorricone",
  "RiverFlowsInYou",
  "SummerWind",
];

let songIndex = 0;
export class Player extends Control {
  playerTitle: Control<HTMLDivElement>;
  currentSong: Control<HTMLDivElement>;
  audio: Control<HTMLAudioElement>;
  progressContainer: Control<HTMLDivElement>;
  progress: Control<HTMLInputElement>;
  audioTime: Control<HTMLParagraphElement>;
  playerControl: Control<HTMLDivElement>;
  playerPrevBtn: Control<HTMLButtonElement>;
  playerPlayBtn: Control<HTMLButtonElement>;
  playerNextBtn: Control<HTMLButtonElement>;
  playerPauseBtn: Control<HTMLButtonElement>;
  playList: Control<HTMLDivElement>;

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
    this.progress.node.max = "100";
    this.progress.node.min = "0";
    this.progress.node.value = "0";
    this.audioTime = new Control(this.node, "p", "audio-time", "00:00");
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
    this.playList = new Control(this.node, "div", "play-list");

    this.loadSong(songs[songIndex]);

    this.playerPlayBtn.node.onclick = () => {
      if (this.playerPlayBtn.node.classList.contains("play")) {
        this.pauseSong();
      } else {
        this.playSong();
      }
    };
    this.audio.node.ontimeupdate = () => {
      this.updateProgress()
      this.updateAudioTime()
    };
    this.playerNextBtn.node.onclick = () => {
      this.nextSong();
      this.updateProgress()
      this.updateAudioTime()};
    this.playerPrevBtn.node.onclick = () => {
      this.prevSong();
      this.updateProgress()
      this.updateAudioTime()};
  }

  loadSong(song: string) {
    this.currentSong.node.innerHTML = song;

    this.audio.node.src = `./assets/audio/${song}.mp3`;
  }
  //src/assets/sounds/Aqua Caelestis.mp3

  playSong() {
    this.playerPlayBtn.node.classList.add("play");
    this.audio.node.play();
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
   /*  this.progress.value =
      (this.audio.node.currentTime / this.audio.node.duration) * 100; */
    

    
    let value = (this.audio.node.currentTime / this.audio.node.duration) * 100;
    this.progress.node.value = `${value}`;
  }
  updateAudioTime(){
    let minutes = addZero(Math.floor(this.audio.node.currentTime / 60));
    let seconds = addZero(Math.floor(this.audio.node.currentTime % 60));
    function addZero(number: number) {
      return number < 10 ? `0${number}` : number;
    }
    this.audioTime.node.innerHTML = `${minutes}:${seconds}`;
  }
}

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
