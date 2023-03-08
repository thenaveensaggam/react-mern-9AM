const mobile = {
    brand : "Apple",
    price : 45000,
    color : "Silver"
};
console.log(mobile);
console.log(mobile.brand);
console.log(mobile.color);
console.log(mobile.title); // undefined

// update the existing object
console.log(mobile);
mobile.price = 55000;
mobile.isInsured = true;
console.log(mobile);

// spread operator
const newMobile = {
    ...mobile,
    ramSize : "16GB"
};
console.log(newMobile);
newMobile.brand = "Lenovo";
console.log(newMobile);

// dot, [] notation
console.log(`Brand : ${newMobile.brand}`);
console.log(`Brand : ${newMobile['brand']}`);

// dynamic props
const keyName = "brand";
console.log(newMobile.keyName); // undefined
console.log(newMobile[keyName]); // Lenovo

// JavaScript Object vs JSON Object
/**
 * JSON.stringify(obj) => JSON Object
 * JSON.parse(JSON Data) => JavaScript Object
 */
console.log(mobile);
const jsonMobileString = JSON.stringify(mobile);
console.log(jsonMobileString);

const jsMobileObject = JSON.parse(jsonMobileString);
console.log(jsMobileObject);

// nested objects
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
};
console.log(user);
console.log(user.address);
console.log(user.address.geo);

// print GEO data
console.log(`LAT : ${user.address.geo.lat} LNG : ${user.address.geo.lng}`);

// destructuring
const {lng:geoLng,lat} = user.address.geo;
console.log(`LAT : ${geoLng} LNG : ${lat}`);

// function of objects
const employee = {
    id : "AA001",
    name : "Rajan",
    age : 25,
    designation : "Software Engineer"
};
console.log(employee);
console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(Object.entries(employee));

// print all keys
let result = "";
for(let key of Object.keys(employee)){
   result += `${key} `;
}
console.log(result);

// print all values
result = "";
for(let value of Object.values(employee)){
    result += `${value} `;
}
console.log(result);

// print all Entries
result = "";
for(let entry of Object.entries(employee)){
    result += `${entry[0]} - ${entry[1]} `;
}
console.log(result);







