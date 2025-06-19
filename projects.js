// Project data stored directly in JavaScript
const projectsData = [
    {
        "title": "The Last Waltz",
        "category": "Video game",
        "developer": "DigitallyDownloaded.net",
        "releaseDate": "Q4 2025",
        "role": "Music composition, lyrics, mastering engineer",
        "description": "The Last Waltz is a full-scale visual novel about an incredible niche sport; the first visual novel to be based on Dancesport. Featuring Over 30 stunning CGs, a soundtrack of more than 35 pieces of authentic Dancesport music, and integrating real footage of professional dancers and competitions.",
        "additionalInfo": "The score for this game was written in collaboration with composers Gelby and Jof, spanning multiple genres and styles of dancesport music all written authentically to the medium. I had the opportunity to write three vocal themes for this game in collaboration with Rita Kamishiro, AiKa and Saskia Mascitti.",
        "embed": null
    },
    {
        "title": "King of Ping Pong: MEGAMIX",
        "category": "Video game",
        "developer": "Suspicious Jam",
        "releaseDate": "15 November, 2024",
        "japaneseReleaseDate": "16 April, 2025",
        "role": "Japanese translation & localisation",
        "description": "Table tennis meets Arcade Fighter in this fast-paced action-packed journey to become the best in the world. Defeat a series of quirky characters utilizing quick wit and precise timing to secure victory in increasingly challenging matches!",
        "embed": null
    },
    {
        "title": "Taxivasion",
        "category": "Game Jam",
        "developer": "Suspicious Jam",
        "releaseDate": "February 2025",
        "role": "Music composition (Track \"Ride the Sunset\")",
        "description": "Made for Global Game Jam 2025 in Melbourne under the theme \"bubble\". Pick up and deliver the bubbly residents of bubble city as fast as you can. Drive, drift and boost your way around the city to earn as much money as you can before the timer runs out, all while listening to bubble city radio's finest selection of tracks (as well as the insightful dialogue of the residents).",
        "embed": "https://youtu.be/GMEBsF9DyVE"
    },
    {
        "title": "Project Mikkel",
        "category": "Game Jam",
        "developers": ["Sunny Berry", "Samuel Pratt", "Max Murphy"],
        "releaseDate": "February 2025",
        "role": "Music composition",
        "description": "Made for Global Game Jam 2025 in Melbourne under the theme \"bubble\". Project Mikkel is a sea monkey-like developed in PICO-8. This game blends idle and virtual pet style interactions. Interact, observe and rule over your tiny band of Mikkels, a strange new culture of creatures.",
        "embed": "https://youtu.be/6bkt11a0zWA"
    },
    {
        "title": "Round Control",
        "category": "Game Jam",
        "developers": ["Adam", "Ellie", "Josh", "Talia"],
        "releaseDate": "February 2025",
        "role": "Music composition",
        "description": "Made for Global Game Jam 2025 in Melbourne under the theme \"bubble\". Round Control to Major Rond! Use your sword to be the last Astronaut left.",
        "embed": "https://youtu.be/6BD3fpjaR00"
    },
    {
        "title": "Neon Genesis Construction Company",
        "category": "Game Jam",
        "developer": "Suspicious Jam",
        "releaseDate": "August 2024",
        "role": "Music composition",
        "description": "Made for Game Maker's Toolkit Game Jam 24 in 96 hours. The year is 2536, at the base of Mt Fuji sits Neo Tokyo - 4. A city prone to persistent Leviathan Kaiju attacks. You are assigned to the Foreman Unit - 01, where this mech lacks in combat capabilities it EXCELS in construction and tower manufacturing.",
        "embed": "https://youtu.be/PAINdRWiWA8"
    },
    {
        "title": "King's Laugher",
        "category": "Game Jam",
        "developers": ["Sunny Berry", "Henry Beeman", "Anushka Fernando", "Martin Dimovski", "Sergey Germogentov"],
        "releaseDate": "February 2024",
        "role": "Music composition",
        "description": "Made for Global Game Jam 2024 in Melbourne under the theme \"make me laugh\". By order of the King, thou, a lowly jester, have been summoned to entertain the court. Perform thy best dance through the power of the orbs (witchcraft!) or suffer the consequences. But thy beloved King will not be so easily pleased. Through thy sharp reflexes and keen wit, thou must utilise combos (heresy!) to amuse the King with jokes.",
        "additionalInfo": "The music was written as a crossover between medieval style music and the quirky style of music found in games like Katamari Damacy!",
        "embed": "https://youtu.be/GtDIGBKr-c4"
    },
    {
        "title": "I Eat Therefore I Am",
        "category": "Game Jam",
        "releaseDate": "February 2024",
        "role": "Music composition",
        "description": "Made for Global Game Jam 2024 in Melbourne under the theme \"make me laugh\". In a magical forest far, far, away, on a trip no other human-sorcerer has attempted. The fate of your companions' appetite lies in your hands. If they don't like your food... Make them!",
        "additionalInfo": "I wrote the fantasy-inspired map theme for the game!",
        "embed": "https://youtu.be/t6GVWpQs5vc"
    },
    {
        "title": "Babel",
        "category": "Student Game",
        "releaseDate": "2023",
        "role": "Music composition",
        "description": "A text-based game exploring language and the pursuit of knowledge, featuring excerpts of dialogue in various different languages.",
        "embed": "TBD"
    },
    {
        "title": "Perfect Arrange Works ~Episode II~",
        "category": "Resonant Union",
        "publisher": "Resonant Union",
        "releaseDate": "1 December, 2024",
        "role": "Project organiser, music arrangement, lyricist, Japanese translation",
        "description": "Perfect Arrange Works ~Episode II~ is a fan-tribute album celebrating the rich 25+ year history of music from Xenogears, Xenosaga and the Xenoblade Chronicles series. Part two of a three-part album series project organised by myself."
    },
    {
        "title": "Falcom Café",
        "category": "Resonant Union",
        "publisher": "Resonant Union",
        "releaseDate": "26 Oct, 2024",
        "role": "Music arrangement (Track 10 \"The Azure Bossa\" & Track 13 \"Closing Shop - Ending\")",
        "description": "Falcom Café is a cozy 13-track fan-tribute album to Nihon Falcom's catalogue of video game music. Filled to the brim of café-themed arrangements to kick back and relax to."
    },
    {
        "title": "ZeroRanger Arranged Album -GREEN ARRANGE-",
        "category": ["Video game", "Resonant Union"],
        "publisher": "eebrozgi and Resonant Union",
        "releaseDate": "29 September, 2024",
        "role": "Co-producer, music arrangement, lyricist, Japanese translation, video editor",
        "description": "GREEN ARRANGE is an official album for ZeroRanger produced in collaboration with System Erasure. Enjoy nearly 3.5 hours of arrangements from System Erasure's iconic OST to ZeroRanger by composer eebrozgi! Journey through the cycle of ZeroRanger with 48 tracks, arranged by 44 incredible ZeroArrangers, featuring live performances from several musicians and vocalists.",
        "awards": ["2025 Game Music Remix Award \"Best Album\" Winner!"]
    },
    {
        "title": "Perfect Arrange Works ~Episode I~",
        "category": "Resonant Union",
        "publisher": "Resonant Union",
        "releaseDate": "1 December, 2024",
        "role": "Project organiser, music arrangement",
        "description": "Perfect Arrange Works ~Episode I~ is a fan-tribute album celebrating the rich 25+ year history of music from Xenogears, Xenosaga and the Xenoblade Chronicles series. Part one of a three-part album series project organised by myself."
    },
    {
        "title": "Falcom Boss Rush Phase 3",
        "category": "Resonant Union",
        "publisher": "Resonant Union",
        "releaseDate": "10 December, 2023",
        "role": "Music arrangement (Track 1 \"To the Future.\"), video editor",
        "description": "Part three of a three-album fan-tribute to Nihon Falcom's boss themes over the years."
    },
    {
        "title": "Falcom Boss Rush Phase 2",
        "category": "Resonant Union",
        "publisher": "Resonant Union",
        "releaseDate": "25 June, 2023",
        "role": "Music arrangement (Track 1 \"Revolt Against Doom\"), video editor",
        "description": "Part two of a three-album fan-tribute to Nihon Falcom's boss themes over the years."
    },
    {
        "title": "Falcom Boss Rush Phase 1",
        "category": "Resonant Union",
        "publisher": "Resonant Union",
        "releaseDate": "28 May, 2023",
        "role": "Video editor",
        "description": "Part one of a three-album fan-tribute to Nihon Falcom's boss themes over the years."
    },
    {
        "title": "Guru Guru Jam!",
        "category": "Resonant Union",
        "publisher": "Resonant Union",
        "releaseDate": "15 April, 2023",
        "role": "Music arrangement (Track 10 \"Sight of Silence\")",
        "description": "Embark on a journey back to your childhood with this funky fan-tribute album to Nihon Falcom's Gurumin: A Monstrous Adventure! Guru Guru Jam! is a 14-track experience that brings back the magic of friendship, and is sure to get you dancing!",
        "awards": ["\"Best Album\" 2024 Game Music Remix Award Winner"]
    },
    {
        "title": "Days of Adventure",
        "category": "Resonant Union",
        "publisher": "Resonant Union",
        "releaseDate": "19 July, 2022",
        "role": "Music arrangement (Track 1 \"The Dawn of Adventure\"), video editor",
        "description": "A 35th anniversary fan-tribute album to Nihon Falcom's Ys series. Days of Adventure is a 14-track expedition that explores the series' rich history of music in the context of a day/night cycle, representing each game in the series."
    },
    {
        "title": "Resonant Saga",
        "category": "Resonant Union",
        "publisher": "Resonant Union",
        "releaseDate": "3 March, 2022",
        "role": "Music arrangement (Disc 1 Track 11 \"A Truth to Seize\" & Disc 2 Track 8 \"Demonic Drive\")",
        "description": "Resonant Saga is Resonant Union's debut album and a fan-tribute to Nihon Falcom's Legends of Heroes series, featuring a grand two and a half hour album that includes arrangements from the Dragon Slayer, Gagharv, and Trails series."
    },
    {
        "title": "The Story of MIDIport",
        "category": "Other",
        "publisher": "Technomarina",
        "releaseDate": "22 February, 2025",
        "role": "Music composition (Track 7 \"A Walk Through the Harbour at Sundown\")",
        "description": "The Story of MIDIport is a concept album that tells the story of a city called MIDIport, through MIDI compositions: beginning as a fishing village, growing into a thriving metropolis, and eventually succumbing to dystopic ruins.",
        "additionalInfo": "I had the opportunity to write an original track for this album using sounds exclusively from the KORG Triton VST, envisioning the ocean horizon viewed from the metallic harbour of a technologically developing city."
    },
    {
        "title": "ECLECTIC RESONANCE Legendaria",
        "category": "Other",
        "publisher": "KodamaSounds",
        "releaseDate": "27 October, 2024",
        "role": "Music composition (Track 13 \"Distant Village\")",
        "description": "ECLECTIC RESONANCE Legendaria is a fantasy-style original album organised and produced by KodamaSounds."
    },
    {
        "title": "Erithacus Rubecula (Fivda's Archived 2021~2023 Works)",
        "category": "Other",
        "publisher": "Fivda",
        "releaseDate": "16 June, 2024",
        "role": "Guitar & bass performance (Track 10 \"Étoile Défunte\")",
        "description": "Compilation album of previously released and unreleased songs by Fivda (KodamaSounds)."
    },
    {
        "title": "Katamania!! -a Katamari tribute album-",
        "category": "Other",
        "publisher": "KodamaSounds",
        "releaseDate": "30 December, 2023",
        "role": "Guitar & bass performance (Track 14 \"Étoile Défunte\")",
        "description": "A fan-tribute album for the Katamari series of video games, published and organised by KodamaSounds."
    },
    {
        "title": "ECLECTIC RESONANCE Detuned Alloy",
        "category": "Other",
        "publisher": "KodamaSounds",
        "releaseDate": "29 October, 2023",
        "role": "Music composition (Track 1 \"Sea of Blood\")",
        "description": "ECLECTIC RESONANCE Detuned Alloy is a guitar-focused original album organised and produced by KodamaSounds."
    },
    {
        "title": "We Also Love Trails in the Sky",
        "category": "Other",
        "publisher": "R-Man",
        "releaseDate": "8 August, 2021",
        "role": "Music arrangement (Track 5 \"Visions\")",
        "description": "We Also Love Trails in the Sky is a fan-tribute album for the trilogy of The Legend of Heroes: Trails in the Sky video games, developed by Nihon Falcom. I was invited to arrange a track for the album. Functionally a Resonant Union album before we formally formed the group."
    }
];

