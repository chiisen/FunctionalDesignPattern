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
