// printing statement in js we use
// console.log('hello world');
// console.log() is function to print the statement

// variable
// let firstName = 'sanket';
// console.log(firstName);
// let lastName = 'mane'
// console.log(lastName);
// but it will print both on different line 
//to print on same line we can do this
// console.log(firstName , lastName);

// as we are using let to declare variable same 
// we can use var to declare variable
// let and var holds value which can be changed 
// and we have one more word const which store value
// but their variable cannot be reassinged with another value

// const store = 24;
// console.log(store)
// if we try to change it will give error
// store = 50;
// console.log(store)

// variable naming rules (valid)
// 1. no spaces
// 2. must start with _ , $ or any alphabet
// 3. can contain letter  , numbers , underscore and sign
// 4. case sensitive

// datatype

// const name = 'sanket'; // string datatype
// const number = 32; // int datatype
// const number_float = 38.94; //float datatype
// const boolvalue = true; //true or false

// array 
// it means a list of things which store all datatype
// array lets us store multiple values in a single variable

// const fruits = ['mango','apple', 'banana' , 32 , 32.3];
// console.log(fruits);

// accessing single element by indexing
// console.log(fruits[1]);

// adding element
// fruits.push('orange');
// console.log(fruits)

// adding element in starting
// fruits.unshift('watermelon');
// console.log(fruits);

// deleting element
// fruits.pop() //it will last element
// console.log(fruits);

// deleting element from strating 
// fruits.shift();
// console.log(fruits);

//deleting from in between 
// const removed = fruits.slice(0,2);
//sline(start_index , end_index)
// after deleting in between we have to store in new variable
// console.log(removed);

// length of list
// console.log(fruits.length);


// object literal : it is a container which stores multiple value
// in key_value pair like dict in python

// const person = {
//     firstName : 'sanket',
//     lastName: 'mane',
//     city: 'pune',
//     age:21,
//     hobbies: ['basketball','coding']
// };
// console.log(person);

// to access values we can directly access like indexing 
// console.log(person.firstName , person.age);

//changing value
// person.age = 20;
// console.log(person);

// adding new key and pair
// person.height = 5.6;
// console.log(person);

// to add element in array of literals
// person.hobbies.push('trekking');
// console.log(person);

// adding object literal in object literal
// const person2 = {
//     name: 'sanket',
//     age: 13,
//     hobbies: ['dance','cricket'],
    //object literals under object literals
//     phoneNum:{
//         num1:65655465,
//         num2:44544468
//     },
//     address:{
//         country:'india',
//         state:'maharashtra',
//         city:'pune'
//     }
// }
// console.log(person2);

// array of object

// const person = [
//     {
//         name:'sanket',
//         age:21,
//         iscoder:true
//     },
//     {
//         name:'ramesh',
//         age:33,
//         iscoder:false
//     },
//     {
//         name:'rohit',
//         age:19,
//         iscoder:true
//     }
// ]
// console.log(person);
// accessing array object
// console.log(person[2]);
// console.log(person[2].name);
// changing value
// person[1].name = "shivam";
// console.log(person[1]);


// conditionals statement
// if-else
// const age = 10; 
// if(age > 18){
//     console.log("you can get licence");
// }else{
//     console.log("you can't get licence");
// }

//switch case
// const fruit = 'mango';
// switch (fruit) {
//     case 'apple':
//         console.log('red apple')
//         break;
//     case 'mango':
//         console.log('yellow mango')
//     default:
//         console.log("enter mango or apple")
//         break;
// }

// loop
// for loop
// const num = 5;
// for (let i = 0; i < num; i++) {
//     console.log(i);
// }

// const fruit = ['apple','mango','banana','watermelon'];
// for (let i=0; i<fruit.length; i++){
//     console.log(fruit[i]);
// }

// while loop
// let x = 0;
// while(x < 5){
//     console.log(x);
//     x++;
// }

// for of loop
// const fruit = ['apple','mango','banana','watermelon'];
// for(newfruit of fruit){
//     console.log(newfruit)
// }

// functions

// function printDetails(){
//     console.log('name: sanket mane')
//     console.log('age:21')
//     console.log('city:pune')
// }

// printDetails();

// const fruit = ['apple','mango','banana','watermelon'];
// function printFruits(){
//     for(newfruit of fruit){
//         console.log(newfruit)
//     }
// }
// printFruits();

// creating function which will print values of both array
// const fruit = ['apple','mango','banana','watermelon'];
// const language = ['java','python','c++','c'];

// function printingArray(alldata){
//     for (newdata of alldata) {
//         console.log(newdata)
//     }
// }
// printingArray(fruit);
// printingArray(language)

// return type
// function sum(num1 , num2){
//     const addition = num1 + num2;
//     console.log(addition);
// }
// sum(2,5)

// arrow function 
// it is same as normal function only difference if of syntax which is small in arrow fun
// const sum = (num1,num2) => {
//     const add = num1 + num2;
//     return add;
// };
// const mysum = sum(2,4);
// console.log(mysum);

// const sayhello = (name) =>{
//     console.log('hello',name)
// };

// const sayhello = (name) => console.log('hello',name)
// sayhello('sanket');

