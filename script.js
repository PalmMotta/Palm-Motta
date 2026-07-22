document.querySelector(".enter-btn").addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("#pm-os").scrollIntoView({
        behavior: "smooth"
    });
});
