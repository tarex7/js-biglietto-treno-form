//Elementi UI
//Pulsante genera biglietto
const ticketBtn = document.getElementById("ticketBtn");
//Pulsante annulla
const cancelBtn = document.getElementById("cancelBtn");
//Nome passeggero UI
const passengerNameUI = document.getElementById("passengerName");
const passengerAgeUI = document.getElementById("passengerAgeUI");
//Km UI
const kmsUI = document.getElementById("kmsUI");
//Prezzo biglietto UI
const ticketPriceUI = document.getElementById("ticketPrice");
//Sonto UI
const discountUI = document.getElementById("discount");
//Biglietto UI
const ticketUI = document.getElementById("ticketUI");
//Codice CP UI
const cpCodeUI = document.getElementById("cpCode");

//Nome passeggero
const firstName = document.getElementById("firstName");
//Cognome passeggero
const lastName = document.getElementById("lastName");
//Km da percorrere
const kms = document.getElementById("kms");

//Reset func
function reset() {
  //Reset valori
  firstName.value = "";
  lastName.value = "";
  kms.value = "";
  
}

//Event listener

ticketBtn.addEventListener("click", function () {
  //Validazione input
  if (firstName.value === "" || !isNaN(firstName.value)) {
    alert("Per favore inserisci nome del passeggero");
    return;
  }
  if (lastName.value === "" || !isNaN(lastName.value)) {
    alert("Per favore inserisci cognome del passeggero");
    return;
  }
  if (isNaN(parseInt(kms.value))) {
    alert("Per favore inserisci numero dei chilometri da percorrere");
    return;
  }

  //Calcolo prezzo
  let price = kms.value * 0.21;
  let ticketPrice = price.toFixed(2);

  //Prezzi scontati
  let discount20 = ticketPrice * 0.2;
  let discount40 = ticketPrice * 0.4;

  let priceUnder18 = ticketPrice - discount20;
  let priceOver65 = ticketPrice - discount40;

  //Cp Generator
  const rndCP = Math.floor(Math.random() * 100000);

  //Età passeggero

  let passengerAge;

  //Select options
  passengerAge = document.getElementById("passengerAge");
  console.log(passengerAge.value);
  selectedIndex = passengerAge.selectedIndex;
  selectedOption = passengerAge.options[selectedIndex];
  const selectedOptionText = selectedOption.text;

  //mostra in UI
  ticketPriceUI.innerText = ticketPrice;
  passengerNameUI.innerText = firstName.value + " " + lastName.value;
  passengerAgeUI.innerText = selectedOptionText;
  kmsUI.innerText = kms.value + " Km";
  ticketPriceUI.innerText = ticketPrice + " €";
  cpCodeUI.innerText = rndCP;

  //Logica sconto
  //Under 18
  if (passengerAge.value == 1) {
    ticketPriceUI.innerText = priceUnder18.toFixed(2) + " €";
    discountUI.innerText = "Sconto 20% per under 18";
    discountUI.style.color = "red";
    //Over 65
  } else if (passengerAge.value == 3) {
    ticketPriceUI.innerText = priceOver65.toFixed(2) + " €";
    discountUI.innerText = "Sconto 40% per over 65";
    discountUI.style.color = "red";
  }
  //Mostra biblietto
  ticketUI.classList.remove("d-none");

  //Svuota i campi
  //Reset valori
  reset();
});

//Cancel Btn
cancelBtn.addEventListener("click", reset);
cancelBtn.addEventListener('click', function() {
  //Nascondi ticketUI
  ticketUI.classList.add("d-none");
})
