function fiboman(n) {
    if(n>2) {
        let fibo = [0, 1];
        for(let i = 2 ; i < n ; i++){
            let non = fibo[i-2]+fibo[i-1]
            if(non < n) {
            fibo.push(non);
            }
            
            else {
                break;
            }
        }
        return fibo;
    
    }

}
console.log(fiboman(10))