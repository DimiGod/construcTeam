// Create a programmer class
class Programmer{
    // Include the construction that accepts name, position, age and language
    constructor(name, position, age, language){
        this.name = name;
        this.position = position;
        this.age = age;
        this.language = language;
    }
    // Include the construction that accepts name, position, age and language
    programmerInfo(){
        console.log(`
        Programmer's Name    : ${this.name}
        Programmer's Position: ${this.position}
        Programmer's Age     : ${this.age}
        Programmer's Language: ${this.language}
        `);
    }
}

//Export this class to be include in the team.js file
module.exports = Programmer;