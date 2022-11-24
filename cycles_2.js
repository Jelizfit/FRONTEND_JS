// 1-qi CYCLE for
// struktura: for(start statement; condition; incrementation;) {

// }

// for (let i = 0; i < 1; i--) {

//     if (i === -2000) {
//         continue
//     }
//     console.log(i, i ** 2);
//     if (i === -2001) {
//         break
//     }
    
// }

// ============================================================

// const myArr = ['Jack', 'Mary', 'Sarah', 'Bob'];

// for (let i = 0; j = 0; i < myArr.length; i++, j--) {
//     console.log(`Hello ${myArr[i]}`);
//     console.log(j)
// }
// // ili
// myArr.forEach((element, index) => {
//     console.log(`Hello ${element}. index-ili drugoe nazvanie=${index}`)
// })

// for (let num1 = 0; num1 < 10; num1++) {
//     for (let num2 = 0; num2 <10; num2++) {
//         for (let num3 = 0; num3 <10; num3++) {
//             for (let num4 = 0; num4 <10; num4++) {
//                 console.log(num1, num2, num3, num4)
//             }
//         }
//     }
// } 

// 2-oj CYCLE while

// let counter = 0;

// while (counter <= 0) {
//     console.log('I can\'t stop!', counter);
//     counter++;
// }

// do {
//     console.log('Do while times', counter);
//     counter++;
// } while (counter <= 100);

// ======================================================
// 3-ij CYCLE for in

// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     info: {
//         color: 'red',
//         mileage: 10000,
//         isPopular: true
//     },
//     owners: {
//         first: 'Jack',
//         second: 'Mary',
//         third: 'Sarah'
//     }
// }

// for (key in myCar) {
//     console.log(key, 'key1');
//     // console.log(myCar[key]);
//     // console.log(typeof myCar[key]);
//     if (typeof myCar[key] === 'object') {
//         for (key2 in myCar[key]) {
//             console.log(key2, 'key2');
//         }
//     }
// }

// ========================================

// const myArr = ['Hello', true, 123, null, 'world', false];

// for (key in myArr) {
//     console.log(myArr[key]);
// }

// =============================================

// const myStr = 'Hello world!';

// for (key in myStr) {
//     console.log(myStr[key]);
// }

// =================================================

// 4-qj CYCLE for of

// const myArr = ['Hello', true, 123, null, 'world', false];

// for (val of myArr) {
//     console.log(val);
// }

// const myStr = '398859032';

// for (val of myStr) {
//     console.log(val);
// }

// ==========================================================

const myCar = {
        make: 'Honda',
        model: 'Civic',
        info: {
            color: 'red',
            mileage: 10000,
            isPopular: true
        },
        owners: {
            first: 'Jack',
            second: 'Mary',
            third: 'Sarah'
        }
    }
    console.log(Object.entries(myCar))
    for ([key, val] of Object.values(myCar)) {
        console.log(key, val);
    }
    for (entry of Object.entries(myCar)) {
        console.log(entry[0], entry[1]);
    }

    const sampleArr = [['Jack', 'Smith', 20], ['Bob', 'Summer', 35], ['Sarah', 'Gold', 18]];

    for ([name, surname, age] of sampleArr) {
        console.log(`Hello ${name} ${surname}. You are ${age} years old!`);
    }

    //  ili
    for (person of sampleArr) {
        console.log(`Hello ${person[0]} ${person[1]}. You are ${person[2]} years old!`);
    }