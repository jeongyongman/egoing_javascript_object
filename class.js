class Person {
    constructor(name,first,second){
        this.name=name;
        this.first=first;
        this.second=second;
        // console.log('constructor');
    }
    // 객체를 만든다
    sum(){
        return 'prototype : '+(this.first+this.second);
    }
    // avg(){
    //     return (this.first+this.second)/2;
    // }
}

let kim = new Person('kim',10,20);
kim.sum = function(){
    return 'this : '+(this.first+this.second);
}
let lee = new Person('lee', 10, 10);
console.log("kim.sum()",kim.sum());
console.log("lee.sum()",lee.sum());
