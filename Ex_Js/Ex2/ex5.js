function showNumbers(limit){
    if(typeof limit !== "number"){
        console.log("Not a number");
    }
    else{
        for(let i = 0; i<=limit ;i++){
            if(i===0){
                console.log(`${i}`);
            }
            else{
                if(i % 2 === 0){
                    console.log(`${i} EVEN`);
                }
                else{
                    console.log(`${i} ODD`)
                }
            }
        }
    }
    
}

const list1=showNumbers(21);
const list2=showNumbers("");
const list3 = showNumbers(undefined);
