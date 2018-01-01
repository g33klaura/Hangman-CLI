// JavaScript for words of Hangman Cli App

// REQUIREMENTS ====================
// 
// const readline = require('readline');
const fs = require('fs');
let Letter = require('./letter.js');



// VARIABLES ====================
// 

let currentWord = '';

let duckNamesArray = ['darkwing', 'daisy', 'daffy', 'howard', 'donald', 'scrooge'];



// CONSTRUCTORS ====================
// 

// Would 'currentWord' become a new GameWord instance?....
// Use 'word' as argument placeholder
const GameWord = function(word) {
	this.word = word;
	this.wordAsArray = []; //break apart the word as individual letters
	this.spaces = ' _ ';

	// Need prototype to check if guessed letter is in word array??
};



// FUNCTIONS ==========================
//

// So. Very. Lost.


// ########################################################

function Word(word) {
	// splits the word into strings of individial letters
	this.letters = word.split('')
	// this makes them letter objects
	.map(function(char) {
		return new Letter(char);
	});
}

Word.prototype.toString = function() {
	return this.letters.join(' ');
};

Word.prototype.guessLetter = function(char) {
	// Here's where the letters are checked against the array of letters of the word
	// And matches to the user's guess or not
}







// EXPORTS ==========================
//

module.exports = GameWord;



// ==========================
// Tried to get fancy and have game words come from a separate file ==========================

// Attempting to read each game word from file, line-by-line
/*
const rl = readline.createInterface({ 
	input: fs.createReadStream('./game-words.txt')
});

rl.on('line', function (line) {
	rl.pause('\n');
	console.log('Line from file:', line);	
});
*/
// If so, how to read one line at a time..........
// Does each line get put into an array, call the first item into new variable like 'currentWord'
// loop through remaining words in array when game is replayed?