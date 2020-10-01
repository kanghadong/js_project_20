const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK = 'dark';
const LIGHT = 'light';

function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(mode) {
  nav.style.backgroundColor = mode === DARK ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = mode === DARK ? 'rgb(255 255 255 / 50%)': 'rgb(0 0 0  / 50%)';
  toggleIcon.children[0].textContent = mode === DARK ? 'Dark Mode' : 'Light Mode';
  mode === DARK ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  mode === DARK ? imageMode(DARK) : imageMode(LIGHT);
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', DARK);
    localStorage.setItem('theme', DARK);
    toggleDarkLightMode(DARK);
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT);
    localStorage.setItem('theme', LIGHT);
    toggleDarkLightMode(LIGHT);
  }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === DARK) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(DARK);
  }
}