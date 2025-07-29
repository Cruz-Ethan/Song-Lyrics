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
                    'Stellar-stellar',
                    'Ahhhhh'
                ],
                timestamps: [
                    0.86,
                    8.43,
                    13.95
                ]
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
                timestamps: [
                    26.34,
                    27.12,
                    29.60,
                    32.19,
                    35.23,
                    37.13,
                    40.35,
                    44.85
                ]
            },
            {
                name: 'Verse 2',
                lyrics: [
                    'Futto',
                    'Kaori tatsu asa no nioi ga',
                    'Doushiyou mo naku nikurashikute',
                    'Heya no sumi de hiza o kakaete',
                    'Furueteita',
                    'Taiyou nante',
                    'Iranai kara',
                    'Akenaideite'
                ],
                timestamps: [
                    47.88,
                    48.83,
                    51.25,
                    53.84,
                    56.86,
                    59.62,
                    62.26,
                    64.98
                ]
            },
            {
                name: 'Pre-Chorus',
                lyrics: [
                    'Sono te o nobashite',
                    'Dare ka ni todoku you ni',
                    'Boku datte kimi to onaji',
                    'Tokubetsu nanka janai kara'
                ],
                timestamps: [
                    69.00,
                    73.10,
                    77.14,
                    82.30
                ]
            },
            {
                name: 'Chorus',
                lyrics: [
                    'Sousa boku wa yoru o utau wa stellar-stellar',
                    'Aritakke no kagayaki de',
                    'Koyoi ongaku wa zutto zutto yamanai',
                    'Sou da boku wa zutto naritakatta no wa',
                    'Matteru shinderera janai sa',
                    'Mukae ni iku oujisama da',
                    'Datte boku wa hoshi dakara',
                ],
                timestamps: [
                    91.07,
                    94.64,
                    97.29,
                    101.85,
                    105.4,
                    110.65,
                    115.93
                ]
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
                timestamps: [
                    130.14,
                    131.02,
                    133.39,
                    136.07,
                    139.21,
                    140.97,
                    141.82,
                    144.55,
                    147.18
                ]
            },
            {
                name: 'Pre-Chorus',
                lyrics: [
                    'Sono tе o nobashite',
                    'Dare ka ni todoku you ni',
                    'Hontou ni taisetsuna mono wa',
                    'Me ni mienai mitaina nda'
                ],
                timestamps: [151.21, 155.33, 159.37, 165.31]
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
                timestamps: [173.35, 176.79, 179.61, 184.07, 187.65, 192.90]
            },
            {
                name: 'Bridge',
                lyrics: [
                    'Yumemi gachina',
                    'Otogibanashi',
                    'Otogibanashi'
                ],
                timestamps: [202.26, 205.01, 210.43]
            },
            {
                name: 'Chorus',
                lyrics: [
                    'Sousa boku wa yoru o utau wa stellar-stellar',
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
                timestamps: [221.83, 225.38, 228.1, 232.65, 236.2, 238.86, 243.42, 247, 252.21, 257.58]
            },
            {
                name: 'Outro',
                lyrics: [
                    'Sou da boku wa hoshi datta',
                    'Stellar-stellar',
                    'Ahh'
                ],
                timestamps: [271.08, 283.5, 285.73]
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