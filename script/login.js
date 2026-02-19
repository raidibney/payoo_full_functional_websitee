console.log("hello world")

document.getElementById("login-btn").addEventListener("click", function() {
    
     //getting the mobile number input value 
    const mobilenumber= document. getElementById("mobile-number");
    const contactnumber= mobilenumber.value;
    console.log("Mobile number entered:", contactnumber);

    //getting the 4 digit pin value 
    const pininput= document.getElementById("pinnumber");
    const pinnumber=pininput.value;
    console.log("Pin number entered:", pinnumber);

    //mathing the number and pass an showing the alert message

    if 
    (contactnumber === "01308289884" && pinnumber === "1234") {
        alert("Login successful! Welcome to Payoo.");
        window.location.assign("./home.html");
        
    }
    else{
        alert("Invalid mobile number or pin. Please try again.");
    }
    return;
})