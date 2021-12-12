//navbar change
const sectionHome = document.querySelector("#section-home");
const navbar = document.querySelector(".mynav");

const options = {rootMargin: "-120px"};

const observer = new IntersectionObserver(function(entires, observer){
    entires.forEach(entry => {
        if(entry.isIntersecting){
            navbar.classList.remove("mynav-scrolled");
        } else{
            navbar.classList.add("mynav-scrolled");
        }
    })
}, options);

observer.observe(sectionHome);