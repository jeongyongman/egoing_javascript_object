// function Person(){}
// let Person = new Function();
// 자바스크립트에서 function은 객체다
// 그래서 property를 가질 수 있다

function Person(name,first,second){
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum=function(){}

let kim = new Person('kim',10,20);
let lee = new Person('lee',10,10);

console.log(kim.name);

kim.sum();

// 어떤 객체가 있는데
// 그 객체가 자체적으로 갖고 있지 않는 어떤 값을 사용할려고 할 때
// 어떤 데이터를 근거로 해서
// 어디에서 그 객체가 갖고 있지 않은
// sum과 같은 것을
// 찾아내는가