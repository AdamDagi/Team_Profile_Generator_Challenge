const genHTML = require("./utils/generateHTML");
const fs = require("fs");
const inquirer = require("inquirer");
let numberOfWorkers;
const managerQue = [
    {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?"
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?"
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?"
    }
];

const workerType = [
    {
        type: "list",
        name: "workerType",
        message: "Which type of team member would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "No more"],
        default: "No more"
    }
];

const engineerQue = [
    {
        type: "input",
        name: "engineerName",
        message: "What is the team manager's name?"
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the team manager's id?"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the team manager's email?"
    },
    {
        type: "input",
        name: "engineerOfficeNumber",
        message: "What is the team manager's office number?"
    }
];

const internQue = [
    {
        type: "input",
        name: "internName",
        message: "What is the team manager's name?"
    },
    {
        type: "input",
        name: "internId",
        message: "What is the team manager's id?"
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the team manager's email?"
    },
    {
        type: "input",
        name: "internOfficeNumber",
        message: "What is the team manager's office number?"
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

function start() {
    inquirer
        .prompt(managerQue)
        .then((answersManager) => {
            // collectInputs();
        });
};

// const collectInputs = async () => {
//     const result = [];

//     for (let i = 0; i < numberOfWorkers; i++) {
//         const managers = await managersQuestionGroup();
//         // const text = genHTML(result);
//         // writeToFile("index.html", text);

//         console.log(managers);
//     };
// };

start();
