// Tongle Function for showing Menu - Media-Querie: 760px
// Burger-Menu onclick
function showVerticalMenu() {
    let vertNav = document.getElementById("vertical-nav");
    if (vertNav.style.display === "none") {
        vertNav.style.display = "block";
        document.getElementsByClassName("burger-Menu")[0].innerHTML = "☓";
    } else {
        vertNav.style.display = "none";
        document.getElementsByClassName("burger-Menu")[0].innerHTML = "☰";
    }  
}

function showContactForm() {
    let contactForm = document.getElementById("contact-form-rr");
    let cLink1 = document.getElementsByClassName("contact-link");
    if (contactForm.style.display === "none") {
        contactForm.style.display = "block";
        for (let i = 0; i < cLink1.length; i++) {
            cLink1[i].innerHTML = "CONTACT";
            cLink1[i].style.color = "red";
            cLink1[i].style.borderBottom = "1px solid red";
        }
    } else {
        contactForm.style.display = "none";
        for (let i = 0; i < cLink1.length; i++) {
            cLink1[i].innerHTML = "Contact";
            cLink1[i].style.color = "#323A45";
            cLink1[i].style.borderBottom = "none";
        }
    }  
}

// vertical-navigation to display > none when rezising the Body
function displayNoneSpecial() {
    document.getElementById("vertical-nav").style.display = "none";
    document.getElementsByClassName("burger-Menu")[0].innerHTML = "☰";
}