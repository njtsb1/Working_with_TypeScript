// Answer 1
const employee = {
    code: 10,
    name: 'John'
};

// Answer 2
const employee2: {code: number, name: string} = {
    code: 10,
    name: 'John'
}

// Answers 3 e 4
interface Employee {  // Already know interfaces? https://blog.logrocket.com/types-vs-interfaces-in-typescript/
    code: number,
    name: string
};

const employeeObj = {} as Employee;
employeeObj.code = 10;
employeeObj.name = 'John';

const employeeObj2: Employee = {
    code: 10,
    name: 'John'
}