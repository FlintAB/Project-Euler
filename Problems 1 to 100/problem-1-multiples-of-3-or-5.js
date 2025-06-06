** start of script.js **

function multiplesOf3Or5(number) {
   let result = 0;
   for (let i = 0; i < number; i++){
     if (i % 3 === 0 || i % 5 === 0){
       result+=i;
     }
   }
   return result;
}

multiplesOf3Or5(49);

** end of script.js **

