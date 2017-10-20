// JavaScript for words of Hangman Cli App

// REQUIREMENTS ====================
// 
// const readline = require('readline');
const fs = require('fs');
let Letter = require('letter.js');



// VARIABLES ====================
// 

let currentWord = '';

let duckNamesArray = ['darkwing', 'daisy', 'daffy', 'howard', 'donald', 'scrooge'];

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





// CONSTRUCTORS ====================
// 

// Would 'currentWord' become a new GameWord instance?....
// Use 'word' as argument placeholder
const GameWord = function(word) {
	this.word = word;
};

module.exports = GameWord;