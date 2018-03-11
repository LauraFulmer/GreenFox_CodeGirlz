function average(num) {
    var odd = num.filter((num) =>{
        if (num % 2 !==0){
            return num;
        }
    })
    var oddSum=[0]
    for(var i=0; i<odd.length; i++){
        oddSum[0]= oddSum[0] + odd[i]
    }
    console.log(oddSum[0]/odd.length)
}
    
average([1, 2, 3, 4, 5, 6])
average([-3, -2, -1, 0, 1, 2, 3, 5, 7])