function fizzBuzz(input){
    if(typeof input !== "number"){
        return "Not a number";
    }
    if(input % 3 === 0)
    {
        if(input % 5 === 0)
        {
            return "FizzBuzz" ;
        }
        else
        {
            return "Fizz";
        }       
    }
    else if(input % 5 === 0)
    {
        return "Buzz";
    }
    else{
        return input;
    }
};

/** VD:1 */
const num1 = fizzBuzz(9);

/** VD:2 */
const num2 = fizzBuzz(15);

// /** VD:3 */
const num3 = fizzBuzz(25);

// /** VD:4 */
const num4 = fizzBuzz(13);

// /** VD:5 */
const num5 = fizzBuzz("hello");
const num6 = fizzBuzz("13");
const num7 = fizzBuzz(undefined);
const num8 = fizzBuzz(null);

console.log(`VD1: ${num1}`);
console.log(`VD2: ${num2}`);
console.log(`VD3: ${num3}`);
console.log(`VD4: ${num4}`);
console.log(`VD5: ${num5}`);
console.log(`VD6: ${num6}`);
console.log(`VD7: ${num7}`);
console.log(`VD8: ${num8}`);