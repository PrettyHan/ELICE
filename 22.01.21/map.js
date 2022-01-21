let A = ['1','2','3','4','5','6','7','8','9','10'];
A.map(v => parseInt(v))
console.log(A)

let B = ['Elice','Timer','A','B'];

B.map(v => { 
    return {
        name: v
    }
})
console.log(B)

let C = [1,2,3,4,5,6,7,8,9,10]

C.map((v,i) => i&2 == 0)
console.log(C)
