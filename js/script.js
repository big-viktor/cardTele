$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        arrows: false,

    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
    });
});


const displayScore = document.getElementById('score');
const priceTovar = document.getElementById('price_tovar')

let price = parseInt(priceTovar.innerHTML);
let number = 1;
const letPriceTovar = price;
let newNumber = price;

const addPlus = (add) => {
    newNumber += letPriceTovar;
    priceTovar.innerHTML = newNumber
    number += +1;
    displayScore.innerHTML = number;
};
const addMinus = (add) => {
    if (number >= 1) {
        newNumber -= letPriceTovar;
        priceTovar.innerHTML = newNumber
        number += -1;
        displayScore.innerHTML = number;
    }

};

let activBox = false;

const check = (box) => {
    activ = box.children[0];

    if (activBox == false) {
        activ.style.backgroundColor = '#5d4d4e';
        activBox = true;
    }
    else {
        activ.style.backgroundColor = 'white';
        activBox = false;
    }
}