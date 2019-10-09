## TypeScript-Resource

**Statically Typed Language**

>"Makes Javascript extra safe!"

``
function sum(a: number, b:number) {
    return a + b;
}
sum('hello', null) // expecting numbers for both parameters
``


**Pros**: *Less bugs at compile time, easy documentation, helpful*

**Cons**: *Extra layer of code project, must employ good tests, slower development process*


**Strong vs Weak Languages**:
(Source: *https://www.destroyallsoftware.com/compendium/strong-and-weak-typing?share_key=6b0dd1ec18ab6102*)

**JS**: Dynamic Weakly Typed Programming Language


         Examples(type coercion):

         var a = "booooooyaa"
         undefined

         a + 17
         "boooooyaa17"

Helpful Links:

- https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c (Interface vs Type Alias)
- https://basarat.gitbooks.io/typescript/docs/types/type-assertion.html (Type Assertion)
- http://definitelytyped.org/ (Search for types packages i.e. React)