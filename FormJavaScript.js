

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
    let feedback = '';
}

//Q1 - One answer
const q1 = document.querySelector(`input[name="q1"]:checked`);
if (q1 && q1.value === "mammal"){
    score++;
    feedback += '<p class="correct">1. Correct!</p>';
}else{
    feedback += '<p class="incorrect">1. Incorrect!</p>';
}



const feedbackElement = document.getElementById('feedback');
feedbackElement.innerHTML = feedback;
feedbackElement.innerHTML += `<p>Your score: ${score}</p>`;
//const q2 = document.querySelector('input [name="q2"] :checked');
//if (q2 )
//q3 add a trim() and a toLower()