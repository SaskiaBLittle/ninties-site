//Drag and drop functionality
const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.textContent = document.getElementById(data).textContent;
    document.getElementById(data).style.display = "none";
}



//Quiz Answer Check
function checkAnswers() {
    let score = 0;
    let feedback = '';
    //Q1 - One answer
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "Mammal") {
        score++;
        feedback += '<p class="correct">1. Correct!</p>';
    } else {
        feedback += '<p class="incorrect">1. Incorrect!</p>';
    }

    //Q2 - Multiple answers
    const correctAnswers = ['Flight', 'Feathered'];
    const checkboxes = document.querySelectorAll('input[name="q2"]:checked');
    const selectedValues = Array.from(checkboxes).map(cb => cb.value);

    const allCorrect = correctAnswers.every(answer => selectedValues.includes(answer));
    const noneIncorrect = !Array.from(document.querySelectorAll('input[name="q2"]')).some(cb => !cb.checked && correctAnswers.includes(cb.value));

    if (allCorrect && noneIncorrect) {
        score++;
        feedback += '<p class="correct">2. Correct!</p>';
    } else {
        feedback += '<p class="incorrect">2. Incorrect!</p>';
    }

    //Q3 - write question
    const q3 = document.getElementById('q3').value;
    if (q3 === '1000') {
        score++;
        feedback += '<p class="correct">3. Correct!</p>';
    } else {
        feedback += '<p class="incorrect">3. Incorrect!</p>';
    }

    //Q4 - drag and drop
    const frogDropZone = document.getElementById('dropAmphibian').textContent.trim();

    const frogCorrect = frogDropZone === 'Frog';

    if (frogCorrect) {
        score++;
        feedback += '<p class="correct">4. Correct!</p>';
    } else {
        feedback += '<p class="incorrect">4. Incorrect!</p>';
    }


    const feedbackElement = document.getElementById('feedback');
    feedbackElement.innerHTML = feedback;
    feedbackElement.innerHTML += `<p>Your score: ${score}/4</p>`;
}

