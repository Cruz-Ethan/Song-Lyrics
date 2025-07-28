import songs from './data.js'

export function renderList() {
    const listElement = document.querySelector('.songs-list');
    const filteredSongs = getFilteredSongs();
    listElement.innerHTML = filteredSongs.reduce( (htmlCode, song) =>
        htmlCode + `<a class='song-container' href='lyrics.html?songId=${song.id}'>
                        <img src='${song.path}/cover.jpg' class='cover'></img>
                        <p class='song-info'>${song.title} by ${song.artist}</p>
                    </a>`,
    '');
}

function getFilteredSongs() {
    const searchValue = new URL(window.location.href).searchParams.get('searchValue') || '';
    const includesIgnoreCase = str => str.toLowerCase().includes(searchValue.toLowerCase());
    const filter = song => includesIgnoreCase(song.artist) || includesIgnoreCase(song.title);
    return songs.filter(filter);
}

export default renderList;