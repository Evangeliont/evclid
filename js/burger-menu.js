window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#nav-menu').classList.toggle('nav--active');
  });
});
