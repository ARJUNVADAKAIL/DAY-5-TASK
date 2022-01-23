const prime1=(arr)=>{
    return arr.filter((number) => {
 
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
}
console.log(prime1(myArray));
