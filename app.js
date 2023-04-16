// Q1 Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.


// function evenSum(...a) {


//     let result = 0
//     for (let i = 0; i < a.length; i++) {


//         if (i % 2 == 0) {
//             result = result + i
//         }

//     }


//     return result

// }

// console.log(evenSum(1,2,3,4,5,6,7))


// Q2 Write a function that takes a string as input and returns the number of vowels in the string.

// function string(str) {

//     let count = str.match(/[aeiou]/gi).length
//     return count
// }

// let strings = prompt("Enter a String")

// let result = string(strings)

// console.log(result)

// Q3 Write a function that takes an array of strings as input and returns the length of the longest string in the array.



// let strings = ["hello world", "world", "hello", "hello world hello world"]


// function longestString(bhaiparameterhai) {

//     let result = '';
//     for (let i = 0; i < bhaiparameterhai.length; i++) {

//         let currentItem = bhaiparameterhai[i]
//         if (currentItem.length > result.length) {

//             result = bhaiparameterhai[i]
//             console.log( result)


//         }

//     }


//     return result.length

// }
// document.write(longestString(strings))



// Q4 Write a function that takes an array of numbers as input and returns the average of all the numbers in the array


// function array(...arr) {


//     let total = 0
//     let average;

//     // for (let i = 0; i < arr.length; i++) {
//     //     total = total + arr[i]                         //+= arr[i]
//     // }

//     for (let i in arr) {
//         total = total + arr[i]
//     }

//     average = total / arr.length
//     return average
// }
// console.log(array(1, 2, 3, 4, 5, 6, 7))




// Q5 Write a function that takes an object as input and returns an array of all the keys in the object.

// function func(a) {

//     let arrayOfObject = Object.keys(a)
//     return arrayOfObject

// }
// let object = {


//     a: "hello",
//     b: "world",
//     c: 20

// }

// console.log(func(object))

// Q6 Write a function that takes an array of objects as input and returns an array of all the values for a specified key in each object.


// function func(a) {

//     let arrayOfObject = Object.values(a)
//     return arrayOfObject

// }
// let object = {


//     a: "hello",
//     b: "world",
//     c: 20

// }

// console.log(func(object))



// Question no 7 Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.


// function uniqueString() {


//     let arr = ["apple", "banna", "pineapple", "mango", "apple", "banna", "pineapple", "mango"]

//     let neww = [...new Set(arr)]

//     return neww


// }
// console.log(uniqueString())

// Q8 Write a function that takes an array of numbers as input and returns the product of all the numbers in the array.

// function product(...a) {                    // (a)


//     let result = 1


//     for (let i in a) {

//         result = result * a[i]

//     }

//     return result
// }

// console.log(product(4,4))               // product([2,2])


// Q9 Example for Input and Output
// Function to sum all even numbers in an array: Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] Output: 30

// function sum(...a) {



//     let result = 0;

//     a.forEach((number) => {

//         if (number % 2 == 0) {

//             result = result + number
//         }

//     })
//     return result

// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))






// // Q10 Function to count the number of vowels in a string: Input: "hello world" Output: 3


// function str(yup) {

//     let count = yup.match(/[aeiou]/gi).length
//     return count
// }

// let word = 'hello world'
// let soo = str(word)

// console.log(soo)


//Q11 Function to find the length of the longest string in an array: Input: ["apple", "banana", "pear", "grapefruit"] Output: 10

// let strings = ["apple", "banana", "pear", "grapefruit"]


// function longestString(bhaiparameterhai) {

//     let result = '';
//     for (let i = 0; i < bhaiparameterhai.length; i++) {

//         let currentItem = bhaiparameterhai[i]
//         if (currentItem.length > result.length) {

//             result = bhaiparameterhai[i]


//         }

//     }


//     return result.length

// }
// document.write(longestString(strings))


// Q13 Function to return an array of all the keys in an object: Input: { name: "John", age: 30, city: "New York" } Output: ["name", "age", "city"]



// function arr() {


//     const person = {
//         name: "John",
//         age: 30,
//         city: "New York"
//     };

//     const myArray = Object.keys(person);



//     return myArray

// }

// console.log(arr())


// Q14 Function to return an array of all the values for a specified key in each object: Input: [{ name: "John", age: 30 }, { name: "Mary", age: 25 }, { name: "Peter", age: 35 }] Output: ["John", "Mary", "Peter"]

// function arr() {

//     return person.map(obj => obj[key])

// }

// const person = [
//     {
//         name: "John",
//         age: 30,




//     }, {

//         name: "Mary",
//         age: 25,

//     }, {

//         name: "peter",
//         age: 35
//     }
// ]
// let key = "name"
// let values = arr(person, key)
// console.log(values)






// // Q15 Function to return an array of all the unique strings in an array: Input: ["apple", "banana", "apple", "pear", "pear", "orange"] Output: ["apple", "banana", "pear", "orange"]


// function func() {

//     let array = ["apple", "banana", "apple", "pear", "pear", "orange"]

//     let soo = [...new Set(array)]


//     return soo




// }
// console.log(func())


// Q16 Function to return the product of all the numbers in an array: Input: [1, 2, 3, 4, 5] Output: 120



// function product(...a) {


//     let result = 1


//     for (let i in a) {

//         result = result * a[i]

//     }

//     return result
// }



// console.log(product(1, 2, 3, 4,5))





















