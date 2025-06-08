** start of script.js **

// Нахождение большего делителя
function largestPrimeFactor(number) {
  let largestFactor = 1;
  let i = 2; // Начинаем с наименьшего простого числа

  while (i <= number) {
    if (number % i === 0) { // Если i — делитель
      largestFactor = i;    // Запоминаем его
      number = number / i;  // Делим число на i
    } else {
      i++; // Если не делится, переходим к следующему числу
    }
  }
  return largestFactor;
}

** end of script.js **

