import Control from "./control";

export class Momentum extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
  }
}
export class RandomBackground extends Control {
  prevBtn: Control<HTMLButtonElement>;

  nextBtn: Control<HTMLButtonElement>;
  background: Control <HTMLDivElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "wrapper");
    this.background = new Control(this.node, "div", "background");
    this.prevBtn = new Control(this.node, "button", "prev-button");

    this.nextBtn = new Control(this.node, "button", "next-button");

    window.onload = () => {this.update()};
    
  }

  async update() {
      
    let randomPoint =
      "https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=Bu27cZco5_k3OK2_op_cAjvHj7s5sn22sfH3x2tVx1w";
   try {
          const response = await fetch(randomPoint);
          const jsonData = await response.json();
          this.background.node.style.backgroundImage =`url(${jsonData.urls.regular})`;
      } catch (error) {
          console.log("error" + error);
      }
    
  }
}

/*  this.nextBtn.node.addEventListener('click', async () => {
      
    let randomImage = await this.update();
    
    this.background.node.style.backgroundImage = randomImage;
  }); */
/*  this.background.node.style.backgroundImage = `url(${this.update()})`
   console.log(this.update()) */
/* this.background.node.onload = () => this. */

/*  const requestUrl =
      'https://api.unsplash.com/search/photos?query=london&client_id=<YOUR CLIENT ID GOES HERE>';
    const getImagesButton = document.querySelector('.getImagesButton');
    const imageToDisplay = document.querySelector('.imageToDisplay');

    this.prevBtn.addEventListener('click', async () => {
      let randomImage = await getNewImage();
      imageToDisplay.src = randomImage;
    }); */

/* let randomPoint = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=Bu27cZco5_k3OK2_op_cAjvHj7s5sn22sfH3x2tVx1w';

    const res = await fetch(randomPoint);
 const data = await res.json();

data.urls.regular */
/* let randomNumber = Math.floor(Math.random() * 10);
      return fetch(randomPoint)
        .then((response) => response.json())
        .then((data) => {
          let allImages = data.results[randomNumber];
          console.log(allImages.urls.regular)
          return allImages.urls.regular;
          console.log(allImages.urls.regular)
        }); */

//this.background.node.style.backgroundImage = `url(${update()})`;

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
export class Time extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
  }
}
export class Date extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
  }
}
export class Quotation extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
  }
}
