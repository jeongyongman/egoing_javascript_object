let memberArray = ['egoing', 'graphittie','leezche'];
let i = 0;
while (i<memberArray.length){
    console.log(i,memberArray[i]);
    i=i+1;
}
console.group('array loop');
i = 0;
while (i<memberArray.length){
    console.log(i,memberArray[i]);
    i=i+1;
}
console.groupEnd('array loop');

let memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezche'
}
console.group('object loop');
for(let name in memberObject){
    console.log(name,memberObject[name]);
}
console.groupEnd('object loop');
