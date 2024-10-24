document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, 100 * index);
    });
  
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.collapse');
  
    navbarToggler.addEventListener('click', function() {
      navbarMenu.classList.toggle('show');
    });
  
    // Cerrar el menu al hacer click sobre el de nuevo o en fuera de el
    document.addEventListener('click', function(event) {
      const isClickInside = navbarMenu.contains(event.target) || navbarToggler.contains(event.target);
      if (!isClickInside) {
        navbarMenu.classList.remove('show');
      }
    });
  
    navbarToggler.addEventListener('click', function() {
      const isMenuOpen = navbarMenu.classList.contains('show');
      if (isMenuOpen) {
        navbarMenu.classList.remove('show');
      } else {
        navbarMenu.classList.add('show');
      }
    });
  
    // Actualizar año
    document.getElementById('year').textContent = new Date().getFullYear();
  });
  
  const myCarousel = document.querySelector('#fullWidthSlider');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true
});
