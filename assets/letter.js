// JavaScript for letter inputs of Hangman Cli App

// REQUIREMENTS ====================
// 

const inquirer = require('inquirer');



// VARIABLES ====================
// 

let lettersGuessed = [];

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

})




// CONSTRUCTORS ====================
// 

// Should this be LettersGuessed ? 
let Letters = function(letter) {
	this.letter = letter;


};

module.exports = Letters;