// print 1 to n using recursion

let print = (i,num) =>{
    if(i == num){
        return;
    }
    else{
        console.log(i);
        print(i+1,num);
    }
}

print(1,11);