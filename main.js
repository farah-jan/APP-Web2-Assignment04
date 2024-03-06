// Write all JS here. Do not write any JS in index.html// Array of background colors
const bgColors = ["#BC8F8F", "#8B4513", "#A0522D", "#8FBC8F", "#708090", "#9370DB", "#FF9933", "#D2B48C", "#006400", "#90EE90"];

// Array of meals
const meals = [
    { name: 'Steak', src: 'https://media.gettyimages.com/id/972852490/photo/bbq-sirloin-steaks-with-fresh-thyme.jpg?s=612x612&w=gi&k=20&c=puxpzuQacSjeGy2KFGiNFA_WrBHUvltAcL8koY8Qsqo=', price: 20 },
    { name: 'Burger', src: 'https://canadabeef.ca/wp-content/uploads/2015/05/Canadian-Beef-Best-Ever-Lean-Beef-Burgers.jpg', price: 10 },
    { name: 'Taco', src: 'https://iamhomesteader.com/wp-content/uploads/2022/04/birria-taco-2.jpg', price: 15},
    { name: 'Salad', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbPx0hz_jTougPsXG70gMyBbGOCZfqN34x0Q&usqp=CAU', price: 13 },
    { name: 'Sandwich', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLkMRDCkTLy8Nlv8BlPEzD-ogu0p64Wpk4Q&usqp=CAU', price: 10 },
    { name: 'Ice cream', src: 'https://carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg', price: 14 },
    { name: 'Ramen', src: 'https://www.halfbakedharvest.com/wp-content/uploads/2021/10/Easy-Ginger-Chicken-and-Spinach-Ramen-1.jpg', price: 16 },
    { name: 'Tortilla', src: 'https://glutenfreecuppatea.co.uk/wp-content/uploads/2022/06/gluten-free-tortilla-wraps-recipe-1-500x375.jpeg', price: 17 },
    { name: 'Croissant', src: 'https://images.getrecipekit.com/v1608585894_13_vjwdhl.jpg?aspect_ratio=16:9&quality=90&auto_optimize=medium', price: 11 },
    { name: 'Moussaka', src: 'https://www.196flavors.com/wp-content/uploads/2016/01/moussaka-4-FP.jpg', price: 12 }
];

// Starting wallet amount
let wallet = 100;

// Function to generate a random number
function generateRandomNumber(max) {
    console.log('Running generateRandomNumber function');
    const randomFinalNum = Math.floor(Math.random() * max);
    console.log(randomFinalNum);
    return randomFinalNum;
}

// Function to generate a random background color
function generateBackgroundColor() {
    console.log('Running generateBackgroundColor function');
    const randomIndex = generateRandomNumber(bgColors.length);
    const randomColor = bgColors[randomIndex];
    document.body.style.backgroundColor = randomColor;
}

// Function to generate meals
function generateMeals() {
    console.log('Running generateMeals function');

    // Generate random meal indices
    const meal1Index = generateRandomNumber(meals.length);
    const meal2Index = generateRandomNumber(meals.length);   
    const meal3Index = generateRandomNumber(meals.length);
        
    const meal1 = meals[meal1Index];
    const meal2 = meals[meal2Index];
    const meal3 = meals[meal3Index];

    document.querySelector('#meal1 .card-img-top').src = meal1.src;
    document.querySelector('#meal1 .card-title').textContent = meal1.name;
    document.querySelector('#meal1 .price').textContent = meal1.price;

    document.querySelector('#meal2 .card-img-top').src = meal2.src;
    document.querySelector('#meal2 .card-title').textContent = meal2.name;
    document.querySelector('#meal2 .price').textContent = meal2.price;

    document.querySelector('#meal3 .card-img-top').src = meal3.src;
    document.querySelector('#meal3 .card-title').textContent = meal3.name;
    document.querySelector('#meal3 .price').textContent = meal3.price;

    // Calculate and display the total
    calculateBill();
}

// Function to calculate the total bill
function calculateBill() {
    console.log('Running calculateBill function');
    const meal1price = parseInt(document.querySelector('#meal1 .price').textContent);
    const meal2price = parseInt(document.querySelector('#meal2 .price').textContent);
    const meal3price = parseInt(document.querySelector('#meal3 .price').textContent);
    let total = meal1price + meal2price + meal3price;
    document.querySelector('#total').textContent = total; 
}

// Event listener for "Generate Meals" button
document.getElementById("generate-button").addEventListener("click", generateMeals);

// Event listener for "Purchase All Meals" button
document.getElementById("purchase-button").addEventListener("click", () => {
    const total = parseInt(document.getElementById("total").textContent);
    purchase(total);
});

// Function to handle purchasing meals
function purchase(total) {
    console.log("Running purchase function");
    if (wallet >= total) {
        wallet -= total;
        document.getElementById("wallet").textContent = wallet;
        document.getElementById("purchase-cost").textContent = total;
        document.getElementById("message").classList.remove("invisible");
        generateBackgroundColor();
        generateMeals();
    } else {
        alert("Sorry, you cannot purchase the meals!");
        document.getElementById("message").classList.add("invisible");
    }
}

// Event listener for "Add Funds to Wallet" button
document.getElementById("add-funds-button").addEventListener("click", () => {
    const funds = prompt("How much funds would you like to put in?");
    addFunds(parseInt(funds));
});

// Function to add funds to the wallet
function addFunds(funds) {
    console.log("Running addFunds function");
    wallet += funds;
    console.log("Wallet:", wallet);
    document.getElementById("wallet").textContent = wallet;
}

// Initial setup
generateBackgroundColor();
generateMeals();
document.getElementById("wallet").textContent = wallet;
