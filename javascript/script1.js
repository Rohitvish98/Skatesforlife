//if else stmnt
/*var balance=3000;
var adidas= 2500;

if(adidas <= balance)
    var msg = "We bought some dope shoes!";
else
    msg= "too broke man!";

console.log(msg);*/

//working with arrays. Inserting and deleting array elements
/*var students=["Rohit","Rahul","Virat"];
var naughtylist= [];

naughtylist.push(students[2]);

var index=naughtylist.indexOf("Virat");
console.log(naughtylist);

if(index>=0)
    naughtylist.splice(index,1);

console.log(naughtylist);*/

//working with javascript objects
/*var student1={
    firstname:"Rohit",
    lastname:"Vishwakarma",
    age:20
};*/ //creating an object 'student' with keys- firstname,lastname and age.

/*console.log(student1.firstname);
console.log(student1.lastname);
console.log(student1.age);*/

/*
var student2= new Object(); //creates a new object
student2.firstname="Dheeraj";
student2.lastname="Maurya";
student2.age=20; 

var student3= {}; //this also creates a new object
student3.firstname="Aditya";
student3.lastname="Birajdar";
student3.age=21; 

var std=[];
std.push(student1);
std.push(student2);
std.push(student3);

console.log(std);
*/

//working with bind function in javascript
this.car="Honda City"; //Aditya's car

var myGarage={
    car:"Lambhorghini Gallardo", //my car
    getcar: function(){
        return this.car;
    }
};

console.log(myGarage.getcar());

var getcarforlater=myGarage.getcar; //suppose I want to get my car later sometime from the garage

console.log(getcarforlater());//here we expect output to be 'Lambhorghini Gallardo' but it is 'Honda City'. This is bcoz we lost the scope of our object.The bind fxn helps us to keep this scope.

var therealgetcarforlater=myGarage.getcar.bind(myGarage);
console.log(therealgetcarforlater()); //after binding we get the expected output-'Lambhorghini Gallardo'



