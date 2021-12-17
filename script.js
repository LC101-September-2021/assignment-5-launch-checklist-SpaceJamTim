//const { myFetch } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener("load" , function() {

    let form = document.querySelector("form");

   form.addEventListener("submit", function(event){
      event.preventDefault();

    let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");

   let faultyItems = document.getElementById('faultyItems');
   let fuelStatus = document.getElementById('fuelStatus');
   let launchStatus = document.getElementById('launchStatus');
   let pilotStatus = document.getElementById('pilotStatus');
   let copilotStatus = document.getElementById('copilotStatus');

   if (validateInput(pilotName.value) === "empty"|| validateInput(copilotName.value) === "empty" || validateInput(fuelLevel.value) === "empty" || validateInput(cargoMass.value === "empty") ){
    alert("All fields are required!");
 }

 else if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
   alert("Make sure to enter valid information for each field!");
}

 else{ // If the fuel level and cargo mass are integers, make these checks below
    if(fuelLevel.value < 10000){ // Is the fuelLevel value below 10,000?
        faultyItems.style.visibility = 'visible';
        fuelStatus.innerHTML = `Fuel level too low for the journey!`;
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = 'red';
     }else{
        faultyItems.style.visibility = 'visible';
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
     }

     if(cargoMass.value > 10000){  // Is the cargoMass above 10,000?
        faultyItems.style.visibility = 'visible';
        cargoStatus.innerHTML = `Cargo mass too heavy for the shuttle to take off!`;
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = 'red';
     }else{
        faultyItems.style.visibility = 'visible';
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
     }

     if(fuelLevel.value >= 10000 && cargoMass.value <= 10000) { // If the fuelLevel is equal to or above 10,000 AND cargoMass is equal to or below 10,000, execute this code 
        faultyItems.style.visibility = 'visible';
        launchStatus.innerHTML = `Shuttle is ready for launch`;
        launchStatus.style.color = 'green';
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
     }

  }

  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json){
            const missionTarget = document.getElementById('missionTarget');
            const index = Math.floor(Math.random() * json.length - 1);
            missionTarget.innerHTML = `
            <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">
            `;
         });
     });
  /* let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   listedPlanetsResponse == myFetch()})
   
    });
*/

});

});

