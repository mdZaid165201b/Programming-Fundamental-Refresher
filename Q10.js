//  find Grades according to the marks using function

let checkGrades = (marks) =>{
    if(marks>100 || marks <0) return "Invalid Marks";
    if(marks >= 91 && marks  <=100) return "AA";
    if(marks >= 81 && marks  <=90) return "AB";
    if(marks >= 71 && marks  <=80) return "BB";
    if(marks >= 61 && marks  <=70) return "BC";
    if(marks >= 51 && marks  <=60) return "CD";
    if(marks >= 41 && marks  <=50) return "DD";
    if(marks <= 40) return "FAIL";
}

console.log(checkGrades(41));