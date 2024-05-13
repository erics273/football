"use strict"
console.log("hello")

//these are our teams
let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
];

//this is our windows.onload function that runs code once the dom is loaded
window.onload = function(){

    initDropdown();

    //grab our button off the page
    let theButton = document.querySelector("#theButton");

    //when our button is clicked call displayFootballTeam
    theButton.addEventListener("click", displayFootballTeam);

}

//this function will display the details about our football team
function displayFootballTeam(){

    //get the dropdown from the page
    let theDropdown = document.querySelector("#footballSelect");
    //get the dropdown from the page
    let resultsParagraph = document.querySelector("#results");

    //get the index of the selected option in the dropdown
    let selectedIndex = theDropdown.selectedIndex;
    //get the team out of the teams array based on the index from the dropdown
    let selectedTeam = teams[selectedIndex];
    //put the info about the selected team in our paragraph
    resultsParagraph.innerHTML = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}`


}

function initDropdown(){

    //get the dropdown from the HTML document and assign it to a variable
    let theDropdown = document.querySelector("#footballSelect");

    //get the total number of teams we have for use in the loop
    let numberOfTeams = teams.length;

    //lets start looping over the teams
    for(let i=0; i < numberOfTeams; i++){

        //lets create a new option
        let newOption = document.createElement("option");

        //set the textContent for our new option, what the user sees
        newOption.textContent = teams[i].name

        //set the value for the option
        newOption.value = teams[i].code

        //add this option to the dropdown
        theDropdown.appendChild(newOption);

    }

}