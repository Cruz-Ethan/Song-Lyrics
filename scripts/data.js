export const songs = [
    {
        title: 'Stellar Stellar',
        artist: 'Hoshimachi Suisei',
        path: 'songs/stellar stellar',
        lyrics: [
            {
                name: 'Intro',
                lyrics: [
                    'Datte boku wa hoshi dakara',
                    'Stellar-stellar'
                ],
                timestamps: []
            },
            {
                name: 'Verse 1',
                lyrics: [
                    'Kitto',
                    'Kimi wa mou kizuiteita',
                    'Boku no kokoro no oku de egaita',
                    'Sore ga kore kara hanasu chinpu na',
                    'Monoroogu sa',
                    'Zutto ienai kotoba ga atta',
                    'Kowasenai kabe ga atta nda',
                    'Zutto sa'
                ],
                timestamps: []
            },
            {
                name: 'Verse 2',
                lyrics: [
                    'Futto',
                    'Kaori tatsu asa no nioi ga',
                    'Doushiyou mo naku nikurashikute',
                    'Heya no sumi de hiza wo kakaete',
                    'Furueteita',
                    'Taiyou nante',
                    'Iranai kara',
                    'Akenaideite'
                ],
                timestamps: []
            },
            {
                name: 'Pre-Chorus',
                lyrics: [
                    'Sono te o nobashite',
                    'Dare ka ni todoku you ni',
                    'Boku datte kimi to onaji',
                    'Tokubetsu nanka janai kara'
                ],
                timestamps: []
            },
            {
                name: 'Chorus',
                lyrics: [
                    'Sousa boku wa yoru wo utau wa stellar-stellar',
                    'Aritakke no kagayaki de',
                    'Koyoi ongaku wa zutto zutto yamanai',
                    'Sou da boku wa zutto naritakatta no wa',
                    'Matteru shinderera janai sa',
                    'Mukae ni iku oujisama da',
                    'Datte boku wa hoshi dakara',
                ],
                timestamps: []
            },
            {
                name: 'Verse 3',
                lyrics: [
                    'Nante',
                    'Arifureta hanashi nanda',
                    'Risou dake kaki tsuraneteita',
                    'Nooto no sumi ni nemuru honno',
                    'Wan shiin da',
                    '"Kitto',
                    'Ano hoshi mo naiteru nda',
                    'Ashita nante',
                    'Konai mama de ite"'
                ],
                timestamps: []
            },
            {
                name: 'Pre-Chorus',
                lyrics: [
                    'Sono tе o nobashite',
                    'Dare ka ni todoku you ni',
                    'Hontou ni taisetsuna mono wa',
                    'Me ni mienai mitaina nda'
                ],
                timestamps: []
            },
            {
                name: 'Chorus',
                lyrics: [
                    'Sousa boku wa yoru o utau yo stellar-stellar',
                    'Arinomama kangaenaide',
                    'Koyoi ongaku wa kitto kitto yamanai',
                    'Sou da boku ga zutto naritakatta no wa',
                    'Ae kana hiroin janai sa',
                    'Sukui ni iku hiiroo da'
                ],
                timestamps: []
            },
            {
                name: 'Bridge',
                lyrics: [
                    'Yumemi gachina',
                    'Otogibanashi',
                    'Otogibanashi'
                ],
                timestamps: []
            },
            {
                name: 'Chorus',
                lyrics: [
                    'Sousa boku wa yoru wo utau wa stellar-stellar',
                    'Aritakke no kagayaki de',
                    'Koyoi ongaku wa zutto zutto yamanai',
                    'Sousa boku wa ai o utau yo stellar-stellar',
                    'Sekai uchuu no mannaka de',
                    'Koyoi ongaku wa kitto kitto yamanai',
                    'Sousa boku wa zutto naritakatta no wa',
                    'Matteru shinderera janai sa',
                    'Mukae ni iku oujisama da',
                    'Datte boku wa hoshi dakara',
                ],
                timestamps: []
            },
            {
                name: 'Outro',
                lyrics: [
                    'Sou da boku wa hoshi datta',
                    'Stellar-stellar',
                    'Ahh'
                ],
                timestamps: []
            }
        ],
        link: 'https://www.youtube.com/watch?v=a51VH9BYzZA',
        id: 'Pix3oo-1H7oX7-6OmKx6'
    },
    {
        title: 'Ghost',
        artist: 'Hoshimachi Suisei',
        path: 'songs/ghost',
        lyrics: [],
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