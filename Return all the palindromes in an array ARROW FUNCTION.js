const pallindrom1=(arr)=>{
    var temp=[]
        for(var i=0;i<arr.length;i++){ 
            let str = arr[i];
            let strReverse = str.split("").reverse().join("");
            
            if (str === strReverse) {
              temp.push(str)
            }
        }
        return temp
    }
    console.log(pallindrom1(["arjun","is","guvian"]))
