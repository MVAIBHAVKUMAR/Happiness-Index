// JavaScript to dynamically set progress bar widths

const scores = [80, 60, 40, 70, 50, 90]; 

const progressBars = document.querySelectorAll('.progress-fill');

progressBars.forEach((bar, i) => {
  bar.style.width = `${scores[i]}%`; 
});