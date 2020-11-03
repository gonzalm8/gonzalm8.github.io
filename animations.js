
//Active navigation changes
let navList = document.getElementById("nav-list");
let navButton = navList.getElementsByClassName("nav-button");

console.log(navButton.length);
for (let j = 0; j < navButton.length; j++) {
    console.log(j + " li element has id " + navButton[j].id);
    navButton[j].addEventListener("click", function () {
        let button = document.getElementsByClassName("active");

        if (button.length > 0) {
            navButton[j].className = navButton[j].className.replace(" active", "");
        }

        this.className += " active";
    });
}

//Homepage Slider Functions
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if(slides.length > 0){
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
} 

//Active navigation changes
// let navList = document.getElementById("nav-list");
// let navButton = navList.getElementsByClassName("nav-buttons");

// for(let i = 0; i < navButton.length; i++){
//     console.log(i + " li element has classname "+navButton[i].className);
//     navButton[i].addEventListener("click",function() {
//        let button = document.getElementsByClassName("active");

//        if(button.length > 0){
//            navButton[i].className = navButton.className.replace("active", "");
//        }

//        this.className += "active";
//     });
// }