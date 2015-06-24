/*
	Secret Messages
	---------------------------------------
	Ever thought it would be cool to be able to talk to your
	friends with a secret language that only you and your
	friends know? Well, we can work a simple implementation
	to encode our messages and do just that! For simplicity,
	we will work with only lowercase messages.

	You are provided two getter functions that retrieve your
	encoding letters (getKey()) and the lower case letters
	of the alphabet (getLetters()).

	In order to implement this, we require two functions:

		1. encode(message)
			- Provided a message, the function gets the letters
			  of the alphabet from the getLetters() function
			  along with the encoding string from the getKey()
			  function and swaps the lowercase letter from the 
			  message with the corresponding letter from the 
			  key.
		2. decode(message)
			- Provided an encoded message, this function will
			  use the same key to decode the message by swapping
			  the encoded letters in the message with the correct
			  letters from the alphabet.

	NOTE: It may be useful to use the String.indexOf(char) 
	method. 
*/

//	Write your code here between the lines:
//	--------------------------------------- 


function encode(message) {
	//var message = "";
	var alpha = getLetters();
	var keyString = getKey();
	//console.log(alpha);
	//console.log(keyString);


	var encodedMessage = "";
	for (var i = 0; i < message.length; i++) {
		var currentLetter = message[i];
		var alphaIndex = alpha.indexOf(currentLetter);
		var encodedLetter = keyString.charAt(alphaIndex);
		encodedMessage = encodedMessage + encodedLetter; 
	};
	console.log(message + " = " + encodedMessage);
};

encode("im building a time machine");
encode("hello world");

function decode(encodedMessage) {
	//var message = "";
	var keyString = getKey();
	var alpha = getLetters();
	
	// console.log(keyString);
	//console.log(alpha);

	var decodedMessage = "";
	for (var i = 0; i < encodedMessage.length; i++) {
		var currentKey = encodedMessage[i];
		var keyIndex = keyString.indexOf(currentKey);
		var decodedLetter = alpha.charAt(keyIndex);
		decodedMessage = decodedMessage + decodedLetter;
	};
	console.log(encodedMessage + "=" + decodedMessage);
};

decode("*%--[9~[}-$");

//  ---------------------------------------
// 	Provided Code:
// 	---------------------------------------

// Key to encrypt message with.
function getKey() {
	return "!@#$%^&*()_-+=[]{}>.<,~`109";
}

// Lowercase letters.
function getLetters() {
	return "abcdefghijklmnopqrstuvwxyz ";
}