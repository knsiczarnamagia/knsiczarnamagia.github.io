    // Po kliknięciu przycisku, przewiń stronę na górę z płynną animacją
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#backToTopButton').fadeIn();
            } else {
                $('#backToTopButton').fadeOut();
            }
        });

        $('#backToTopButton').click(function() {
            $('html, body').animate({scrollTop: 0}, 800); // Przewijanie do góry z animacją trwającą 800 milisekund
            return false;
        });
    });

    function scrollToSection(sectionNumber) {
        event.preventDefault();
        var sectionId = "section" + sectionNumber;
        var section = document.getElementById(sectionId);
        var sectionTop = section.offsetTop;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
