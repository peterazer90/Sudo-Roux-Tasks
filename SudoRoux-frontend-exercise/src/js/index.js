import _ from 'lodash';
import '../css/style.css';
import close from "../images/close.png"
import data from './data.json'

const closeElement = document.querySelector('.popup-close');
const progressElement = document.querySelector('.progress-bar');
const counterElement = document.querySelector('.counter');
const resetElement = document.querySelector('.popup-reset');

window.addEventListener('load', () => PROGRESS.START());
resetElement.addEventListener('click', () => PROGRESS.RESET());

const {lightbox} = data.data;
let progressStart = lightbox.start; // start number
const progressDuration = lightbox.duration / 100; // get milliseconds
let progressStatus;
// change dom values ////////////////////////////////////////////////////////////////////////
const progressFeedback = (number) => {
    counterElement.innerHTML = "" + number + "%" + (number === 100 ? ' completed' : '');
    progressElement.style.width = number + "%";
    progressElement.style.backgroundColor = number !== 100 ? "#639ec8" : '#5c9200';
}
// counter function executing in set interval ///////////////////////////////////////////////
const progressCounter = () => {
    if (progressStart >= lightbox.finish) clearInterval(progressStatus);
    else {
        progressStart++;
        progressFeedback(progressStart)
    }
}
// progress object return start and reset ///////////////////////////////////////////////////
const PROGRESS = {
    START: () => progressStatus = setInterval(progressCounter, progressDuration),
    RESET: () => {
        clearInterval(progressStatus);
        progressStart = lightbox.start;
        progressStatus = setInterval(progressCounter, progressDuration);
    }
}