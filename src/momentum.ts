import Control from "./control";

export class Momentum extends Control {
  randomBackgraund: RandomBackground;
  timeAndDate: TimeDate;
  //greeting: Greeting;
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.randomBackgraund = new RandomBackground(this.node);
    this.timeAndDate = new TimeDate(this.node);
    //this.greeting = new Greeting(this.node)
    window.onload = () => {
      //this.randomBackgraund.update();
      this.randomBackgraund.randomImage();
      this.timeAndDate.timeDateUpdate();
      this.timeAndDate.gritingUpdate();
      this.timeAndDate.getNameToLocalStorage();
    };
  }
}
export class RandomBackground extends Control {
  prevBtn: Control<HTMLButtonElement>;

  nextBtn: Control<HTMLButtonElement>;
  background: Control<HTMLDivElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "wrapper");
    this.background = new Control(this.node, "div", "background");
    this.prevBtn = new Control(this.node, "button", "prev-button");

    this.nextBtn = new Control(this.node, "button", "next-button");
    this.nextBtn.node.onclick = () => {/* this.update();  */this.randomImage()};
    this.prevBtn.node.onclick = () => {/* this.update(); */ this.randomImage()};
  }

  async update() {
    let randomPoint =
      "https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=w31RDyFST2zqqLMiwCr2dzkpaQW0cUKu1HF0V86oMsY";
    try {
      const response = await fetch(randomPoint);
      const jsonData = await response.json();
      this.background.node.style.backgroundImage = `url(${jsonData.urls.regular})`;
    } catch (error) {
      console.log("error" + error);
    }
  }

  randomImage(){
    /* "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')"; */
    const date = new Date();
    const hours = date.getHours();

    const timesDay = ['night', 'morning', 'afternoon', 'evening'];
    const TimeOfDay = () => timesDay[Math.floor(hours / 6)];
    let min = 1;
    let max =20
    const getRandomArbitrary = ()=> {
      return Math.floor(Math.random() * (max - min) + min);
    }
    function addZero(number: number) {
      return number < 10 ? `0${number}` : number;
    }
    const randomNumber = addZero(getRandomArbitrary())

    console.log(`url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${TimeOfDay()}/${randomNumber}.jpg')`)
    this.background.node.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${TimeOfDay()}/${randomNumber}.jpg')`
  }
  
}

export class TimeDate extends Control {
  time: Control<HTMLDivElement>;
  date: Control<HTMLDivElement>;
  setInterval: any;
  greeting: Control<HTMLDivElement>;
  inputName: Control<HTMLInputElement>;
  greetingWrapper: Control<HTMLDivElement>;
  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "time-date-block");
    this.time = new Control(this.node, "div", "time");
    this.date = new Control(this.node, "div", "date");
    const greetingWrapper = new Control(this.node, "div", "greeting-wrapper");
    this.greeting = new Control(greetingWrapper.node, "div", "greeting");
    this.inputName = new Control(greetingWrapper.node, "input", "input-name"); //тут надо инпуту контент задать еще, типа value
    this.inputName.node.value = "Enter name";
    this.inputName.node.type = "text";
    this.inputName.node.maxLength = 20


    this.inputName.node.oninput =() =>this.setNameToLocalStorage()

  }

  timeDateUpdate() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let today = new Date();

    let month = monthNames[today.getMonth()];
    let year = today.getFullYear();
    let date = today.getDate();

    let curentDate = `${date} ${month} ${year}`;
    this.date.node.textContent = curentDate;
    //monthNames[ today.getMonth()]

    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());

    let currentTime = `${hours}:${minutes}:${seconds}`;
    this.time.node.textContent = currentTime;

    function addZero(number: number) {
      return number < 10 ? `0${number}` : number;
    }

    setInterval(this.timeDateUpdate.bind(this), 1000);
  }

  setNameToLocalStorage(){
    localStorage.setItem('name', this.inputName.node.value);
    
  }
  getNameToLocalStorage(){
    this.inputName.node.value = localStorage.getItem('name');
  }
  gritingUpdate() {
    const date = new Date();
    const hours = date.getHours();
    const timesDay = ['night', 'morning', 'afternoon', 'evening'];
    const TimeOfDay = () => timesDay[Math.floor(hours / 6)];
    this.greeting.node.textContent = `Good ${TimeOfDay()}`
   /*  if (hours >= 0 && hours <= 6) {
      return (this.greeting.node.textContent = `Good ${getTimeOfDay}`);
    }
    if (hours > 9 && hours <= 12) {
      return (this.greeting.node.textContent = `Good ${getTimeOfDay}`);
    }
    if (hours > 12 && hours <= 18) {
      return (this.greeting.node.textContent = `Good ${getTimeOfDay}`);
    }
    if (hours > 18 && hours <= 23) {
      return (this.greeting.node.textContent = `Good ${getTimeOfDay}`);
    } */
  }

}

export class ButtonsChangeBack extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
  }
}
export class Player extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
  }
}
export class Weather extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
  }
}

export class Quotation extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
  }
}
