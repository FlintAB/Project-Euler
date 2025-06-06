** start of script.js **

function fiboEvenSum(n) {
  if (n < 2) return 0; // если n меньше 2, чётных чисел Фибоначчи нет
  
  let a = 0, b = 2, sum = 2; // sum = 0 + 2
  
  while (true) {
    const nextEvenValue = 4 * b + a; // следующее чётное число
    
    if (nextEvenValue > n) break; // если превысило n — выходим
    
    sum += nextEvenValue; // добавляем к сумме
    a = b;                // обновляем a
    b = nextEvenValue;    // обновляем b
  }
  
  return sum;
}

** end of script.js **

