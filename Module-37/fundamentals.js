const fatherName = "Ibrahim";
let season = "Rainy";
season = "Winter";

// const numbers = [89, 35, 98, 12];
// numbers[0] = 56;

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     // console.log(number);
// }

function multiply(num1, num2){
    const result = (num1 * num2);
    return result;
}

const output = multiply(11, 12);
// console.log(output);

const student = {
    name: "Salib Khan",
    age: 32,
    movies: ["Palestine", "China"]
}

// console.log(student.age);

const about = `My name is ${student.name}`;
// console.log(about);

const products = [
    {
        name: "Laptop",
        price: 32000,
        brand: "Walton",
        color: "Silver"
    },
    {
        name: "Phone",
        price: 7000,
        brand: "Iphone",
        color: "Golden"
    },
    {
        name: "Watch",
        price: 3200,
        brand: "Casio",
        color: "Yellow"
    },
    {
        name: "Sunglass",
        price: 300,
        brand: "Ribon",
        color: "Black"
    },
    {
        name: "Camera",
        price: 9000,
        brand: "Canon",
        color: "Gray"
    },
]

const brands = products.map(product => product.brand);
// console.log(brands);

const prices = products.map(product => product.price);
// console.log(prices);

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));

const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes("n"));
// console.log(specificName);

const special = products.find(product => product.name.includes("n"));
// console.log(special);

const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

const [x, y] = [42, 65];

// console.log(x, y);

function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}

// console.log(boxify(90, 34));

const [firstMovie, secondMovie] = student.movies;

const {name, age} = {name: "Alu", age: 14};

// console.log("Expected name is:", name);
// console.log("Expected age is:", age);

const employee = {
    ide: "VS Code",
    designation: "Developer",
    machine: "Mac",
    languages: ["Html", "CSS", "JS"],
    specification: {
        height: 66,
        weight: 67,
        address: "Palestine",
        drink: "Nothing"
    }
}

const {machine, ide} = employee;

// console.log("The machine is:", machine);
// console.log("The IDE is:", ide);

const {address, weight} = employee.specification;
console.log("Our address is:", address);
console.log("Our weight is:", weight);