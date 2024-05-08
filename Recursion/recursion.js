const fifthRecursion = (counter = 0) => {
    if(counter >= 5){
        console.log("Done");
        return;
    }
    console.log(counter);
    return fifthRecursion(counter + 1)
}

fifthRecursion()

const fibonaaci = (n) => {
    if(n < 2) return n
    return fibonaaci(n - 1) + fibonaaci(n - 2)
}

const factorial = (n) => {
    
}

recursion.fifthRecursion()