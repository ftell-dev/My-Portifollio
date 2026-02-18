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

const toolCards = document.querySelectorAll(".toolCard");
const modal = document.getElementById("toolModal");
const modalTitle = document.getElementById("toolTitle");
const modalDesc = document.getElementById("toolDesc");
const modalUses = document.getElementById("toolUses");
const modalClose = document.getElementById("toolClose");

const toolData = {
java: {
title: "Java",
desc: "Object-oriented language focused on structure and scalability.",
uses: [
"Backend logic",
"Strong typing practice",
"OOP patterns"
]},

html: {
title: "HTML",
desc: "Structure layer of every web interface.",
uses: [
"Web development",
"Accessibility",
"SEO structure"
]},

css: {
title: "CSS",
desc: "Style layer of every web interface.",
uses: [
"Layouts",
"Visual identity",
"Responsive design",
"Animations"
]},

js: {
title: "JavaScript",
desc: "Behavior layer of every web interface.",
uses: [
"Interactivity",
"Dynamic content",
"UI logic",
"Events"
]}
};

toolCards.forEach(card => {
card.addEventListener("click", () => {

const key = card.dataset.tool;
const data = toolData[key];
if (!data) return;

modal.className = "toolModal active " + key;

modalTitle.textContent = data.title;
modalDesc.textContent = data.desc;

modalUses.innerHTML = "";

data.uses.forEach(u => {
const li = document.createElement("li");
li.textContent = u;
modalUses.appendChild(li);
});

});
});

modalClose.addEventListener("click", () => {
modal.className = "toolModal";
});
});