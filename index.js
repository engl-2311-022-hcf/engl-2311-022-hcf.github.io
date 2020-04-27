var member = document.getElementById("member-submit");
var employee = document.getElementById("employee-submit");

addListeners();

function addListeners() {
	if (!member) {
		setTimeout(addListeners, 100);
	} else {
		member.onclick = function () {
			console.log('http://' + location.host + '/member');
			window.location = 'http://' + location.host + '/member';
		}

		employee.onclick = function () {
			window.location.href = 'http://' + location.host + '/employee';
		}
	}
}

