const genHTML = require("./utils/generateHTML");
const fs = require("fs");
const inquirer = require("inquirer");
let numberOfWorkers;
const questionNumberOfWorkers = [
    {
        type: "input",
        name: "numberOfWorkers",
        message: "How many workers in your team?"
    }
];

const managersQuestionGroup = async (inputs = []) => {
    const prompts = [
      {
        type: "input",
        name: "manageValue",
        message: "Enter some manage input:"
      },
      {
        type: "confirm",
        name: "again",
        message: "Enter another input?",
        default: true
      }
    ];
  
    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return again ? collectInputs(newInputs) : newInputs;
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (e)=>{console.log(e)});
};

function initNumberOfWorkers() {
    inquirer
        .prompt(questionNumberOfWorkers)
        .then((answers) => {
            numberOfWorkers = answers.numberOfWorkers;
            collectInputs();
        });
};

const collectInputs = async () => {
    const result = [];

    for (let i = 0; i < numberOfWorkers; i++) {
        const managers = await managersQuestionGroup();
        // const text = genHTML(result);
        // writeToFile("index.html", text);

        console.log(managers);
    };
};

initNumberOfWorkers();
