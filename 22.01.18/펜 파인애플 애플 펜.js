// 영어 단어가 들어있는 리스트입니다.
var words = ['i', 'have', 'a', 'pen', 'i', 'have', 'pineapple', 'i', 'have', 'an', 'apple', 'pen'];

// 지시사항을 참고하여 코드를 작성하세요.

words.splice(4,2);
words.splice(5,3);
var lyrics = words.join(" ");
console.log(lyrics);
var count 
console.log(lyrics.match(/p/g).length)


// 지시사항
// words 배열에서 splice를 이용해 특정 값을 제거하여 아래와 같은 배열로 만드세요.
// [ 'i', 'have', 'a', 'pen', 'pineapple', 'apple', 'pen' ]
// Copy
// join을 이용해서 공백을 기준으로 리스트를 연결하여 lyrics 변수에 문자열로 저장하세요.
// lyrics를 출력하세요.
// 문자 'p'의 개수를 count 함수를 이용해서 출력하세요.
// Tips!
// splice()를 이용해 특정 인덱스의 원소를 제거할 수 있습니다. splice(4, 2)와 같이 작성하는 경우, 4번째 부터 2개의 원소를 제거한다는 의미입니다.
// 배열.join()로 배열의 원소를 이어 붙여 문자열로 만들 수 있습니다. 기본적으로는 콤마를 기준으로 이어 붙이지만, 매개변수에 ' '을 넣으면 공백을 기준으로 이어 붙입니다.
// 문자열에서 특정 문자의 개수를 세기 위해 match와 정규 표현식을 이용합니다. 문자열.match(/p/g)을 통해 p 문자 리스트를 얻을 수 있습니다. 해당 리스트의 길이가 p 문자의 개수입니다.
// 링크를 통해 정규 표현식에 대해 더 자세히 알아보세요. //