const person ={
    fname:"Jihad",
    lname:"Miridha",
    age:22
};
let txt = '';
// for...in Loop
for(let x in person){
    txt += person[x];
}

console.log(txt)