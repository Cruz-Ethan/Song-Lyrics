import { getSong } from "./data.js";
import addSearchBarFunctionality from "./search-bar.js";

const song = getSong();
const vocals = document.querySelector('.vocals');
const instrumental = document.querySelector('.instrumental');
const seekBar = document.querySelector('.song-time');
const currentTime = document.querySelector('.current-time');
const playButton = document.querySelector('.play-button');
const playButtonIcon = document.querySelector('.play-button-icon');

addSearchBarFunctionality();
renderSongInfo();
addSongControlsFunctionality();
renderLyrics();

function renderSongInfo() {
    const songInfoContainer = document.querySelector('.song-info-container');
    songInfoContainer.innerHTML = 
    `<div class='song-info'>
        <img class='cover' src='${song.path}/cover.jpg'>
        <div class='song-description'>
            <h2 class='song-title'>${song.title}</h2>
            <p class='song-artist'>${song.artist}</p>
            <a class='song-link' href='${song.link}' target='_blank'><button class='song-link-button'>Watch on YouTube</button></a>
        </div>
    </div>`;
}

function renderLyrics() {
    const lyricsContainer = document.querySelector('.lyrics');
    lyricsContainer.innerHTML = 
    `<div class='lyrics-container'>
        <div>Lyrics:</div>
        ${song.lyrics.reduce((htmlCode, section) => 
            htmlCode + `<div class='song-section'>
                            <p>[${section.name}]</p>
                            ${section.lyrics.reduce((htmlLyrics, line, index) =>
                                htmlLyrics + `<p ${vocals.currentTime >= section.timestamps[index] ? "class='passed'" : ''}>${line}</p>`,
                            '')}
                        </div>`,
        '')}
    </div>`;
            
}

function addSongControlsFunctionality() {
    let vocalsLoaded = false;
    let instrumentalLoaded = false;

    vocals.addEventListener('loadeddata', () => {
        vocalsLoaded = true;
        if(instrumentalLoaded) {
            renderControls();
        }
    });

    instrumental.addEventListener('loadeddata', () => {
        instrumentalLoaded = true;
        if(vocalsLoaded) {
            renderControls();
        }
    });

    vocals.src = `${song.path}/song.mp3`;
    instrumental.src = `${song.path}/instrumental.mp3`;
}


function getTime(timeSeconds) {
    let seconds = Math.round(timeSeconds) % 60;
    let minutes = Math.floor(timeSeconds / 60);
    if(seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

function renderControls() {
    renderTitle();
    addButtonFunctionality();
    addPlayButtonFunctionality();
    renderSeekBar();
    addSeekBarFunctionality();
}

function renderTitle() {
    document.querySelector('.song-title-2').innerHTML = song.title;
}

function addButtonFunctionality() {
    const toggleVocalsButton = document.querySelector('.toggle-vocals');
    toggleVocalsButton.addEventListener('click', () => {
        vocals.muted = !vocals.muted;
        instrumental.muted = !instrumental.muted;
    });
}

function addPlayButtonFunctionality() {
    let intervalId;
    playButton.addEventListener('click', () => {
        playButtonIcon.classList.toggle('fa-play');
        playButtonIcon.classList.toggle('fa-pause');

        if(playButtonIcon.classList.contains('fa-pause')) {
            playSong();
            intervalId = setInterval(updateSeekBar, 100);
        }
        else {
            pauseSong();
            clearInterval(intervalId);
        }
    });
}

function updateSeekBar() {
    seekBar.value = vocals.currentTime;
    currentTime.innerHTML = getTime(vocals.currentTime);
    const percentage = Math.round(100 * seekBar.value / seekBar.max);
    seekBar.style.background = `linear-gradient(90deg, var(--highlight) ${percentage}%, var(--text-normal) ${percentage}%)`;
    renderLyrics();
}

function renderSeekBar() {
    currentTime.innerHTML = getTime(0);
    document.querySelector('.duration').innerHTML = getTime(vocals.duration);
    seekBar.max = vocals.duration;
}

function addSeekBarFunctionality() {
    pauseSong();
    seekBar.addEventListener('input', setNewTime);
}

function setNewTime() {
    vocals.currentTime = seekBar.value;
    instrumental.currentTime = seekBar.value;
    currentTime.innerHTML = getTime(seekBar.value);
    const percentage = Math.round(100 * seekBar.value / seekBar.max);
    seekBar.style.background = `linear-gradient(90deg, var(--highlight) ${percentage}%, var(--text-normal) ${percentage}%)`;
    renderLyrics();
}

function playSong() {
    vocals.play();
    instrumental.play();
}

function pauseSong() {
    vocals.pause();
    instrumental.pause();
}