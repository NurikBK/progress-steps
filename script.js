const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');

let currentActive = 1

next.addEventListener('click', () => {
  progress.classList.add('active');
  progress.style.width = '30%';
  circles.forEach((circle) => {
    circle.classList.add('active');
  });
});
