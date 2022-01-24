const prime1=(arr)=>{
    return arr.filter((number) => {
 
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
}
console.log(prime1([1, 2, 3, 5, 7, 10, 12, 13, 15]));