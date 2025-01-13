/**
 * Animate collapsing navbar
 */
(function() {
  "use strict"; // Start of use strict

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {
    var navbarCollapse = mainNav.querySelector('.navbar-collapse');
    
    if (navbarCollapse) {
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      
      var navbarItems = navbarCollapse.querySelectorAll('a');
      
      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener('click', function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function() {
      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > window.innerHeight * 0.1 || window.innerWidth < 992) {
        mainNav.classList.add("navbar-shrink");
        mainNav.classList.add("border-gradient");
      } else {
        mainNav.classList.remove("navbar-shrink");
        mainNav.classList.remove("border-gradient");
      }
    };
    
    // Collapse now if page is not at top
    collapseNavbar();
    
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
    window.addEventListener("resize", collapseNavbar);
  }

})(); // End of use strict