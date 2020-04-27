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