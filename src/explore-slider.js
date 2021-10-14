
/* const topExploreSlide = document.querySelector('.expl-img');
const exploreSlider = document.querySelector('.explore-slider input');

topExploreSlide.addEventListener('input', slideWidthChange)

 export function slideWidthChange(){
    topExploreSlide.style.width = exploreSlider.offsetX +  '%'
   }
   
   */
   
export class ExploreSlider{
    constructor() {
        this.topExploreSlide = document.querySelector('.expl-img');
        this.exploreSlider = document.querySelector('.explore-slider input');
    }
    inin(){
        this.topExploreSlide.addEventListener('input', () => this.slideWidthChange())
    }
    slideWidthChange(){
        this.topExploreSlide.style.width = this.value + '%'
       }
       
}
 


