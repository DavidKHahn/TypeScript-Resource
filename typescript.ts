// BOOLEAN
let isCool: boolean = true

// NUMBER
let age: number = 56;

// STRING
let eyeColor: string = 'brown'
let favQuote: string = `I'm not old, I'm only ${age}!`;

// ARRAYS
let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'tiger', 'dragon']

// OBJECTS
let wizard: object = {
    a: 'John'
}

// NULL and UNDEFINED
let coffee: undefined = undefined
let nooo: null = null

// TUPLE: allows different types in order
let basket: [string, number];
basket = ['basketball', 100]

// ENUM (enumerable): allows different data structure
enum Size { Small = 1, Medium = 2, Large = 3 }
let sizeName: string = Size[2]
let sizeName2: number = Size.Small

// ANY -> !!!! BE CAREFUL (can be used for any types)
let whatever: any = 'asfasdfadfdsf noooo!!!!!!!';
// whatever = true
// whatever = basket

// VOID - used when nothing is returned
let sing = ():void => {
    console.log('coffeeeeeeee')
    // return 'lalala' will cause ts error
}

// NEVER - A function returning 'never' cannot have a reachable end point.
let error = ():never => {
    throw Error('oooops');
}

// INTERFACE (recommended for better error output) - GOOD for objects, React
// always use interface for public API's definition when authoring a library or 3rd party ambient type definitions
interface RobotArmy {
    count: number,
    type: string,
    magic?: string // '?' counts as optional param
}

// Type alias version does not create a new name
// consider using type for your React Component Props and State

// type RobotArmy = {
//     count: number,
//     type: string,
//     magic: string
// }
let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHTTT!!')
}
/*
Same thing as above example

let fightRobotArmy = (robots: {count:number, type: string, magic: string}) => {
    console.log('FIGHTTT!!')
}
*/

// Type Assertion
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy
dog.count

// FUNCTION
let fightRobotArmy3 = (robots: RobotArmy): void => {

}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}): number => {
    console.log('FIGHT!!!')
    return 5
}

// CLASSES
class Animal {
// 'private sing: string = "lalaalalalalalala" -> creates a private variable (default is public for all variables)
    sing: string = 'lalaalalalalalala'
    constructor(sound: string) {
        this.sing = sound;
    }

    greet(): string{
        return `Hello ${this.sing}`
    }
}

let lion = new Animal('RAWWWRRRRRRRR!!!!!')
lion.greet()

// UNION: chain multiple different types for one variable
let confused: string | number = 'hello'
let confused2: string | number = 5
let confused3: string | number | boolean = true

// ts will infer 'x' is a number not a string
let x = 4
// x = "hello" -> returns an error!!