// Requiring the team.js class
const Team = require("./team.js");

// Requiring the filesystem module
const fs = require("fs");

// creating and storing a new team object
const team = new Team("NewProject");

// read the file input from members.txt
const lineReader = require('readline').createInterface({
    input: fs.createReadStream('members.txt')
});

lineReader
    .on('line', function (line) {
        // Split into an array
        const teamMember = line.split(",");
        // Add the programmer into the array
        team.addProgrammer(teamMember[0], teamMember[1], teamMember[2], teamMember[3]);
    })
    .on('close', process);

// // code when lineReader is done
function process() {
    // Loop through and print the programmers in the array
    for (let n=0; n<team.programmers.length; n++){
        console.log(team.programmers[n]);
    }
    // Print the total number of programmers in the array
    console.log(`There are ${team.returnNumberOfTeamMembers()} team members`);
}