const odd3=(arr)=>{
    var temp=[]
for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0){

        temp.push(arr[i])
        
    }
    
}
return temp;
}

console.log(odd3([1,2,3,4,5,6,7]))

