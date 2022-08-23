// find third angle of Triangle

let findThirdTriangle = (angle1,angle2) =>{
    let temp = angle1+angle2;
    return 180-temp;
}

console.log(findThirdTriangle(35,30));