import Control from "../control";
export class RandomBackground extends Control {
  private prevBtn: Control<HTMLButtonElement>;

  private nextBtn: Control<HTMLButtonElement>;
  private randomNum: number;
  private imgCache: ImageCache;
  private isLocked: boolean = false;
  timeOfDay: string;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "background");

    //this.background = new Control(this.node, "div", "background");
    this.imgCache = new ImageCache();
    this.prevBtn = new Control(this.node, "button", "prev-button");

    this.nextBtn = new Control(this.node, "button", "next-button");
    this.nextBtn.node.onclick = () => {
      this.getSlide(this.randomNum + 1);
      //console.log(this.getSlide(this.randomNum + 1))
    };
    this.prevBtn.node.onclick = () => {
      this.getSlide(this.randomNum - 1);
    };
    this.randomNum = this.getRundomNumber();
    this.timeOfDay = this.getTimeOfDay();
    this.setBg();
  }
  getRundomNumber() {
    return Math.floor(Math.random() * 19 + 1);
  }
  setBg() {
    //console.log("1", this.getRundomNumber());
    return this.imgCache
      .getImage(this.getTimeOfDay(), this.getRundomNumber())
      .then((image) => {
        this.node.style.backgroundImage = `url(${URL.createObjectURL(image)})`;
        return null;
      });
  }
  async getSlide(nextSlide: number) {
    console.log(this.isLocked);
    if (this.isLocked) {
      return;
    }

    if (nextSlide > 20) {
      this.randomNum = 1;
    } else if (nextSlide < 1) {
      this.randomNum = 20;
    } else {
      this.randomNum = nextSlide;
    }

    await Promise.all([this.setBg(), this.delay(1000)]);
    this.isLocked = false;
  }

  delay(time: number) {
    return new Promise((response) => {
      setTimeout(() => {
        return response(null);
      }, time);
    });
  }
  async update() {
    let randomPoint =
      "https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=w31RDyFST2zqqLMiwCr2dzkpaQW0cUKu1HF0V86oMsY";
    try {
      const response = await fetch(randomPoint);
      const jsonData = await response.json();
      this.node.style.backgroundImage = `url(${jsonData.urls.regular})`;
    } catch (error) {
      console.log("error" + error);
    }
  }
  getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();

    const timesDay = ["night", "morning", "afternoon", "evening"];
    return timesDay[Math.floor(hours / 6)];
  }
  /*   randomImage() {
    
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
      `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${this.getTimeOfDay()}/${randomNumber}.jpg')`
    );
    this.node.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${this.getTimeOfDay()}/${randomNumber}.jpg')`;
  }
 */
}
export class ImageCache {
  private cache: Map<string, Blob>;

  constructor() {
    this.cache = new Map();
  }

  private getUrl(dayTime: string, num: number) {
    let url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/${
      num < 10 ? "0" + num.toString() : num.toString()
    }.jpg`;

    return url;
  }

  private loadImage(url: string) {
    return fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((image) => {
        this.cache.set(url, image);
        return image;
      });
  }

  public getImage(dayTime: any, num: number) {
    let url = this.getUrl(dayTime, num);

    if (this.cache.has(url)) {
      return Promise.resolve(this.cache.get(url));
    } else {
      return this.loadImage(url);
    }
  }
}
