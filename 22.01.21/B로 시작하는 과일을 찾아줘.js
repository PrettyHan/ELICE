const fruits = ['apple', 'banana', 'orange', 'blueberry', 'strawberry']
var sum = 0; // b로 시작하는 과일의 개수를 저장하는 변수

/*지시사항을 따라 작성해주세요*/

const new_fruits = fruits.filter(v => v[0] == 'b')
sum = new_fruits.length

document.write(`b로 시작하는 과일은 ${sum}개`)