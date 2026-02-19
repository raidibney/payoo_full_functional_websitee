document.getElementById('cashout-btn').addEventListener('click',function(){
   //getting the number 
    const agentnumber = document.getElementById('agent-number');
    const agentnumbervalue = agentnumber.value;
    console.log(agentnumbervalue);
    if(agentnumbervalue.length !== 11){
        alert('Invalid agent number');
        return;
    }


    
   //getting the amount 
    const cashoutamount =document.getElementById('cashout-amount');
    const cashoutamountvalue = cashoutamount.value;
    console.log(cashoutamountvalue);

    //getting blance
    const blanceamount=document.getElementById('blance');
    const blanceamountvalue=blanceamount.innerText;
    console.log(blanceamountvalue);

    //new blance

    const newblance= Number(blanceamountvalue)-Number(cashoutamountvalue);
    if(newblance<0){
        alert('You have insufficient blance');
        return;
    }
    console.log(newblance);

    //pin number verification

    const pinnumber=document.getElementById('pin-number');
    const pinnumbervalue=pinnumber.value;
    if(pinnumbervalue === '1234'){
        alert('Cashout successful');
        blanceamount.innerText=newblance;

        //1-history container ke dhore niye asbo 
    const historyContainer = document.getElementById('transaction-container');
    //2-new div create korbo 
    const newHistoryDiv = document.createElement('div'); 
    //3-new div a inner html add korbo 
     newHistoryDiv.innerHTML = `
     <div class="transaction-card p-5 bg-base-100">
       cashout successfully from 
        ${agentnumbervalue} 
         amount: ${cashoutamountvalue}
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