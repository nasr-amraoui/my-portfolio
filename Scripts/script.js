// Add this to your existing script.js file

const burger = document.querySelector('.burger');
const navElements = document.querySelector('.nav_elements ul');
const navBtn = document.querySelector('.nav_btn');

burger.addEventListener('click', () => {
    navElements.classList.toggle('show');
    navBtn.classList.toggle('show');
});
