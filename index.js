document.addEventListener("DOMContentLoaded", () => {

    const aboutBtn = document.getElementById("aboutBtn");
    const socialsBtn = document.getElementById("socialsBtn");
    const aboutPanel = document.getElementById("aboutPanel");
    const socialsPanel = document.getElementById("socialsPanel");
    const backButtons = document.querySelectorAll("#socialsPanel .backBtn");


    function openPanel(panel) {
        panel.classList.add("active");
    }

    function closePanels() {
        aboutPanel.classList.remove("active");
        socialsPanel.classList.remove("active");
    }

    aboutBtn.addEventListener("click", () => {
    openPanel(aboutPanel);
    current = 0;
    showSlide(current);
});
    socialsBtn.addEventListener("click", () => openPanel(socialsPanel));
    backButtons.forEach(btn => btn.addEventListener("click", closePanels));

    const slides = document.querySelectorAll("#aboutPanel .aboutSlide");
    const nextBtn = document.getElementById("aboutNext");
    const backBtn = document.getElementById("aboutBack");
    const dotsBox = document.getElementById("aboutDots");

    let current = 0;

    slides.forEach((_, i) => {
        const dot = document.createElement("span");
        dotsBox.appendChild(dot);
    });

    const dots = dotsBox.querySelectorAll("span");

    function updateDots(i) {
        dots.forEach(d => d.classList.remove("active"));
        dots[i].classList.add("active");
    }

    function showSlide(i) {
        slides.forEach(s => s.classList.remove("active"));
        slides[i].classList.add("active");

        nextBtn.style.opacity = (i === slides.length - 1) ? .35 : 1;
        nextBtn.style.pointerEvents = (i === slides.length - 1) ? "none" : "all";

        updateDots(i);
    }

    nextBtn.addEventListener("click", () => {
        if (current < slides.length - 1) {
            current++;
            showSlide(current);
        }
    });

    backBtn.addEventListener("click", () => {
        if (current === 0) {
            closePanels();
        } else {
            current--;
            showSlide(current);
        }
    });

    showSlide(0);

});
