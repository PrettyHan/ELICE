
function move() {

  // 코드를 완성시켜 주세요.
    var box = getElementById('move');
    box.style.width = "600px";
    box.style.height = "600px";
    box.style.left = "300px";
    btn.innerHTML = '클릭완료';
};

var btn = getElementById('btn');

btn.addEventListener("click",move);  