class Person {
    constructor(name,first,second){
        this.name=name;
        this.first=first;
        this.second=second;
        // console.log('constructor');
    }
    // 객체를 만든다
    sum(){
        return this.first+this.second;
    }
}
// Inheritance 상속
class PersonPlus extends Person {
    avg(){
        return (this.first+this.second)/2;
    }
}

let kim = new PersonPlus('kim',10,20);
console.log("kim.sum()",kim.sum());
console.log("kim.avg()",kim.avg());
