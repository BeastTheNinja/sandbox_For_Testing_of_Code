// write cool JS hwere!!
    const userSelect = document.getElementById("userSelect");
    const nameInput = document.getElementById("nameInput");
    const ageInput = document.getElementById("ageInput");
    const colorInput = document.getElementById("colorInput");
    const saveButton = document.getElementById("saveButton");
    
    // Event listener: vis data for valgt bruger
  function userSelectChange() {
      const selectedUser = userSelect.value;
       console.log('change user to: '+selectedUser);
      // TODO: Hent data fra localStorage og vis i formularen
      const userData = JSON.parse(localStorage.getItem(selectedUser));
      if (userData) {
          nameInput.value = userData.name || "";
          ageInput.value = userData.age || "";
          colorInput.value = userData.color || "";
      }
    };

    // Event listener: gem data fra formularen
    saveButton.addEventListener("click", () => {
        console.log("save data");
        
      const selectedUser = userSelect.value;
      const name = nameInput.value;
      const age = ageInput.value;
      const color = colorInput.value;

      // TODO: Gem data i localStorage for den valgte bruger
      const userData = {
          name: name,
          age: age,
          color: color
      };
      localStorage.setItem(selectedUser, JSON.stringify(userData));
    });

    // Vis data for første bruger ved load
    window.onload = userSelectChange;
    userSelect.addEventListener("change", userSelectChange);
    // --- change background color on save -----
    saveButton.addEventListener("click", () => {
        document.body.style.backgroundColor = colorInput.value;
    });



   
// Gemmer hver bruger for sig selv i localStorage med sin egen key.
// Fx:
// localStorage.setItem("user1", JSON.stringify({name: "Alice", age: 20, color: "red"}));
// localStorage.setItem("user2", JSON.stringify({name: "Bob", age: 25, color: "blue"}));


// Når man vælger en bruger i userSelect, hentes kun den ene key direkte:

// const userData = JSON.parse(localStorage.getItem(selectedUser));


// Det betyder, at der ligger flere adskilte entries i localStorage (én per bruger).

// Eksempel på localStorage med original kode:

// "user1": "{...}"
// "user2": "{...}"
// "user3": "{...}"

// Ny kode 

// Gemmer alle brugere under én samlet key "users".
// Her ligger et objekt med alle brugere indeni.
// Fx:

// {
//   "user1": { "name": "Alice", "age": "20", "color": "#ff0000" },
//   "user2": { "name": "Bob", "age": "25", "color": "#00ff00" },
//   "user3": { "name": "", "age": "", "color": "" },
//   "user4": { "name": "", "age": "", "color": "" }
// }


// Når man vælger en bruger i userSelect, slår koden op i objektet "users" i stedet for i en separat key.

// let users = JSON.parse(localStorage.getItem("users")) || {};
// const userData = users[selectedUser];


// Når man gemmer, opdateres kun den ene bruger i objektet, og hele objektet overskrives i localStorage.

// Eksempel på localStorage med ny kode:

// "users": "{ user1: {...}, user2: {...}, user3: {...}, user4: {...} }"

// Kort sagt

// Original kode → én localStorage-key pr. bruger.

// Ny kode → én samlet localStorage-key, der indeholder alle brugere.