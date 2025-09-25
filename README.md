# Bug Tracker - Board

Sebuah aplikasi web sederhana berbasis **HTML, CSS, dan JavaScript** yang menampilkan simulasi **Bug Tracker** dengan sistem **Board**. Aplikasi ini **tidak memiliki backend**, sehingga hanya menjalankan fungsionalitas drag & drop sederhana di sisi frontend.

## 🚀 Fitur

- ➕ Tambah bug dengan tombol **Tambah Bug** di atas board.
- 🗑️ Hapus bug dengan tombol **X** di setiap task.
- 🎯 Aturan drag & drop:
  - Task hanya bisa dipindahkan dari **Bug Ditemukan ➝ Dalam Perbaikan**.
  - Task hanya bisa dipindahkan dari **Dalam Perbaikan ➝ Sudah Fixed**.
  - Task **tidak bisa dipindahkan mundur**.
- 📝 Klik task di kolom **Dalam Perbaikan** untuk menambahkan **catatan perbaikan** (wajib sebelum bisa dipindahkan ke Sudah Fixed).
- ✅ Task yang sudah diberi catatan akan berubah warna hijau.
- 👀 Klik task di kolom **Sudah Fixed** untuk melihat catatan (hanya **readonly**).

## 🖼️ Screenshot

![Tampilan Bug Tracker](/screenshot/tampilan.png)

## ⚙️ Teknologi yang Digunakan

- HTML
- CSS
- JavaScript

## 📦 Cara Menjalankan

```bash
git clone https://github.com/Martin-020/Html-JavaScript-BugTrackerBoard.git
