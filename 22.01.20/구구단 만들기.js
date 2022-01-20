function timesTable(n) {
    for(let i = 1; i<10; i++) {
        var result = n*i;
        document.writeln(`${n} x ${i} = ${result}`);
        document.writeln("<br>")
    }
    
}

timesTable(2); // 2단만 출력
timesTable(3); // 3단만 출력