var audioButton = document.getElementById("audioButton")
var selectedSong = document.getElementById("selectedSong")
var tracks = document.getElementById("tracks")/*For the visible tracklist*/
var btnAddSong = document.getElementById("btnAddSong")
var btnGetSong = document.getElementById("btnGetSong")

var playCurrent = document.getElementById("playCurrent")


// var player = document.getElementById("player")

function status(whom) {
		console.log(whom)
}

curAudio = null;

function player(current) {
	curAudio = new Audio(current);
}

playCurrent.addEventListener('click', function(){
	curAudio.play()

})

// function playMe(path) {
// 	var audio = new Audio(path);
// 	audio.pause();
// 	audio.play();
// }


var playlist = []

let changer = []



btnAddSong.addEventListener('click', function () {
	let a = btnGetSong.value.split("fakepath")
	a = "audio"+ a.slice(1)
	playlist.push(a)
	// playlist.push(btnGetSong.value)
	console.log(playlist)

		let newSong = document.createElement("LI")
		let newLink = document.createElement("A")
		newLink.innerHTML = a
		newLink.href = "javascript:;"
		newLink.name = a
		newLink.onclick = player(newLink.name)
		newLink.classList.add("page-link")
		newSong.appendChild(newLink)
		tracks.appendChild(newSong)
})
