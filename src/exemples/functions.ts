/* As we've seen before, typescript infers a lot.
In this case it infers that the return of this function is of type number */
function add(n1: number, n2: number) {
    return n1 + n2; 
}

let result: number;
/* Having inferred that the return is a number,
the function can be used to assign value to result, which is of the same type.*/
result = add(1, 4);

/**
 * Here we have a function that returns a string because of the use of toString(). 
 * It is practically the same as the function above, with only a small change differing the two
 * As the day to day of developers is busy, small changes like this can happen all the time changing a function
 * This structure looks fragile and error prone and that's not what we want with typescript
*/
function addNumbers(n1: number, n2: number) {
    return n1.toString() + n2;
}
/**
 * result = addNumbers(1, 4);
 * In the above case an error will be presented because, by inference, 
 * the return of addNumbers is of type string and the result expects a number
 * So we have a problem here, because functions can be changed 
 * and that can lead to errors in other parts of the code.
 */

/* A solution to this is to explicitly type the return of a function.
If something is modified inside it, TS itself can complain if the return is not number*/
function addExplicitlyNumber(n1: number, n2: number): number {
    return n1 + n2;
}

result = addExplicitlyNumber(1, 4); 

// Functions can also return nothing, which is the case with the void type
function printValue(num: number): void {
    console.log('The value is '+ num)
}

printValue(3);

function multiplyValueBy2(number: number) {
    return number * 2;
}
/**
 * Functions can also be passed as a parameter. Their type is structured like this:
 * (parameter: parameter type) => return type
*/ 
function addandtreat(n1: number, n2: number, callback: (num: number) => void) {
    result = n1 + n2;
    callback(result); // Here she is called 
}

addandtreat(1, 5, printValue);
console.log(addandtreat(1, 5, multiplyValueBy2));