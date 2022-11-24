// const myCar = {
//     make: 'BMW',
//     model: '528i',
//     info: {
//         color: 'red',
//         year: 2000 ,
//         service: {
//             mileage: 100000,
//             lastService: 'August 2022'
//         }
//     }
// };
// console.log(myCar.info.service.lastService);
// console.log(myCar['info']['service']['lastService']);

// myCar.info.service.nextService = 'March 2023';
// delete myCar.info.service.lastService

// console.log(myCar);


// console.log(myCar.make);
// console.log(myCae.model);
// console.log(myCar.populat);

// myCar.model = '640i';
// console.log(myCar);

// myCar.color = 'red';
// console.log(myCar);

// delete myCar.popular;
// console.log(myCar);

// const carPopularity = 'populat';
// myCar[carPopularity] = true;

// console.log(myCar);
// console.log(myCar['model']);

// const userName = 'Terminator';
// const friendsQty = 10000;

// const userProfile = {
//     userName,
//     friendsQty,
//     // name: userName,
//     // friends: friendsQty,
//     emailVerified: false
// }

// const userProfile2 = json.parse (JSON.stringify(userProfile));




// const newObj = JSON.stringify(userProfile);
// console.log(newObj);

// const objFromStr = JSON.parse(newObj);
// console.log(objFromStr);

// userProfile.userName = 'Capitan America';
// userProfile2.friendsQty = 20000;

// console.log(userProfile);
// console.log(userProfile2);

// let x = 5;
// let y = x;
// x = 20;
// console.log(x , y);

const btnText = {
    text:'Submit'
}
const btnStyle = {
    color: 'red',
    width: 200,
    height: 100
}

const redbutton = {
    ...btnText,
    ...btnStyle
}

console.log(redButton);

const myObj = {}
console.log(Boolean(myObjs));
