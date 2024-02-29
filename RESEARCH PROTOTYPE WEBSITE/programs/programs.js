var bc1 = document.getElementById("bc1");
var bc2 = document.getElementById("bc2");
var bc3 = document.getElementById("bc3");
var bc4 = document.getElementById("bc4");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

function openST() {
    bc1.style.transform = "translateX(0)";
    bc2.style.transform = "translateX(500%)";
    bc3.style.transform = "translateX(500%)";
    bc4.style.transform = "translateX(500%)";
    btn1.style.color = "var(--third-color)";
    btn2.style.color = "var(--white)";
    btn3.style.color = "var(--white)";
    btn4.style.color = "var(--white)";
    bc1.style.transitionDelay = "0.3s";
    bc2.style.transitionDelay = "0s";
    bc3.style.transitionDelay = "0s";
    bc4.style.transitionDelay = "0s";
}

function openCD() {
    bc1.style.transform = "translateX(500%)";
    bc2.style.transform = "translateX(0)";
    bc3.style.transform = "translateX(500%)";
    bc4.style.transform = "translateX(500%)";
    btn1.style.color = "var(--white)";
    btn2.style.color = "var(--third-color)";
    btn3.style.color = "var(--white)";
    btn4.style.color = "var(--white)";
    bc1.style.transitionDelay = "0s";
    bc2.style.transitionDelay = "0.3s";
    bc3.style.transitionDelay = "0s";
    bc4.style.transitionDelay = "0s";
}

function openMG() {
    bc1.style.transform = "translateX(500%)";
    bc2.style.transform = "translateX(500%)";
    bc3.style.transform = "translateX(0)";
    bc4.style.transform = "translateX(500%)";
    btn1.style.color = "var(--white)";
    btn2.style.color = "var(--white)";
    btn3.style.color = "var(--third-color)";
    btn4.style.color = "var(--white)";
    bc1.style.transitionDelay = "0s";
    bc2.style.transitionDelay = "0s";
    bc3.style.transitionDelay = "0.3s";
    bc4.style.transitionDelay = "0s";
}

function openFL() {
    bc1.style.transform = "translateX(500%)";
    bc2.style.transform = "translateX(500%)";
    bc3.style.transform = "translateX(500%)";
    bc4.style.transform = "translateX(0)";
    btn1.style.color = "var(--white)";
    btn2.style.color = "var(--white)";
    btn3.style.color = "var(--white)";
    btn4.style.color = "var(--third-color)";
    bc1.style.transitionDelay = "0s";
    bc2.style.transitionDelay = "0s";
    bc3.style.transitionDelay = "0s";
    bc4.style.transitionDelay = "0.3s";
}
