

//Destructuring --takes a copy and the original structure will not be troubled

let a,b,c;
[a,b]=[100,200];  //Array Destructuring

//console.log(a,b);

const names = ['Jon','Gabor','Manon'];
let [person1,person2,person3] = names;
//console.log(person2);
/* a='sd';
console.log(a,b) */

//Object Destructuring
const person = {
    name : 'Nargiza',
    age : 23,
    city : 'Miami',
    sayHi: function(){
        console.log('HI');
    },
    address:{
        str:'N50',
        haus:35,
        country : 'Dubai'
    }
};


/* const { name, age, city, sayHi,address}  = person;//the objects key can be unordered here in any ways

const {str,country,haus}=address;


sayHi();
console.log(str); 
 */
//

const {name:newName, age, city, sayHi,address : {str, haus, country}} = person;
//console.log(newName);





//----------------------Rest Pattern(...)Array


let [g,h,...k] = [1,2,3,4,5,6,7,8,9];

// console.log(k);

//-------------REST pattern for Objects
let Obj = {
    u:100,
    o:200,
    p:400,
    l:600,
    e:700
};

const {p,l,...y}=Obj;
// console.log(y);

//Spread Operator

let array = [1,2,3,4,5,6,7,8,9];
console.log(...array);

let max = Math.max(...array);
console.log(max);

const sum = (x,y,z)=>x+y+z;
let array1 = [23,34,45];
// console.log(sum(...array1));

let res = sum(...array1);
console.log(res);




