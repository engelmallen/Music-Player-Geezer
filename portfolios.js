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
	timerSwitch = false;}

function modalTimer() {
		setTimeout(function () {
			modaling()
		},3000)}

function clearAll(currentForm){currentForm.reset()}

butHire.addEventListener("click", function(){
	modaling()			
	console.log('butHire clicked')})

buttonClose.addEventListener("click", function(){
	modaling();
	console.log('butClose clicked')
})

modalClear.addEventListener("click", function(){
	clearAll(modalForm)
	console.log('Clear Button clicked')
})

window.onload = function()
 
{
	if (timerSwitch = true)
	{
		modalTimer();
		timerSwitch = false;
	}
}

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

galleryRgt.addEventListener('click', function () {
	imgIndex += 1;
	galMove()
})

galleryLft.addEventListener('click', function () {
	imgIndex -= 1;
	galMove()
})