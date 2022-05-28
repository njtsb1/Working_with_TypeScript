// The any is a notation that says the property can have any type
let cpf: any;
// Here it receives a string
cpf = '01620445000';
// Here receives a boolean
cpf = true;
// And now a number
cpf = 10;
// Using any makes typescript treat your variables like JS

// This function below expects a string
function topresentCPF(cpf: string) {
    console.log(cpf)
}

/* And here we pass the cpf variable that contains a number, but since it is an any,
TS doesn't complain because it can contain any attribute, including a string*/
topresentCPF(cpf); 
/**
    Using any takes power from typewriting and can create inconsistencies in your project
    Any is commonly used when an unknown object is manipulated,
    or when a refactoring from JS to TS is applied quickly without typing the objects used
    It is a bad practice that slows down times in the long run and misses the purpose of the typed text.
    With the use of ESLint it is possible for your project to not allow the explicit use of any
 */