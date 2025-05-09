//Interview Question:
// write a funtion that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indication the type of triangle: "equilateral", "isosceles", or "scalene".

// method 1- using if else condition
const checkTriangleType=(a, b, c)=>{
    if(a + b >c && b+c>a && c+a>b){ 
    if(a===b && b===c){
        return `equilateral triangle`
    }if(a===b && b!==c|| b===c && c!==a || a===c && b!==a){
        return `isosceles triangle`
    }if(a!==b && b!==c && c!==a){
        return `scalene triangle`
    }
}else {return `not a triangle`}
}
console.log(checkTriangleType(4, 4, 4)); //equlateral triangle
console.log(checkTriangleType(2, 3, 3)); //isosceles trangle
console.log(checkTriangleType(4, 5, 3)); //scalene triangle


//method- Using ES6 Class (Object-Oriented Way)
class Triangle{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    isValid(){
        return this.a + this.b > this.c &&
        this.b + this.c > this.a &&
        this.a + this.c > this.b;
    }
    getType(){
        if(!this.isValid()){
            return "not a triangle";
        }
        if(this.a===this.b && this.b === this.c){
            return "eqilateral triangle";
        }else if(this.a===this.b || this.b===this.c||this.a===this.c){
            return "isosceles triangle";
        }else{
            return "scalene triangle";
        }
    }
}
const tri = new Triangle(3, 3, 5);
console.log(tri.getType());  // isosceles triangle


//method 3- Using Switch Statement (less common)
const checkTriangleTypes = (a, b, c) => {
    if (a + b <= c || b + c <= a || a + c <= b) {
        return "not a triangle";
    }

    const sidesEqual = new Set([a, b, c]).size;

    switch (sidesEqual) {
        case 1:
            return "equilateral";
        case 2:
            return "isosceles";
        case 3:
            return "scalene";
        default:
            return "error";
    }
};

console.log(checkTriangleTypes(4, 4, 4)); // equilateral