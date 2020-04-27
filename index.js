var member = document.getElementById("member-submit");
var employee = document.getElementById("employee-submit");
var logo = document.getElementById("logo");

addListeners();

function addListeners() {
	if (!member) {
		setTimeout(addListeners, 100);
	} else {
		member.onclick = function (e) {
			e.preventDefault();
			console.log('http://' + location.host + '/member');
			window.location = 'http://' + location.host + '/member';
		}

		employee.onclick = function (e) {
			e.preventDefault();
			window.location.href = 'http://' + location.host + '/employee';
		}
		
		logo.onclick = function (e) {
			window.location.href = 'http://' + location.host + '/';
		}
	}
}

