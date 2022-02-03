const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./utils/generate-site');

// const Manager = require('../lib/Manager');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern')

class index {
    constructor() {
      this.interns = [];
      this.engineers = [];
      this.manager;
    }

    promptManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log('Please enter your name!');
                    return false;
                  }
                }
            },
              {
                type: 'input',
                name: 'id',
                message: 'Enter your employee ID (Required)',
                validate: idInput => {
                  if (idInput) {
                    return true;
                  } else {
                    console.log('Please enter your employee ID!');
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'email',
                message: 'Enter your email (Required)',
                validate: idInput => {
                  if (idInput) {
                    return true;
                  } else {
                    console.log('Please enter your email!');
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'office',
                message: 'Enter your office number (Required)',
                validate: idInput => {
                  if (idInput) {
                    return true;
                  } else {
                    console.log('Please enter your office number!');
                    return false;
                  }
                }
              }
        ]);
    this.addMembers();
    };

    addMembers() {
        console.log('running');
    }
}

promptManager();

module.exports = index;
  