//Creating objects in javascript
// 1.
let person = {
    name :'Raman' ,
    age : 18
};
console.log(person.name); //Raman


// 2.
const o = new Object();
o.foo = 24;
 
console.log(o);// { foo: 24 }


// JavaScript code demonstrating a simple object
// 3.
let school = {
    name: 'Sant Mohan singh Public School',
    location: 'Barara',
    established: '1986',
    displayInfo: function () {
        console.log(school.name + " Which is located in " + school.location + " was established in 1986")}
    };
school.display(); 


// 4.
let human = {
    firstName: 'Ramandeep',
    lastName: 'Kaur'
};
console.log(human['firstName']);
console.log(human['lastName']);

//5.
let fruit={
    fruit_name:'mango',
    fruit_color:'yellow',
    sayfruit: function(){
        console.log(this.fruit_name +' is '+ this.fruit_color + ' in color.' );
    }
};
fruit.sayfruit();