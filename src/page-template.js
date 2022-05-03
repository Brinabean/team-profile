const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateSections = (cardsArr) => {
  console.log(
    employeesArray
      .filter((feature) => {
        console.log(feature);
        return feature instanceof Manager;
      })

      .map(({ name, id, email, office }) => {
        return `
    <row class="col-3 " id="columns">
      <h2 class="colheader bi bi-mortarboard">Manager</h2>
      <div class="info">
        <p>${name}<br>
        ${id}<br>
        ${office}</p>
        <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=${email}" class="btn">${email}</a>
      </div>
    </row> 
  `;
      })
      .join("")
  );
  return `
   <section class="my-3" id="employee">
   
  <div class="flex-row justify-space-between">
    ${employeesArray
      .filter((feature) => {
        console.log(feature);
        return feature instanceof Manager;
      })

      .map(({ name, id, email, office }) => {
        return `
    <row class="col-3 " id="columns">
      <h2 class="colheader bi bi-mortarboard">Manager</h2>
      <div class="info">
        <p>${name}<br>
        ${id}<br>
        ${office}</p>
        <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=${email}" class="btn">${email}</a>
      </div>
    </row> 
      `;
      })
      .join("")}

    ${employeesArray
      .filter((feature) => {
        console.log(feature);
        return feature instanceof Intern;
      })

      .map(({ name, id, email, office }) => {
        return `
        <<row class="col-3 " id="columns">
        <h2 class="colheader bi bi-mortarboard">Manager</h2>
        <div class="info">
          <p>${name}<br>
          ${id}<br>
          ${office}</p>
          <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=${email}" class="btn">${email}</a>
        </div>
      </row> 
      `;
      })
      .join("")}
      ${employeesArray
        .filter((feature) => {
          console.log(feature);
          return feature instanceof Engineer;
        })

        .map(({ name, id, email, github }) => {
          return `
            <row class="col-3 " id="columns">
        <h2 class="colheader bi bi-mortarboard">Engineer</h2>
        <div class="info">
          <p>${name}<br>
          ${id}<br>
          <a href="https://github.com/${github}" class="btn"><i class="fab fa-github mr-2"></i>${github}</a>
          <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=${email}" class="btn">${email}</a>
        </div>
      </row> 
       `;
        })
        .join("")}
          
    </div>
  </section>
`;
};

// export function to generate entire page
module.exports = (templateData) => {
  // destructure page data by section
  // const { manager, engineer, intern } = templateData;

  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
      <header>
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
      </header>
      <main class="container">
      ${generateSections(templateData)}
      </main>
    </body>
    </html>
    `;
};
