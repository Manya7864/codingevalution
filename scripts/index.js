// Store the wallet amount to your local storage with key "amount"
// let total=0

let total=JSON.parse(localStorage.getItem("amount"))||0;
document.querySelector("#wallet").innerText=total



function addingmoney()
{
    let w1=document.querySelector("#amount").value
    total+=Number(w1)

    localStorage.setItem("amount",JSON.stringify(total))
        document.querySelector("#wallet").innerText=total

     
}