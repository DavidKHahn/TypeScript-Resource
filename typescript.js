// BOOLEAN
var isCool = true;
// NUMBER
var age = 56;
// STRING
var eyeColor = 'brown';
var favQuote = "I'm not old, I'm only " + age + "!";
// ARRAYS
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'tiger', 'dragon'];
// OBJECTS
var wizard = {
    a: 'John'
};
// NULL and UNDEFINED
var coffee = undefined;
var nooo = null;
// TUPLE: allows different types in order
var basket;
basket = ['basketball', 100];
// ENUM (enumerable): allows different data structure
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeName2 = Size.Small;
// ANY -> !!!! BE CAREFUL (can be used for any types)
var whatever = 'asfasdfadfdsf noooo!!!!!!!';
// whatever = true
// whatever = basket
// VOID - used when nothing is returned
var sing = function () {
    console.log('coffeeeeeeee');
    // return 'lalala' will cause ts error
};
// NEVER - A function returning 'never' cannot have a reachable end point.
var error = function () {
    throw Error('oooops');
};
// Type alias version does not create a new name
// consider using type for your React Component Props and State
// type RobotArmy = {
//     count: number,
//     type: string,
//     magic: string
// }
var fightRobotArmy = function (robots) {
    console.log('FIGHTTT!!');
};
var dog = {};
dog.count;
// FUNCTION
var fightRobotArmy3 = function (robots) {
};
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT!!!');
    return 5;
};
// CLASSES
var Animal = /** @class */ (function () {
    function Animal(sound) {
        // 'private sing: string = "lalaalalalalalala" -> creates a private variable (default is public for all variables)
        this.sing = 'lalaalalalalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAWWWRRRRRRRR!!!!!');
lion.greet();
// UNION: chain multiple different types for one variable
var confused = 'hello';
var confused2 = 5;
var confused3 = true;
// ts will infer 'x' is a number not a string
var x = 4;
x = "hello";
