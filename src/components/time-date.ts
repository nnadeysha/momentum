import Control from "../control";

export class TimeDate extends Control {
  time: Control<HTMLDivElement>;
  date: Control<HTMLDivElement>;
  setInterval: any;
  greeting: Control<HTMLDivElement>;
  inputName: Control<HTMLInputElement>;
  greetingWrapper: Control<HTMLDivElement>;
  constructor(parentNode: HTMLElement) {
    super(parentNode, "section", "time-wrapper");
    this.time = new Control(this.node, "div", "time");
    this.date = new Control(this.node, "div", "date");
    const greetingWrapper = new Control(this.node, "div", "greeting-wrapper");
    this.greeting = new Control(greetingWrapper.node, "div", "greeting");
    this.inputName = new Control(greetingWrapper.node, "input", "input-name");
    this.inputName.node.placeholder = "Enter name";
    this.inputName.node.type = "text";
    this.inputName.node.maxLength = 20;

    this.inputName.node.oninput = () => this.setNameToLocalStorage();
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
    const week = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let today = new Date();

    let month = monthNames[today.getMonth()];
    let year = today.getFullYear();
    let date = today.getDate();
    let dyaOfWeek = week[today.getDay()-1];

    let curentDate = `${date} ${month}, ${dyaOfWeek}`;
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

  setNameToLocalStorage() {
    localStorage.setItem("name", this.inputName.node.value);
  }
  getNameToLocalStorage() {
    this.inputName.node.value = localStorage.getItem("name");
  }
  gritingUpdate() {
    const date = new Date();
    const hours = date.getHours();
    const timesDay = ["night", "morning", "afternoon", "evening"];
    const TimeOfDay = () => timesDay[Math.floor(hours / 6)];
    this.greeting.node.textContent = `Good ${TimeOfDay()}`;
  }
}
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
