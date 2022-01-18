var fruit = ["Apple", "Banana", "Tomato"];

document.write(fruit.length);  //3
fruit.push("A");  // ["Apple", "Banana", "Tomato","A"] 뒤에 추가
fruit.unshift("B");  // ["B",Apple", "Banana", "Tomato","A"] 앞에 추가
document.write(fruit);

fruit.pop();  // ["B",Apple", "Banana", "Tomato"] 뒤에 제거
fruit.shift();  // [Apple", "Banana", "Tomato","A"] 앞에 제거