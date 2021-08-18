// Webp image code

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

// Burger menu 

const burger = document.querySelector('.burger');
const menuNav = document.querySelector('.nav');

if (burger) {
    burger.addEventListener('click', (e) => {
        document.body.classList.toggle('_lock');
        e.currentTarget.classList.toggle('burger--active');
        menuNav.classList.toggle('nav--active');
    });
}

