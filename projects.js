// base template
//
//remember to add a comma after last entry
//
//remove any unused entries
/* 
    {
        "title": "",
        "category": ["",""],
        "link": "",
        "artwork": "",
        "developer": "",
        "developers": ["",""]
        "publisher": "",
        "developerLink": ,
        "releaseDate": "",
        "dateString": "",
        "role": "",
        "description": "",
        "additionalInfo": "",
        "embed": "",
        "awards": ["",""],
        "awardLinks": ["",""]
    }
*/

// use a backslash "\" to cancel out any effects of special characters you need to use like quotation marks eg: \" ... \"

//Use html elements like <br> and <a> to add any extra spice to paragraphs etc

// Project database
const projectsData = [
    {
        "title": "The Last Waltz",
        "category": ["Video Game"],
        "link": "https://store.steampowered.com/app/3693000/The_Last_Waltz/",
        "artwork": "images/ProjectArtwork/The Last Waltz.jpg",
        "developer": "DigitallyDownloaded.net",
        "developerLink": "http://DigitallyDownloaded.net",
        "releaseDate": "1/12/2026",
        "dateString": "2026",
        "role": "Music composition, lyrics, mastering engineer",
        "description": "The Last Waltz is a full-scale visual novel about an incredible niche sport; the first visual novel to be based on Dancesport. Featuring Over 30 stunning CGs, a soundtrack of more than 35 pieces of authentic Dancesport music, and integrating real footage of professional dancers and competitions. <br> The score for this game was written in collaboration with composers Gelby and Jof, spanning multiple genres and styles of dancesport music all written authentically to the medium. MB had the opportunity to write three vocal themes for this game in collaboration with the talented Rita Kamishiro, Aika Sekiyama (関山 藍果) and Saskia Mascitti. ",
        "additionalInfo": "Collaborated with Gelby and Jof; three vocal themes with Rita Kamishiro, Aika Sekiyama (関山 藍果), and Saskia Mascitti."
    },
    {
        "title": "YGGDRASIL",
        "category": ["Misc"],
        "link": "https://kodamasounds.bandcamp.com/album/yggdrasil",
        "artwork": "images/AlbumCovers/YGGDRASIL.png",
        "publisher": "KodamaSounds",
        "developerLink": "https://kodamasoft.net/",
        "releaseDate": "31/12/2025",
        "dateString": "31 December, 2025",
        "role": "Music composition (Track 1-5 \"Entanglement\")",
        "description": "The roots of the YGGDRASIL take shape and form, to create an ascension towards a new future. "YGGDRASIL" is KodamaSounds' 5th massive anniversary project, with the goal of celebrating the legacy and future of the circle."
        "additionalInfo": "Released as part of Comiket 107.",
    },
    {
        "title": "Starlit Reverie",
        "category": ["Resonant Union"],
        "link": "https://youtu.be/dZCXZRGUxYA",
        "artwork": "images/AlbumCovers/Starlit Reverie.jpg",
        "publisher": "Resonant Union",
        "developerLink": "https://www.resonantunion.com/",
        "releaseDate": "28/12/2025",
        "dateString": "28 December, 2025",
        "role": "Music arrangement (Track 1-8 \"Happy Beach ~funny cat ver.~\" & Track 2-2 \"Traveler\"), video editor",
        "description": "Starlit Reverie is a fan-tribute album to the Klonoa series of video games by NAMCO.",
        "embed": "https://youtu.be/dZCXZRGUxYA",
    },
    {
        "title": "KAIJUxHUNT",
        "category": ["Game Jam"],
        "link": "https://jamtonyx.itch.io/kaijuxhunt",
        "artwork": "images/ProjectArtwork/KAIJUxHUNT.png",
        "developer": "Suspicious Jam",
        "developerLink": "https://suspiciousjam.com.au/",
        "releaseDate": "2/12/2025",
        "dateString": "December 2025",
        "role": "Music composition (Track \"界10×8ン&\")",
        "description": "LET THE HUNT BEGIN! Kaijus and monsters carry highly valued resources, it's up to Kaiju hunters such as ragtag duo Tuna and Mackerel to hunt highly vicious and dangerous Kaiju. Equipped with a small fishing boat and a manned turret the duo are ready to pursue and deal with any Kaiju threats that face them!",
        "additionalInfo": "Made for the Game Off 2025 game jam! Theme: Waves",
    },
    {
        "title": "ResoJam vol i: Resonant Prix",
        "category": ["Resonant Union"],
        "link": "https://resonantunion.bandcamp.com/album/resojam-vol-i-resonant-prix",
        "artwork": "images/AlbumCovers/ResoJam vol i_ Resonant Prix.jpg",
        "publisher": "Resonant Union",
        "developerLink": "https://www.resonantunion.com/",
        "releaseDate": "15/11/2025",
        "dateString": "15 November, 2025",
        "role": "Music composition (Track 17 \"midnight streak\")",
        "description": "Ready your engines for an EXPXLOSIVE jazz fusion jam album! Dive into this 21 track all-original jazz fusion racing album, inspired by the iconic sounds of [insert popular racing video game with jazz fusion music here].",
    },
    {
        "title": "Project: Phantasia II -Blinding Dawn-",
        "category": ["Misc"],
        "link": "https://youtu.be/dq0ArdmhTCQ",
        "artwork": "images/AlbumCovers/Project Phantasia II.jpg",
        "publisher": "Prismatic Collections",
        "releaseDate": "13/9/2025",
        "dateString": "13 September, 2025",
        "role": "Music composition (Track 3 \"暁の姫\")",
        "description": "Project: Phantasia II -Blinding Dawn- is the second album in a series a fantasy compilation albums organised by SpiralFlip.<br> MB was invited to contribute a track for the album, composing a folk fusion-inspired track in collaboration with Iku Hoshifuri, who wrote the Japanese lyrics for the song.",
    },
    {
        "title": "bucolic systems",
        "category": ["Misc"],
        "link": "https://technomarina.bandcamp.com/album/bucolic-systems",
        "artwork": "images/AlbumCovers/bucolic systems.png",
        "publisher": "Technomarina",
        "releaseDate": "5/9/2025",
        "dateString": "5 September, 2025",
        "role": "Guitar & bass performance (Track 1 \"Flow of Nature and Humanity\" & Track 11 \"stellar_winds.exe\")",
        "description": "bucolic systems is a love letter to the Frutiger Aero aesthetic, which was widely used in game and tech products from roughly 2004 to 2013. The goal of this album was to sonically capture the spirit of the aesthetic, often blending electronic and acoustic instrumentation. <br> MB had the opportunity to perform on two tracks for this album by fusoxide and Philip Saguil.",
    },
    {
        "title": "Spirit Speedway",
        "category": ["Game Jam"],
        "link": "https://firefalls.itch.io/spirit-speedway",
        "artwork": "images/ProjectArtwork/Spirit Speedway.png",
        "developers": ["Philip Saguil", "Sami Najed", "Charlie Taylor", "Simon Stemberger", "Felix M", "MB", "Kikeols", "sincx"],
        "releaseDate": "3/8/2025",
        "dateString": "August 2025",
        "role": "Music composition, sound effects",
        "description": "You are a pair of soul-catching rascals that must speedrun to meet their boss' reincarnation quota! Collect souls to meet your quota, or suffer consequences. Finish quickly to receive a soul multiplier. There a total of three levels to enjoy in succession - if you lose, you will have to restart.",
        "additionalInfo": "Made for Game Maker’s Toolkit Game Jam 25 in 96 hours.",
    },
    {
        "title": "Everlasting Ethos",
        "category": ["Resonant Union"],
        "link": "https://youtu.be/POahcc8x-fE",
        "artwork": "images/AlbumCovers/Everlasting Ethos.png",
        "publisher": "Resonant Union",
        "developerLink": "https://www.resonantunion.com/",
        "releaseDate": "19/07/2025",
        "dateString": "19 July, 2025",
        "role": "Music arrangement (Track 2-11 \"Clover\"), video editor",
        "description": "Everlasting Ethos is a fan-tribute album to the Mega Man Zero series of video games.",
        "embed": "https://youtu.be/POahcc8x-fE",
    },
    {
        "title": "Perfect Arrange Works ~Episode III~",
        "category": ["Resonant Union"],
        "link": "https://youtu.be/KoKUesnu5jw",
        "artwork": "images/AlbumCovers/Perfect Arrange Works ~Episode III~.png",
        "publisher": "Resonant Union",
        "developerLink": "https://www.resonantunion.com/",
        "releaseDate": "28/06/2025",
        "dateString": "28 June, 2025",
        "role": "Project organiser, music arrangement, video editor",
        "description": "Perfect Arrange Works ~Episode III~ is a fan-tribute album celebrating the rich 25+ year history of music from Xenogears, Xenosaga and the Xenoblade Chronicles series. The final part of a three-part album series project organised by MB.",
        "embed": "https://youtu.be/KoKUesnu5jw",
    },
    {
        "title": "King of Ping Pong: MEGAMIX",
        "category": ["Video Game"],
        "link": "https://store.steampowered.com/app/2940100/King_of_Ping_Pong_MEGAMIX/",
        "artwork": "images/ProjectArtwork/King of Ping Pong.webp",
        "developer": "Suspicious Jam",
        "developerLink": "https://suspiciousjam.com.au/",
        "releaseDate": "16/04/2025",
        "dateString": "15 November, 2024 (JP: 16 April, 2025)",
        "role": "Japanese translation & localisation",
        "description": "Table tennis meets Arcade Fighter in this fast-paced action-packed journey to become the best in the world. Defeat a series of quirky characters utilizing quick wit and precise timing to secure victory in increasingly challenging matches!"
    },
    {
        "title": "Taxivasion",
        "category": ["Game Jam"],
        "link": "https://lurlichs.itch.io/taxivasion",
        "artwork": "images/ProjectArtwork/Taxivasion.png",
        "developer": "Suspicious Jam",
        "developerLink": "https://suspiciousjam.com.au/",
        "releaseDate": "1/2/2025",
        "dateString": "February 2025",
        "role": "Music composition (Track \"Ride the Sunset\")",
        "description": "Pick up and deliver the bubbly residents of bubble city as fast as you can. Drive, drift and boost your way around the city to earn as much money as you can before the timer runs out, all while listening to bubble city radio's finest selection of tracks (as well as the insightful dialogue of the residents).",
        "additionalInfo": "Made for Global Game Jam 2025 in Melbourne under the theme 'bubble'.",
        "embed": "https://youtu.be/GMEBsF9DyVE"
    },
    {
        "title": "Project Mikkel",
        "category": ["Game Jam"],
        "link": "https://sunnyberry.itch.io/project-mikkel",
        "artwork": "images/ProjectArtwork/Project Mikkel.png",
        "developers": ["Sunny Berry", "Samuel Pratt", "Max Murphy"],
        "releaseDate": "1/2/2025",
        "dateString": "February 2025",
        "role": "Music composition",
        "description": "Project Mikkel is a sea monkey-like developed in PICO-8. This game blends idle and virtual pet style interactions. Interact, observe and rule over your tiny band of Mikkels, a strange new culture of creatures.",
        "additionalInfo": "Made for Global Game Jam 2025 in Melbourne under the theme 'bubble'.",
        "embed": "https://youtu.be/6bkt11a0zWA"
    },
    {
        "title": "Round Control",
        "category": ["Game Jam"],
        "link": "https://joshuareason.itch.io/round-control",
        "artwork": "images/ProjectArtwork/Round Control title theme.png",
        "developers": ["Adam", "Ellie", "Josh", "Talia"],
        "releaseDate": "1/2/2025",
        "dateString": "February 2025",
        "role": "Music composition",
        "description": "Round Control to Major Rond! Use your sword to be the last Astronaut left.",
        "additionalInfo": "Made for Global Game Jam 2025 in Melbourne under the theme 'bubble'.",
        "embed": "https://youtu.be/6BD3fpjaR00"
    },
    {
        "title": "Neon Genesis Construction Company",
        "category": ["Game Jam"],
        "link": "https://jamtonyx.itch.io/neon-genesis-construction-company",
        "artwork": "images/ProjectArtwork/Neon Genesis Construction Company.png",
        "developer": "Suspicious Jam",
        "developerLink": "https://suspiciousjam.com.au/",
        "releaseDate": "1/8/2024",
        "dateString": "August 2024",
        "role": "Music composition",
        "description": "The year is 2536, at the base of Mt Fuji sits Neo Tokyo - 4. A city prone to persistent Leviathan Kaiju attacks. You are assigned to the Foreman Unit - 01, where this mech lacks in combat capabilities it EXCELS in construction and tower manufacturing.",
        "additionalInfo": "Made for Game Maker’s Toolkit Game Jam 24 in 96 hours.",
        "embed": "https://youtu.be/PAINdRWiWA8"
    },
    {
        "title": "King’s Laugher",
        "category": ["Game Jam"],
        "link": "https://sergeymakesagame.itch.io/kings-laughter",
        "developers": ["Sunny Berry", "Henry Beeman", "Anushka Fernando", "Martin Dimovski", "Sergey Germogentov"],
        "releaseDate": "1/2/2024",
        "dateString": "February 2024",
        "role": "Music composition",
        "description": "By order of the King, thou, a lowly jester, have been summoned to entertain the court. Perform thy best dance through the power of the orbs (witchcraft!) or suffer the consequences. But thy beloved King will not be so easily pleased. Through thy sharp reflexes and keen wit, thou must utilise combos (heresy!) to amuse the King with jokes. <br>The music was written as a crossover between medieval style music and the quirky style of music found in games like Katamari Damacy!",
        "additionalInfo": "Fusion of medieval and Katamari Damacy-style music.",
        "embed": "https://youtu.be/GtDIGBKr-c4",
        "awards": "",
        "awardLinks": ""
    },
    {
        "title": "I Eat Therefore I Am",
        "category": ["Game Jam"],
        "link": "https://globalgamejam.org/games/2024/cooking-storm-teacup-1",
        "artwork": "images/ProjectArtwork/I Eat Therefore I Am.jpg",
        "releaseDate": "1/2/2024",
        "dateString": "February 2024",
        "role": "Music composition",
        "description": "In a magical forest far, far, away, on a trip no other human-sorcerer has attempted. The fate of your companions' appetite lies in your hands. If they don't like your food... Make them! <br> I wrote the fantasy-inspired map theme for the game!",
        "additionalInfo": "Made for Global Game Jam 2024 in Melbourne under the theme 'make me laugh'.",
        "embed": "https://youtu.be/t6GVWpQs5vc"
    },
    {
        "title": "Perfect Arrange Works ~Episode II~",
        "category": ["Resonant Union"],
        "link": "https://youtu.be/fN1gEkX_eK4",
        "artwork": "images/AlbumCovers/Perfect Arrange Works ~Episode II~.png",
        "publisher": "Resonant Union",
        "developerLink": "https://www.resonantunion.com/",
        "releaseDate": "1/12/2024",
        "dateString": "1 December, 2024",
        "role": "Project organiser, music arrangement, lyricist, Japanese translation",
        "description": "Perfect Arrange Works ~Episode II~ is a fan-tribute album celebrating the rich 25+ year history of music from Xenogears, Xenosaga and the Xenoblade Chronicles series. Part two of a three-part album series project organised by MB.",
        "embed": "https://youtu.be/fN1gEkX_eK4"
    },
    {
        "title": "Falcom Café",
        "category": ["Resonant Union"],
        "link": "https://youtu.be/F999SCap668",
        "artwork": "images/AlbumCovers/Falcom Café.png",
        "publisher": "Resonant Union",
        "developerLink": "https://www.resonantunion.com/",
        "releaseDate": "26/10/2024",
        "dateString": "26 October, 2024",
        "role": "Music arrangement (Track 10 \"The Azure Bossa\" & Track 13 \"Closing Shop - Ending\")",
        "description": "Falcom Café is a cozy 13-track fan-tribute album to Nihon Falcom’s catalogue of video game music. Filled to the brim of café-themed arrangements to kick back and relax to.",
        "embed": "https://youtu.be/F999SCap668"
    },
    {
        "title": "ZeroRanger Arranged Album -GREEN ARRANGE-",
        "category": ["Resonant Union", "Video Game"],
        "link": "https://resonantunion.bandcamp.com/album/zeroranger-arranged-album-green-arrange",
        "artwork": "images/AlbumCovers/ZeroRanger GREEN ARRANGE.png",
        "publisher": "eebrozgi and Resonant Union",
        "releaseDate": "29/9/2024",
        "dateString": "29 September, 2024",
        "role": "Co-producer, music arrangement, lyricist, Japanese translation, video editor",
        "description": "GREEN ARRANGE is an official album for ZeroRanger produced in collaboration with <a href=\"https://se-made.com/\">System Erasure</a>. Enjoy nearly 3.5 hours of arrangements from System Erasure's iconic OST to ZeroRanger by composer eebrozgi! Journey through the cycle of ZeroRanger with 48 tracks, arranged by 44 incredible ZeroArrangers, featuring live performances from several musicians and vocalists.",
        "additionalInfo": "Collaboration with System Erasure. Features live performances and vocalists.",
        "awards": "2025 Game Music Remix Awards “Best Album” Winner",
        "awardLinks": "https://vgmcon.org/2025-game-music-remix-awards/"
    },
    {
        "title": "Perfect Arrange Works ~Episode I~",
        "category": ["Resonant Union"],
        "link": "https://youtu.be/wHjv8pEAvDM",
        "artwork": "images/AlbumCovers/Perfect Arrange Works ~Episode I~.png",
        "publisher": "Resonant Union",
        "developerLink": "https://www.resonantunion.com/",
        "releaseDate": "1/12/2024",
        "dateString": "1 December, 2024",
        "role": "Project organiser, music arrangement",
        "description": "Perfect Arrange Works ~Episode I~ is a fan-tribute album celebrating the rich 25+ year history of music from Xenogears, Xenosaga and the Xenoblade Chronicles series. Part one of a three-part album series project organised by MB.",
        "embed": "https://youtu.be/wHjv8pEAvDM"
    },
    {
        "title": "Falcom Boss Rush Phase 3",
        "category": ["Resonant Union"],
        "link": "https://youtu.be/Y1ju5R5stOc",
        "artwork": "images/AlbumCovers/Falcom Boss Rush Phase 3.png",
        "publisher": "Resonant Union",
        "developerLink": "https://www.resonantunion.com/",
        "releaseDate": "10/12/2023",
        "dateString": "10 December, 2023",
        "role": "Music arrangement (Track 1 \"To the Future.\"), video editor",
        "description": "Part three of a three-album fan-tribute to Nihon Falcom’s boss themes over the years.",
        "embed": "https://youtu.be/Y1ju5R5stOc"
    },
    {
        "title": "Falcom Boss Rush Phase 2",
        "category": ["Resonant Union"],
        "link": "https://youtu.be/WaWpoUld0Ew",
        "artwork": "images/AlbumCovers/Falcom Boss Rush Phase 2.png",
        "publisher": "Resonant Union",
        "developerLink": "https://www.resonantunion.com/",
        "releaseDate": "25/6/2023",
        "dateString": "25 June, 2023",
        "role": "Music arrangement (Track 1 \"Revolt Against Doom\"), video editor",
        "description": "Part two of a three-album fan-tribute to Nihon Falcom’s boss themes over the years.",
        "embed": "https://youtu.be/WaWpoUld0Ew"
    },
    {
        "title": "Falcom Boss Rush Phase 1",
        "category": ["Resonant Union"],
        "link": "https://youtu.be/c29hCz4fQkM",
        "artwork": "images/AlbumCovers/Falcom Boss Rush Phase 1.png",
        "publisher": "Resonant Union",
        "developerLink": "https://www.resonantunion.com/",
        "releaseDate": "28/5/2023",
        "dateString": "28 May, 2023",
        "role": "Video editor",
        "description": "Part one of a three-album fan-tribute to Nihon Falcom’s boss themes over the years.",
        "embed": "https://youtu.be/c29hCz4fQkM"
    },
    {
        "title": "Guru Guru Jam!",
        "category": ["Resonant Union"],
        "link": "https://youtu.be/elaIbbXglyw",
        "artwork": "images/AlbumCovers/Guru Guru Jam!.png",
        "publisher": "Resonant Union",
        "developerLink": "https://www.resonantunion.com/",
        "releaseDate": "15/4/2023",
        "dateString": "15 April, 2023",
        "role": "Music arrangement (Track 10 \"Sight of Silence\")",
        "description": "Embark on a journey back to your childhood with this funky fan-tribute album to Nihon Falcom’s Gurumin: A Monstrous Adventure! Guru Guru Jam! is a 14-track experience that brings back the magic of friendship, and is sure to get you dancing!",
        "embed": "https://youtu.be/elaIbbXglyw",
        "awards": "\"Best Album\" 2024 Game Music Remix Awards Winner",
        "awardLinks": "https://vgmcon.org/2024-game-music-remix-awards/"
    },
    {
        "title": "Days of Adventure",
        "category": ["Resonant Union"],
        "link": "https://youtu.be/pWpoqSYkP0k",
        "artwork": "images/AlbumCovers/Days of Adventure.png",
        "publisher": "Resonant Union",
        "developerLink": "https://www.resonantunion.com/",
        "releaseDate": "19/7/2022",
        "dateString": "19 July, 2022",
        "role": "Music arrangement (Track 1 \"The Dawn of Adventure\"), video editor",
        "description": "A 35th anniversary fan-tribute album to Nihon Falcom’s Ys series. Days of Adventure is a 14-track expedition that explores the series’ rich history of music in the context of a day/night cycle, representing each game in the series.",
        "embed": "https://youtu.be/pWpoqSYkP0k"
    },
    {
        "title": "Resonant Saga",
        "category": ["Resonant Union"],
        "link": "https://youtu.be/rte-z5qkq4U",
        "artwork": "images/AlbumCovers/Resonant Saga.png",
        "publisher": "Resonant Union",
        "developerLink": "https://www.resonantunion.com/",
        "releaseDate": "3/3/2022",
        "dateString": "3 March, 2022",
        "role": "Music arrangement (Disc 1 Track 11 \"A Truth to Seize\" & Disc 2 Track 8 \"Demonic Drive\")",
        "description": "Resonant Saga is Resonant Union’s debut album and a fan-tribute to Nihon Falcom’s Legends of Heroes series, featuring a grand two and a half hour album that includes arrangements from the Dragon Slayer, Gagharv, and Trails series.",
        "additionalInfo": "Debut album of Resonant Union.",
        "embed": "https://youtu.be/rte-z5qkq4U"
    },
    {
        "title": "The Story of MIDIport",
        "category": ["Misc"],
        "link": "https://technomarina.bandcamp.com/album/the-story-of-midiport",
        "artwork": "images/AlbumCovers/The Story of MIDIport.jpg",
        "publisher": "Technomarina",
        "releaseDate": "22/2/2025",
        "dateString": "22 February, 2025",
        "role": "Music composition (Track 7 \"A Walk Through the Harbour at Sundown\")",
        "description": "The Story of MIDIport is a concept album that tells the story of a city called MIDIport, through MIDI compositions: beginning as a fishing village, growing into a thriving metropolis, and eventually succumbing to dystopic ruins. <br> MB had the opportunity to write an original track for this album using sounds exclusively from the KORG Triton VST, envisioning the ocean horizon viewed from the metallic harbour of a technologically developing city.",
        "additionalInfo": "Composed using sounds exclusively from the KORG Triton VST."
    },
    {
        "title": "ECLECTIC RESONANCE Legendaria",
        "category": ["Misc"],
        "link": "https://kodamasounds.bandcamp.com/album/eclectic-resonance-legendaria",
        "artwork": "images/AlbumCovers/ECLECTIC RESONANCE Legendaria.jpg",
        "publisher": "KodamaSounds",
        "developerLink": "https://kodamasoft.net/",
        "releaseDate": "27/10/2024",
        "dateString": "27 October, 2024",
        "role": "Music composition (Track 13 \"Distant Village\")",
        "description": "ECLECTIC RESONANCE Legendaria is a fantasy-style original album organised and produced by KodamaSounds."
    },
    {
        "title": "Erithacus Rubecula (Fivda's Archived 2021~2023 Works)",
        "category": ["Misc"],
        "link": "https://fivda.bandcamp.com/album/erithacus-rubecula-fivdas-archived-2021-2023-works",
        "artwork": "images/AlbumCovers/Erithacus Rubecula.png",
        "publisher": "Fivda",
        "releaseDate": "16/6/2024",
        "dateString": "16 June, 2024",
        "role": "Guitar & bass performance (Track 10 \"Étoile Défunte\")",
        "description": "Compilation album of previously released and unreleased songs by Fivda (KodamaSounds)."
    },
    {
        "title": "Katamania!! -a Katamari tribute album-",
        "category": ["Misc"],
        "link": "https://kodamasounds.bandcamp.com/album/katamania-a-katamari-tribute-album",
        "artwork": "images/AlbumCovers/Katamania!! -a Katamari tribute album-.jpg",
        "publisher": "KodamaSounds",
        "developerLink": "https://kodamasoft.net/",
        "releaseDate": "30/12/2023",
        "dateString": "30 December, 2023",
        "role": "Guitar & bass performance (Track 14 \"Étoile Défunte\")",
        "description": "A fan-tribute album for the Katamari series of video games, published and organised by KodamaSounds."
    },
    {
        "title": "ECLECTIC RESONANCE Detuned Alloy",
        "category": ["Misc"],
        "link": "https://kodamasounds.bandcamp.com/album/eclectic-resonance-detuned-alloy",
        "artwork": "images/AlbumCovers/ECLECTIC RESONANCE Detuned Alloy.jpg",
        "publisher": "KodamaSounds",
        "developerLink": "https://kodamasoft.net/",
        "releaseDate": "29/10/2023",
        "dateString": "29 October, 2023",
        "role": "Music composition (Track 1 \"Sea of Blood\")",
        "description": "ECLECTIC RESONANCE Detuned Alloy is a guitar-focused original album organised and produced by KodamaSounds."
    },
    {
        "title": "We Also Love Trails in the Sky",
        "category": ["Misc"],
        "link": "https://youtu.be/pviJOfWVcXQ?si=VnTLnhKj0MHamphk",
        "artwork": "images/AlbumCovers/We Also Love Trails in the Sky.png",
        "publisher": "R-Man",
        "releaseDate": "8/8/2021",
        "dateString": "8 August, 2021",
        "role": "Music arrangement (Track 5 \"Visions\")",
        "description": "A fan-tribute album for The Legend of Heroes: Trails in the Sky trilogy by Nihon Falcom.",
        "additionalInfo": "Functionally a Resonant Union album before the group was formally established.",
        "embed": "https://youtu.be/pviJOfWVcXQ?si=VnTLnhKj0MHamphk"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    displayProjects(projectsData);
    setupFilters();
    setupSorting();
    sortProjects(projectsData);
});

