var ssLeft = document.getElementById('slideshow-button-left');
var ssRight = document.getElementById('slideshow-button-right');
var ssImg = document.getElementById('slideshow-image');

var logo = document.getElementById("logo");

addListeners();

function addListeners() {
	if (!logo) {
		setTimeout(addListeners, 100);
	} else {
		logo.onclick = function (e) {
			window.location.href = 'http://' + location.host + '/';
		}
	}
}



const images = [
	"gettyimages-1040504660-170667a.jpg",
	"gettyimages-1129133338-170667a.jpg",
	"gettyimages-1132006407-170667a.jpg",
	"gettyimages-142020538-170667a.jpg",
	"gettyimages-165768876-170667a.jpg",
	"gettyimages-639548209-170667a (1).jpg",
	"gettyimages-843641798-170667a.jpg",
	"gettyimages-932389952-170667a.jpg",
	"gettyimages-952552262-170667a.jpg"
];

const min = 0;
const max = images.length - 1;
var mid = 0;

setImage();
disableButton(ssLeft);

ssLeft.onclick = moveLeft;

ssRight.onclick = moveRight;

function setImage() {
	ssImg.style.backgroundImage = 'url("res/' + images[mid] +'")';
}

function disableButton(elem) {
	elem.style.display = 'none';
}

function enableButton(elem) {
	elem.style.display = 'initial';
}

function moveLeft() {
	if (mid > min) {
		mid -= 1;
		
		setImage();
		enableButton(ssRight);
		
		if (mid == min) {
			disableButton(ssLeft);
		}
	}
}

function moveRight() {
	if (mid < max) {
		mid += 1;
		
		setImage();
		enableButton(ssLeft);
		
		if (mid == max) {
			disableButton(ssRight);
		}
	}
}