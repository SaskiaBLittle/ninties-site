// Function: creates a new paragraph and appends it to the bottom of the HTML body.

function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}

/*
    1. Get references to all the buttons on the page in an array format.
    2. Loop through all the buttons and add a click event listener to each one.

    When any button is pressed, the createParagraph() function will be run.
*/

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}


//Drag and drop functionality
const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');

draggables.forEach(draggable =>{
    draggable.addEventListener('dragstart', dragStart);
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
});

function dragStart(event){
    event.dataTransfer.setData("text", event.target.id);
}

function dragOver(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.textContent = document.getElementById(data).textContent;
    document.getElementById(data).style.display = "none";
}



//Quiz Answer Check
function checkAnswers(){
    let score = 0;
}

//Q1 - One answer
