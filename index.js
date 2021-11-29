const genHTML = require("./utils/generateHTML");
const fs = require("fs");
const inquirer = require("inquirer");
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "age",
        message: "How old are you?"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (e)=>{console.log(e)});
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const text = genHTML(answers)
            writeToFile("index.html", text);
        });
};

// Function call to initialize app
init();