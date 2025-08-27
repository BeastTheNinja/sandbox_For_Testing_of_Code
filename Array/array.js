let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra() {
    /* din map kode her... */
    myExtras = myExtrasInput.value.split(',').map(item => item.trim());
    myExtrasListElement.innerHTML = myExtras.map(item => `<li>${item}</li>`).join('');
}



function updateExtras() {




    /* din map kode her... */


}
// Linje 1:

// myExtrasInput.value henter tekstværdien fra et inputfelt (forventet at være en kommasepareret liste, fx "GPS, Aircondition, Soltag").
// .split(',') deler denne tekst op i en array, hvor hvert element er adskilt af komma.
// .map(item => item.trim()) fjerner eventuelle mellemrum før og efter hvert element i arrayet.
// Resultat:
// Hvis input er "GPS, Aircondition, Soltag", bliver myExtras til ["GPS", "Aircondition", "Soltag"].

// Linje 2:

// myExtras.map(item => <li>${item}</li>) laver en ny array, hvor hvert element er pakket ind i en <li>-tag (listeelement til HTML).
// .join('') samler alle disse <li>-elementer til én samlet HTML-streng uden mellemrum.
// myExtrasListElement.innerHTML = ... indsætter denne HTML-streng i et DOM-element, så listen vises på websiden.