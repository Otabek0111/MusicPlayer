const progress = document.getElementById("progress");
const song = document.getElementById("song");
const contolIcon = document.getElementById("controlIcon");

const playPauseButton = document.querySelector(".playPauseButton");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");

const songName = document.querySelector(".musicPlayer h1"); 
const songArtist = document.querySelector(".musicPlayer p");

const songs = [
    {
        title: "Symphony",
        name: "Clean Bandit ft. Zara Larsson",
        source: 
        "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Clean-Bandit-Symphony.mp3",
    
    },
    {
        title: "Pawn It All",
        name: "Alicia Keys",
        source: 
      "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Pawn-It-All.mp3",
    
    },
    {
        title: "Seni Dert Etmeler",
        name: "Madrigal",
        source: 
      "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Madrigal-Seni-Dert-Etmeler.mp3",
        
    },
    {
        title: "Song 4",
        name: "Artist 4",
        source: "assets/songs/song4.mp3"
    },
    {
        title: "Song 5",
        name: "Artist 5",
        source: "assets/songs/song5.mp3"
    }
];

let songIndex = 1;

function updateSongInfo() {
    songName.textContent = songs[songIndex].title;
    songArtist.textContent = songs[songIndex].name;
    song.src = songs[songIndex].source;

    song.addEventListener("loadedmetadata", () => {
        progress.max = song.duration;
    });

}