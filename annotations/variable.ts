let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let nothingUndefined: undefined = undefined;

//build in objects
let now: Date = new Date();

//Array 
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 3, 5];
let truths: boolean[] = [true, false, false];

//Classes
class Car{

}
let car: Car = new Car();

//Object Literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
};


//Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};
logNumber(20);

// when to use annotations
//1- function that return the 'any' type
const json = '{"x":10,"y":20}'
const coordinate: { x: number;y:number }= JSON.parse(json)
console.log(coordinate)

//2- when we declare a variable in one line and initialize it later
let word:string[] = ['red', 'green'];
let foundword:boolean;
word.forEach(w => {
    if (w === 'green') {
        foundword = true;
    }
})

//3- Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
numbers.forEach(n => {
    if (n > 0){
        numberAboveZero = n;
    }
})

