/*JAVASCRIPT LUAGARES*/
const slider = document.querySelector("#slider");/*creamos la constante*/
let sliderSection = document.queySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection. length -1];/*de esta manera por mucho que cambie le numero siempre temdremos al ultimo*/

const btnLeft = document.querySelector("#btn-right");/*creamos la constante*/
const bthRight = document.querySelector("#btn-left");/*creamos la constante*/

slider.insertAdjacentElement('afterbegin', sliderSectionLast);/*se añade el slider despues de que empiece*/

function Next() {
    let sliderSectionFirst = document.queySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement ('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});