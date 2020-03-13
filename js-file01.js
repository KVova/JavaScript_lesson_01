"use strict"

let login;
let password;

switch (login) {
case "Admin":
	console.log("Who`s there?");
	switch (password){
	case "TheMaster":
		console.log("Welcome!");
		break;
	case null:
		console.log("Canceled.");
		break;
	default:
		console.log("Wrong password");
		break;
	}
	break;
case null:
	console.log("Canceled.");
		break;
default:
	console.log("I don`t know you");
	break;
}