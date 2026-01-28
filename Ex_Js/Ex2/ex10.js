/** Function dùng để in số nguyên tố từ 2 đến tham số nhập vào limit */
function showPrimes(limit){
    for (let i = 2; i <= limit; i++){
        let count =0;
        for(let j=1;j <= i;j++){
            if(i % j === 0){
                count+=1;
            }
        }
        if(count === 2){
            console.log(i);
        }
    }
}

const snt= showPrimes(30);