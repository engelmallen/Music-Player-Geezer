/*Variables*/
// General Variables:
let searchField = document.getElementById('searchField')
let searchButton = document.getElementById('searchButton')
let playRandom = document.getElementById('playRandom')
let curPlay = document.getElementById('curPlay')
let trackList = document.getElementById('tracklist')
let testButton = document.getElementById('testButton')
let cover = document.getElementById('cover')

// Audio Variables:
let searcValue = ""
let audio = new Audio()
let testValue = ""
let curPlaylist = []
let counter = 0
let audEndings = "continuous"


/*Basic Functions*/
//Audio Functionalities:
function status(){
	console.log("counter: " + counter)
}

function creatAudio() {
	audio.onended = function() {
			next()
		}
}
creatAudio()

function nowPlaying() {
		audio.pause()	
	if (audEndings === "continuous") {
		audio.onended = function() {
			next()	
			}
		} else {
			audio.onended = function() {
			randomize()
			next()
		}
	}
}

function randomize() {
	if (audEndings === "random") {
	counter = Math.floor(Math.random() * curPlaylist.length-1)
	}
}

function nowPlaying() {
	audio.src = curPlaylist[counter].preview
	curPlay.style.display = 'block'
	curPlay.innerHTML = curPlaylist[counter].title +" - "+ curPlaylist[counter].artist.name
	cover.style.background = "url('" + curPlaylist[counter].album.cover_big + "') no-repeat"
	cover.style.backgroundSize = "100%"
	audio.play()
}

function next(){
 	if (curPlaylist != "") {
 		randomize()
	 	if (counter === curPlaylist.length-1) {counter = 0}
		else{counter += 1}
		nowPlaying()
		status()
		}
	}



/*Ajax Request*/
function getInfo() {
let settings = {
	"async"			: true,
	"crossDomain"	: true,
	"url"			: "https://deezerdevs-deezer.p.rapidapi.com/search?q="+searcValue,
	"method"		: "GET",
	"headers"		: {
		"x-rapidapi-host"	: "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key"	: rapidDeezerKey
	}
}




$.ajax(settings).done(function (response) {
	console.log(response)
	for (var i = 0; i < response.data.length; i++){	
			let makeSong = document.createElement("BUTTON")
			makeSong.innerHTML = response.data[i].title + " - "+ response.data[i].artist.name
			makeSong.name = response.data[i].id
			makeSong.classList.add('trackBtn','page-link','w-100')
			curPlaylist.push(response.data[i])
			trackList.appendChild(makeSong)
		}
	action(response)
	})
}

function action(response) {
	let trackBtn = document.getElementsByClassName('trackBtn')
	for (var i = 0; i < trackBtn.length; i++) {
		trackBtn[i].addEventListener('click', function (e) {
			for (var z = 0; z < curPlaylist.length; z++) {
				if (curPlaylist[z].id == e.target.name) { 
					counter = z
					nowPlaying()
					}
			}
		curPlay.innerHTML = e.target.innerHTML
		})
	}
}



/*NAV BUTTONS*/
searchButton.addEventListener('click', function(){
	curPlaylist = []
	trackList.innerHTML = ""
	searcValue = searchField.value
	getInfo()
})

/*PLAYER BUTTONS*/
playCurrent.addEventListener('click', function(){
	if (curPlaylist != "") {	
	audio.play()
	}
})

pauseCurrent.addEventListener('click', function(){
 	audio.pause()
})

playNext.addEventListener('click', next

)

function next(){
 	if (curPlaylist != "") {
 		randomize()
	 	if (counter === curPlaylist.length-1) {counter = 0}
		else{counter += 1}
		nowPlaying()
		audio.play()
		status()
		}
	}

playLast.addEventListener('click', function last(){
 	if (curPlaylist != "") {
 		randomize()
	 	if (counter < 1 ) {counter = curPlaylist.length-1}
		else {counter -= 1}
		nowPlaying()
		audio.play()
		status()
	}	
})

playRandom.addEventListener('click', function (){
	if (audEndings === "continuous")
		{audEndings = "random"
		playRandom.style.backgroundColor = "red"
		}
	else{audEndings = "continuous"
		playRandom.style.backgroundColor = ""
		}
})