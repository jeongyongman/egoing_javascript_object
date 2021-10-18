let kim = {
    name: 'kim',
    first: 10,
    second: 20,
    third: 30,
    // sum:function(f,s){
    //     return f+s;
    // }
    sum: function(){
        return this.first+this.second+this.third;
    }
}
let lee = {
    name: 'lee',
    first: 10,
    second: 10,
    third: 10,
    // sum:function(f,s){
    //     return f+s;
    // }
    sum: function(){
        return this.first+this.second+this.third;
    }
}
// console.log(kim.sum(kim.first,kim.second));
console.log("kim.sum()",kim.sum());
console.log("lee.sum()",lee.sum());