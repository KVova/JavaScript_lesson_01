"use strict"

let login;
let password;

console.log("Who's there?");

if (login == "Admin"){
	console.log("Password?");
		if(password == 'TheMaster'){
			console.log("Welcome!");
		} else if (password == null) {
			console.log("Canceled");
		} else {
			console.log("Wrong password");
		}	
} else if (login == null) {
	console.log("Canceled");
} else {
	console.log("I don't know you");
}