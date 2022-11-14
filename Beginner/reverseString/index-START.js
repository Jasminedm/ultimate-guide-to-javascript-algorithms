/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/
//SITE: https://web.archive.org/web/20210610093526/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/string-reversal#toc-using-reduce-

//SPLIT()
// function reverseString(text) {
// return text.split('').reverse().join('')
// }


//...SPREAD OPORATER 
// function reverseString(text) {
//     return [...text].reverse().join('')
//     }


//FOR LOOP
    // function reverseString(text) {
    //     let result = ""
    
    //     for (let i = text.length - 1; i >= 0; i--) {
    //         result += text[i]
    //     }
    
    //     return result
    // }

//FOR OF LOOP - NEED BETTER UNDERSTANDING
    // function reverseString(text){
    //     let result = "";
    
    //     for(let char of text){
    //         result = char + result
    //     }
    
    //     return result;
    // }


    //RECURSIVE - ????
    function reverseString(text) {
        if (text === "") {
            return ""
        } else {
            return reverseString(text.substr(1)) + text[0]
        }
    }

//REDUCE()
    function reverseString(text) {
        return text.split("").reduce((acc, char) => char + acc, '')
    }


    //REDUCE & SPREAD OPPORATER
    function reverseString(text) {
        return [...text].reduce((acc, char) => char + acc, '')
    }

    

module.exports = reverseString