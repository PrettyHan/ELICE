function fiboman(n) {
    let fibo = [0, 1];
    if(n>2) {
        for(let i = 2 ; i < n ; i++){
            let non = fibo[i-2]+fibo[i-1]
            if(non < n) {
            fibo.push(non);
            }
            
            else {
                break;
            }
        }
    }
    else {
        fibo = [0]
    }
    return fibo;
}

  console.log(fiboman(n))