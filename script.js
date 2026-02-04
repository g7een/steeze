document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        tab.classList.add("active");
    });
});

const scrollTopbtn = document.querySelector(".scroll-top");

scrollTopbtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const rendersbtn = document.getElementById("renders-btn");
rendersbtn.addEventListener("click", () => {
    document.getElementById("renders").scrollIntoView({ behavior: 'smooth' });
});




