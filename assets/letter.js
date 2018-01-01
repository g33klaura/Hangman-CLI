// JavaScript for letter inputs of Hangman Cli App

// REQUIREMENTS ====================
// 

const inquirer = require('inquirer');



// VARIABLES ====================
// 

let lettersGuessed = [];



// CONSTRUCTORS ====================
// 

// Constructor to do something with the letters....
let Letters = function(letter) {

	this.letter = letter;
	// this.guessed = false; //until it's true?....
	this.guessed = !/a-z1-9/i.test(char); //regEx stuff from Ronny's example
	this.inWord = false;  //same as above....

	// Probably missing things still....
};

// ########################################################

Letter.prototype.toString = function() {
	if (this.guessed === true) {
		return this.letter;
	}
	return '_';
};










// FUNCTIONS ==========================
//

// When does this need to be called? Should it be part of Letters constructor using prototype?
// in app.js ~> if unsolved && guesses remain, playerGuess()
/*
function playerGuess() {
	inquirer.prompt([
		{
			type: 'input',
			message: 'Guess a letter',
			name: 'letterGuess'
		}	
	])
	.then(function(response) {
		// For now, log the selected letter
		// console.log(response.letterGuess);

		// Need to store letters guessed in array?
		lettersGuessed.push(response.letterGuess);
			console.log(lettersGuessed);
	});
}
*/

// Test that function runs from this file  ~WORKS
// playerGuess();


Letters.prototype.playerGuess = function() {
	inquirer.prompt([
		{
			type: 'input',
			message: 'Guess a letter',
			name: 'letterGuess'
		}	
	])
	.then(function(response) {
		lettersGuessed.push(response.letterGuess);
			console.log(lettersGuessed);
	});
};



// EXPORTS ==========================
//

module.exports = Letters;