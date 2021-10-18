let superObj = {superVal:'super'};
// let subObj ={subVal:'sub'};
// subObj.__proto__=superObj;
let subObj = Object.create(superObj);
subObj.subVal='sub';
debugger;
console.log('subObj.subVal =>',subObj.subVal);
console.log('subObj.superVal =>',subObj.superVal);

let kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum:function(){return this.first+this.second}
}
// let lee = {
//     name:'lee',
//     first:10,
//     second:10,
//     avg: function(){return (this.first+this.second)/2}
// }

// console.log('kim.sum() : ',kim.sum());
// lee.__proto__=kim;

let lee = Object.create(kim);
lee.name= 'lee';
lee.first=10;
lee.second=10;
lee.avg=function(){
    return (this.first+this.second)/2;
}
console.log('lee.sum() : ',lee.sum());
console.log('lee.avg() : ',lee.avg());