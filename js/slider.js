const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSectionLast = sliderSection[sliderSection.length -1];

const btnleft = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft ="-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition ="none";
        slider.insertAdjecentElement ('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    } ,500 );
}

function Prev() {
    let sliderSection = document.querySelector (".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition ="none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnright.addEventListener('click', function(){
    Next();
});

btnleft.addEventListener('click', function(){
    Prev();
});

setInterval(function (){
    Next();
}, 5000);