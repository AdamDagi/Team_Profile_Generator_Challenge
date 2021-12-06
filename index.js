const genHTML = require("./utils/generateHTML");
const fs = require("fs");
const inquirer = require("inquirer");

const workerType = [
    {
        type: "list",
        name: "workerType",
        message: "Which type of team member would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "No more"],
        default: "No more"
    }
];

const managerQue = [
    {
        type: "input",
        name: "name",
        message: "What is the team manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the team manager's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the team manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?"
    }
];

const engineerQue = [
    {
        type: "input",
        name: "name",
        message: "What is the team Engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the team Engineer's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the team Engineer's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the team Engineer's GitHub?"
    }
];

const internQue = [
    {
        type: "input",
        name: "name",
        message: "What is the team Intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the team Intern's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the team Intern's email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the team Intern's School?"
    }
];

const addTypeOfSpecialist = async (inputs = []) => {
    
    let mergeAnswers;
    const answersWorkerType = await inquirer.prompt(workerType);
    if (answersWorkerType.workerType == "No more") {
        if (inputs.length > 0) {
            return inputs;
        }
        return;
    }
    if (answersWorkerType.workerType == "Manager") {
        const answersManagerQue = await inquirer.prompt(managerQue);
        answersManagerQue.type = "Manager";
        mergeAnswers = [...inputs, answersManagerQue];
        return addTypeOfSpecialist(mergeAnswers);
    }
    if (answersWorkerType.workerType == "Engineer") {
        const answersEngineerQue = await inquirer.prompt(engineerQue);
        answersEngineerQue.type = "Engineer";
        mergeAnswers = [...inputs, answersEngineerQue];
        return addTypeOfSpecialist(mergeAnswers);
    }
    if (answersWorkerType.workerType == "Intern") {
        const answersInternQue = await inquirer.prompt(internQue);
        answersInternQue.type = "Intern";
        mergeAnswers = [...inputs, answersInternQue];
        return addTypeOfSpecialist(mergeAnswers);
    }
};

function writeToFile(fileName, dataManager, dataWorkers) {
    let html;
    console.log(dataWorkers);
    if (dataWorkers) {
        html = genHTML([dataManager, ...dataWorkers]);
    } else {
        html = genHTML([dataManager]);
    }
    fs.writeFile(fileName, html, (e)=>{console.log(e)});
};

async function start() {
    const answersManager = await inquirer.prompt(managerQue);
    answersManager.type = "Manager";
    const answersWorkers = await addTypeOfSpecialist();
    
    writeToFile("index.html", answersManager, answersWorkers);
};

(async() => {
    await start();
})();