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
	this.guessed = false; //until it's true?....
	this.inWord = false;  //same as above....

	// Probably missing things still....
};



// FUNCTIONS ==========================
//

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

		// When does this need to be called? Should it be part of Letters constructor?
		// in app.js ~> if unsolved && guesses remain, playerGuess()
	});
}



// EXPORTS ==========================
//

module.exports = Letters;