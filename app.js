var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var nextButton = document.querySelector("#next-button");
var checkButton = document.querySelector("#check-button");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var message = document.querySelector("#message-display");
var divReturned = document.querySelector("#div-cash-given");
var returnedChange = document.querySelector("#returned-change");

var notes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", () => {

    hideMessage();

    if(isNaN(billAmount.value)==true){
        showMessage("Enter amount in numbers");
    } 
    else {
        if(billAmount.value > 0) {
            nextButton.style.display = "none";
            divReturned.style.display = "block";
        }
        else{
            showMessage("Amount given should be greater than zero");
        }
    }
});

checkButton.addEventListener("click", function validateBillAndCashAmount() {

hideMessage();

if(isNaN(cashGiven.value)==true){
    showMessage("Enter amount in numbers");
} 
else {
    if( cashGiven.value > 0){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } 
        else {
            showMessage("Lose the job?");
        }
    } 
    else {
        showMessage("Amount given should be greater than zero");
    }
    }
})

function calculateChange(amountToBeReturned){
    returnedChange.style.display = "block";
    for(let i=0; i < notes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / notes[i]);
        amountToBeReturned = amountToBeReturned % notes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none" ;
}

function showMessage(msg){
    message.style.display = "block" ;
    message.innerText = msg;
    returnedChange.style.display = "none";
}
