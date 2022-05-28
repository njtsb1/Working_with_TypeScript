const button = document.getElementById('button');
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;

/**
 * Example of a function with typed parameters
 */
function SumValidWithPrint(number1: number, number2: number, printResult: boolean, phrase: string) { 
    const result = number1 + number2;
    if (printResult) {
        console.log(phrase + result);
    }
    return result;
}

// The variable below has its type inferred by the initial value
let printResult = true;
// Already in this case we are explicitly saying what its type is
let phrase: string;
// And only then we start it with a value
phrase = "The number is";

/* How the search for the button on line 1 can bring up a null
(since this id might not be present in index.html),
it is important to confirm that it has a value */
if (button) {
    button.addEventListener('click', () => {
        console.log(SumValidWithPrint(Number(input1.value), Number(input2.value), printResult, phrase));
    }); 
}