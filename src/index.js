import colors from "./js/colors";
import './sass/styles.scss';

const refs = {
  body: document.querySelector("body"),
  start: document.querySelector("button[data-action='start']"),
  stop: document.querySelector("button[data-action='stop']"),
}
let statusChangeTheme = false;
const TIME_OUT = 1000;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener("click", startChangeIntervalTheme);
refs.stop.addEventListener("click", stopChangeTheme);

function setTheme() {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}
function startChangeIntervalTheme() {
  if (statusChangeTheme) {
    return;
  }
  statusChangeTheme = setInterval(setTheme, TIME_OUT);
}
function stopChangeTheme() {
  if (!statusChangeTheme) {
    return;
  }
  clearInterval(statusChangeTheme);
  statusChangeTheme = false;
}