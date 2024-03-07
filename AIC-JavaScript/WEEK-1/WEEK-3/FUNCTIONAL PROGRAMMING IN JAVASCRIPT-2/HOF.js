//Higher order function (hof)
//Higher order functions are functions that take one or more functions as arguments, or return a function as their result.

//-----------------

// Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);

// function to calculate area of the circle
const calculateArea =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
// function to calculate diameter of the circle
const calculateDiameter =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));
console.log(calculateDiameter(radius))

//map
const arr = [1, 2, 3, 4, 5];
const output = arr.map((num) => num += 10)
console.log(arr); // [1, 2, 3, 4, 5]
console.log(output); // [11, 12, 13, 14, 15]

const users = [
    {firstName: 'Jashanpreet', lastName: 'Singh', age: 25},
    {firstName: 'sarabjeet', lastName: 'Singh', age: 30},
    {firstName: 'lovepreet', lastName: 'Singh', age: 35},
    {firstName: 'navdeep', lastName: 'Singh', age: 40},
    {firstName: 'sidakpreet', lastName: 'Singh', age: 45},
]
const result = users.map((user) => user.firstName + ' ' + user.lastName)
console.log(result); // ['jashanpreet Singh', 'sarabjeet Singh ', 'lovepreet Singh', 'navdeep Singh', 'sidakpreet Singh']

//filter( method)
const arry = [1, 2, 3, 4, 5];
const oput = arr.filter((num) => num % 2) // filter out odd numbers
console.log(arry); // [1, 2, 3, 4, 5]
console.log(oput); // [1, 3, 5]

//for each( method)
const number = [ 21,87,89,56,94];
number . foreach(number => {
    console.log(number);
});



