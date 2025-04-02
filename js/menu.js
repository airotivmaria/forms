const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove("active");
    }
});