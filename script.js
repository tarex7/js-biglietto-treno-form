//Elementi UI
//Pulsante genera biglietto
const ticketBtn = document.getElementById("ticketBtn");
//Pulsante annulla
const cancelBtn = document.getElementById("cancelBtn");

const passengerNameUI = document.getElementById("passengerName");
const passengerAgeUI = document.getElementById("passengerAgeUI");
const kmsUI = document.getElementById("kmsUI");
const ticketPriceUI = document.getElementById("ticketPrice");
const discountUI = document.getElementById("discount")
const ticketUI = document.getElementById("ticketUI")


//Event listener

//Nome passeggero
const firstName = document.getElementById("firstName");
//Cognome passeggero
const lastName = document.getElementById("lastName");
//Km da percorrere
const kms = document.getElementById("kms");

ticketBtn.addEventListener("click", function () {

  //Calcolo prezzo
  let price = kms.value * 0.21;
  let ticketPrice = price.toFixed(2);

  //Prezzi scontati
  let discount20 = ticketPrice * 0.2;
  let discount40 = ticketPrice * 0.4;

  let priceUnder18 = ticketPrice - discount20;
  let priceOver65 = ticketPrice - discount40;

  //Età passeggero

  let passengerAge;
  let selectedIndex;
  let selectedOption;

  //Select options
  passengerAge = document.getElementById("passengerAge");
  selectedIndex = passengerAge.selectedIndex;
  selectedOption = passengerAge.options[selectedIndex];
  selectedOptionText = selectedOption.text;

  //mostra in UI
  ticketPriceUI.innerText = ticketPrice;
  passengerNameUI.innerText = firstName.value + " " + lastName.value;
  passengerAgeUI.innerText = selectedOptionText;
  kmsUI.innerText = kms.value + " Km";
  ticketPriceUI.innerText = ticketPrice + " €";

  //Logica sconto
  if (selectedIndex === 0) {
    ticketPriceUI.innerText = priceUnder18.toFixed(2) + " €";
    discountUI.innerText = "Sconto 20% per under 18"
  } else if (selectedIndex === 2) {
    ticketPriceUI.innerText = priceOver65.toFixed(2) + " €";
    discountUI.innerText = "Sconto 40% per over 65"

  }

  ticketUI.classList.remove('d-none')
});

//Cancel Btn
cancelBtn.addEventListener("click", function () {
  firstName.value = ''
  lastName.value = ''
  kms.value = ''
});