function displayProjects(projects) {
    const projectsContainer = document.getElementById('projects');
    
    if (projects.length === 0) {
        projectsContainer.innerHTML = '<p>No projects found for this filter.</p>';
        return;
    }
    
    const projectsHTML = projects.map(project => {
        
        const titleHTML = project.link ? 
            `<h3><a href="${project.link}" target="_blank">${project.title}</a></h3>` : 
            `<h3>${project.title}</h3>`;
        
        
        let developerHTML = '';
        if (project.developer) {
            developerHTML = project.developerLink ? 
                `<p><strong>Developer:</strong> <a href="${project.developerLink}" target="_blank">${project.developer}</a></p>` :
                `<p><strong>Developer:</strong> ${project.developer}</p>`;
        } else if (project.developers) {
            developerHTML = `<p><strong>Developers:</strong> ${project.developers.join(', ')}</p>`;
        }
        
        
        const publisherHTML = project.publisher ? 
            (project.developerLink ? 
                `<p><strong>Publisher:</strong> <a href="${project.developerLink}" target="_blank">${project.publisher}</a></p>` :
                `<p><strong>Publisher:</strong> ${project.publisher}</p>`) : '';
        
        
        let awardsHTML = '';
        if (project.awards) {
            const awardSpan = project.awardLinks ? 
                `<a href="${project.awardLinks}" target="_blank"><span class="award">${project.awards}</span></a>` :
                `<span class="award">${project.awards}</span>`;
            awardsHTML = `<div class="awards">${awardSpan}</div>`;
        }
        
        
        const artworkHTML = project.artwork ? 
            `<div class="project-artwork">
                <img src="${project.artwork}" alt="${project.title} artwork" />
            </div>` : '';
        
        
        const embedHTML = project.embed && project.embed !== 'TBD' ? `
            <div class="project-embed">
                <iframe width="560" height="315" src="${project.embed.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/')}" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
            </div>
        ` : '';
        
        return `
            <div class="project-card" data-category="${Array.isArray(project.category) ? project.category.join(' ') : project.category}">
                ${titleHTML}
                <div class="project-content">
                    ${artworkHTML}
                    <div class="project-meta">
                        ${developerHTML}
                        ${publisherHTML}
                        <p><strong>Release Date:</strong> ${project.dateString || project.releaseDate}</p>
                        ${project.japaneseReleaseDate ? `<p><strong>Japanese Release:</strong> ${project.japaneseReleaseDate}</p>` : ''}
                        <p><strong>Role:</strong> ${project.role}</p>
                    </div>
                </div>
                <div class="project-description">
                    <p>${project.description}</p>
                    ${project.additionalInfo ? `<p>${project.additionalInfo}</p>` : ''}
                    ${awardsHTML}
                </div>
                ${embedHTML}
            </div>
        `;
    }).join('');
    
    projectsContainer.innerHTML = projectsHTML;
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('#filters button');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterType = this.getAttribute('data-type');
            filterProjects(filterType);
        });
    });
    
    document.querySelector('button[data-type="all"]').classList.add('active');
}

