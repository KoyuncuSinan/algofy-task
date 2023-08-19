let burgerMenu = document.getElementById("burger-menu");
let sidebar = document.querySelector(".sidebar");
let heroSection = document.getElementById("hero-section");
let closeIcon = document.getElementById("close-icon");
let aboutMore = document.getElementById("about-more");
let aboutSpan = document.getElementById("about-span");

const homeTag = document.getElementById("home");
const aboutTag = document.getElementById("about-tag")
const projectsTag = document.getElementById("projects")
const contactTag = document.getElementById("contact-tag")
const homeImageTag = document.getElementById("home-logo");
const homeImageTagDesktop = document.getElementById("home-logo-desktop")

const homeDesktopTag = document.getElementById("home-desktop");
const aboutDesktopTag = document.getElementById("about-desktop-tag")
const projectsDesktopTag = document.getElementById("projects-desktop")
const contactDesktopTag = document.getElementById("contact-desktop-tag")


homeTag.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
    toggleCloseIcon();
})

homeDesktopTag.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
    toggleCloseIcon();
})
homeImageTag.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
    toggleCloseIcon();
})
homeImageTagDesktop.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
    toggleCloseIcon();
})

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = -100; 
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
        toggleCloseIcon();
    }
}

//Mobile nav scroll
aboutTag.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection("about");
});

projectsTag.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection("projects-section-mobile");
});

contactTag.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection("contact");
});


//Desktop nav scroll

aboutDesktopTag.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection("about");
});

projectsDesktopTag.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection("projects-section-desktop");
});

contactDesktopTag.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection("contact");
});




let currentIndex = 0;
const projects = document.querySelectorAll('.projects-single');
const slider = document.querySelector('.slider');
const truncateMore = document.querySelector(".truncate-more")

function toggleSidebar(){
    // Toggle sidebar for mobile devices
    sidebar.classList.toggle("active");
    burgerMenu.style.display = "none";
    closeIcon.style.display = "block"

}

function toggleCloseIcon(){
    //Replacing close icon with burger icon and closing the sidebar
    sidebar.classList.remove("active");
    burgerMenu.style.display = "block";
    closeIcon.style.display = "none"
}

function toggleMoreLess(){
    //Show more and Less logic in about section
    if (aboutSpan.style.display === "none" || aboutSpan.style.display === "") {
        aboutSpan.style.display = "inline"; 
        aboutMore.innerText = "SHOW LESS";
    } else {
        aboutSpan.style.display = "none"; 
        aboutMore.innerText = "SHOW MORE";
    }
}
let expandedDescription = null;

function showSlide(index) {
    currentIndex = index;
    if (currentIndex < 0) {
        currentIndex = projects.length - 1;
    } else if (currentIndex >= projects.length) {
        currentIndex = 0;
    }
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    if (expandedDescription) {
        toggleDescription(false, expandedDescription.querySelector(".truncate-more"));
    }
    resetDescriptions();
    showSlide(currentIndex - 1);
}

function nextSlide() {
    if (expandedDescription) {
        toggleDescription(false, expandedDescription.querySelector(".truncate-more"));
    }
    resetDescriptions();
    showSlide(currentIndex + 1);
}

showSlide(currentIndex); // Initialize the slider

function resetDescriptions() {
    let descriptionContainers = document.querySelectorAll(".description-container");

    descriptionContainers.forEach(descriptionContainer => {
        let truncateText = descriptionContainer.querySelector(".truncate-text");
        let fullText = descriptionContainer.querySelector(".full-text");
        let truncateMore = descriptionContainer.querySelector(".truncate-more");

        truncateText.style.display = "block";
        fullText.style.display = "none";
        truncateMore.innerText = "READ MORE";
        descriptionContainer.style.maxHeight = "200px";
    });
}

function toggleDescription(toggleElement) {
    let descriptionContainer = toggleElement.closest(".description-container");
    let truncateText = descriptionContainer.querySelector(".truncate-text");
    let fullText = descriptionContainer.querySelector(".full-text");
    let truncateMore = descriptionContainer.querySelector(".truncate-more");

    if (truncateText.style.display === "none") {
        truncateText.style.display = "block";
        fullText.style.display = "none";
        truncateMore.innerText = "READ MORE";
        descriptionContainer.style.maxHeight = "200px";

    } else {
        truncateText.style.display = "none";
        fullText.style.display = "block";
        truncateMore.innerText = "READ LESS";
        descriptionContainer.style.maxHeight = "100%";
    }
}


burgerMenu.addEventListener("click",toggleSidebar);
closeIcon.addEventListener("click",toggleCloseIcon);
aboutMore.addEventListener("click", toggleMoreLess);



