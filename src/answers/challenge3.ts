export {} // Not to complain about duplicate variables
/** 
    In all below cases of using getElementById(),
    the element is potentially null
    and ifs are necessary to ensure that your code will work at its best.
    However, there will be situations where the developer will make sure that
    the field is there and he can write the code as follows:
        document.getElementById('clear-balance')!;
    The exclamation point at the end is a sign that that field is not null
    and that this function will really bring something. So ifs are not needed.
    As an example, I will follow this methodology in the 'buttonClear' field.
*/
let buttonRefresh = document.getElementById('update-balance');
let buttonClear = document.getElementById('clear-balance')!;
let sum = document.getElementById('sum')! as HTMLInputElement;
let Balancefield = document.getElementById('field-balance');

let Totalbalance = 0

clearBalance()

function addToBalance(sum: number) {
    if (Balancefield) {
        Totalbalance += sum
        Balancefield.innerHTML = Totalbalance.toString();
        ClearCamposome();
    }
}

function ClearCamposome() {
    sum.value = "";
}

function clearBalance() {
    if (Balancefield) {
        Totalbalance = 0;
        Balancefield.innerHTML = Totalbalance.toString();
    }
}

if (buttonRefresh) {
    buttonRefresh.addEventListener('click', () => {
        addToBalance(Number(sum.value)); 
    });
}
buttonClear.addEventListener('click', () => { 
/* Notice that here the typescript didn't accuse the button of being null and I didn't need the if.
If you want to take the test, remove the exclamation.*/
    clearBalance();
});

/**
    <h4>Value to add: <input id="sum"> </h4>
    <button id="update-balance">Update balance</button>
    <button id="clear-balance">Clear your balance</button>
    <h1>"Your balance is: " <span id="balance-field"></span></h1>
 */