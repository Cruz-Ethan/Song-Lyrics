export const songs = [
    {
        title: 'Stellar Stellar',
        artist: 'Hoshimachi Suisei',
        path: 'songs/stellar stellar',
        lyrics: [],
        timestamps: [],
        link: 'https://www.youtube.com/watch?v=a51VH9BYzZA',
        id: 'Pix3oo-1H7oX7-6OmKx6'
    },
    {
        title: 'Ghost',
        artist: 'Hoshimachi Suisei',
        path: 'songs/ghost',
        lyrics: [],
        timestamps: [],
        link: 'https://www.youtube.com/watch?v=IKKar5SS29E',
        id: '44sRFs-XHQtR0-x56VCZ'
    }
];

export default songs;

export function getSong() {
    const url = new URL(window.location.href);
    const songId = url.searchParams.get('songId');
    return songs.find(song => song.id === songId);
}