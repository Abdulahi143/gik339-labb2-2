// === Uppgift 4 – Skapa variabler ===

// 1. Checkboxen (hämtad med getElementById)
const checkBox = document.getElementById('divStyle');

// 2. Alla textfält (hämtade med getElementsByClassName)
const textFields = document.getElementsByClassName('textfield');

// 3. Knappen (hämtad med querySelector)
const btn = document.querySelector('#fun-button');

// 4. Div-elementet som ska påverkas (hämtat med querySelector)
const resultBox = document.querySelector('.result-box');



// === Uppgift 5 – Fördefinierad funktion ===
// Denna ska triggas när man skriver i textfälten
function inputListener(e) {

    console.log(e.target); // Visa vilket inputfält som triggat eventet

    const name = e.target.name; // hämta name-attributet

    // Om fältet är "content", skriv värdet till div-elementet
    if (name === "content") {
        resultBox.innerHTML = e.target.value;
    }
}



// === Uppgift 6 – Koppla eventlyssnare ===

// 1. Eventlyssnare till checkboxen
// Ändrar bakgrundsfärgen till det som står i fältet "color"
checkBox.addEventListener("change", function() {
    const colorValue = document.getElementById("color").value;
    resultBox.style.backgroundColor = colorValue;
});


// 2. Eventlyssnare för textfälten
// Körs inputListener när man skriver i dem
for (let field of textFields) {
    field.addEventListener("input", inputListener);
}


// 3. Eventlyssnare till knappen
// Vid klick – ta bort div-elementet från DOM
btn.addEventListener("click", function() {
    resultBox.remove();
});