function setupSorting() {
    
    const filtersDiv = document.getElementById('filters');
    if (!document.getElementById('sortSelect')) {
        const sortContainer = document.createElement('div');
        sortContainer.innerHTML = `
            <label for="sortSelect">Sort by: </label>
            <select id="sortSelect">
                <option value="date">Date (Newest First)</option>
                <option value="name">Name (A-Z)</option>
            </select>
        `;
        sortContainer.style.marginLeft = '2rem';
        sortContainer.style.display = 'inline-block';
        filtersDiv.appendChild(sortContainer);
    }
    
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', function() {
        const currentFilter = document.querySelector('#filters button.active').getAttribute('data-type');
        filterProjects(currentFilter);
    });
}

function parseDate(dateString) {

    if (!dateString) return new Date(0);
    
    
    const dateParts = dateString.split('/');
    if (dateParts.length === 3) {
        const day = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]) - 1; 
        const year = parseInt(dateParts[2]);
        return new Date(year, month, day);
    }
    
    
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? new Date(0) : date;
}

function sortProjects(projects) {
    const sortType = document.getElementById('sortSelect')?.value || 'date';
    
    return [...projects].sort((a, b) => {
        if (sortType === 'name') {
            return a.title.localeCompare(b.title);
        } else { 
            const dateA = parseDate(a.releaseDate);
            const dateB = parseDate(b.releaseDate);
            return dateB - dateA; 
        }
    });
}

function filterProjects(filterType) {
    let filteredProjects = projectsData;
    
    if (filterType !== 'all') {
        filteredProjects = projectsData.filter(project => {
            if (Array.isArray(project.category)) {
                return project.category.some(cat => matchesFilter(cat, filterType));
            } else {
                return matchesFilter(project.category, filterType);
            }
        });
    }
    

    const sortedProjects = sortProjects(filteredProjects);
    displayProjects(sortedProjects);
}

function matchesFilter(category, filterType) {
    const filterMappings = {
        'Video game': ['Video game', 'Video Game'], 
        'Game Jam': ['Game Jam'],
        'Student Game': ['Student Game'],
        'Resonant Union': ['Resonant Union'],
        'Other': ['Other', 'Misc']
    };

    if (category.toLowerCase() === filterType.toLowerCase()) return true;
    
    const mappedCategories = filterMappings[filterType];
    if (mappedCategories && mappedCategories.includes(category)) return true;
    
    if (filterType === 'Other' && (category === 'Misc' || category === 'Other')) {
        return true;
    }
    
    return false;
}