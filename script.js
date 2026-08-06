// =========================================================
// PALM MOTTA V5
// Interactive Experience
// =========================================================


// =========================
// HEADER SCROLL EFFECT
// =========================

const header = document.querySelector("#header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});





// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    "section, .product-card"
);


const observer = new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},
{
    threshold:0.15
});


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});





// =========================
// SMOOTH ANCHOR MOVEMENT
// =========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {


anchor.addEventListener("click", function(e){

    const target = document.querySelector(
        this.getAttribute("href")
    );


    if(target){

        e.preventDefault();


        target.scrollIntoView({

            behavior:"smooth"

        });

    }


});


});
