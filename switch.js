// let x = 1;
// if (x > 0) {
//     var res = 'Hello world'
// }

// console.log(res);

// const result = 200;

// ==============================================================
// Alternativnaja konstrukcija ifu:

const year = 2024;

if (year % 4 === 0) {
    console.log(`${year} is a leap year`);
} else if (year % 4 === 1) {
    console.log(`Previous year was a leap year`);
} else if (year % 4 ===3) {
    console.log(`Next year will be a leap year`);
} else {
    console.log(`It is not a leap year`);
}
// toze samoe, no 4erez switch
switch (year % 4) {
    case 0:
        console.log(`${year} is a leap year`);
        break
    case 1:
        console.log(`Previous year was a leap year`); 
        break   
    case 3:
        console.log(`Next year will be a leap year`);
        break
    default:
        console.log(`It is not a leap year`);
}

// =============================================================

const month = 5;
switch (month) {
    case 6: 
        console.log('June. Start of summer!');
        break
    case 7:
        console.log('July. Middle of summer!');
        break
    case 8:
        console.log('August. End of summer!');
        break
    default:
        console.log('Not summer!');
 }
 

//  ========================================================

function unreachableCode(num) {
    if (num > 5) {
        return true
    }
    return false 
    // console.log('Good bye!');
}

console.log(unreachableCode(6));

// ============================================================

// const number = 10;

// number ? console.log(number + 10) : console.log(number - 10);

// number > 0 ? 

// ==================
const user = {
 name: 'jack',
 email: 'jack@example.com',
 emailVerified: false,
 friends: 1000
}

user.emailVerified
    ? console.log(`Hello ${user.name}. Everythong is ok`)
    : console.log(`Hello ${user.name},PLEASE VERIFY EMAIL.`);

user.friends > 500
    ? console.log(`You are popular!`)
    : console.log(`You are not popular`);

user.name.length < 5
    ? console.log('You have a short name!' + user.name)
    : console.log('You have a long name!' + user.name);

user.email && user.emailVerified
    ? console.log('All tasks are done! You are registered user!')
    : console.log('Some tasks are pending!');

    // ===============================================================
// let a = 5, b = 10, c = 12;
// ili
// let [a, b, c, d] = [1, 2, 3, 4, 5];
// ili 
let [a, b, c, d] = 'Hello'
console.log(a);
console.log(b);
console.log(c);
console.log(d);

let x = 5, y = 10;
[x, y] = [y, x]
console.log(x, y);