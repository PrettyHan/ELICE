function dummyFetch_getUser() {
    const randTime = parseInt(Math.random()*1000);
    const dummyData = {
        profile: "http://~~.png",
        name:"강선규",
        company:"Elice",
    };
    return new Promise(resolve => setTimeout(() => {
        resolve(dummyData);
    },randTime));
}