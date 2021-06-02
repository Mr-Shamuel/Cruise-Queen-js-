// function firstIncrease(){
//     let firstInput = document.getElementById('first-input');
//     let firstNewValue = parseInt(firstInput.value);
//     // firstNewValue++;
//     const firstUpdate = firstNewValue + 1;
   
//     firstInput.value = firstUpdate;
//     // firstClass
//     var firstclassBalance = firstUpdate *150;
//     console.log(firstclassBalance);

//     document.getElementById('sub').innerText = firstclassBalance;

// }

// function firstdecrease(){
//     let firstInput = document.getElementById('first-input');
//     let firstNewValue = parseInt(firstInput.value);
//     let firstUpdate = firstNewValue - 1;
//     // firstNewValue++;
//     if( firstUpdate ==0 || firstUpdate>0 ){
     
   
//         firstInput.value = firstUpdate;
//         var firstclassBalance = firstUpdate *150;
//     document.getElementById('sub').innerText = firstclassBalance;
//     }
   
   

// }

function firstIncrease(){
   handeler(true);
}

function firstdecrease(){
    handeler(false);
}

function handeler(result){
    let firstInput = document.getElementById('first-input').value;
    let firstNewValue = parseInt(firstInput);
    if(result==true){
        // firstUpdate = firstNewValue + 1;
        // firstNewValue++;
       var  firstNewValuesss = firstNewValue +1;   
    }
    if(result==false && firstNewValue>0){
           // firstUpdate = firstNewValue - 1;
    // firstNewValue--;

    var firstNewValuesss = firstNewValue -1;   
     
    }
    
    document.getElementById('first-input').value= firstNewValuesss;
    
    finalBalance();


}


function economyIncrease(){ 
    handeler2(true);
    
}
function economyDecrease(){
    handeler2(false);
}

function handeler2(result2){
    const economyInput=  document.getElementById('economy-input').value;
    let economyUpdate =parseInt(economyInput);
        if(result2==true)
        {
            economyUpdate++;

        }
        if(result2==false && economyUpdate>0)
        {
            economyUpdate--;

        }
    
    document.getElementById('economy-input').value =economyUpdate;

        finalBalance()
    
    

}

function finalBalance(){
    var newBalance = document.getElementById('first-input').value;
    var newBalanceUpdate = newBalance * 150;
    var newBalance2 = document.getElementById('economy-input').value;
    var newBalanceUpdate2 = newBalance2 * 100;
    var newTotal = newBalanceUpdate + newBalanceUpdate2;
    document.getElementById('sub').innerText = newTotal; //total

    const tax = newTotal * 0.1;
    document.getElementById('tax').innerText = tax; //tax added

    const totalAmmount =  tax + newTotal;
    document.getElementById('total').innerText = totalAmmount;

  
}


    function popUp(){
        //********** way 1 **********
   
swal("Thank You !", " You Successfully  booked ", "success"); 



 
}




