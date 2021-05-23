const Manager = require(`./library/Manager`)
const Engineer = require(`./library/Engineer`)
const Intern = require(`./library/Intern`)
const inquirer = require(`inquirer`)

const teamArray = [];

function addManager() {}
function addIntern() {}
function addEngineer() {}
function addTeamMember() {} //crossroads function (switch to different role)

const prompt = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your role?',
    },
    {
        type: 'number',
        name: 'id',
        message: 'What is your employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'Would you like to create a different role?',
        choices: [
            "Engineer",
            "Intern",
            "Manager",
            "All done"
        ]
    },
]

const promptManager = [
    {
        type: 'input',
        name: 'officenumber',
        message: 'What is your office number?'
    }
]

const promptEngineer = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your github URL?'
    }
]

const promptIntern= [
    {
        type: 'input',
        name: 'school',
        message: 'What school do you attend?'
    }
]

async function addTeamMember() {

}