// Touch below her
document.addEventListener('DOMContentLoaded', function() {
    displayProjects(projectsData);
    setupFilters();
});


function displayProjects(projects) {
    const projectsContainer = document.getElementById('projects');
    
    if (projects.length === 0) {
        projectsContainer.innerHTML = '<p>No projects found for this filter.</p>';
        return;
    }
    
    const projectsHTML = projects.map(project => {
        return `
            <div class="project-card" data-category="${Array.isArray(project.category) ? project.category.join(' ') : project.category}">
                <h3>${project.title}</h3>
                ${project.embed && project.embed !== 'TBD' ? `
                    <div class="project-embed">
                        <iframe width="560" height="315" src="${project.embed.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/')}" 
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen></iframe>
                    </div>
                ` : ''}
                <div class="project-meta">
                    ${project.developer ? `<p><strong>Developer:</strong> ${project.developer}</p>` : ''}
                    ${project.developers ? `<p><strong>Developers:</strong> ${project.developers.join(', ')}</p>` : ''}
                    ${project.publisher ? `<p><strong>Publisher:</strong> ${project.publisher}</p>` : ''}
                    <p><strong>Release Date:</strong> ${project.releaseDate}</p>
                    ${project.japaneseReleaseDate ? `<p><strong>Japanese Release:</strong> ${project.japaneseReleaseDate}</p>` : ''}
                    <p><strong>My Role:</strong> ${project.role}</p>
                </div>
                <div class="project-description">
                    <p>${project.description}</p>
                    ${project.additionalInfo ? `<p>${project.additionalInfo}</p>` : ''}
                    ${project.awards ? `<div class="awards">${project.awards.map(award => `<span class="award">${award}</span>`).join('')}</div>` : ''}
                </div>
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
    
    displayProjects(filteredProjects);
}

function matchesFilter(category, filterType) {
    const filterMappings = {
        'Video Games': ['Video game'],
        'Game Jams': ['Game Jam'],
        'Student Games': ['Student Game'],
        'Resonant Union': ['Resonant Union'],
        'Misc / Other': ['Other']
    };

    if (category === filterType) return true;
    
    const mappedCategories = filterMappings[filterType];
    if (mappedCategories && mappedCategories.includes(category)) return true;
    
    return false;
}