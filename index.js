// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

function ele() {
  let robotXml = {
    typeOfMachine: 'robot', 
    isArobot: true,
    color: 'Grey', 
    teamOfProgrammers: { 
      headOfTeam: 'Steve Jobs',  
      programmers: ['Steve Wozniack', 'Andy Hertzfeld', 'Can'], 
      experienceOfYearsSteveWozniack: 30,
      experienceOfYearsAndyHertzfeld: 27, 
      experienceOfYearsCan: 22,
    },
    massProduction() {
      return this.experienceOfYearsSteveWozniack + ' ' + this.experienceOfYearsAndyHertzfeld + ' ' + this.experienceOfYearsCan;   
    }
  }
  console.log(robotXml.teamOfProgrammers); // should print : true 
}
ele() // call the function 

