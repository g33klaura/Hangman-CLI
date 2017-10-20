// Hangman Cli App
/*
Steps to complete:
[x] Use inquirer package
[] Constructors for "Word" and "Letter"
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

// Need inquirer.prompt to endGame if out of guesses or fed up with word
// ...and start a new game?



// MAIN PROCESS ==========================
//

// Function undefined when trying to run off letter.js :(
// Start the game
// Letters.prototype.playerGuess();
// letter.prototype.playerGuess();
letter.playerGuess();







