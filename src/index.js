// Import styles
import './styles/reset.css';
import './styles/main.scss';


// Import Scripts
import './js/main';


import {CreateProduct, Drink, Hamburger, Salad} from './js/main';

var PlusButtons = document.querySelectorAll('.plus-button');

for (let PlusButton of PlusButtons) {
    PlusButton.onclick = function() {
        PlusButton.parentElement.previousElementSibling.innerHTML = Number.parseInt(PlusButton.parentElement.previousElementSibling.innerHTML) + 1;
    }
}

var MinusButtons = document.querySelectorAll('.minus-button');

for (let MinusButton of MinusButtons) {
    MinusButton.onclick = function() {
        let Product = MinusButton.parentElement.previousElementSibling;
        let ProductCount = Number.parseInt(Product.innerHTML);

        if (ProductCount > 0) {
            ProductCount--;
            Product.innerHTML = ProductCount;
        }
    }
}


var counts = document.querySelectorAll(".item__count");
var LargeHamburgerStuffings = document.querySelectorAll(".LargeHamburgerStuff");
var SmallHamburgerStuffings = document.querySelectorAll(".SmallHamburgerStuff");


// console.log(counts[0].innerHTML)

document.getElementById("get-price").onclick = calculate("TotalPrice");
document.getElementById("get-calories").onclick = calculate("TottalCalories");

function calculate(str) {
    return function() {
        var TotalPrice = 0;
        var TottalCalories = 0;


        for (var LargeHamburgerStuffing of LargeHamburgerStuffings) {
            if (LargeHamburgerStuffing.checked) {
                switch (LargeHamburgerStuffing.getAttribute("value")) {
                    case ("cheese"): {
                        var LargeHamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
                        break;
                    }
                    case ("salad"): {
                        var LargeHamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_SALAD);
                        break;
                    }
                    case ("potato"): {
                        var LargeHamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO);
                        break;
                    }
                }
            }
        }


        for (var SmallHamburgerStuffing of SmallHamburgerStuffings) {
            if (SmallHamburgerStuffing.checked) {
                switch (SmallHamburgerStuffing.getAttribute("value")) {
                    case ("cheese"): {
                        var SmallHamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
                        break;
                    }
                    case ("salad"): {
                        var SmallHamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);
                        break;
                    }
                    case ("potato"): {
                        var SmallHamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_POTATO);
                        break;
                    }
                }
            }
        }


        for (var count of counts) {
        switch (count.getAttribute("id")) {
            case ("LargeHamburgerAmount"): {
                    var LargeHamburgerWithStuff = new CreateProduct(LargeHamburger);
                    TotalPrice += LargeHamburgerWithStuff.price * count.innerHTML;
                    TottalCalories += LargeHamburgerWithStuff.calories * count.innerHTML;
                    break;
            };
            case ("SmallHamburgerAmount"): {
                    var SmallHamburgerWithStuff = new CreateProduct(SmallHamburger);
                    TotalPrice += SmallHamburgerWithStuff.price * count.innerHTML;
                    TottalCalories += SmallHamburgerWithStuff.calories * count.innerHTML;
                    break;
            };
            case ("SaladCaesarAmount"): {
                    var SaladCaesar = new CreateProduct(Salad.CAESAR);
                    TotalPrice += SaladCaesar.price * count.innerHTML;
                    TottalCalories += SaladCaesar.calories * count.innerHTML;
                    break;
            };
            case ("SaladOlivieAmount"): {
                    var SaladOlivie = new CreateProduct(Salad.OLIVIE);
                    TotalPrice += SaladOlivie.price * count.innerHTML;
                    TottalCalories += SaladOlivie.calories * count.innerHTML;
                    break;
            };
            case ("DrinkColaAmount"): {
                    var DrinkCola = new CreateProduct(Drink.COLA);
                    TotalPrice += DrinkCola.price * count.innerHTML;
                    TottalCalories += DrinkCola.calories * count.innerHTML;
                    break;
            };
            case ("DrinkCoffeeAmount"): {
                    var DrinkCoffee = new CreateProduct(Drink.COFFEE);
                    TotalPrice += DrinkCoffee.price * count.innerHTML;
                    TottalCalories += DrinkCoffee.calories * count.innerHTML;
                    break;
            };
        }
        }

        if (str == "TotalPrice") {
            document.getElementById(str).innerHTML = TotalPrice;
        }

        if (str == "TottalCalories") {
            document.getElementById(str).innerHTML = TottalCalories;
        }
        
    }
}

