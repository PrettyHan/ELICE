function replace(str,from, to) {
    return str.split(from).join(to)
}

str = "1,2,3,4,5,6,7"

console.log(str.replace(str,",","z"))
