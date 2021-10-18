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
    $('.slider-for-two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav-two',
        arrows: false,
        fade: true,

    });
    $('.slider-nav-two').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for-two',
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
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
    console.log(activ)
    if (activ.style.backgroundColor === 'rgb(93, 77, 78)') {
        activ.style.backgroundColor = 'white';
    } else {
        activ.style.backgroundColor = 'rgb(93, 77, 78)';

    }
    console.log(activBox)

}
