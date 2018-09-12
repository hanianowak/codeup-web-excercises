//write first 10 Fibonacci numbers

const getFib = n => {
    let fibs = [1,1];
    for (let i=1; i<n; i++){
          fibs.push(fibs[i]+fibs[i-1])
    }
    console.log(fibs);
};

getFib(10);


// other way
const getFib2 = n =>  {
    let fibs = []
    if(n===0) fibs.push(0)
    if(n===1) fibs.push(1)
    else fibs.push(getFib2(n-1)[n-1]+getFib2(n-2)[n-2])

return fibs;
    
};

getFib2(10);


