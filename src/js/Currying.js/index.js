// Currying Pattern
function add(x) {
  return function (y) {
    return x + y;
  };
}

const addFive = add(5);
const result = addFive(3);
console.log(result); // 印出結果：8

/**
重構範例
*/
{
  // 將一個接受多個參數的函數轉換為一系列接受單一參數的函數。
  // 原始的加法函數
  function add(x, y) {
    return x + y;
  }

  // 使用 Currying Pattern 重構加法函數
  function addCurried(x) {
    return function (y) {
      return x + y;
    };
  }

  // 使用 Currying Pattern 後的加法函數
  const addFive = addCurried(5);
  console.log(addFive(3)); // 印出結果：8
  // 這樣我們可以先傳入部分參數，然後再傳入剩餘的參數，實現了函數的柯里化
}
