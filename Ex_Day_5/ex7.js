function showProperties(object){
    for (const key in object){
        if(typeof object[key] === "string"){
            console.log(key);
        }
    }
}

const obj1= showProperties({
    name: "Tiên",
    age: 20,
    city: "Hồ Chí Minh",
    street:"33 Rạch Cát Bến Lức"
}) 
        