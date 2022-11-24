// let x = 5, y = 3;
// let a;

// a = x + y;
// console.log(a);

// x = 7, y = 10;

// a = x + y;
// console.log(a);

// x = 3, y = 3;
// console.log(a);

// =========================================================================

// function sumTwoNumbers(a, b) {
//     const res = a + b;
//     console.log(res);
// }

// sumTwoNumbers(5, 3);
// sumTwoNumbers(3, 3);
// sumTwoNumbers(5, 2);
// sumTwoNumbers(5, 3);
// sumTwoNumbers(-1, 3);
// sumTwoNumbers('Hello', 'Jelizaveta');
// sumTwoNumbers(5, 3);
// sumTwoNumbers(5, 3);

// ========================================================================
// function sayHello(name) {
//     console.log(`Hello ${name}!`);
// }

// sayHello('Jelizaveta');
// console.log(sayHello('Jack'));

// console.log('Hello'.toUpperCase());
// console.log([1, 2, 3].push(4));
// console.log(console.log('Hello'));

// ========================================================================

// function squares(number) {
//     return number ** 2;
// }

// let res = squares(10);
// console.log(res);
// // ili
// console.log(squares(10));
// console.log(squares(100));

// ========================================================================

// Площадь треугольника по 3-м сторонам:
// let a = 3, b = 4, c = 5;

// function triangleArea(side_a, side_b, side_c) {
//     let halfPerimetr = (side_a + side_b + side_c) /2;
//     let area = (halfPerimetr * (halfPerimetr - side_a) * (halfPerimetr - side_b) * (halfPerimetr - side_c)) ** 0.5;
//     return area
// }

// console.log(triangleArea(a, b, c));
// console.log(triangleArea(5, 6, 4));

// ========================================================================


// function squares(number) {
//     let x = 10;
//     console.log(x);
//     return number ** 2
// }

// let x = 5;
// console.log(x);

// console.log(squares(10));

// ========================================================================

// const myCar = {
//     mske: 'Honda',
//     model: 'Civic',
//     mileage: 10000
// }

// function driveCar(car) {
//     let newCar = JSON.parse(JSON.stringify(car));
//     newCar.mileage += 1000;
//     return newCar
// }

// console.log(driveCar(myCar).mileage);

// ========================================================================

// Callback Function

// function wrapper(f) {
//     console.log('Starting!')
//     f();
//     console.log('Ending!')
// }

// function useHello() {
//     console.log('Hello world!');
// }

// function sayHello() {
//     console.log('Hello world!');
// }

// // wrapper(sayHello);
// // console.log(sayHello);
// useHello();

// function(x, y) {
//     return x ** y
// }
// function squares(num) {
//     console.log(num ** 2);
// }

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(squares)

// =======================================================

// const squares = function (num, num2=1) {
//     return num * num2;
// }

// setTimeout(function(){
//     console.log('Hello world!');
// }, 4000)

// =======================================================

const squares = (x, y) => {
    console.log(x ** y);
    console.log(x - y);
    console.log('Finished!');
};

squares(10, 5);