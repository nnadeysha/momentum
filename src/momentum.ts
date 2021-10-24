import Control from "./control";

export class Momentum extends Control {
  randomBackgraund: RandomBackground;
  timeAndDate: TimeDate;
  weather: Weather;
  player: Player;
  wrapper: Momentum;
  //greeting: Greeting;
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.wrapper = new Momentum(this.node)
    this.randomBackgraund = new RandomBackground(this.node);
    this.weather = new Weather(this.node);
    this.timeAndDate = new TimeDate(this.node);
    this.player = new Player(this.node);

    //this.greeting = new Greeting(this.node)
    window.onload = () => {
      //this.randomBackgraund.update();
      this.weather.getCityToLocalStorage();
      this.weather.getWeather();
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
    super(parentNode, "section");
   
    this.background = new Control(this.node, "div", "background");
    this.prevBtn = new Control(this.node, "button", "prev-button");

    this.nextBtn = new Control(this.node, "button", "next-button");
    this.nextBtn.node.onclick = () => {
       this.randomImage();
    };
    this.prevBtn.node.onclick = () => {
      this.randomImage();
    };
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

  randomImage() {
    const date = new Date();
    const hours = date.getHours();

    const timesDay = ["night", "morning", "afternoon", "evening"];
    const TimeOfDay = () => timesDay[Math.floor(hours / 6)];
    let min = 1;
    let max = 20;
    const getRandomArbitrary = () => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    function addZero(number: number) {
      return number < 10 ? `0${number}` : number;
    }
    const randomNumber = addZero(getRandomArbitrary());

    console.log(
      `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${TimeOfDay()}/${randomNumber}.jpg')`
    );
    this.background.node.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${TimeOfDay()}/${randomNumber}.jpg')`;
  }
}

export class Player extends Control {
  playerControl: HTMLDivElement;
  playerPrevBtn: Control<HTMLButtonElement>;
  playerPlayBtn: Control<HTMLButtonElement>;
  playerNextBtn: Control<HTMLButtonElement>;
  playerPauseBtn: Control<HTMLButtonElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "section", "player-wrapper");

    const playerControl = new Control(this.node, "div", "player-control");
    this.playerPrevBtn = new Control(
      playerControl.node,
      "button",
      "player-prev-btn"
    );
    this.playerPlayBtn = new Control(
      playerControl.node,
      "button",
      "player-play-btn"
    );
    this.playerPauseBtn = new Control(
      playerControl.node,
      "button",
      "player-pause-btn"
    );
    this.playerNextBtn = new Control(
      playerControl.node,
      "button",
      "player-next-btn"
    );
  }
}

export class Weather extends Control {
  weatherImg: Control<HTMLElement>;
  weatherTemperature: Control<HTMLSpanElement>;
  weatherDescription: Control<HTMLParagraphElement>;
  weatherWind: Control<HTMLParagraphElement>;
  weatherHumidity: Control<HTMLParagraphElement>;
  cityInput: Control<HTMLInputElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "section", "weather-wrapper");
    const weatherBlock = new Control(this.node, "div", "weather-block");
    this.weatherTemperature = new Control(
      weatherBlock.node,
      "span",
      "weather-temperature"
    );
    this.weatherImg = new Control(weatherBlock.node, "i", "weather-img owf");
    this.weatherDescription = new Control(
      this.node,
      "p",
      "weather-description"
    );
    this.weatherWind = new Control(this.node, "p", "weather-wind");
    this.weatherHumidity = new Control(this.node, "p", "weather-humidity");
    //humidity
    this.cityInput = new Control(this.node, "input", "city-input");
    this.cityInput.node.placeholder = "Your city";
    this.cityInput.node.type = "text";
    this.cityInput.node.maxLength = 20;

    this.cityInput.node.oninput = () => {
      this.getWeather();
      this.setCityToLocalStorage();
    };
  }
  setCityToLocalStorage() {
    localStorage.setItem("city", this.cityInput.node.value);
  }
  getCityToLocalStorage() {
    this.cityInput.node.value = localStorage.getItem("city");
  }
  async getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityInput.node.value}&lang=ru&appid=acc15865bcf9f67a7111310944bdfafe&units=metric`;

    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      this.weatherImg.node.classList.add(`owf-${jsonData.weather[0].id}`);
      this.weatherTemperature.node.textContent = `${Math.floor(
        jsonData.main.temp
      )}°C`;
      this.weatherDescription.node.textContent =
        jsonData.weather[0].description;
      this.weatherWind.node.textContent = `${Math.floor(
        jsonData.wind.speed
      )} m/s - wind speed`;
      this.weatherHumidity.node.textContent = `${Math.floor(
        jsonData.main.humidity
      )} % - humidity`;

      console.log(
        jsonData.weather[0].id,
        jsonData.weather[0].description,
        jsonData.main.temp,
        jsonData.main.humidity
      );
    } catch (error) {
      console.log("error" + error);
    }
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
    super(parentNode, "section", "time-date-block");
    this.time = new Control(this.node, "div", "time");
    this.date = new Control(this.node, "div", "date");
    const greetingWrapper = new Control(this.node, "div", "greeting-wrapper");
    this.greeting = new Control(greetingWrapper.node, "div", "greeting");
    this.inputName = new Control(greetingWrapper.node, "input", "input-name"); //тут надо инпуту контент задать еще, типа value
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

export class Quotation extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
  }
}
