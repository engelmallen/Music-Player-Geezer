let modal = document.getElementById("modal")
let butHire = document.getElementById("butHire")
let modalForm = document.getElementById("modalForm")

let change = false;
let timerSwitch = true;

			//Modal:
function modaling() {
	if (change === false)
		{
		modal.style.transition = "1s";	
		modal.style.marginTop = "5%";	
		change = true
		}
		else	{	
				modal.style.marginTop = "-100%";
				change = false
				clearAll(modalForm)}
		timerSwitch = false;
	}


function modalTimer() {
		setTimeout(function () {
	if (change === false)
		{
		modal.style.transition = "1s";	
		modal.style.marginTop = "5%";	
		change = true
		}

			//modaling()
		},3000)}


function clearAll(currentForm){currentForm.reset()}

butHire.addEventListener("click", function(){
	modaling()			
	console.log('butHire clicked')})

buttonClose.addEventListener("click", function(){
	modaling();
	console.log('butClose clicked')})

modalClear.addEventListener("click", function(){
	clearAll(modalForm)
	console.log('Clear Button clicked')})


window.onload = function()
{
	if (timerSwitch = true)
	{
		modalTimer();
		timerSwitch = false;
	}
}

			//arts


let artGallery = document.getElementById("artGallery")
let artGalLeft = document.getElementById("artGalLeft")
let artGalRight = document.getElementById("artGalRight")

let artIndex = 1;

function artStatus() {
 	console.log(artIndex)
}

function artMove() {
	if (artIndex > 7) {artIndex = 1}
	if (artIndex < 1) {artIndex = 7}
	artGallery.style.background = "url(img/art/imgArt"+artIndex+".jpg) no-repeat center";
	artGallery.style.backgroundSize =  "contain";
	artStatus()
}artMove()

function artTimmer(){
setInterval(function() {
	artIndex += 1;
	artMove()	
},5000)}artTimmer()

artGalRight.addEventListener('click', function () {
	artIndex += 1;
	artMove()
})

artGalLeft.addEventListener('click', function () {
	artIndex -= 1;
	artMove()
})

			//Gallery

let galleryImgs = document.getElementById("galleryImgs")
let galleryLft = document.getElementById("galleryLft")
let galleryRgt = document.getElementById("galleryRgt")

let imgIndex = 1;

function status() {
 	console.log(imgIndex)
}

function galMove() {
	if (imgIndex > 8) {imgIndex = 1}
	if (imgIndex < 1) {imgIndex = 8}
	galleryImgs.style.background = "url(img/gallery/imgGal"+imgIndex+".jpg) no-repeat center";
	galleryImgs.style.backgroundSize =  "contain";
	status()
}galMove()

function galleryTimmer(){
setInterval(function() {
	imgIndex += 1;
	galMove()	
},7000)}galleryTimmer()

galleryRgt.addEventListener('click', function () {
	imgIndex += 1;
	galMove()
})

galleryLft.addEventListener('click', function () {
	imgIndex -= 1;
	galMove()
})