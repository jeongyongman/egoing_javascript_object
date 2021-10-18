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
    constructor(name,first,second,third){
        super(name,first,second); // 부모 class의 생성자
        this.third=third;
        // console.log('constructor');
    }
    // 객체를 만든다
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

let kim = new PersonPlus('kim',10,20,30);
console.log("kim.sum()",kim.sum());
console.log("kim.avg()",kim.avg());
