


const lowerHeader = document.getElementById("lower-header");
const sections = document.querySelectorAll("main > section");
const navHeader = document.querySelectorAll("#lower-header > a");



const navVisual = document.getElementById("nav-section");
const navContainer = document.getElementById("lower-header");

navVisual.style.height = `${lowerHeader.getBoundingClientRect().height}px`;
navVisual.style.width = `${navHeader[0].getBoundingClientRect().width}px`;

function changeVisual(activeHeader) {
    const headerBounds = activeHeader.getBoundingClientRect();
    const containerBounds = navContainer.getBoundingClientRect();

    const left = headerBounds.left - containerBounds.left;

    navVisual.style.transform = `translateX(${left}px)`;
}

window.addEventListener("resize", () => {
    const activeHeader = document.querySelector("#lower-header a.active");

    navVisual.style.height = `${lowerHeader.getBoundingClientRect().height}px`;
    navVisual.style.width = `${navHeader[0].getBoundingClientRect().width}px`;
    if (activeHeader) {
        changeVisual(activeHeader);
    }
});


const startElement = 0;
const observer = new IntersectionObserver((entries) => {
    if (entries[startElement].isIntersecting) {
        const section = entries[startElement].target.id;

        for (let i = 0; i < navHeader.length; i++) {
            let header = navHeader[i];
            if (navHeader[i].getAttribute("href") == `#${section}`) {
                
                
                header.classList.add("active");
                changeVisual(header);
            }
            else {
                header.classList.remove("active");
            }
        }
    }
}, {
    threshold: [0.7, 1]
});

// this is the loop that gives the ability to notice which sections are active
for (let i = 0; i < sections.length; i++) {
    observer.observe(sections[i]);
}


