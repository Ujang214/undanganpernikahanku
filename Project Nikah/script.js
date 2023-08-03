// Script JavaScript untuk mengontrol pemutaran lagu
const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');

function playAudio() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playButton.textContent = 'Play';
    }
}

// Script JavaScript untuk mengatur slide gambar otomatis
let currentSlide = 0;
const slides = document.querySelectorAll('#slideshow img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Memulai slide secara otomatis setiap 3 detik (3000 milidetik)
setInterval(nextSlide, 3000);




function redirectToHomePage() {
    window.location.href = "https://undanganpernikahandoden.netlify.app/"; // Ganti URL halaman awal dengan URL yang sesuai
}

// Fungsi untuk menambahkan URL referer pada tombol 'Dapatkan Lokasi'
function setReferrer() {
    const mapButton = document.querySelector(".map_list:first-child");
    mapButton.href = "https://goo.gl/maps/9giyeuaPN5t4sWtG9"; // Ganti URL referer sesuai kebutuhan
    mapButton.target = "_blank"; // Agar tautan terbuka di tab baru
}

// Memanggil fungsi untuk menambahkan URL referer saat halaman dimuat
document.addEventListener("DOMContentLoaded", setReferrer);

// Menambahkan event listener untuk handle form submit
document.getElementById("bukuTamuForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dikirimkan langsung ke server
    redirectToHomePage(); // Memanggil fungsi untuk mengarahkan ke halaman awal
});
