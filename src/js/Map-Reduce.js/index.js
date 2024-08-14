// Map-Reduce Pattern
const numbers = [1, 2, 3, 4, 5];

// Map: 將每個數字加一
const mappedNumbers = numbers.map((x) => x + 1);

// Reduce: 將所有數字相加
const sumResult = mappedNumbers.reduce((x, y) => x + y);

console.log(sumResult); // 印出結果：20

/**
重構範例
*/
{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i] * 2;
    }
  }

  console.log(sum); // 印出結果：60
}

{
    /**
     * 在這個重構後的範例中，我們使用 filter 函數來過濾出偶數，
     * map 函數來將數字加倍，最後使用 reduce 函數計算加總。
     * 這樣一來，程式碼更具有可讀性和彈性，符合函數式程式設計的原則。
     */
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const isEven = (num) => num % 2 === 0;
  const double = (num) => num * 2;
  const sumReducer = (acc, curr) => acc + curr;

  const sum = numbers.filter(isEven).map(double).reduce(sumReducer, 0);

  console.log(sum); // 印出結果：60
}
