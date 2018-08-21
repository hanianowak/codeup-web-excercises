function multiply(a, b) {
    var multi = 0;
    for (var i = 0; i < b; i++)  {
        multi += a;
    }
    return multi;
}
console.log(multiply(4,5));

function exponentiate(x, y) {
    var multi = 1;
    for (var i = 0; i < y; i++)  {
        multi *= x;
    }
    return multi;
}
console.log(exponentiate(2,3));


// 8-21
function factorial(input) {
    var product1 = 1;
    for (var i = input; i > 0; i--) {
        product1 *= i;
    }
    return product1;
}

console.log(factorial(5));


function summation(x) {
     var product2 = 0;
     for (var i = x; i>0; i--){
         product2 += i;
     }
     return product2;
}
console.log(summation(5));
console.log(summation(2));
console.log(summation(10));
console.log(summation(4));
