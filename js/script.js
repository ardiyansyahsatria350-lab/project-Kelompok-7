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
// ==========================================
// SCRIPT.JS - Perpustakaan Digital
// Dikerjakan oleh Mahasiswa 4
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Fitur Mode Gelap / Terang (Berlaku untuk semua halaman)
    const tombolTema = document.getElementById("tombol-tema");
    
    if (tombolTema) {
        tombolTema.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            
            if (document.body.classList.contains("dark-mode")) {
                tombolTema.textContent = "Mode Terang";
            } else {
                tombolTema.textContent = "Mode Gelap";
            }
        });
    }

    // 2. Fitur Validasi & Pengiriman Form Pesan (Khusus halaman kontak.html)
    const tombolKirim = document.getElementById("tombol-kirim");
    
    if (tombolKirim) {
        tombolKirim.addEventListener("click", () => {
            const nama = document.getElementById("nama").value.trim();
            const email = document.getElementById("email").value.trim();
            const pesan = document.getElementById("pesan").value.trim();
            const statusForm = document.getElementById("status-form");

            // Validasi kolom kosong
            if (nama === "" || email === "" || pesan === "") {
                statusForm.style.color = "#e74c3c";
                statusForm.textContent = "⚠️ Mohon isi semua kolom formulir dengan lengkap!";
                return;
            }

            // Validasi format email sederhana
            if (!email.includes("@") || !email.includes(".")) {
                statusForm.style.color = "#e74c3c";
                statusForm.textContent = "⚠️ Format alamat email tidak valid!";
                return;
            }

            // Jika validasi berhasil
            statusForm.style.color = "#2ecc71";
            statusForm.textContent = `✅ Terima kasih, ${nama}! Pesan Anda berhasil dikirim.`;

            // Reset form setelah berhasil dikirim
            document.getElementById("form-pesan").reset();
        });
    }
});