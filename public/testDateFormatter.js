// WIKI ajouter cette entrée, comme façon de faire des tests. Pour lancer le test, il faut écrire dans la console :
// node public/testDateFormatter.js et si l'import fonctionne, tout devrait fonctionner et les console.log s'afficher
// dans le terminal

// testDateFormatter.js
import dateFormatter from './dateFormatter.js';

console.log("Test de dateFormatter.formatYear:");
console.log(dateFormatter.formatYear("2023-03-23"));

console.log("\nTest de dateFormatter.formatYearMonth:");
console.log(dateFormatter.formatYearMonth("2023-03-23"));

console.log("\nTest de dateFormatter.formatFull:");
console.log(dateFormatter.formatFull("2023-03-23"));

// Test avec plusieurs dates
const testDates = ["2023-03-23", "2024-12-31", "2022-01-01"];

console.log("\nTests avec plusieurs dates:");
testDates.forEach(date => {
  console.log(`\nPour la date ${date}:`);
  console.log("formatYear:", dateFormatter.formatYear(date));
  console.log("formatYearMonth:", dateFormatter.formatYearMonth(date));
  console.log("formatFull:", dateFormatter.formatFull(date));
});