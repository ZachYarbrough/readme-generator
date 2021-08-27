const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'text',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter a name for your project!');
                return false;
            }
        }
    }, {
        type: 'text',
        name: 'about',
        message: 'Provide some info about your project:',
    }, {
        type: 'text',
        name: 'install',
        message: 'Provide installation steps for your project:'
    }, {
        type: 'text',
        name: 'usage',
        message: 'Provide information on how to use your project:'
    }, {
        type: 'text',
        name: 'contribution',
        message: 'Provide information on how others can contribute to your project:'
    }, {
        type: 'text',
        name: 'test',
        message: 'Provide information on how to test your project:'
    }, {
        type: 'list',
        name: 'license',
        message: 'Select which license you want to add to your README:',
        choices: ['BSD', 'MIT', 'GPL', 'None']
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile('newREADME.md', markdown(data))
    })
}

// Function call to initialize app
init();