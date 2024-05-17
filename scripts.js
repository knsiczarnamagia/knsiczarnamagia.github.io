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
            $('html, body').animate({scrollTop: 0}, 1000); // Przewijanie do góry z animacją trwającą 1000 milisekund
            return false;
        });
    });

    function scrollToSection(sectionNumber) {
        event.preventDefault();
        var sectionId = "section" + sectionNumber;
        var section = document.getElementById(sectionId);
        var sectionTop = section.offsetTop;
        if(sectionNumber === 4){
            sectionTop = section.offsetTop - 100;
        }
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }

    function toggleMobileMenu() {
        console.log("Toggle mobile menu clicked");
        var mobileMenu = document.getElementById("mobile-menu");
        console.log(mobileMenu.style.display);
        console.log(screen.width);
        if(mobileMenu.style.display === 'block' && screen.width < 769){
            mobileMenu.style.display = "none";
        }else{
            mobileMenu.style.display = "block";
        }
      }

      function hideMenu(){
        var mobileMenu = document.getElementById("mobile-menu");
        console.log(mobileMenu.style.display);
        if(screen.width < 769){
            mobileMenu.style.display = "none";
        }

      }
      

    
