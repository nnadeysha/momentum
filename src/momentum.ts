import Control from "./control";
import {Weather} from "./components/weather";
import {TimeDate} from "./components/time-date";
import {Player} from "./components/player";
import {RandomBackground} from './components/backgraund'
export class Momentum extends Control {
  private randomBackgraund: RandomBackground;
  private timeAndDate: TimeDate;
  private weather: Weather;
  private player: Player;
/*   wrapper: Momentum;
 */  //greeting: Greeting;
  constructor(parentNode: HTMLElement) {
    super(parentNode);
/*     this.wrapper = new Momentum(this.node)
 */    this.randomBackgraund = new RandomBackground(parentNode);
 //this.randomBackgraund.randomImage();
 const header = new Control(this.randomBackgraund.node, "header", "header")
    this.weather = new Weather(header.node);
    this.player = new Player(header.node);
    const main =  new Control(this.randomBackgraund.node, "main", "main")
    this.timeAndDate = new TimeDate(main.node);
    

    //this.greeting = new Greeting(this.node)
/*     window.onload = () => {
 */   this.randomBackgraund.update();
      this.weather.getCityToLocalStorage();
      this.weather.getWeather();
      
      this.timeAndDate.timeDateUpdate();
      this.timeAndDate.gritingUpdate();
      this.timeAndDate.getNameToLocalStorage();
      
/*     };
 */  }
}


export class Quotation extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
  }
}
