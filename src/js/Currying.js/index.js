// Currying Pattern
function add(x) {
    return function(y) {
        return x + y;
    }
}

const addFive = add(5);
const result = addFive(3);
console.log(result); // 印出結果：8
