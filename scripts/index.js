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

    //call the function that loads the teams into the dropdown list we created
    initDropdown();

    //grab our button off the page using document.querySelector
    let theForm = document.querySelector("#footballForm");

    //when our button is clicked call displayFootballTeam
    theForm.addEventListener("submit", displayFootballTeam);

}

//this function will display the details about our football team
function displayFootballTeam(event){

    //keep the form from reloading the page
    event.preventDefault();

    //get the dropdown from the page
    let theDropdown = document.querySelector("#footballSelect");

    //get the paragraph from the page using document.querySelector
    let resultsParagraph = document.querySelector("#results");

    //get the index of the selected option in the dropdown
    let selectedIndex = theDropdown.selectedIndex - 1;


    //if the defualt option was selected then the value will be ""
    //if it's an empty string clear the team info
    //otherwise display the team
    if(theDropdown.value === ""){
        resultsParagraph.innerHTML = "";
    }else{

        //get the team out of the teams array based on the index from the dropdown
        let selectedTeam = teams[selectedIndex];

         //put the info about the selected team in our paragraph
        resultsParagraph.innerHTML = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}`
    }



}

//this function builds the options for the dropdwon from our array of objects (teams)
function initDropdown(){

    //get the dropdown from the HTML document and assign it to a variable
    let theDropdown = document.querySelector("#footballSelect");

    //create an HTML option element to serve as the defualt option for our team select
    let defaultOption = document.createElement("option");

    //set the textContent of the option to be "Select a Team"
    defaultOption.textContent = "Select a Team";

    //set the value of the option to an empty string ("")
    defaultOption.value = "";

    //add this default option to the select
    theDropdown.appendChild(defaultOption);

    //get the total number of teams we have for use in the loop
    let numberOfTeams = teams.length;

    //lets start looping over the teams
    for(let i=0; i < numberOfTeams; i++){

        //lets create a new option using document.createElement
        let newOption = document.createElement("option");

        //set the textContent for our new option, what the user sees
        newOption.textContent = teams[i].name;

        //set the value for the option
        newOption.value = teams[i].code;

        //add this option to the dropdown using appendChild
        theDropdown.appendChild(newOption);

    }

}