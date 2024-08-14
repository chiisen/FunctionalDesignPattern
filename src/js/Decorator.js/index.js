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