document.getElementById('addmoney-btn').addEventListener("click",function(){


    //selecting bank validation

    const bankname=document.getElementById("add-money-bank");
    const banknamevalue=bankname.value;
    if(banknamevalue === "Select a bank"){
        alert('Please select a bank');
        return;
    }
    //getting the account number
    const accountnumber=document.getElementById("account-number");
    const accountnumbervalue=accountnumber.value;
    console.log(accountnumbervalue);

    if(accountnumbervalue.length !== 11 ){
        alert('Invalid account number');
        return;
    }

    //getting the added amount 
    const newaddedamount=document.getElementById("addmoney-amount");
    const newaddedamountvalue=newaddedamount.value;
    console.log(newaddedamountvalue);

    //getting new blance
    const blanceamount=document.getElementById('blance');
    const blanceamountvalue=blanceamount.innerText;
    console.log(blanceamountvalue);

    //new blance
    const newblance= Number(blanceamountvalue)+Number(newaddedamountvalue);
    

    //veryfyin the pin number 
    const pinnumber=document.getElementById('addmoney-pin-number');
    const pinnnumbervalue=pinnumber.value;

    if(pinnnumbervalue === '1234'){
        alert(`money added successfully from ${banknamevalue}  at ${new Date()}`);
        blanceamount.innerText=newblance;
    

    //1-history container ke dhore niye asbo 
    const historyContainer = document.getElementById('transaction-container');
    //2-new div create korbo 
    const newHistoryDiv = document.createElement('div'); 
    //3-new div a inner html add korbo 
     newHistoryDiv.innerHTML = `
     <div class="transaction-card p-5 bg-base-100">
       money added successfully from 
        ${banknamevalue} 
         at ${new Date()}
    </div>
     
     `;

     historyContainer.append(newHistoryDiv)
    }

    else{
        alert('Invalid pin number');
        return;
    }

})