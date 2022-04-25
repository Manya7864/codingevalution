// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let money1 = JSON.parse(localStorage.getItem("amount"));
document.querySelector("#wallet").innerText = money1;
