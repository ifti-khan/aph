$(document).ready(function () {
    //This is for the copyright year located in the footer 
    //and will auto update when the year date changes
    $("#copyright-footerYear").text(new Date().getFullYear());

    //This block of code is for the back to top button
    //This part of the code makes the button visible when the user scrolls
    let topButton = $('#back-to-top-btn');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            topButton.addClass('visible');
        } else {
            topButton.removeClass('visible');
        }
    });

    //This is part of the floating scroll button, so when a user clicks the button 
    //it will take the user back to the top of the page.
    topButton.on('click', function (event) {
        event.preventDefault();
        $('html, body').scrollTop(0);
    });


    //Navbar scroll background colour change
    let mainHeader = document.getElementById("main-head");
    let mainHeaderHeight = mainHeader.offsetHeight;
    let navBar = $('#topNav');

    //let mainHeaderWidth = mainHeader.offsetWidth;
    //console.log(mainHeaderHeight);
    //console.log(mainHeaderWidth);

    $(window).scroll(function () {
        if ($(window).scrollTop() > mainHeaderHeight) {
            navBar.removeClass('bg-white').addClass('bg-dark');        
        } else {
            navBar.removeClass('bg-dark').addClass('bg-white');
        }
    });

});