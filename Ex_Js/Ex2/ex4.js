function checkSpeed(speed){
    const speedDefault =70;
    if(speed<= speedDefault){
        console.log("OK");
    }
    else{
        let calc = speed - speedDefault;
        let points = Math.floor(calc / 5) ;
        if(points>12){
            console.log("License suspended");
        }
    }
}

const spd1= checkSpeed(135); // Vượt 12 điểm phạt tốc độ
const spd2= checkSpeed(69); // Dưới 70km/h
const spd3= checkSpeed(70); // Bằng 70 km/h