let d1 = new Date('2021-10-18');
console.log('d1.getFullYear()',d1.getFullYear());
console.log('d1.getMonth()',d1.getMonth());
console.log('Date',Date);

// function Person(){
//     this.name= 'kim';
//     this.first= 10;
//     this.second= 20;
//     this.third= 30;
//     // sum:function(f,s){
//     //     return f+s;
//     // }
//     this.sum= function(){
//         return this.first+this.second+this.third;
//     }
// }
// console.log('new Person()', new Person());

// 생성자 constructor
// let kim = new Person();
// let lee = new Person();
// console.log("kim.sum()",kim.sum());
// console.log("lee.sum()",lee.sum());

function Person(name,first,second,third){
    this.name= name;
    this.first= first;
    this.second= second;
    this.third= third;
    // sum:function(f,s){
    //     return f+s;
    // }
    this.sum= function(){
        return this.first+this.second+this.third;
    }
}
let kim = new Person('kim', 10, 20, 30);
let lee = new Person('lee', 10, 10, 10);
console.log("kim.sum()",kim.sum());
console.log("lee.sum()",lee.sum());
