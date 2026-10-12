// ===== BAGIAN UMUM: mode gelap (dipakai semua halaman) =====
const tombolTema = document.getElementById("tombol-tema");
if (tombolTema) {
 tombolTema.addEventListener("click", function () {
 document.body.classList.toggle("gelap");
 if (document.body.classList.contains("gelap")) {
 tombolTema.textContent = "Mode Terang";
 } else {
 tombolTema.textContent = "Mode Gelap";
 }
 });
}

// ===== BAGIAN MAHASISWA 2 (Beranda) =====
document.addEventListener("DOMContentLoaded", function () {
    console.log("Halaman Beranda Perpustakaan Digital berhasil dimuat!");
});

// ===== BAGIAN MAHASISWA 3 (Profil dan Kegiatan) =====
document.addEventListener("DOMContentLoaded", () => {
  const tombolTema = document.getElementById("tombol-tema");

  // Cek preferensi tema sebelumnya dari localStorage
  if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark-mode");
    if (tombolTema) tombolTema.textContent = "Mode Terang";
  }

  // Event handler untuk ubah tema
  if (tombolTema) {
    tombolTema.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      
      const isDarkMode = document.body.classList.contains("dark-mode");
      tombolTema.textContent = isDarkMode ? "Mode Terang" : "Mode Gelap";
      localStorage.setItem("tema", isDarkMode ? "dark" : "light");
    });
  }
});


// ===== BAGIAN MAHASISWA 4 (Kontak) =====