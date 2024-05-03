// Add JavaScript to collapse the navbar when a link is clicked
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
  });