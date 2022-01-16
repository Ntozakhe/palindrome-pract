

function getValue(){
document.getElementById("alertID").classList.add("invisible"); // ensres that the alert remains invisible when the function starts running
document.getElementById("alertID2").classList.add("invisible");

let userString = document.getElementById("userInput").value;
if(userString.length === 0){
    alert("Please enter a STRING");
}else{
    userString = userString.replace(/[^a-zA-Z ]/g, "").trim().toLowerCase();
    let revString = reverseString(userString); 
    
    displayString(revString,userString);
}

}

function reverseString(userString){
    let revString = [];
    //we'll reverse a string using a for loop.
    for(let i = userString.length - 1; i >= 0; i--){
        revString += userString[i];
        
    }
    return revString;  
    
    }
    function displayString(stringRev,stringUser){
        if(stringRev === stringUser){
            document.getElementById("message").innerHTML = `Your string reversed is: <strong>${stringRev}</strong>`;
            document.getElementById("alertID").classList.remove("invisible");
        }else{
            document.getElementById("message2").innerHTML = `${stringRev} is not a <strong>PALINDROME</strong>`;
            document.getElementById("alertID2").classList.remove("invisible");
        }
    }