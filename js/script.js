//  page scroll

$(document).ready(function () {
    var x = document.getElementById("myMenu");    
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            x.className = "menu";
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
               
            });

        }
    });
});

//  menu responsive

function myFunction() {
    var x = document.getElementById("myMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
