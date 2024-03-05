//function declaration

function myfunction(a,b) {
    return a*b ;
}

let x = myfunction(2,3);
console.log(x)
//Another way of function declaration:
const a = function (j,k) {return j+k};

console.log(a(4,8));

///---------------

function student(name) {
    console.log(name + "is a good student.");
}

let name1 = "riya";
let name2 = "lovepreet";
let name3 = "jiya";

student(name1); 
student(name2);
student(name3);

//--------------

function people(txt, wrd) {
    console.log(wrd + " " + txt);
    console.log(txt + " is a good student.")
}
let text1 = "tania";
let text2 = "raman";
let text3 = "ridhi";
let text4 = "pulkit";
let text5 = "priyanshu";

let wrd = "Good Morning";
people(txt1, wrd);
people(txt2, wrd);
people(txt3, wrd);
people(txt4, wrd);
people(txt5, wrd);

//----------------------------

function sum(a,b,c) {
    let e=a+b+c;
    return e;
}
let returnVal = sum(1,2,3);
console.log(returnVal)

