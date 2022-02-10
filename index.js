const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./generate-site');







class index {
    constructor() {
      this.intern = [];
      this.engineer = [];
      this.manager;
    }

    promptUser() {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?'
        },
    
        {
          type: 'input',
          name: 'id',
          message: 'Enter your employee ID (Required)',
        },
    
        {
          type: 'input',
          name: 'email',
          message: 'Enter your email (Required)',
        },
    
        {
          type: 'input',
          name: 'office',
          message: 'Enter your office number (Required)',
        }
        .then(({ name, id, email, role, office }) => {
          this.manager = new Manager(name, id, email, role, office);
          this.addMembers();
        }),
        {
          type: 'confirm',
          name: 'confirmAddMember',
          message: 'Would you like to enter an employee?',
          default: false
        }
      ])
      
      

    }

    addMembers() {
      inquirer
        .prompt({
          type: 'list',
          message: 'Would you like to add an intern or engineer?',
          name: 'action',
          choices: ['Add Intern', 'Add Engineer', 'No more members to add']
        })
        .then(({ action }) => {
          if (action === 'Add Intern') {
            return this.internInfo();
          }
          if (action === 'Add Engineer') {
            return this.engineerInfo();
          } else {
            return this.displayPage();
          }
        })
    }

    internInfo() {
      console.log(`
        ==================
        Add a New Intern
        ==================
      `);
      return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your intern?'
        },
    
        {
          type: 'input',
          name: 'id',
          message: 'Enter their employee ID.',
        },
    
        {
          type: 'input',
          name: 'email',
          message: 'Enter their email.',
        },
    
        {
          type: 'input',
          name: 'school',
          message: 'Enter their school.',
        }
      ])
      .then(({ name, id, email, role, school }) => {
        this.intern.push(new Intern(name, id, email, role, school));
        this.addMembers();
      });
    }

    engineerInfo() {
      console.log(`
        ==================
        Add a New Engineer
        ==================
      `);

      return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your Engineer?'
        },
    
        {
          type: 'input',
          name: 'id',
          message: 'Enter their employee ID.',
        },
    
        {
          type: 'input',
          name: 'email',
          message: 'Enter their email.',
        },
    
        {
          type: 'input',
          name: 'github',
          message: 'Enter their Github.',
        }
      ])
      .then(({ name, id, email, github }) => {
        this.engineer.push(new Engineer(name, id, email, github));
        employeeData.engineer.push(engineerData);
        this.addMembers();
        return employeeData;
      });
    }

    displayPage() {
      console.log("Page soon to be displayed!");
      return generatePage(manager, intern, engineer)
      .then(employeeData => {
        return generatePage(employeeData);
      })
      .then(pageHTML => {
        return writeFile(pageHTML);
      })
      .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
      })
      .then(copyFileResponse => {
        console.log(copyFileResponse);
      })
      .catch(err => {
        console.log(err);
      });
    }
}






 module.exports = index;
  