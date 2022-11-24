// Напишите программу которая проверит длину каждого имя в массиве
// Если длина меньше или равна 5 символам - добавить в массив shortNames
// *** Сложное *** удалить это же имя из массива users
// Решение задачи с удалением из массива
const users = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
const shortNames = [];

users.filter((user) => {
    if (user.length <= 5) {
        shortNames.push(user);
    } else {
        return user;
    }
});
  console.log(users);
  console.log(shortNames);
  

// Напишите функцию, которая для каждого имени в массиве
// выведет в консоль строку 
// Hello ИМЯ. Your name is ДЛИНА characters long!
const names = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
const message = function (arr) {
    arr.forEach((name) => 
    console.log(`Hello ${name}. Your name is ${name.length} characters long!`)
    );
};
message(names);

    

// напишите функцию которая примет объект в качестве аргумента
// Функция должна вернуть одну строку
// Your Honda Civic (is popular / is not popular). (It is not / it is) covered by warranty anymore!
// Вывод в скобках (is popular) зависит от свойства popular в объекте (т.е. если False то пишем что не популярная)
// Вывод в скобках (Is covered by warranty) зависит от свойства mileage (т.е. если больше или равно 100000 то нет гарантии)
const myCar = {
    make: 'Honda',
    model: 'Civic',
    popular: false,
    mileage: 10000
}
myCar.popular
? console.log(`Your ${myCar.make} ${myCar.model} is popular`)
: console.log(`Your ${myCar.make} ${myCar.model} is not popular`)

myCar.mileage < 10000
? console.log(`It is covered by warranty`)
: console.log(`It is not covered by warranty anymore`)

// Напишите функцию которая принимает два числа в качестве аргумента
// Если число отрицательное, то приводит его к положительному (-10 => 10)
// И складывает их

function sumOfTwoNumbers(a, b) {
    if (a < 0) {
        a *= -1
    }
    if (b < 0) {
        b *= -1
    }
    return console.log(a + b);
};
    sumOfTwoNumbers(-3, 7)

// Напишите функцию, которая складывает только положительные числа
// если одно из чисел отрицательное, то выводит строку (одно из чисел негативное)

function positiveNumbers(a, b) {
    if (a < 0 || b < 0) {
        return console.log('One number is negative!')
    }
        return console.log(a + b);

        // if (a >= 0 && b >= 0) {
        //     return console.log(a + b);
        // }
        // return console.log('One number is negative!')
    };

positiveNumbers(10, 7);