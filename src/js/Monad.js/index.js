// Monad Pattern
class Monad {
  constructor(value) {
    this.value = value;
  }

  bind(func) {
    return func(this.value);
  }
}

function double(value) {
  return new Monad(value * 2);
}

const result = new Monad(3).bind(double);
console.log(result.value); // 印出結果：6

/**
重構範例
*/
{
  class Monad {
    constructor(value) {
      this.value = value;
    }

    static of(value) {
      return new Monad(value);
    }

    bind(func) {
      return Monad.of(func(this.value));
    }
  }
  // 創建一個非同步的函數 asyncFunction 來模擬一個需要時間來執行的操作
  function asyncFunction(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value * 2);
      }, 1000);
    });
  }
  // 將非同步操作包裝在 Monad 物件中，並使用 bind 方法來處理這個非同步操作。
  // 這樣一來，我們可以更容易地處理非同步操作的結果，並在需要時進行串聯和轉換。
}
