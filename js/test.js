// side navigation bar overlay
function openNav() {
    /*
    let x = document.getElementById("mySidenav");
    let y = document.getElementsByClassName("navMenu");
    if (x.style.diaplay === "none") {
        x.style.display = "block";
    }
    */
    document.getElementById("mySidenav").style.width = "250px";
    //side navigation bar opacity
    document.body.style.backgroundColor = "rgb(0,0,0,0.4)";
    //side navigation bar opacity end
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "#f1f1f1";
}
// side navigation bar overlay end



// collapse section
let coll = document.getElementsByClassName("collapse");
let i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
// collapse section end

// googleMap
function myMap() {
    let mapProp = {
        center: new google.maps.Latlng(51.508742, -0.120850), zoom: 5,
    };
    let map = new google.maps.Map(document.getElementById("goolgeMap"), mapProp);
}
// googleMap end

// form car makes and model
filterSelection("all")
function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("act");
        current[0].className = current[0].className.replace("act", "");
        this.className += "act";
    });
}
// form car makes and model end

// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlideshow");
    let dots = document.getElementsByClassName("slideshowDemo");
    //    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("slideshowActive", " ");
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += "slideshowActive";
    }
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
//slideshow end

// footer Web4Develop Logo
// needs work
// document.getElementById(W4DGreen).