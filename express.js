const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

var dir = path.join(__dirname + '/');
files = [];

fs.readdir(dir, function (err, files) {
	if (err) {
		console.log('Error:', err);
	} else {
		console.log('list of files in', dir + '...');
		
		files.forEach(function (file) {
			this.files.push(file);
			console.log(file);
		});
	}
});

app.use(express.static(__dirname + '/'));

app.get('/*', function(req, res) {
	console.log(req.path);
	var filename;
	console.log('test');
	console.log(path.join(__dirname + req.path));
	
	if (!req.path) {
		res.sendFile(path.join(__dirname + '/index.html'));
	} else {
		for (var i = 0; i < files.length; i++) {
			if (req.path.includes(files[i])) {
				console.log('request for', path.join(__dirname + '/' + files[i]));
				
				if (req.path.includes('jpg') || req.path.includes('png')) {
					res.set({'Content-Type': 'image/jpeg'});
				}
				res.sendFile(path.join(__dirname + '/' + files[i]));
				break;
			}
			
			if (i == files.length - 1) {
				res.sendFile(path.join(__dirname + '/' + 'index.html'));
			}
		}
	}
	
});

app.listen(8080);