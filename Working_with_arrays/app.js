/* PART 1
function getArrElement(arr) {
     return arr[0]
}

 console.log(getArrElement(1, 2, 3, 4,))
*/
/* ANCHOR PART 1 REFACTORED INTO 1 LINE
const getArrElement = arr => arr[0]
// print first element of array
console.log(getArrElement([1,2,3,4]));
*/

/* ANCHOR PART 2
//Give two arguments, return an array which contains these two arguments
function createArray(a, b) {
    var arr = [a,b]
    return arr

}
console.log(createArray(1, 2))
*/

/* ANCHOR PART 3 
function reverseArray(arr){
    return arr.reverse();
} */
// PART 3 REFACTORED INTO 1 LINE
// const reverseArray = arr => arr.reverse();
// console.log(reverseArray([1,2,3,4]));

//ANCHOR PART 4 function that accpets an array that returns the last element

// const getLast = arr => arr[arr.length - 1] ;
// console.log(getLast([1, 2, 3, 4, 5, 6, "ALi"]))

//ANCHOR PART 5 Create a function that turns an array into a string

// function arrayString(arr) {
//     return arr.join('')

// }
// console.log(arrayString([1, 2, 3, 4, "blue"]))

//ANCHOR PART 6 Create a function that takes an array and returns the data types of the array in a new array

// function oldData(arr){
//     var newArray = [];

//     for(var i = 0; i < arr.length; i++) {
//         newArray[i] = typeof arr[i]
//     }
//     return newArray
// }
// console.log(oldData(["Random", "shit", 1, 2, 3, [], true]))

//ANCHOR PART 6 Refactored
//  const oldData = arr =>  arr.map(x => typeof x);
//  console.log(oldData([1,2,3,4,"hello", "bruh"]));

//ANCHOR PART 7
// create a function that takes two strings and return either tre or false depending on whether the total
// number of the characters are in the first string are equal to the total number of the second string
// function checkLength(string1, string2){
//     if(string1.length == string2.length){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(checkLength("hello", "hello"));

//ANCHOR PART 7 Refactored
// function checkLength(string1, string2){
//     return string1.length === string2.length;
// }
// console.log(checkLength("hello",""));

//ANCHOR PART 8
// function onlyNumbers(arr){
//     return arr.filter(Number.isInteger);
// }
// console.log(onlyNumbers([1,2,3,"asdas",[],true]))

//ANCHOR PART 8 refactored
// write a function that takes an array of elements and returns only the numbers
// const onlyNumbers = arr => arr.filter(Number.isInteger);
// console.log(onlyNumbers([1,2,3,"asdas", [], true]))

//ANCHOR PART 9
// write a function that converts an object into an array
// function objToArray(obj){
//     var arr = [];
//     for (var i in obj){
//         arr.push(i,obj[i])
//     }
//     return arr;
// }
//({propertyName: propert Value})
//({key: Value})
// console.log(objToArray(({a: "WDASd", b: "JIOJN"})));

//ANCHOR PART 9 Refactored
// const objToArray = obj => Object.entries(obj);

//ANCHOR part 10
// create a funciton that takes an array of arrays and returns a single new array with largest numbers of each
// function sortBiggest(arr){
//     let newArr = [];
//     for (let i = 0; i < arr.length; i ++){
//         let maxNumber = arr[i][0]
//         for(let j = 0; j < arr[i].length; j ++){
//         if(arr[i][j] > maxNumber) {
//             maxNumber = arr[i][j];
//         }
//         }
//         newArr.push(maxNumber)    

//     }
//     return newArr;
// }
// console.log(sortBiggest([[1,2,3],[4,5,6],[7,8,9]]));


//ANCHOR IMPORTANT FOR ASSESSMENT 2
/* if you are manipulating an array, a for loop will always be used.
callback functions take one element of an array and puts it through a process (word => word.length > 6)
*/
//ANCHOR write a function that divides an array in to sub arrays based on n where n is the length of each sub array
//[1,2,3,4,5,6,7,8,9,10] -> [[1,2],[3,4],[5,6],[7,8],[9,10]]
// const subarrays = (arr, n) => {
//     let x = [];
//     while (arr.length) {
//         x.push(arr.splice(0, n));
//     }
//     return x;
// };
// console.log(subarrays([1,2,3,4,5,6,7,8,9,10],2))
// ANCHOR create a function that takes two arrays of numbers and returns an array of numbers which are common to both given arrays
// function arrCommon(arr, arr2) {
//     finalArr = []
//     // Loops through the first array
//     for (let i = 0; i < arr.length; i++) {
//         // Checks if the item is in the other array
//         if (arr2.includes(arr[i])) {
//             finalArr.push(arr[i])
//         }
//     }
//     return finalArr
// }
// console.log(arrCommon([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 8, 9, 10]))

/* Given an object with students and the grades that they made on the tests that they took

determine which student has the best test average.



The key will be the students name and value will be an array of their grades.

you will only have to return the students name. You do not need to return their Test Average */

// class student{
//     constructor(studentName,g1,g2,g3,g4){
//         this.studentName = studentName;
//         this.g1 = g1;
//         this.g2 = g2;
//         this.g3 = g3;
//         this.g4 = g4;
//         this.average = ((g1+g2+g3+g4) /4)
//     }
// }
// let Ali = new student("Ali", 67,84,75,63);
// let James = new student("James", 87,98,64,71);
// let Matt = new student ("Matt",90,58,73,86);
// //console.log(Matt.average)
// function getBest(s1,s2,s3){
//     // array containing students objects
//     let students = [s1,s2,s3]
//     let placeHolder = [];
//     let bestStudent = [];
//     // filter averages
//     for (i = 0; i < students.length; i ++){
//         placeHolder.push(students[i].studentName)
//         placeHolder.push(students[i].average)
//     }
//     bestStudent.push(placeHolder)
//     return bestStudent;
// }
// console.log(getBest(Ali,James,Matt));

// let product = {name: "Laptop", price: 1200}
// product.price = 1000;
// console.log(product)
// delete product.name;
// console.log(product);

// let user = {};
// console.log(user.property === undefined)

// let human = {name: "John", age: 30};
// console.log("age" in human)
// console.log("bruh" in human)

// let user = {
// name: "John",
// age: 30,
// isAdmin: true
// };
// for (let key in user){
//     console.log(key)
//     console.log(user[key])
// }

// research adding values inside of an object

// let user = {name: "John"}
// let admin = user;
// admin.name = "David";
// console.log(user.name)

// const user = "Bailey"
// user = "Matt"
// console.log(user)
// const user = {
//     name: "Bailey"
// }
// user.name = "Matt"
// console.log(user)
//ANCHOR Cloning objects

// let user = {
//     name: "John",
//     age: 30
// };
// let clone = Object.assign({}, user);
// // now clone is a fully independant clone
// clone.name = "David";
// console.log(user.name)

//ANCHOR object methods
// let user = {
//     name: "John",
//     age: 30
// }
// user.sayHi = function (){
//     console.log("Hello")
// }
// user.sayHi();
//ANCHOR Method Shorthand
// let user = {
//     sayHi() {
//         console.log("Hello")
//     }
// }
// user.sayHi();
//ANCHOR This keyword                   
let user = {
    name: "Bailey",
    age: 30,

    sayHi(){
        console.log(this.name) // this is the user
    }
}
user.sayHi();