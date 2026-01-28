
function countTruthy(array){
    array.forEach((value ) => {
        if(Boolean(value) === true){
            console.log(`Truthy: ${value}`);
        }
    });
}
const arr = countTruthy([" ", undefined, 2, "hello", null, 3.6, true, "",NaN, "I'm Huynh Tien" ,false]);



