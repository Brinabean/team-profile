const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./utils/generate-site');







class index {
    constructor() {
      this.interns = [];
      this.engineers = [];
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
      ])
      .then(({ name, id, email, office }) => {
        this.manager = new Manager(name);
        this.manager = new Manager(id);
        this.manager = new Manager(email);
        this.manager = new Manager(office);
        this.addMembers();
      });
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
      .then(({ name, id, email, school }) => {
        this.intern = new Intern(name);
        this.intern = new Intern(id);
        this.intern = new Intern(email);
        this.intern = new Intern(school);
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
        this.engineer = new Engineer(name);
        this.engineer = new Engineer(id);
        this.engineer = new Engineer(email);
        this.engineer = new Engineer(github);
        this.addMembers();
      });
    }

    displayPage() {
      console.log("Page soon to be displayed!")
    }
}

 module.exports = index;
  