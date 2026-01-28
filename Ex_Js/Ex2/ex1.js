function maxMin(a,b){
    if(a > b){
        console.log(`Số lớn nhất là ${a}`);
    }
    else if(b > a){
        console.log(`Số lớn nhất là ${b}`);
    }
    else{
        console.log("Có thể là 2 tham số nhập vào bằng nhau hoặc không phải là kiểu number");
    }
}

let num1 = maxMin(2,7);
let num2 = maxMin(10,5);
let num3 = maxMin(4,4);