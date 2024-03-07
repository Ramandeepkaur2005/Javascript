//Error Handling
//The try statement defines a code block to run (to try).
//The catch statement defines a code block to handle any error.
//The finally statement defines a code block to run regardless of the result.
//The throw statement defines a custom error.
function yourFunc() {
    let a = 20;
    try {
        console.log("Value of variable a is : " + a);
    }
    catch (e) {
        console.log("Error: " + e.description);
    }
}
yourFunc();

//------------------------------------------

try {
    adalert("Welcome to coding!");
}
catch (err) {
    console.log(err);
}

//-------------------------------------------

try {
    throw new Error('Yeah... Sorry');
}
catch (e) {
    console.log(e);
}

//--------------------------------------------

try {
    console.log('try');
} catch (e) {
    console.log('catch');
} finally {
    console.log('finally');
}
