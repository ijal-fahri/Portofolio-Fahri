// Navbar Fix
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};


// Hamburger Menu Logic
        const hamburger = document.querySelector('#hamburger');
        const navMenu = document.querySelector('#nav-menu');

        // Fungsi untuk menutup menu
        const closeMenu = () => {
            hamburger.classList.remove('hamburger-active');
            navMenu.classList.add('hidden');
        };

        hamburger.addEventListener('click', function (e) {
            // Hentikan event propagation agar klik di hamburger tidak dianggap sebagai klik di luar
            e.stopPropagation();
            hamburger.classList.toggle('hamburger-active');
            navMenu.classList.toggle('hidden');
        });

        // Klik di luar menu hamburger untuk menutup menu
        window.addEventListener('click', function (e) {
            // Pastikan klik terjadi di luar hamburger DAN di luar navMenu
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMenu();
            }
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

// Darkmode toggle 
        const darkToggle = document.querySelector('#dark-toggle');
        const html = document.querySelector('html');

        // Fungsi untuk menerapkan tema berdasarkan local storage atau preferensi sistem
        const applyTheme = () => {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                html.classList.add('dark');
                darkToggle.checked = true; // Setel toggle ke 'checked' jika dark mode aktif
            } else {
                html.classList.remove('dark');
                darkToggle.checked = false; // Setel toggle ke 'unchecked' jika light mode aktif
            }
        };

        // Panggil fungsi saat halaman dimuat
        applyTheme();

        // Tambahkan event listener untuk toggle
        darkToggle.addEventListener('click', () => {
            if (darkToggle.checked) {
                html.classList.add('dark');
                localStorage.theme = 'dark';
            } else {
                html.classList.remove('dark');
                localStorage.theme = 'light';
            }
        });

