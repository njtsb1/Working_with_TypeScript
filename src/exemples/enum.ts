const sarah = {
    name: 'Sarah',
    age: 26,
    married: true,
    job: 'Engineer' // In this field it is said that sarah works as an 'Engineer'
}

const mary = { 
    name: 'Mary',
    age: 23,
    married: false,
    job: 'engineer' // And here it says that mary works as an 'engineer'.
}

/* Is this correct? Is there a difference between 'Engineer' and 'engineer'?
I do not think so. This must have been a mistake made in development.*/

// To solve this let's use TypeScript's Enum feature to create the Profession enum
enum Profession {
    Teacher,
    Engineer,
    Painter,
    Concierge
}

// And to ensure that the enum will be used correctly, let's create a Person type as well
type Person = {
    name: string,
    age: number,
    married: boolean,
    job: Profession // Here we enter the enum as a type
}

const gabriel: Person = {
    name: 'Gabriel',
    age: 26,
    married: false,
    job: Profession.Engineer /* And here we use it to define in a standardized way 
    the profession of each object of type Person*/
}

const mario: Person = {
    name: 'Mario',
    age: 26,
    married: false,
    job: Profession.Engineer // All standardized and consistent
}