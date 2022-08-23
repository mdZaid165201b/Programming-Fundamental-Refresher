// print n to 1 using recursion

let print = (i,num) =>{
    if(i == num){
        return;
    }
    else{
        print(i+1,num);
        console.log(i);
    }
}

print(1,11);