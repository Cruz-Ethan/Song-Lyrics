import { getSong } from "./data.js";
import addSearchBarFunctionality from "./search-bar.js";

addSearchBarFunctionality();

const song = getSong();
renderSongInfo();
renderLyrics();

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