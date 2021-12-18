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


const sections = document.querySelectorAll(".fade-in");
const scrollAppearOptions = {threshold: 0.5};

const scrollAppear = new IntersectionObserver(function(entires, scrollAppear){
    entires.forEach((entry)=>{
        console.log(entry);
        if(!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add("appear");
            scrollAppear.unobserve(entry.target);
        }
    })
}, scrollAppearOptions);

sections.forEach((section)=>{
    scrollAppear.observe(section);
});