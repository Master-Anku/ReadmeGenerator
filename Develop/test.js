// const fs = require('fs');
// const inquirer = require('inquirer');

// // Step 2: Create an array of questions for user input
// const questions =  
   
//  [
//     {
//         type: 'input',
//         name: 'title',
//         message: 'What is the title of your project?',
//     },
//     {
//         type: 'input',
//         name: 'description',
//         message: 'Provide a short description of your project:',
//     },
    // {
    //     type: 'input',
    //     name: 'installation',
    //     message: 'How do you install your project?',
    // },
//     {
//         type: 'input',
//         name: 'usage',
//         message: 'How do you use your project?',
//     }
// ];

// // Step 3: Create a function to write the README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('README.md file has been generated successfully!');
//     });
// }

// // Step 4: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//         .then((answers) => {
//             const readmeContent = `
// # ${answers.title}

// ## Description
// ${answers.description}

// ## Installation
// ${answers.installation}

// ## Usage
// ${answers.usage}
//             `;
//             writeToFile('README.md', readmeContent);
//         });
// }

// // Step 5: Function call to initialize app
// init();



// const fs = require('fs');
// const inquirer = require('inquirer');

// // Function to prompt user for README details
// const profile = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'title',
//             message: 'What is the title of your project?',
//             validate: titleInput => {
//                 if (titleInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your project title!');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'Provide a short description of your project:',
//             // validate: descriptionInput => {
//             //     if (descriptionInput) {
//             //         return true;
//             //     } else {
//             //         console.log('Please enter your description!');
//             //         return false;
//             //     }
//             // }
//         },
//         {
//             type: 'input',
//             name: 'installation',
//             message: 'How do you install your project?',
//         },
//         {
//             type: 'input',
//             name: 'usage',
//             message: 'How do you use your project?'
//         }
//     ]);
// };

// // Function to format the README content
// const generateReadMeContent = (data) => {
//     return `
// # ${data.title}

// ## Description
// ${data.description}

// ##Installation
// ${data.installation}

// ## Usage
// ${data.usage}
//     `;
// };

// // Run the profile function and generate README file
// profile()
//   .then(data => {
//     // Generate README content
//     const pageContent = generateReadMeContent(data);

//     // Write content to README.md file
//     fs.writeFile('./README.md', pageContent, err => {
//       if (err) throw new Error(err);

//       console.log('README file created! Check out README.md in this directory to see it!');
//     });
//   });
