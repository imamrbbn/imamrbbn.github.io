
function inputName() {
    var input = prompt("What is your name?");
    let name = input.toUpperCase()
    let displayName = document.getElementById("inputName")
    displayName.innerText += `, ${name}!`
}

var playlist = new Array
    playlist[0] = "file/Ardhito Pramono - Bitterlove.mp3"
    playlist[1] = "file/Blanks - Better Now.mp3"
    playlist[2] = "file/White Shoes & The Couples Company - Roman Ketiga.mp3"
    playlist[3] = "file/Boy Pablo - Dance, Baby!.mp3"
    playlist[4] = "file/Diskoria feat Dian Sastrowardoyo - Serenata Jiwa Lara.mp3"
    playlist[5] = "file/Hindia - Rumah Ke Rumah.mp3"
    playlist[6] = "file/Maliq & D'Essential - Pilihanku.mp3"
    playlist[7] = "file/Mxmtoon -  Prom Dress.mp3"
    playlist[8] = "file/White Shoes & The Couples Company - Senandung Maaf.mp3"
    playlist[9] = "file/Raveena - If Only.mp3"
    playlist[10] = "file/Rex Orange County - Best Friend.mp3"
    playlist[11] = "file/Stars and Rabbit - Man Upon The Hill.mp3"
    playlist[12] = "file/The Adams - Konservatif.mp3"
    playlist[13] = "file/White Shoes & The Couples Company - Kisah Dari Selatan Jakarta.mp3"

let shuffle = Math.floor(Math.random() * playlist.length)

var music = document.getElementById("player");
music.autoplay = true;
shufflePlaylist(); 
    function shufflePlaylist(){
        music.src = playlist[shuffle];
        printTitle()
    }
 
var lastSong = null;

music.addEventListener('ended', loopingPlaylist)
function loopingPlaylist() {
    shuffle += 1
    if (shuffle == playlist.length || shuffle < 0) {
        shuffle = Math.floor(Math.random() * playlist.length)
        console.log('===', shuffle ,lastSong);
        while (shuffle == lastSong) {
            shuffle = Math.floor(Math.random() * playlist.length)
            console.log(shuffle ,lastSong);
        }
    }
    lastSong = shuffle
    music.src = playlist[shuffle]
    printTitle()
    music.load()
    music.play()       
}

let next = document.getElementById('next')
next.addEventListener('click', nextSong)

function nextSong() {
    loopingPlaylist()
}

let prev = document.getElementById('prev')
prev.addEventListener('click', prevSong)

function prevSong() {
    shuffle -= 2;
    loopingPlaylist()
}

function printTitle() {
    let title = document.getElementById('songTitle')
    let tempStr = ''
    let flag = false
    for (let i = 0 ; i< playlist[shuffle].length ; i++) {
        if (tempStr == 'file/') {
            tempStr = ''
        }
        if (playlist[shuffle][i]== '.') {
            flag = false
            break
        }
        tempStr += playlist[shuffle][i]
        // console.log(temp);
    }
    title.innerText = tempStr
}