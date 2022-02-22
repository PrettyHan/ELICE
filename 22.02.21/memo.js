// 매개변수로 boolean을 입력 받아, true인 경우 "Buy milk"를 6번 출력하는 코드를 작성하세요.
function buymilk(a) {
    if(a) {
        console.log('Buy milk') * 6
        
    }
    else if(!a) {
        console.log('nothing')
    }
} 

module.exports = buymilk