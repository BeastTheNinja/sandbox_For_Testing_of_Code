// Huskeseddel

// Den skal vise et inputfelt når vi trykker på en knap
// Så skal den gemme hvad end vi skriver i inputfeltet, i localstorage
// Så skal man kunne refreshe siden og så henter appen data fra localstorage

// 1. lav en knap smid den ud i DOM'en bind en funktion til den som lavet et inputfelt
// 2. Hent den værdi brgeren skriver i inputfeltet. Tjek om der allerede er en værdi i localstorage

let obj = {};

function createInputField() {
    let inputfelt = document.createElement("input");
    inputfelt.id = crypto.randomUUID();
    inputfelt.type = "text";
    inputfelt.placeholder = "Enter task...";
    
    inputfelt.addEventListener('change', (e) => {
    let input_value = e.target.value;
    let input_id = e.target.id;
    obj = {
        id: input_id,
        value: input_value
    }
    })
    mainContainer.appendChild(inputfelt);
}

function saveData (){
    localStorage.setItem('husk', JSON.stringify(obj));
}

let mainContainer = document.getElementById("mainContainer");

let createButton = document.createElement("button");
createButton.innerText = 'Create Task';
createButton.addEventListener("click", createInputField);
mainContainer.appendChild(createButton);

let saveButton = document.createElement("button");
saveButton.innerText = 'Save Task';
saveButton.addEventListener("click", saveData);
mainContainer.appendChild(saveButton);
