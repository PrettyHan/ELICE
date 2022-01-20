function reverse(str){
    
    var reverStr = "";
    for(i = str.length - 1 ; i >= 0 ; i--) {
        reverStr += str.charAt(i)
        return reverStr;
    }
}

console.log(reverse("Nice to meet you"));