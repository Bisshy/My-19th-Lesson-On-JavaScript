//Secret-life of Objects

//Methods
// let rabbit = {};
// rabbit.speak = function(line){
//     console.log(`The rabbit says '${line}'`);
// };
// function speak(line){}
// rabbit.speak("I'm alive. ");  

// function speak(line){
//     console.log(`The ${this.type} rabbit says '${line}'`);
//     //get the type of rabbit and tell it to say this line;
// }

// let whiteRabbit = {type:"white", speak};
// let hungryRabbit = {type:"hungry", speak};

// whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting");

// hungryRabbit.speak("I could use a carrot right now");

// speak.call(hungryRabbit, "Burp!");
// speak.call(whiteRabbit, "Oh chimoooO!");

// function normalize(){
//     console.log(this.coords.map(n=>n/this.length));
// }
// normalize.call({coords:[0,2,3], length:5})

//prototypes

// console.log(Object.getPrototypeOf(Math.max)== Function.prototype);
// console.log(Object.getPrototypeOf([])==Array.prototype);

// let protoRabbit = {
//     speak(line){
//         console.log(`The ${this.type} rabbit say '${line}'`);
//     }
// };

// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "Killer";
// killerRabbit.speak("SKREEE");

// let deadRabbit = Object.create(protoRabbit);
// deadRabbit.type = "Dead";
// deadRabbit.speak("I'm in heaven");

// function makeRabbit(type) {
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type;
//     return rabbit;
// }

// function Rabbit(type){
//     this.type = type;
// }
// Rabbit.prototype.speak = function(line){
//     console.log(`The ${this.type} rabbit says '${line}'`)
// };

// let weirdRabbit = new Rabbit("weird");
// weirdRabbit.speak("What a weird fellow");

// console.log(Object.getPrototypeOf(Rabbit)==Function.prototype);

// console.log(Object.getPrototypeOf(weirdRabbit)== Rabbit.prototype);

//Class Notation

// class Rabbit {
//     constructor(type){
//         this.type = type;
//     }
//     speak(line){
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// }

// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");

// let object = new class {getWord() { return "Hello";}};

// console.log(object.getWord());

//Overriding Derived properties

// Rabbit.prototype.teeth = "small";
// console.log(killerRabbit.teeth);
// killerRabbit.teeth = "long, sharp, and bloody";
// console.log(killerRabbit.teeth);

// console.log(blackRabbit.teeth)
// console.log(Rabbit.prototype.teeth);

// console.log(Array.prototype.toString == Object.prototype.toString);

// console.log([1,2].toString());

// console.log(Object.prototype.toString.call([1,2]));

//Maps

// let ages = {

//     Boris:39,
//     Liang:22,
//     Julia:62
// };

// console.log(`Julia's age is ${ages["Julia"]}`);
// console.log("is Jack's age know?", "Jack" in ages);
// console.log("is toString age know?", "toString" in ages);
// console.log("is toString age known?", "toString" in Object.create(null));

//Class called map
// let ages = new Map();
// ages.set("Boris", 39);
// ages.set("Liang", 22);
// ages.set("Julia", 62);

// console.log(`Julia is ${ages.get("Julia")}`);
// console.log("is Jack's age known?", ages.has("Jack"));
// console.log("is toString age known?", ages.has("toString"));

// console.log({x:1}.hasOwnProperty("x"));
// console.log({x:1}.hasOwnProperty("toString"));

//Polymorphism
// Rabbit.prototype.toString = function(){
//     return `a ${this.type} rabbit`;
// };
// console.log(String(blackRabbit));

// class Dog {
//     constructor (name,age, breed, color, sex){
//         this.name = name;
//         this.age = age;
//         this.breed = breed;
//         this.color = color;
//         this.sex = sex;
        
//     }
//     toString(){
//         return ` my dog ${this.name} of age ${this.age} is a ${this.sex} ${this.color} ${this.breed} `;
//     }
// }

// let myDog = new Dog("Buddy",3,  "Golden Retriver", "golden", "male");
// console.log(String(myDog));

// let myDog2 = new Dog ("Jacky",5,  "Local Dog", "Brown", "Female");


// console.log(String(myDog2));
//Symbols

// let sym = Symbol("name");
// console.log(sym == Symbol("name"));
// Rabbit.prototype[sym] = 66;
// console.log(blackRabbit[sym]);

// const toStringSymbol = Symbol("toString");
// Array.prototype[toStringSymbol] = function(){
//     return `${this.length} cm of blue yarn`;
// };
// console.log([1,2].toString());
// console.log([1,2][toStringSymbol]());

// let stringObject = {
//     [toStringSymbol](){
//         return "a jute rope";
//     }
// };

// console.log(stringObject[toStringSymbol]());

//The Iterator Interface

//  let okIterator = "OK"[Symbol.iterator]();
//  console.log(okIterator.next());
//  console.log(okIterator.next());
//  console.log(okIterator.next());
 
//  class Matrix{
//     constructor(width, height, element = (x,y) => undefined) {
//         this.width = width;
//         this.height = height;
//         this.content = [];

//         for(let y = 0; y < height; y++){
//             for( let x = 0; x < width; x++){
//                 this.content[y * width + x] = element(x,y);
//             }
//         }
//     }

//     get(x,y){
//         return this.content[ y * this.width + x];
//     }
//     set(x,y, value){
//         this.content[y * this.width + x ] = value; 
//     }
//  }

//  class MatrixIterator{
//     constructor(matrix){
//         this.x = 0;
//         this.y = 0;
//         this.matrix = matrix;
//     }

//     next(){
//         if(this.y == this.matrix.height) return {done: true};
//         let value = {
//             x:this.x,
//             y:this.y,
//             value:this.matrix.get(this.x, this.y)
//         };
//         this.x++;
//         if(this.x == this.matrix.width){
//             this.x = 0;
//             this.y++
//         }
//         return {value, done:false};
//     }
//  }
// Matrix.prototype[Symbol.iterator] = function(){
//     return new MatrixIterator(this);
// };
//  let matrix = new Matrix(2,2, (x,y) => `value ${x}, ${y}`);

//  for (let{x,y,value} of matrix){
//     console.log(x,y, value);
//  }

//Getter, Setters, and Statistics

//  let varyingSize ={
//     get size(){
//         return Math.floor(Math.random()*100);
//     }
//  };

//  console.log(varyingSize.size);
//  console.log(varyingSize.size);

//  class Temperature {
//     constructor(celsius){
//         this.celsius = celsius;
//     }
//     get fahrenhite(){
//         return this.celsius * 1.8 + 32;
//     }
//     set fahrenhite(value){
//         this.celsius = (value - 32) / 1.8;
//     }
//     static fromFahrenhite(value){
//         return new Temperature (value - 32) / 1.8;
//     }
//  }

//  let temp = new Temperature (45);

//  console.log(temp.fahrenhite + " F");

// temp.fahrenhite = 67;
// console.log (temp.celsius + " C");

// let temp1 = Temperature.fromFahrenhite(67);


//Inheritance

// class SymmetricMatrix extends Matrix {
//     constructor (size, element=(x,y) => undefined){
//         super(size, size, (x,y)=>{
//             if(x < y) return element(y,x);
//             else return element(x,y);
//         })
//     }

//     set(x,y,value){
//         super.size(x,y, value);
//         if(x!=y){
//             super.size(y,x,value);
//         }
//     }
// }

// let matrixs = new SymmetricMatrix(5, (x,y)=> `${x}, ${y}`);

// console.log(matrixs.get(2, 3));
