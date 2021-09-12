const progress = document.querySelector('.progress');
const progressVolume = document.querySelector('.progress-volume');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #C4C4C4 ${value}%, grey 100%)`
})

progressVolume.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #C4C4C4 ${value}%, grey 100%)`
  })
  