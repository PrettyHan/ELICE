let response = document.body.innerHTML;

//response.split('<div>')[1].split('제목: ')[1].split('<')[0]
//response.split('<div>')[2].split('제목: ')[1].split('<')[0]
//response.split('<div>')[3].split('제목: ')[1].split('<')[0]

let elements = response.split('<div>')
elements.splice(0,1);

elements.map((item) => {
    let _name = item.split('제목: ')[1].split('<')[0];
    let _rate = item.split('평점: ')[1].split('<')[0];
    let _summary = item.split('줄거리: ')[1].split('<')[0];
    return {
        name: _name,
        rate: _rate,
        summary: _summary,

    };

});