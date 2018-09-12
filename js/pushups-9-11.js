let tools = [{
    "title": "Hammer",
    "quantity": 25,
    "categories": [
        "tool"
    ],
    "price": 20
}, {
    "title": "Drill",
    "quantity": 5,
    "categories": [
        "tool",
        "powered"
    ],
    "price": 100
}, {
    "title": "Mower",
    "quantity": 5,
    "categories": [
        "tool",
        "gas",
        "outdoor"
    ],
    "price": 180
}, {
    "title": "Screwdriver",
    "quantity": 25,
    "categories": [
        "tool"
    ],
    "price": 10

}, {
    "title": "Dremel",
    "quantity": 2,
    "categories": [
        "tool", "awesome", "powered"
    ],
    "price": 75
}];


// Find the highest priced tool

let mostExpensive = tools.reduce((mE, nextTool) => {
    if (nextTool.price > mE.price) return nextTool;
    else return mE;
}, {price: -1});

console.log(mostExpensive);


//the same witch forEach
let mostExpensive2 = {price: -1};
tools.forEach(tool => {
    if (tool.price > mostExpensive2.price) {
        mostExpensive2 = tool;
    }
});
console.log(mostExpensive2);



// 1. write code that gets the total quantity of tools
// 2. Find the tool that belongs to the most categories
// 3. Find the highest priced tool
// 4. Get the average price of all the tools
// 5. Show only the tools that have a price of $100 or less



// Show only the tools that have a price of $100 or less

let cheapTools = tools.filter(tool => tool.price <= 100);
console.log(cheapTools);

//the same using forEach
let cheapTools2 = [];
tools.forEach((tool) => {
    if (tool.price <= 100)
        cheapTools2.push(tool);
});
console.log(cheapTools2);



// write code that gets the total quantity of tools

let totalInventory = 0;
tools.forEach(tool => totalInventory += tool.quantity);

//or

let totalInventory2 = tools.reduce((count, tool) => {
    return count + tool.quantity;
}, 0);
console.log(totalInventory2);



//

let valueTotals = tools.map(tool => {
    let temp = tool.quantity * tool.price;
    return {
        title: tool.title,
        valueOfInventory: temp
    }
});
console.log(valueTotals);

//or
let valueTotals3 =  [];
tools.forEach((tool => {
    valueTotals3.push({
        title: tool.title,
        valueOfInventory: tool.quantity * tool.price
    })
}));
console.log(valueTotals3);