// 1 - 100
// Если число делится на 3 без остата, вывести число + FIZZ
// Если число делится на 5 без остата, вывести число + FIZZ
// Если число делится на 3 и на 5 без остата, вывести число + FIZZBUZZ

for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
        console.log(i, 'FIZZBUZZ');
    } else if (i % 3 === 0) {
        console.log(i, 'FIZZ');
    } else if (i % 5 === 0) {
        console.log(i, 'BUZZ');
    }
 }

 for (let i=1; i < 101; i++) {
    if (i % 5 === 0) {
        if (i % 3 === 0) {
            console.log(i, 'FIZZBUZZ');
        } else {
            console.log(i, 'BUZZ')
        }
    } else if (i % 3 ===0) {
        console.log(i, 'FIZZ');
    }
 }

 console.log(2 === '2');
 console.log(2 == '2');
