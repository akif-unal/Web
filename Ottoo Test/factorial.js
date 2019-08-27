let factorial = (n) => {
    if(n < 0) return;
    return n === 0 ? 1 : n * factorial(n - 1); ;
};

console.log(factorial(-1));



variable1 = 'foo';
const variable2 = variable1  || 'bar';
console.log(variable2); // prints true

variable1 = 'foo';
variable2 = variable1  || 'bar';
console.log(variable2); // prints foo