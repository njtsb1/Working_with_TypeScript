let value: unknown; // unknown is a type that can take any value
value = 5;
value = 'Max';
let names: string;

// names = value; It will not work. Type unknown cannot be arbitrarily assigned
if (typeof value === 'string') {
    names = value; // It works. This type can only be assigned if a validation is done
}

let valueAny: any; // As already seen, any also takes any value
valueAny = true;
valueAny = 10
names = valueAny; 
// The danger is that any can be assigned to any typed variable without its type being checked

/* It's not bad practice to use unknown, as it forces type validation.
Unlike any, which as we've seen can be used without worrying about typing.*/

function ErrorGenerator(message: string, errorCode: number): never { // never means the script can be interrupted or never come to an end
    throw {message: message, errorCode: errorCode }; // In this case it was interrupted
}

ErrorGenerator('An error has occurred!', 500); // The same type could be used if using a while loop that never ends
