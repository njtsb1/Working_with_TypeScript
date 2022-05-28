
enum Job {
    Actress,
    Baker
}

type Human = {
    name: string,
    age: number,
    profession: Job
}

let person1: Human = {
    name: 'Mary',
    age: 29,
    profession: Job.Actress
};

let person2: Human = {
    name: 'Robert',
    age: 19,
    profession: Job.Baker
};

let person3: Human = {
    name: 'Laura',
    age: 32,
    profession: Job.Actress
};

let person4: Human = {
    name: "Charles",
    age: 19,
    profession: Job.Baker
}