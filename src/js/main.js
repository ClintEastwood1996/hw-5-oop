export function CreateProduct(meal) {
    this.name = meal.name;
    this.price = meal.price;
    this.calories = meal.calories;
};

CreateProduct.prototype.calculatePrice = function() {
    return this.price;
};

CreateProduct.prototype.calculateCalories = function() {
    return this.calories;
};



// Hamburger object

export function Hamburger(size, stuffing) {
    this.name = size.name + " with " + stuffing.name;
    this.price = size.price + stuffing.price;
    this.calories = size.calories + stuffing.calories;
};

Hamburger.prototype = Object.create(CreateProduct.prototype);

Hamburger.prototype.getStuffing = function() {
    return stuffing.name;
};

Hamburger.prototype.getSize = function() {
    return size.name;
}; 

Hamburger.SIZE_SMALL = {
    name: 'Small hamburger',
    price: 50,
    calories: 20
};

Hamburger.SIZE_LARGE = {
    name: 'Large hamburger',
    price: 100,
    calories: 40
};

Hamburger.STUFFING_CHEESE = {
    name: 'cheese',
    price: 10,
    calories: 20
};

Hamburger.STUFFING_SALAD = {
    name: 'salad',
    price: 20,
    calories: 5
};

Hamburger.STUFFING_POTATO = {
    name: 'potato',
    price: 15,
    calories: 10
};

// Salad object

export function Salad() {

}

Salad.CAESAR = {
    name: 'Caesar',
    price: 100,
    calories: 20
};
Salad.OLIVIE = {
    name: 'Olivie',
    price: 50,
    calories: 80
};

// Drink object

export function Drink() {
    
}

Drink.COLA = {
    name: 'Cola',
    price: 50,
    calories: 40
};
Drink.COFFEE = {
    name: 'Coffee',
    price: 80,
    calories: 20
};




// Testing
// var hamburger1 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);

// var Product1 = new CreateProduct(hamburger1);

// console.log(Product1.name)
// console.log(Product1.price)
// console.log(Product1.calculateCalories())

// DOM

