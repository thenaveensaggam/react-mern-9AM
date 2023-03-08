const colors = ["White", "Black", "Silver", "Blue"];
console.log(colors);
console.log(colors[0]) // white
console.log(colors[3]) // blue
console.log(colors[5]) // undefined

colors[4] = "Yellow";
console.log(colors);
console.log(colors.length);

// looping
// normal-for loop
let result = "";
for (let i = 0; i <= colors.length - 1; i++) {
    result += `${colors[i]} `;
}
console.log(result);

// for-in loop
result = "";
for (let index in colors) {
    result += `${colors[index]} `;
}
console.log(result);

// for-of loop
result = "";
for (let color of colors) {
    result += `${color} `;
}
console.log(result);

// forEach Function
result = "";
colors.forEach(function (color) {
    result += `${color} `;
});
console.log(result);

// forEach with  Arrow Function
result = "";
colors.forEach(color => result += `${color} `);
console.log(result);

// users Array
const users = userList; // from users.js file

// print only names
const printNames = () => {
    let namesArray = [];
    for (let user of users) {
        //namesArray = [...namesArray, user.name];
        namesArray.push(user.name);
    }
    console.log(namesArray.sort());
};
printNames();

// print {username, email} array
const printUserNameEmailArray = () => {
    const namesArray = [];
    for (let user of users) {
        namesArray.push({
            username: user.username,
            email: user.email
        });
    }
    console.log(namesArray);
};
printUserNameEmailArray();

// print the names starts with 'c'
const printNamesStartsWith = (startChar) => {
    let namesArray = [];
    for (let user of users) {
        if (user.name.toLowerCase().startsWith(startChar.toLowerCase())) {
            namesArray.push(user.name);
        }
    }
    console.log(namesArray.sort());
};
printNamesStartsWith("N");

// print the names includes with 'c'
const printNamesIncludesWith = (startChar) => {
    let namesArray = [];
    for (let user of users) {
        if (user.name.toLowerCase().includes(startChar.toLowerCase())) {
            namesArray.push(user.name);
        }
    }
    console.log(namesArray.sort());
};
printNamesIncludesWith("RA");










