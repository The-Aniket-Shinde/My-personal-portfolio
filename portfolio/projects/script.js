const buttons = document.querySelectorAll(".view_projects");

buttons.forEach(button => {
    const icon = button.querySelector(".view_projects i");

    button.addEventListener("mouseenter", () => {
        icon.classList.replace("fa-face-smile-beam", "fa-face-grin-stars");
    });

    button.addEventListener("mouseleave", () => {
        icon.classList.replace("fa-face-grin-stars", "fa-face-smile-beam");
    });
});