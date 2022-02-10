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

$(document).ready(function(){
    // Add smooth scrolling to all links with the class scroll
    $("a.scroll").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });