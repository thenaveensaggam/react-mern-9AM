/**
 * string
 * number
 * boolean
 * object
 * arrays
 */

const employeeName = "John";
console.log("Employee Name : " + employeeName);
console.log("Employee Name : " + employeeName + "Data Type : " + typeof employeeName);

/**
 * backtick operator (`)
 */
console.log(`Employee Name : ${employeeName}`);
console.log(`Employee Name : ${employeeName} Data Type : ${typeof employeeName}`);

const employeeAge  = 40;
console.log(`Age : ${employeeAge}`);

const isAdmin = true;
console.log(`Is Admin : ${isAdmin}`);

/**
 * Object
 */
const employee = {
    name : "Rajan",
    age : 35,
    designation : "Software Engineer"
};
console.log(employee);
console.log(`Employee Name : ${employee.name}`);
console.log(`Employee Age : ${employee.age}`);
console.log(`Employee designation : ${employee.designation}`);

/**
 * Array 
 */
const technologies = ["HTML", "CSS", "JavaScript"];
console.log(technologies);
console.log(technologies[0]);

const employees = [
    {
        name : "Rajan",
        age : 35,
        designation : "Sr.Software Engineer"
    },
    {
        name : "John",
        age : 25,
        designation : "Software Engineer"
    }
];
console.log(employees[0]);
console.log(employees[1]);
console.log(employees[0].name);
console.log(employees[1].name);

