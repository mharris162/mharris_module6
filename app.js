// object

const user = {
    bday: 'July 8',
    name: 'MacKenzie',
    age: 26,
    purchases: ['Kitten Heel--Size 8', 'Denim Jeans--Size 26', `Women's Sweater--Size Medium`]

};

console.log(user.purchases);


//object method- functions attached to an object

const user2 = {
    bday: 'July 8',
    name: 'MacKenzie',
    age: 26,
    purchases: ['Kitten Heel--Size 8', 'Denim Jeans--Size 26', `Women's Sweater--Size Medium`],
    sayName: function(){
        console.log(`${user2.name} Ordered the following items:  ${this.purchases}`);
    }
};

user2.sayName();


//array

const bday = ["March 30", 'June 6', 'January 4', 'August 8', 'July 8','November 11'];// array listed 
console.log(bday); // recalling full array to console

console.log(bday[4]); // recalling item 4 in array to console



bday.push('July 31'); //adding to array
console.log(bday); // recalling full array to console

bday.pop();// removing last from array
console.log(bday); // recalling full array to console



bday.shift(); // remove first from array
console.log(bday);// recalling full array to console

bday.unshift('April 14'); // add to beginning of array
console.log(bday);// recalling full array to console

bday.indexOf('November 11'); // recalling item list number in array
console.log(bday.indexOf('November 11'));

 

//array method


