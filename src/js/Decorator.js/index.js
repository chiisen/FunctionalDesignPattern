// Decorator Pattern
function uppercaseDecorator(func) {
    return function(text) {
        const result = func(text);
        return result.toUpperCase();
    }
}

const greet = uppercaseDecorator(function(name) {
    return `Hello, ${name}`;
});

console.log(greet("Alice")); // 印出結果：HELLO, ALICE

/**
重構範例
*/
{
    // 定義一個基本的訂單類別 BaseOrder
    class BaseOrder {
      getTotalPrice() {
        return 100; // 基本訂單價格為 100
      }
    }
  
    // 定義一個抽象裝飾者類別 OrderDecorator
    class OrderDecorator {
      constructor(order) {
        this.order = order;
      }
  
      getTotalPrice() {
        return this.order.getTotalPrice();
      }
    }
  
    //創建具體的裝飾者類別，例如計算折扣的裝飾者 DiscountDecorator
    class DiscountDecorator extends OrderDecorator {
      constructor(order) {
        super(order);
      }
  
      getTotalPrice() {
        const basePrice = super.getTotalPrice();
        // 添加折扣計算邏輯
        return basePrice * 0.9; // 打 9 折
      }
    }
  
    // 使用 Decorator Pattern 將折扣功能動態地添加到訂單中，而不需要修改原始訂單類別。
    const baseOrder = new BaseOrder();
    console.log(baseOrder.getTotalPrice()); // 印出結果：100
  
    const orderWithDiscount = new DiscountDecorator(baseOrder);
    console.log(orderWithDiscount.getTotalPrice()); // 印出結果：90
  }