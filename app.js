var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var message = document.querySelector("#message-display");

var notes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {

hideMessage();

if(isNaN(billAmount.value)==true || isNaN(cashGiven.value)==true){
    showMessage("Enter amount in numbers");
} 
else {
    if((billAmount.value > 0 && cashGiven.value > 0)){
        if(cashGiven.value >= billAmount.value){
            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } 
        else {
            showMessage("Do you wanna wash dishes");
        }
    } 
    else {
        showMessage("Amount given should be greater than zero");
    }
    }
})

function calculateChange(amountToBeReturned){
    for(var i=0; i < notes.length; i++){
        var numberOfNotes = Math.trunc(amountToBeReturned / notes[i]);
        noOfNotes[i].innerText= numberOfNotes;
        amountToBeReturned = amountToBeReturned % notes[i];
    }
}

function hideMessage(){
    message.style.display = "none" ;
}

function showMessage(msg){
    message.style.display = "block" ;
    message.innerText = msg;
}
