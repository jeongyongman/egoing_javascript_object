let kim = { name:'kim',first:10,second:20};
let lee = { name:'lee',first:10,second:10};
function sum() {
    return this.first + this.second;
}
sum.call(kim);
console.log("sum.call(kim)",sum.call(kim));
console.log("sum.call(lee)",sum.call(lee));
function sumprefix(prefix) {
    return prefix+(this.first + this.second);
}
console.log("sumprefix.call(kim,'=>')",sumprefix.call(kim,'=>'));
console.log("sumprefix.call(lee,':')",sumprefix.call(lee,':'));
