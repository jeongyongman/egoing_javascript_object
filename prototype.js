function Person(name,first,second,third){
    // 초기상태를 설정한다
    this.name= name;
    this.first= first;
    this.second= second;
    this.third= third;
}
// 객체를 만든다
Person.prototype.sum = function(){
    return 'prototype : '+(this.first+this.second+this.third);
}
let kim = new Person('kim', 10, 20, 30); // 생성자 construct
kim.sum = function(){
    return 'this : '+(this.first+this.second+this.third);
}
let lee = new Person('lee', 10, 10, 10);
console.log("kim.sum()",kim.sum());
console.log("lee.sum()",lee.sum());
