$(document).ready(function () {
    // Add scrollspy to <body>
    $('body').scrollspy({
        target: "#navbar-example2",
        offset: 50
    });
    // Add smooth scrolling on all links inside the navbar
    $("#navbar-example2 a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 75
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                //window.location.hash = hash;
            });

        } // End if

    });
    
});

$(window).scroll(function(){
    var win = this;
    var top = win.pageYOffset || 0,
        offset = $('#services').offset().top || 0;
    if(top > (offset/2)){
        $('#navbar-example2').addClass('bg-light');
        $('#search').css('visibility',"visible");
    }else{
        $('#navbar-example2').removeClass('bg-light');
        $('#search').css('visibility',"hidden");
    }
});