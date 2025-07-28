import { getSong } from "./data.js";
import addSearchBarFunctionality from "./search-bar.js";

addSearchBarFunctionality();

const song = getSong();
renderSongInfo();
renderLyrics();
addSongControlsFunctionality();

function renderSongInfo() {
    const songInfoContainer = document.querySelector('.song-info-container');
    songInfoContainer.innerHTML = `<div class='song-info'>
                                        <img class='cover' src='${song.path}/cover.jpg'>
                                        <div class='song-description'>
                                            <h2 class='song-title'>${song.title}</h2>
                                            <p class='song-artist'>${song.artist}</p>
                                            <a class='song-link' href='${song.link}' target='_blank'><button class='song-link-button'>Watch on YouTube</button></a>
                                        </div>
                                   </div>`
}

function renderLyrics() {
    const lyricsContainer = document.querySelector('.lyrics');
    lyricsContainer.innerHTML = `<div>
                                    Lyrics:
                                </div>` +
                                song.lyrics.reduce((htmlCode, section) => 
                                    htmlCode + `<div class='song-section'>
                                                    <p>[${section.name}]</p>
                                                    ${section.lyrics.reduce((htmlLyrics, line) =>
                                                        htmlLyrics + `<p>${line}</p>`,
                                                    '')}
                                                </div>`,
                                '');
            
}

function addSongControlsFunctionality() {
    const vocals = document.querySelector('.vocals');
    const instrumental = document.querySelector('.instrumental');

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

    function getTime(timeSeconds) {
        let seconds = Math.round(timeSeconds) % 60;
        let minutes = Math.round(timeSeconds / 60);
        if(seconds < 10) {
            seconds = `0${seconds}`;
        }
        return `${minutes}:${seconds}`;
    }

    function renderControls() {
        vocals.pause();
        instrumental.pause();
        const currentTime = document.querySelector('.current-time');
        currentTime.innerHTML = getTime(0);
        document.querySelector('.duration').innerHTML = getTime(vocals.duration);

        document.querySelector('.song-title-2').innerHTML = song.title;
        const seekBar = document.querySelector('.song-time');
        seekBar.max = vocals.duration;

        seekBar.addEventListener('click', () => {
            let shouldPlayAgain = playButtonIcon.classList.contains('fa-pause')
            if(shouldPlayAgain) {
                playButtonIcon.classList.add('fa-play');
                playButtonIcon.classList.remove('fa-pause');
                vocals.pause();
                instrumental.pause();
                clearInterval(intervalId);
            }

            vocals.currentTime = seekBar.value;
            instrumental.currentTime = seekBar.value;
            currentTime.innerHTML = getTime(seekBar.value);
            const percentage = Math.round(100 * seekBar.value / seekBar.max);
            seekBar.style.background = `linear-gradient(90deg, var(--highlight) ${percentage}%, var(--text-normal) ${percentage}%)`;

            if(shouldPlayAgain) {
                playButtonIcon.classList.remove('fa-play');
                playButtonIcon.classList.add('fa-pause');
                vocals.play();
                instrumental.play();
                intervalId = setInterval(() => {
                    seekBar.value = vocals.currentTime;
                    currentTime.innerHTML = getTime(vocals.currentTime);
                    const percentage = Math.round(100 * seekBar.value / seekBar.max);
                    seekBar.style.background = `linear-gradient(90deg, var(--highlight) ${percentage}%, var(--text-normal) ${percentage}%)`;
                }, 500);
            }
        });

        const playButton = document.querySelector('.play-button');
        const playButtonIcon = document.querySelector('.play-button-icon');
        let intervalId;
        playButton.addEventListener('click', () => {
            playButtonIcon.classList.toggle('fa-play');
            playButtonIcon.classList.toggle('fa-pause');

            if(playButtonIcon.classList.contains('fa-pause')) {
                vocals.play();
                instrumental.play();
                intervalId = setInterval(() => {
                    seekBar.value = vocals.currentTime;
                    currentTime.innerHTML = getTime(vocals.currentTime);
                    const percentage = Math.round(100 * seekBar.value / seekBar.max);
                    seekBar.style.background = `linear-gradient(90deg, var(--highlight) ${percentage}%, var(--text-normal) ${percentage}%)`;
                }, 500);
            }
            else {
                vocals.pause();
                instrumental.pause();
                clearInterval(intervalId);
            }
        });

        const toggleVocalsButton = document.querySelector('.toggle-vocals');
        toggleVocalsButton.addEventListener('click', () => {
            vocals.muted = !vocals.muted;
            instrumental.muted = !instrumental.muted;
        })
    }
}