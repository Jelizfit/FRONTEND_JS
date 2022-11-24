// let x = -9;
// if (x > 10){
//     console.log('x is greater than 10');
// } else if (x === 10) {
//     console.log('x is not equal to 10');
// } else if (x > 0) {
//     console.log('x is greater than 0')
// } else {
//     console.log('else')
// }

// =========================================================================

// if (x > 10) {
// console.log('x is greater than 10')
// }
// if (x !== 10) {
// console.log('x is not equel to 10')
// }
// if (x > 0) {
//     console.log('x is greater than 0')
// }

// ===========================================================================

// const idCode = '49602233738'

// if (idCode.length !== 11) 
//     if (idCode.length > 11) {
//         console.log('Code is too long!')
//     } else {
//         console.log('Code is too short!');
// } else {
//     console.log(idCOde);
// }

// ====================================================================================

// let y = '';

// if (y) {
//     console.log(y);
// } else {
//     console.log('Nothing to log!')
// }

// ====================================================================================

// let age = 11;

// if(age > 17) {
//     console.log('Adult');
// } else if (age > 14) {
//     console.log('Teenager');
// } else {
//     console.log('Child')
// }

// if (age > 17) {
//     console.log('Adult');
// } 

// if (age < 18 && age > 14) {
//     console.log('Teenager');
// }

// if (age > 15) {
//     console.log('Child');
// }

// ==========================================================

// let num = 0;
// if (num > 0 || num < 0) {
//     console.log("Num is not a 0!");
// }

// console.log(num && 'Hello');

// ==========================================================
// NA 53-EJ minute posmotretj ob etom!

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odds = [];
let evens = [];
numbers.forEach(num => {
    if (num !== 5) {
        if (num % 2 === 0) {
            evens.push(num);
        } else {
            odds.push(num)
    }
} 
});

console.log(odds);
console.log(evens);