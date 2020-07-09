
var tracks = document.getElementById("tracks")/*For the visible tracklist*/
var btnAddSong = document.getElementById("btnAddSong")/*To Add songs*/
var btnGetSong = document.getElementById("btnGetSong")/*To Select songs*/
var whole = document.getElementById("whole")/*In case I need to address it*/

https://api.deezer.com/search?q=eminem

/*My function "status" helsps me check the current status/value of my variables*/
function status() {
	console.log("==>Values Status:<==")
	console.log("playlist length: " + playlist.length)
	console.log("playlist current song: " + playlist[changer])
	console.log("Changer Var cur Value " + changer)
	console.log(" " + audio)
	console.log("continuous or Random: " + audEndings)
}


/*General Variables*/

var playlist = []

var changer = 0

var audio = new Audio();

var audEndings = "continuous";

var cdPlay = false;

/*Functionalities of the App*/

function curPlayer() {
	audio.pause()
	audio = new Audio(playlist[changer]);
	if (audEndings === "continuous") {
		audio.onended = function() {
			nextOne()	
			}

		} else {
			if (audEndings === "random") {
			audio.onended = function() {
				randomOne()	
				}
			}
		}
		audio.onplay = function() {
			cdPlays()	
			}
		audio.onpause = function() {
			cdPlaynt()	
			}
	}


function nextOne(){
	
	if (changer < playlist.length-1) {
		changer += 1;
		curPlayer()
		audio.play()
		status()
	} else {changer = 0

	curPlayer()
	audio.play()
	
	}status()
}


function lastOne(){
	if (changer === 0) {
		changer = playlist.length-1
		curPlayer()
		audio.play()
		status()
	}
	else{
		changer -= 1;
		curPlayer()
		audio.play()

	}	status()
}

function randomOne() {
	changer = Math.floor(Math.random() * playlist.length)
	curPlayer()
	audio.play()
	status()
}

function cdPlays() {
		CD.style.background  = "url(img/cd.gif) center no-repeat";
		CD.style.backgroundSize  = "contain";
}

function cdPlaynt() {
		CD.style.background  = "url(img/cd.png) center no-repeat";
		CD.style.backgroundSize  = "contain";
}

// function showSong(x) {
// 	var hlSongs = getElementByClassName('page-link')
// 	for (var i = 0; i <= hlSongs.length; i++) {
// 		if (hlSongs[i].innerHTML === playlist[changer]) {
// 		x.style.background = 'red'
// 		}
// 	}
// }

			/*Player Buttons*/
playCurrent.addEventListener('click', function(){
	audio.play()
	 // showSong()
	status()
})


pauseCurrent.addEventListener('click', function(){
	audio.pause()
	status()
})

playNext.addEventListener('click', function(){
	if (audEndings === "continuous") {
		nextOne()
		} else {	
		 	randomOne()
		 	}
	})

playLast.addEventListener('click', function(){
	if (audEndings === "continuous") {
		lastOne()
		} else {	
		 		randomOne()
		 		}
		}
	)

playRandom.addEventListener('click', function(){
	if (audEndings === "continuous") {
		audEndings = "random"
		playRandom.style.backgroundColor = " #d5d8dc"
	} else {
		audEndings = "continuous"
		playRandom.style.backgroundColor = ""
	}
	status()
	}
	)

btnAddSong.addEventListener('click', function () {
	var a = btnGetSong.value.split("fakepath")
	a = "audio"+ a.slice(1)
	playlist.push(a)
	console.log("Playlist: "+playlist)
	console.log("added: "+a)
if (a !="audio") {
		let newSong = document.createElement("LI")
		let newLink = document.createElement("A")
		newLink.innerHTML = a
		newLink.href = "javascript:;"
		newLink.name = a
		newLink.classList.add("page-link")
		newSong.appendChild(newLink)
		tracks.appendChild(newSong)
	}	
	else {a = null}
		curPlayer()
})




