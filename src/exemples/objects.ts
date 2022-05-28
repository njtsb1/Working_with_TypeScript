/**
 * Type inference also works for objects.
 * If using visual studio code,
 * try hovering over an untyped object and see the magic.
*/ 
const developer = {
    name: 'Marco',
    age: 25,
    salary: 15000
}

/**
 * developer.salary = "does not have" would return an error, as it was inferred that developer.salary is of type number
 * So we realize that while the object can be written in any way, further usage has to respect the way it was initialized
 */

/* In this case below the typing was explicit,
so it is necessary to respect the type during object creation. */
const car: {color: string, tirenumber: number, convertible: boolean} = {
    color: 'red',
    tirenumber: 10,
    convertible: true
}

/**
 * With these two examples we can see that objects follow the same rules as common variables
 * Both can be initialized either way, but then need to respect the type
 * And if they are typed at the beginning, their first value has to respect that type
 */

// Let's first use the list type
 const student: {nome: string, age: number, subjects: string[]} = {
    nome: 'Amanda',
    age: 24,
    subjects: ['Algorithms', 'Logic for computing']
 }

 function list(List: string[]) {
    for (const item of List) {
        console.log('- ' + item)
    }
}

// The function recognizes student.subjects as a string[]
list(student.subjects)
