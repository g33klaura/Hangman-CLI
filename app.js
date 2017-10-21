// Hangman Cli App
/*
Steps to complete:
[x] Use inquirer package
[x] Constructors for "Word" and "Letter"
[x] Keep track of user's remaining guesses
[] Prompt user if they want to end the game if out of guesses (and replay?)
[x] Each constructor function in it's own file (use module.exports)
[] Use function prototypes
    https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/)
[x] Push to Github - include package.json & .gitignore

*Which needs to come first? The word or the letter?
*Letter first >> Word?

*Letters guessed move to array
*Array of guessed letters gets checked against array of letters in puzzle words

*Q: How to replace underscore with correctly guessed letter?

*/


// Which looks better? :)
/*
console.log('|-------------|');
console.log('+-------------+');
console.log('=-------------=');
*/

// REQUIREMENTS ==========================
//
var inquirer = require('inquirer');
var word = require('./assets/word.js');
var letter = require('./assets/letter.js');



// VARIABLES ==========================
//

// Controls how many guesses a player has in each game
let guesses = 10;



// FUNCTIONS ==========================
//

function startGame() {
	console.log('Welcome to Hangman: Famous Duck Names Edition!');
	console.log('-------------');
	console.log('Guess a letter in the mystery word. The word is the name of a famous duck.\nYou have 10 guesses. Good luck! *quack*');

	// Show mystery word, made up of underscores


	// Run playerGuess function, unless that will happen as part of "word" function....
	// playerGuess();
}



// Need inquirer.prompt to endGame if out of guesses or fed up with word
// ...and start a new game?
function endGame() {
	inquirer.prompt([
		{
			type: 'confirm',
			message: 'Start a new game?',
			name: 'newGame',
			default: true
		}
	])
	.then(function(response) {

		// ~WORKS (forgot to put 'response' before newGame)
		// console.log(response.newGame);

		if (response.newGame === true) {

			console.log('New game started. Let\'s see whatcha got!');
			console.log('-------------');
			// playerGuess();
			// or
			startGame();

		} else {
			console.log('Guess you\'ve had enough. Until next time!');
			console.log('-------------');
		}
	});
}

endGame();



// MAIN PROCESS ==========================
//

// Start the game
// startGame();

// Function undefined when trying to run off letter.js

// Letters.prototype.playerGuess();
// letter.prototype.playerGuess();
// letter.Letters.prototype.playerGuess();
// letter.playerGuess();







