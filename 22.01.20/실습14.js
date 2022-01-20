function reverse(str){
    var reverStr = "";
    for (var i = str.length-1; i >= 0 ; i--)
    { 
    reverStr += str.charAt(i);    
    }
    return reverStr;
}

console.log(reverse("Nice to meet you"));
document.write(reverse("Nice to meet you"));