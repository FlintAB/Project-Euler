** start of script.js **
// Сумма всех кратных чисел 3 или 5
function multiplesOf3Or5(number) {
   let result = 0;
   for (let i = 0; i < number; i++){
      // Проверка кратности
     if (i % 3 === 0 || i % 5 === 0){
       result+=i;
     }
   }
   return result;
}

multiplesOf3Or5(49);

** end of script.js **

