// Map-Reduce Pattern
const numbers = [1, 2, 3, 4, 5];

// Map: 將每個數字加一
const mappedNumbers = numbers.map(x => x + 1);

// Reduce: 將所有數字相加
const sumResult = mappedNumbers.reduce((x, y) => x + y);

console.log(sumResult); // 印出結果：20