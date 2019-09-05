// Dependency for inquirer npm package
const inquirer = require("inquirer");

// Constructor function for creating player objects
class Player {
  constructor(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = Math.floor(Math.random() * 10);
    this.defense = Math.floor(Math.random() * 10);
  }

  printStats() {
    console.log(`
      Name: ${this.name}
      Position: ${this.position}
        Offense: ${this.offense}
        Defense: ${this.defense}
        ----------
    `);
  };
}

// Arrays used to contain all of our player objects
let players = [];
let score = 0;
const maxRounds = 5; // determines the maximum number of rounds we play.

// calls the function to start the program
playGame();

// Function to create the two players on the team from user input
async function playGame() {
  for (let i=0; i<2; i++) {
    await inquirer
      .prompt([
        {
          name: "name",
          message: "Player's Name: "
        },
        {
          name: "position",
          message: "Player's position: "
        }
      ])
      .then(function(answers) {
        // Runs the constructor and places the new player object into the variable `player`
        // Turns the offense and defense variables into integers as well with parseInt
        const player = new Player(answers.name, answers.position);
        players.push(player);
        console.log(`Player ${answers.name} Created`)
      });
  }

  // print the players' info
  printStats(); 
  
  // play the rounds
  for(let i=0; i<maxRounds; i++) {
    playRound();
  }

  // Prints the final score
  console.log("\n-------- FINAL SCORE: " + score + " --------\n");

  // If the score was greater than 0, prints the winning message and increases starters stats
  if (score > 0) {
    console.log("Good game, you won!");
  }
}

// print the player stats
function printStats() {
  for (let i=0; i<players.length; i++) {
    players[i].printStats();
  }
}

// Function to play a single round
function playRound() {
  // Finds two random numbers between 1 and 20 to compare the starter objects' stats to
  const offenseRandom = Math.floor(Math.random() * 20) + 1;
  const defenseRandom = Math.floor(Math.random() * 20) + 1;

  // Loops through the starter array to find if the total value of their offense and defense
  let teamOffense = 0;
  let teamDefense = 0;
  for (let i = 0; i < players.length; i++) {
    teamOffense += players[i].offense;
    teamDefense += players[i].defense;
  }
  console.log("Team Offense: " + teamOffense);
  console.log("Team defense: " + teamDefense);
  console.log("Random O: " + offenseRandom);
  console.log("Random D: " + defenseRandom);

  // Determines if `teamOffense` is less than `defenseRandom` and adds one to score if true
  if (teamOffense > defenseRandom) {
    console.log("YOU SCORED A POINT!");
    score++;
  }

  // Determines if `teamDefense` is greater than `offenseRandom` and subtracts one from score if true
  if (teamDefense < offenseRandom) {
    console.log("YOU WERE SCORED UPON!");
    score--;
  }
  // Prints the new score
  console.log("Score: " + score);
  console.log("----------");
}