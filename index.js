// AOS

AOS.init();

// LOADER

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("load").style.transform = "translateY(-200vh)";
}

// NAVBAR
jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $(".navb").css("background-color", "var(--bg-color)");
        $(".navb a").css("color", "#FBFBFD");
    } else {
        $(".navb").css("background", "none");
        $(".navb a").css("color", "#FBFBFD");
    }
});

// SIDENAV 
function openNav(){
    document.getElementById("sidenav").style.width="100%";
}
function closeNav () {
    document.getElementById("sidenav").style.width="0";
}

//autoheight
function auto_height(elem) {
    elem.style.height = "2px";
    elem.style.height = (elem.scrollHeight) + "px";
}