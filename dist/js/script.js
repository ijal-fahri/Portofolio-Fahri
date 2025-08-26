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

// Email js (Kode ini saya biarkan, pastikan Anda sudah mengaturnya dengan benar)
(function(){
    // emailjs.init("7tKAHXRDH8G-aSGkP"); // Public Key 
})();

// Anda tidak memiliki form dengan id 'contact-form' di index.html,
// jadi saya beri pengaman agar tidak error juga.
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        emailjs.sendForm('service_a5nps9o', 'template_3itlr8n', this) // Service ID & Template ID 
        .then(function() {
            document.getElementById("status-message").innerText = "Pesan berhasil dikirim!";

            document.getElementById('name').value = '';     
            document.getElementById('email').value = '';    
            document.getElementById('pesan').value = '';    

        }, function(error) {
            document.getElementById("status-message").innerText = "Gagal mengirim pesan: " + error.text;
        });
    });
}


// Darkmode toggle (SUDAH DIPERBAIKI)
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

// Tambahkan event listener untuk toggle, gunakan event 'change'
darkToggle.addEventListener('change', function () {
    if (this.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Saat halaman dimuat, sesuaikan posisi toggle berdasarkan tema yang aktif.
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}


function openModal(src) {
    document.getElementById('modalImage').src = src;
    document.getElementById('imageModal').classList.remove('hidden');
    document.getElementById('imageModal').classList.add('flex');
}

function closeModal() {
    document.getElementById('imageModal').classList.add('hidden');
    document.getElementById('imageModal').classList.remove('flex');
}

// pop up (SUDAH DIPERBAIKI AGAR TIDAK ERROR)
document.addEventListener('DOMContentLoaded', function() {
    const certificateItems = document.querySelectorAll('.certificate-item');
    const certificatePopup = document.getElementById('certificate-popup');
    const popupImage = document.getElementById('popup-image');
    const popupCloseButton = document.getElementById('popup-close');

    // HANYA jalankan kode ini JIKA elemennya ada
    if (certificatePopup && popupCloseButton) {
        certificateItems.forEach(item => {
            item.addEventListener('click', function() {
                const imageUrl = this.dataset.image;
                popupImage.src = imageUrl;
                certificatePopup.classList.remove('hidden');
            });
        });

        popupCloseButton.addEventListener('click', function() {
            certificatePopup.classList.add('hidden');
            popupImage.src = '';
        });

        certificatePopup.addEventListener('click', function(event) {
            if (event.target === this) {
                this.classList.add('hidden');
                popupImage.src = '';
            }
        });
    }
});