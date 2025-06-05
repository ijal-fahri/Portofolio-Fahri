// Navbar Fix
window.onscroll = function ( ) {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Email js

  (function(){
    emailjs.init("7tKAHXRDH8G-aSGkP"); // Ganti dengan Public Key lu
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_a5nps9o', 'template_3itlr8n', this)
      .then(function() {
        document.getElementById("status-message").innerText = "Pesan berhasil dikirim!";
      }, function(error) {
        document.getElementById("status-message").innerText = "Gagal mengirim pesan: " + error.text;
      });
  });

  
