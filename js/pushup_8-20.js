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

