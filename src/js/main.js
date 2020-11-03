function CreateProduct(meal) {
    this.price = meal.price;
    this.calories = meal.calories;
}

CreateProduct.prototype.calculatePrice = function() {
    return this.price;
} 

CreateProduct.prototype.calculateCalories = function() {
    return this.calories;
} 



// Hamburger object

function Hamburger(size, stuffing) {
    this.price = size.price + stuffing.price;
    this.calories = size.calories + stuffing.calories;
}

Hamburger.prototype = Object.create(CreateProduct.prototype);



Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20
}

Hamburger.SIZE_LARGE = {
    price: 100,
    calories: 40
};

Hamburger.STUFFING_CHEESE = {
    price: 10,
    calories: 20
};

Hamburger.STUFFING_SALAD = {
    price: 20,
    calories: 5
};

Hamburger.STUFFING_POTATO = {
    price: 15,
    calories: 10
};




// Testing
var hamburger1 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);

alert(hamburger1.calculateCalories())