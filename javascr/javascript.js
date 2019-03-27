"use strict";
// let numbers = [];

// for(let i = 0; i < 5; i++)
// {
//     let userInput = prompt(i+1 + "-ci reqemi daxil edin: ");
//     let userNumber = +userInput;
//     numbers.push(userNumber);
// }

// let max  = numbers[0];
// let min  = numbers[0];
// let middle  = numbers[0];

// for(let i = 0; i < numbers.length; i++)
// {
//     if(numbers[i] > max)
//     {
//         max = numbers[i];
//     }

//     if(numbers[i] < min)
//     {
//         min = numbers[i];   
// 	}
// 	if(max < middle < numbers[i] < middle < min)
//     {
//         middle = numbers[i];   
// 	}
// }

// alert(max);
// alert(min);
// alert(middle);





// HOMEWORK 1
// let result = [];

// let userInput = +prompt("Please, insert array length");
// while (isNaN(userInput) || userInput == 0) {
//     userInput = +prompt("Please, insert  valid  array length");
// }


// for (let i = 0; i < userInput; i++)
//  {
//     let userNumber = +prompt(`Please, insert ${i + 1}. number`);
//     while (isNaN(userNumber) || userNumber == 0) {
//         userNumber = +prompt(`Please, insert  valid  ${i + 1}.  number`)
//     }

//     result.push(userNumber)

// }
// console.log(result)
// let max= result[0]
// let min=result[0]
// let middle=0
// let sum=0
// for( let i=0;i<result.length;i++){
//     if(result[i]>max){
//         max=result[i]
//     }
//     else{
//         min=result[i]
//     }
    
// }
// for(let i=0;i<result.length;i++){
//     middle+=result[i]
// }
// sum=middle/result.length
// console.log(max,min,sum)



// HOMEWORK 2
// let numbers = [];
// let theNumberofevens = 0;
// let userInput = +prompt("Please, insert array length");
// while (isNaN(userInput) || userInput == 0) {
//     userInput = +prompt("Please, insert  valid  array length");
// }
// for(let i = 0; i < userInput; i++)
// {
//     let userInput = prompt(i+1 + "-ci reqemi daxil edin: ");
//     let userNumber = +userInput;
//     numbers.push(userNumber);
// }
// for(let i = 0; i < numbers.length; i++)
// {
// 	if( numbers[i] % 2 == 0 && numbers[i] != 0 ){
// 		theNumberofevens++;
// 	}
// }
// alert(`the number of evens is: ${theNumberofevens}`);



//HOMEWORK 3
// let numbers = [];
// let arrayLength = +prompt("Arrayin uzunlugunu daxil edin: ");
// let sumOfAll = 0;
// let sumOfEvens = 0;

// for(let i = 0; i < arrayLength; i++)
// {
//     let n = +prompt(i+1 + "-ci reqemi daxil edin: ");
//     numbers.push(n);

//     sumOfAll += n;
//     n % 2 == 0 ? sumOfEvens += n : null;
// }

// for(let i = 0; i < numbers.length; i++)
// {
//     sumOfAll += numbers[i];
//     // if(numbers[i] % 2 == 0) sumOfEvens += numbers[i];
//     numbers[i] % 2 == 0 ? sumOfEvens += numbers[i] : null;
// }

// console.log(`Sum of all: ${sumOfAll}; Sum of evens: ${sumOfEvens}; Sum of odds: ${sumOfAll - sumOfEvens}`);


//HOMEWORK 4
// let words = [];

// for(let i = 0; i < 5; i++)
// {
//     let word = prompt(i+1 + "-ci sozu daxil edin: ");
//     words.push(word);
// }

// let maxWord = words[0];
// let minWord = words[0];

// for (let w of words) 
// {
//     w.length > maxWord.length ? maxWord = w : null;
//     w.length < minWord.length ? minWord = w : null;
// }

// console.log(maxWord, minWord);
