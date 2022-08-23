// find area of triangle using Heron's formula

let findAreaOfTriangle = (side1,side2,side3)=>{
    let S = (side1+side2+side3)/2;

    let temp = Math.sqrt(S*(S-side1)*(S-side2)*(S-side3));
    console.log(temp);
}


findAreaOfTriangle(9,40,41);