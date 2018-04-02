//
// Object Destructuring
//

// const person = {
//     name: 'Sacha',
//     age: 24,
//     location: {
//         city: 'Paris',
//         temp: 24
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// } 

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

// const address = ['1299 s Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'France'] = address;
// console.log(`You're in ${city} ${state}.`);

const item = ['Coffee (hot)', '$3.00', '$3.50', '$3.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);