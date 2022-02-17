

document.getElementById('calculat').addEventListener('click',function(){

    // console.log('dddddddddddd');
    const foodfild = document.getElementById('foodi');
    const foodtext =foodfild.value;
    const foodinput = parseFloat(foodtext);
    console.log(foodinput);
    


    // rent input
    const rentfild = document.getElementById('renti');
    const renttext =rentfild.value;
    const rentinput = parseFloat(renttext);
    console.log(rentinput);
    // cloth input
    const clothfild = document.getElementById('clothi');
    const clothitext =clothfild.value;
    const clothiinput = parseFloat(clothitext);
    console.log(clothiinput);


    //calculet 3 value
    const xpance = document.getElementById('spn');

        const xpancetext = xpance.innerText; 
        const xpancefigure = parseFloat(xpancetext);
        const totalxpance = foodinput + rentinput + clothiinput;
        xpance.innerText = totalxpance;

        // collect income value


    const incomefild = document.getElementById('incomi');
    const incomitext =incomefild.value;
    const incominput = parseFloat(incomitext);
    console.log(incominput);

   // total balance after expances
   const balancces = document.getElementById('balancee');

        const balancetext = balancces.innerText; 
        const balancefigure = parseFloat(balancetext);
        const totalbalacne = incominput -totalxpance;
        balancces.innerText = totalbalacne;

   


})



// // handele deposite button
// document.getElementById('diposite-button').addEventListener('click',function(){
//     //get amount from deposite input fild
//     const deositefild = document.getElementById('deposite-input')
//     const depositeinputtext =deositefild.value;
//     const depositeinput = parseFloat(depositeinputtext);
//     console.log(depositeinput);

//     const depositetotal = document.getElementById('deposite-total');

//     const currentdepoamnttext = depositetotal.innerText; 
//     const currentdepoamnt = parseFloat(currentdepoamnttext);
//     const newdpstamunt = currentdepoamnt + depositeinput;
//     depositetotal.innerText = newdpstamunt

//     //update account balance

//     const balance = document.getElementById('balanc-total')
//     const balancetext = balance.innerText;
//     const previusbalancetotal = parseFloat(balancetext);
//     const newbalancetotal = previusbalancetotal + depositeinput;
//     balance.innerText =newbalancetotal;





//     // clear  the deposite fild
//     deositefild.value='';
// })


// // handale withdraw event handeler


// document.getElementById('widthrow-button').addEventListener('click',function(){
//     const widthrowinput = document.getElementById('widthrow-input');
//     const widthrowinputtext = widthrowinput.value;
//     const newwithdrowamout = parseFloat(widthrowinputtext);
//     console.log(newwithdrowamout);

//     //set withdrw total

//     const withdrwtotal = document.getElementById('withdraw');
//     const withdrawtotaltext = withdrwtotal.innerText;
//     const withdrawtotaltotal = parseFloat(withdrawtotaltext);
//     const finalwithdrw = withdrawtotaltotal + newwithdrowamout;
//     withdrwtotal.innerText = finalwithdrw ;

//     // update balance
     
//     const balancetotal = document.getElementById('balanc-total')
//     const balancetotaltext =balancetotal.innerText;
//     const prebalancetotalfigur = parseFloat(balancetotaltext);
//     const newbalance = prebalancetotalfigur - newwithdrowamout;
//     balancetotal.innerText=newbalance;


//     // clear width fild
//     widthrowinput.value = '';
// })












