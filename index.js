// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

function ele() {
  let robotXml = {
    typeOfMachine: 'robot', // peer key-value
    isArobot: true, // peer key-value
    color: 'Grey', // peer key-value
    teamOfProgrammers: { 
      headOfTeam: 'Steve Jobs',  // peer key-value
      programmers: ['Steve Wozniack', 'Andy Hertzfeld', 'Can'], // peer key-value
      experienceOfYearsSteveWozniack: 30, // peer key-value
      experienceOfYearsAndyHertzfeld: 27, // peer key-value
      experienceOfYearsCan: 22, // peer key-value
    },
    massProduction() {
      return this.experienceOfYearsSteveWozniack + ' ' + this.experienceOfYearsAndyHertzfeld + ' ' + this.experienceOfYearsCan;   
    }
  }
  console.log(robotXml.teamOfProgrammers); // should print : true 
}
ele() // call the function 

