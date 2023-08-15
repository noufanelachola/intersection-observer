const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};

const observer = new IntersectionObserver((entries,observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
},options);

const targetElements = document.querySelectorAll(".para");
targetElements.forEach(targetElement => observer.observe(targetElement));