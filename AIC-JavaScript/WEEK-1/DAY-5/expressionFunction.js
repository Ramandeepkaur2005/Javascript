//Multiplication

let calmul = function Mul(x,y) {
    let z= x*y;
    return z;
}
console.log("Multiplication : " + calmul(7,4));

//division
let caldiv = (x,y) => {
    let z = x/y;
    return z;
}
console.log("Division : " + caldiv(24,4));

//using name input from the user using function
function userip(call){
    let name= prompt('Enter your name: ');
    call(name);
}
unrip(function(name){
    console.log('Welcome',name);
});