function calculateGrade(marks){
    let sum=0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        
    }
    let avg = sum / marks.length;
    let result = avg >=0 && avg <= 59 ? "F" : 
                avg >=60 && avg <= 69 ? "D" :
                avg >=70 && avg <= 79 ? "C" :
                avg >=80 && avg <= 89 ? "B" :
                avg >=90 && avg <= 100 ? "A" :"Bạn là thần đồng, thiên tài hoặc là thần đằng";
    return `Điểm trung bình là: ${avg} - Xếp loại: ${result}`;
}

const arr= calculateGrade([70,90,100,65,75]);
const arr2 = calculateGrade([90,55,95,80,77,65,70])
console.log(arr);
console.log(arr2)

