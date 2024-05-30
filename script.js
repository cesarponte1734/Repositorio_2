let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let styletag = document.querySelector("style");
let container = document.querySelector(".container");
let zadacha1 = document.querySelector("article>div");
let zadacha2 = document.querySelector("article>span");
let zadacha3 = document.querySelector("article>img");
let uslov = document.querySelector(".h1");
let img = document.querySelector("img");

function zadachaOne() {
    zadacha1.style.flex = one.value;
    zadacha2.style.flex = two.value;
    zadacha3.style.flex = three.value;
}
let timer = setInterval(zadachaOne, 50);