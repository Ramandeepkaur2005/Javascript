//self invoked function

(function () {
    console.log('Hi I am calling myself!');
})();
let text="This function is immediatey invoked.";
(function() {
    alert(text);
})();