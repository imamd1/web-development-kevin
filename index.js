window.addEventListener('scroll', () => {
    var jumbotron = document.querySelector('.jumbotron');
    var scrollPosition = window.scrollY;
    var fadePoint = window.innerHeight * 0.5;
    var opacity = Math.max(1 - scrollPosition / fadePoint, 0);
    jumbotron.style.opacity = opacity;
  });

AOS.init();
