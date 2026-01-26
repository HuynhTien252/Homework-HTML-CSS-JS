function isLandscape(width, height){
    if(width > height){
        return true;
    }
    else{
        return false;
    }   
}

const img = isLandscape(300,400); //false

const img2 =isLandscape(450,200); // true

console.log(img);
console.log(img2)