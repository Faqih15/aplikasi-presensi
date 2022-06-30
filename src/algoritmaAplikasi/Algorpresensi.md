A. algoritma presensi :
- user login, jika berhasil maka arahkan ke presensi
- munculkan nama user yang login di local storage presensi
- yang diambil dari local storage dari daftar
- Masukkan TANGGAL ke local storage presensi
- 
- cek user sudah ada atau belum di presensi
- jika ada maka tampilkan button masuk
- user meng klik button masuk untuk mengisi jam masuk

- cek user dan tanggal sdh ada atau belum
- jika sudah maka tampilkan button KELUAR dan hide button MASUK

- jika belum maka ambil data masuk dari local storage
- user meng klik button keluar untuk mengisi jam KELUAR

= localStorage "presensi" punya data :
    [
        {nama:"agus", tanggal:"", jamMasuk:"", jamKeluar:""},
        {nama:"budi", tanggal:"", jamMasuk:"", jamKeluar:""},
        {nama:"coco", tanggal:"", jamMasuk:"", jamKeluar:""},
        {nama:"dodo", tanggal:"", jamMasuk:"", jamKeluar:""},
        {nama:"epan", tanggal:"", jamMasuk:"", jamKeluar:""},

    ]

-----    
x user login masukkan nama
x cari data siswa berdasarkan nama yang di input
- jika data siswa ada?
:true
    -cari data absen berdasarkan nama dan tanggal?
    :true
    :false
        - tambahkan data baru ke absen
:false
    - tambahkan data siswa


x tambahkan button keluar
- onclick: cari data absen berdasarkan nama dan tanggal & jam masuk isi atau tidak
- jika data absen ada?
:true
    - update data keluar
