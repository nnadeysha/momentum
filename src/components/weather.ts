import Control from "../control";
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

    /* private getApiURL(city: string){
      return 
    } */
    setCityToLocalStorage() {
      localStorage.setItem("city", this.cityInput.node.value);
    }
    getCityToLocalStorage() {
      this.cityInput.node.value = localStorage.getItem("city");
    }
    async getWeather(/* city:string */) {
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
  