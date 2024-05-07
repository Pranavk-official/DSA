const fifthRecursion = (counter = 0) => {
    if(counter >= 5){
        console.log("Done");
        return;
    }
    console.log(counter);
    return fifthRecursion(counter + 1)
}

fifthRecursion()

const recursion = new Solution

recursion.fifthRecursion()