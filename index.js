const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./src/generate-site");
const fs = require("fs");

//variables to add this info in from prompts
var employeesArray = [];

const promptManager = () => {
  //get manager information
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your name? (Required)",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter your name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Enter your employee ID (Required)",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter your employee ID!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Enter your email (Required)",
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter your email!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "office",
          message: "Enter your office number (Required)",
          validate: (officeInput) => {
            if (officeInput) {
              return true;
            } else {
              console.log("Please enter your office!");
              return false;
            }
          },
        },
      ])
      // //adding manager info in
      // .then(({ name, id, email, role, office }) => {
      //   manager.push(new Manager(name, id, email, role, office));
      //   return addMembers(manager);
      // })
      .then((input) => {
        console.log(input);
        const manager = new Manager(
          input.name,
          input.id,
          input.email,
          input.role,
          input.officeNumber
        );
        employeesArray.push(manager);
      })
  );
};

const addMembers = () => {
  return inquirer
    .prompt({
      type: "list",
      message: "Would you like to add an intern or engineer?",
      name: "action",
      choices: ["Add Intern", "Add Engineer", "No more members to add"],
    })
    .then(({ action }) => {
      if (action === "Add Intern") {
        return internInfo();
      }
      if (action === "Add Engineer") {
        return engineerInfo();
      } else {
        console.log("Adding employees to team profile!");
      }
    });
};

const internInfo = () => {
  console.log(`
        ==================
        Add a New Intern
        ==================
      `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your intern?",
      },

      {
        type: "input",
        name: "id",
        message: "Enter their employee ID.",
      },

      {
        type: "input",
        name: "email",
        message: "Enter their email.",
      },

      {
        type: "input",
        name: "school",
        message: "Enter their school.",
      },
    ])
    .then((input) => {
      console.log(input);
      const intern = new Intern(
        input.name,
        input.Id,
        input.Email,
        input.GitHub
      );
      employeesArray.push(intern);
      addMembers();
    });
};

const engineerInfo = () => {
  console.log(`
        ==================
        Add a New Engineer
        ==================
      `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your Engineer?",
      },

      {
        type: "input",
        name: "id",
        message: "Enter their employee ID.",
      },

      {
        type: "input",
        name: "email",
        message: "Enter their email.",
      },

      {
        type: "input",
        name: "github",
        message: "Enter their Github.",
      },
    ])
    .then((input) => {
      console.log(input);
      const engineer = new Engineer(
        input.name,
        input.Id,
        input.Email,
        input.GitHub
      );
      employeesArray.push(engineer);
      addMembers();
    });
};

promptManager()
  .then(addMembers)
  .then((employeesArray) => {
    return generatePage(employeesArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
