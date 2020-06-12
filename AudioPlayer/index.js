var audioButton = document.getElementById("audioButton")
var selectedSong = document.getElementById("selectedSong")
var tracks = document.getElementById("tracks")/*For the visible tracklist*/
var btnAddSong = document.getElementById("btnAddSong")
var btnGetSong = document.getElementById("btnGetSong")


// var player = document.getElementById("player")


function status(who) { /*To console log status of my codes and stay sane (T-T)*/
	
}
status(who)
function Song (name,artist, source){
this.name = name
this.artist = artist
this.source = source

}


function PlayList() {
	this.trackList = [];

	this.addTrack = function (name) {
		this.trackList.push(name)
	}

}

var myPlayList = new PlayList ();

/*console.log(myPlayList.trackList)*/
/*To Create a new item in the visible list*/
function itemAdd() {
	if (btnGetSong.value != 0) {					/*Will only add if not empty*/


		let newSong = document.createElement("LI")
		let newLink = document.createElement("A")
		newLink.innerHTML = btnGetSong.value
		newLink.href = btnGetSong.value
		newLink.classList.add("page-link")
		newSong.appendChild(newLink)
		tracks.appendChild(newSong)
		
		// let theNewSong = New Song (name ,artist, source)
		// let addSongObj = newLink.href


		// PlayList.addTrack('new')

	}
	// status(PlayList.trackList)
}

// /*To Create a new item in the visible list*/
// function itemAdd() {
// 	if (selectedSong.value != 0) {					/*Will only add if not empty*/

// 		var newSong = document.createElement("LI")
// 		newSong.innerHTML = selectedSong.value
// 		tracks.appendChild(newSong)
		
// 		PlayList.addTrack('new')

// 	}status(PlayList.trackList)
// }

var counter = [0]






btnAddSong.addEventListener('click', function(){
	itemAdd()



})
