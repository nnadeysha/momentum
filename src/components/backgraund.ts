import Control from "../control";
export class RandomBackground extends Control {
  prevBtn: Control<HTMLButtonElement>;

  nextBtn: Control<HTMLButtonElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "background");

    //this.background = new Control(this.node, "div", "background");
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
      this.node.style.backgroundImage = `url(${jsonData.urls.regular})`;
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
    this.node.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${TimeOfDay()}/${randomNumber}.jpg')`;
  }
  
}
