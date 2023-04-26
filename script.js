var newUserx = document.getElementById("newUsername");
var newPassx = document.getElementById("newPassword");
var createActBtn = document.getElementById("createActBtn");
var database = [
	{
		user: "admin",
		pass: "admin123"
	}
];
var newUser = {
		user: newUserx.value,
		pass: newPassx.value
};

createAct = function() {
	newUser.user = newUserx.value;
  	newUser.pass = newPassx.value;
	database.push(newUser);
	console.log(database);
	alert("Account Created");
	let input1 = document.getElementById('newUsername');
	input1.value = "";
	let input2 = document.getElementById('newPassword');
	input2.value = "";
	// window.location.href="index.html";
};

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].user === username &&
			database[i].pass === password) {
			return true;
		} 
	}
	return false;
};

var signInBtn1 = document.getElementById("signInBtn");
signInBtn1.onclick = function () {
	var existingUser = document.getElementById("username").value;
	var existingPass = document.getElementById("password").value;
	if (isUserValid(existingUser, existingPass)) {
		window.location.href="profile.html";
		let input1 = document.getElementById('username');
		input1.value = "";
		let input2 = document.getElementById('password');
		input2.value = "";
	} else {
		alert("Username/Password is either incorrect or does not exist. Please try again or create an account!");
		let input1 = document.getElementById('username');
		input1.value = "";
		let input2 = document.getElementById('password');
		input2.value = "";
	}
};