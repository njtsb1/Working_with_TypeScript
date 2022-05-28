/**
 * When typing we can pass more than one type,
 * as in the case below where each parameter contains the input type,
 * which is equal to number or string types
 * In the example below there is also an internal treatment in the function
 * so that it handles the different types of each parameter
*/

// It's also possible to create types! And match types with those types!
type input = number | string;

function gettogether(input1: input, input2: input) {
    let result: input;
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        result = input1.toString() + input2.toString();
    } else {
        result = input1 + input2
    }
    return result;
}

/* And here we have two examples of a call to this function, 
one with strings and one with numbers */
console.log(gettogether('good ', 'morning'));
console.log(gettogether(1, 2));
