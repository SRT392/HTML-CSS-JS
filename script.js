var toggleStatus = 1;

//Event listener for click on the div called toggleMenu, activates a style change to move the menu in and out of view. 

document.getElementById("toggleMenu").addEventListener("click", function() {
    if(toggleStatus == 1) {
        document.getElementById("navbar").style.left="0px";
        toggleStatus = 0;
    } else if (toggleStatus == 0) {
        document.getElementById("navbar").style.left="-200px";
        toggleStatus = 1;
    }
});



