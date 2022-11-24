const myArr = ['one', [1, 2, [3, 4, 5], 6, 7, 8], true, undefined, {make: 'honda', model: 'civiv'}, 1231];

const myCar = {
    make: 'Honda',
    model: 'Civic'
}

console.log(Object.keys(myCar));
console.log(Object.values(myCar));
console.log(Object.entries(myCar));


// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------


// const myArr = [1, 2, 3];

// myArr.push(4);

// myArr.unshift(0);

// let poppedItem = myArr.pop();
// myArr.shift();

// console.log(myArr.pop)
// console.log(myArr);


// -----------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------


// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const squares = []
// myArr.forEach(num => {
//     squares.push(num ** 2);
// });
// const squareSquares = [];

// squares.forEach(num => {
//     squareSquares.push(num ** 2);
// })
// console.log(squareSquares);

// const people = [{name:'Jack', surname: 'Smith'}, {name:'Mary', surname: 'Gold'}, {name:'Peter', surname: 'Jackson'}];

// people.forEach(person =>{
//     console.log(`Hello ${person.name} ${person.surname}!`);
// });