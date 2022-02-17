

document.getElementById('calculat').addEventListener('click',function(){

    //--------------------------------------------------------food input
    const foodfild = document.getElementById('foodi');
    const foodtext =foodfild.value;
    const foodinput = parseFloat(foodtext);
    console.log(foodinput);
    // clear width fild
    foodi.value = '';
    


    //--------------------------------------------------------------- rent input
    const rentfild = document.getElementById('renti');
    const renttext =rentfild.value;
    const rentinput = parseFloat(renttext);
    console.log(rentinput);
    // clear width fild
    renti.value = '';





    //--------------------------------------------------------------- cloth input
    const clothfild = document.getElementById('clothi');
    const clothitext =clothfild.value;
    const clothiinput = parseFloat(clothitext);
    console.log(clothiinput);
    // clear width fild
    clothi.value = '';


    //-----------------------------------------------------------------calculet 3 value
    const xpance = document.getElementById('spn');

        const xpancetext = xpance.innerText; 
        const xpancefigure = parseFloat(xpancetext);
        const totalxpance = foodinput + rentinput + clothiinput;
        xpance.innerText = totalxpance;
      

     // -----------------------------------------------collect income value


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

document.getElementById('save').addEventListener('click',function(){


    // input fild--------------------------------------------------
    const incomefild = document.getElementById('incomi');
    const incomitext =incomefild.value;
    const incominput = parseFloat(incomitext);
    console.log(incominput);
    

  
    
 // saving input ----------------------------------------------
     const saveinputfild = document.getElementById('saveinput');
     const saveinputtext =saveinput.value;
    const saveinputpigure = parseFloat(saveinputtext);
     console.log(saveinputpigure);

     //calculat saving amount
    const savingamoutfild = document.getElementById('savingamout');

        const savingamoutetext = savingamoutfild.innerText; 
        const savingamoutfigure = parseFloat(savingamoutetext);
        const totasaving = incominput * saveinputpigure / 100;
        savingamoutfild.innerText = totasaving;

         //--------------------------------------------------------food input
    const foodfild = document.getElementById('foodi');
    const foodtext =foodfild.value;
    const foodinput = parseFloat(foodtext);
    console.log(foodinput);
    // clear width fild
    foodi.value = '';
    


    //--------------------------------------------------------------- rent input
    const rentfild = document.getElementById('renti');
    const renttext =rentfild.value;
    const rentinput = parseFloat(renttext);
    console.log(rentinput);
    // clear width fild
    renti.value = '';





    //--------------------------------------------------------------- cloth input
    const clothfild = document.getElementById('clothi');
    const clothitext =clothfild.value;
    const clothiinput = parseFloat(clothitext);
    console.log(clothiinput);
    // clear width fild
    clothi.value = '';


    //-----------------------------------------------------------------calculet 3 value
    const xpance = document.getElementById('spn');

        const xpancetext = xpance.innerText; 
        const xpancefigure = parseFloat(xpancetext);
        const totalxpance = foodinput + rentinput + clothiinput;
        xpance.innerText = totalxpance;

         // total balance after expances
   const balancces = document.getElementById('balancee');

   const balancetext = balancces.innerText; 
   const balancefigure = parseFloat(balancetext);
   const totalbalacne = incominput - totalxpance;
   balancces.innerText = totalbalacne;

// remain balance
const  remain = document.getElementById('remainbalance');

   const remainbalancetext = remain.innerText; 
   const remainbalancefigure = parseFloat(remainbalancetext);
   const remainbalancet = totalbalacne - totasaving ;
   remain.innerText = remainbalancet;


})














