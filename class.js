class Person {
    constructor(name,first,second){
        this.name=name;
        this.first=first;
        this.second=second;
        console.log('constructor');
    }
}


let kim = new Person('kim',10,20);
console.log('kim',kim);
// kim.sum = function(){
//     return 'this : '+(this.first+this.second+this.third);
// }
// let lee = new Person('lee', 10, 10, 10);
// console.log("kim.sum()",kim.sum());
// console.log("lee.sum()",lee.sum());