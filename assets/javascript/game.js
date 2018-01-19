var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesleft = 10;
var guessesSofar = [];
var guess = null;

var randomletter = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function(event) {

	var guess = String.fromCharCode(event.keyCode).toLowerCase();

	if (guessesSofar.indexOf(guess) < 0 && letters.indexOf(guess) >= 0) {
		guessesSofar[guessesSofar.length]=guess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesleft--;
	}

	if (randomletter == guess) {
		wins++;
		guessesLeft = 10;
		guessesSofar = [];
		randomletter = letters[Math.floor(Math.random() * letters.length)];
	}

	if (guessesleft == 0) {
		losses++;
		guessesleft = 10;
		guessesSofar = [];
		randomletter = letters[Math.floor(Math.random() * letters.length)];
}

	document.querySelector('#wins').innerHTML = wins;
	document.querySelector('#losses').innerHTML = losses;
	document.querySelector('#guessesleft').innerHTML = guessesleft;
	document.querySelector('#guessesSofar').innerHTML.join(" ") = guessesSofar;

}
