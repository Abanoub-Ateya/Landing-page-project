/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


//  Define Global Variables
 

const unorderedList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const listItems = document.getElementsByClassName("menu__link");


// build the nav

/* 
The nav is built through looping over sections and 
creating nav based on the No. of sections available 
also adding the menu__link class and href attribute 
to each anchor built
*/

for (i = 1; i <= sections.length; i++) {
    
    const list = document.getElementById("navbar__list");
    list.innerHTML += `<li><a class="menu__link" href="#section${i}">section${list.children.length + 1} </a></li>`;
}




// Add class 'active' to section when near top of viewport

/* 
As the querySelectorAll() method returns a NodeList , forEach loop is used to 
iterate over each node .
Using the getBoundingClientRect method, an active class is added to the 
section in the viewport and removed out of the viewport.
*/


function makeActive(){
sections.forEach(function (Node){
   const view= Node.getBoundingClientRect()
    if (view.top<= 150 && view.bottom>=150){ 
        Node.classList.add("your-active-class")
        
    }
    else{
        Node.classList.remove("your-active-class")
    }
})

}



// highlighting the active menu tab

/*
This highlight is done through looping over links and adding an event listener 
that responds to click and executes a function of adding an active class that 
has a defined style 
*/
listItems[0].classList.add("active")
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



// Set sections as active   

/*
Adding an event listener that responds to scroll and executes a function 
that highlights the section in viewport
*/

document.addEventListener("scroll", function () { makeActive(); });




// Scroll to anchor ID using scrollTO event

/* 
adding an event listener which responds to click on each link to scroll the 
related section into view with a smooth behavior , the preventDefault() stops 
executing the default action and executes the customized added function 

*/

for(let i=0; i< listItems.length; i++){
    listItems[i].addEventListener("click", smoothScroll)
    function smoothScroll(e){
        e.preventDefault();
        sections[i].scrollIntoView({behavior: "smooth"})
    }
}




// building back to top button

/* 
a button element is created and added to HTML file  , 
styled in the CSS section 
and added the event listener here so by clicking the button , 
the page scrolls smoothly to the top
*/

const topButton = document.createElement("button")
const foot = document.getElementsByClassName("page__footer")
foot[0].appendChild(topButton)
topButton.className=("button")
topButton.innerHTML="Go to top"
topButton.addEventListener("click", goToTop)
function goToTop (){
document.documentElement.scrollTop = 0;    
}


// adding a setTimeOut 

/* 
adding a setTimeOut() method to goToTop() functin so, 
scrolling to top is implemented automatically after 10 seconds 
*/

const topTimeout = setTimeout(goToTop, 10000);



// making collapsible sections 

/* 
a button element is added to each section in HTML file 
and styled in the CSS file . 
and an event listerner is added , 
so that by clicking the button the section collapses.
*/

const collapse = document.getElementsByClassName("collapsible");

for (i = 0; i < collapse.length; i++) {
 collapse[i].addEventListener("click", collapsed)}

    function collapsed() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;

        if (content.style.display === "none") {
            content.style.display = "block";
        
        } else {
            content.style.display = "none";

        }
   
   
 }











