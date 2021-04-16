# API-BERITA-SINDO-NEWS
Berikut ini adalah api <a href='http://www.sindonews.com' target='_blank'>sindonews.com</a> yang berisi informasi dari dalam dan luar negeri
### 1. Menampilkan isi seluruh berita
#### Url => https://berita-news.herokuapp.com
Response dari url di atas 
<pre>
// 20190828082651
// https://api-sindo.herokuapp.com/

{
  "status": 200,
  "jumlah": 21,
  "data": [
    {
      "judul": "Jokowi Disarankan Segera Umumkan Menteri Kabinet",
      "link": "https://nasional.sindonews.com/read/1434154/12/jokowi-disarankan-segera-umumkan-menteri-kabinet-1566954754",
      "waktu": "Rabu, 28 Agustus 2019 - 08:12 WIB",
      "tipe": "Nasional",
      "poster": "https://cdn.sindonews.net/dyn/120/content/2019/08/28/12/1434154/jokowi-disarankan-segera-umumkan-menteri-kabinet-nPN-thumb.jpg",
      "kutipan": "Presiden Jokowi disarankan segera mengumumkan susunan menteri kabinet yang tengah dibentuknya untuk membantu pemerintahan di periode kedua nanti."
    },
    {
      "judul": "Pergi Tak Pamit, Suami Sayat Leher Istri",
      "link": "https://sumut.sindonews.com/read/3691/1/pergi-tak-pamit-suami-sayat-leher-istri-1566954515",
      "waktu": "Rabu, 28 Agustus 2019 - 08:12 WIB",
      "tipe": "Sumatera Utara",
      "poster": "https://cdn.sindonews.net/dyn/120/sumut/news/2019/08/28/1/3691/-pergi-tak-pamit-suami-sayat-leher-istri-ayw.jpg",
      "kutipan": "Gara-gara pergi tak pamit dan tak dihargai, Sukriadi (47), warga Jalan Sabar Jaya, Lorong Merbau, Banyuasin, Sumatera Selatam, tega menyayat leher istrinya, Lina (45)."
    }
   ]
 }
</pre>

### 2. Untuk menampilkan berita yang hanya dalam negeri saja

#### Url => https://api-sindo.herokuapp.com/nasional

Response 
<pre>
// 20190828081754
// https://api-sindo.herokuapp.com/nasional

{
  "status": 200,
  "jumlah": 26,
  "data": [
    {
      "link": "https://nasional.sindonews.com/read/1434041/12/tak-masuk-struktur-lukman-edy-siap-kritisi-pkb-dari-luar-1566913763",
      "judul": "Tak Masuk Struktur, Lukman Edy Siap Kritisi PKB dari Luar",
      "waktu": "Selasa, 27 Agustus 2019 - 20:49 WIB",
      "poster": "https://cdn.sindonews.net/dyn/460/content/2019/08/27/12/1434041/tak-masuk-struktur-lukman-edy-siap-kritisi-pkb-dari-luar-ttP-thumb.jpg",
      "tipe": "Nasional",
      "kutipan": "Tidak ada"
    },
    {
      "link": "https://nasional.sindonews.com/read/1434024/12/kepengurusan-terbentuk-pkb-optimistis-terus-membesar-1566909724",
      "judul": "Kepengurusan Terbentuk, PKB Optimistis Terus Membesar",
      "waktu": "Selasa, 27 Agustus 2019 - 19:58 WIB",
      "poster": "https://cdn.sindonews.net/dyn/220/content/2019/08/27/12/1434024/kepengurusan-terbentuk-pkb-optimistis-terus-membesar-2Gw-thumb.jpg",
      "tipe": "Nasional",
      "kutipan": "Tidak ada"
    }
   ]
  }
</pre>

### 3. Untuk menampilkan berita internasional

#### Url => <a href='https://api-sindo.herokuapp.com/internasional' targe='_blank'>https://api-sindo.herokuapp.com/internasional</a>

Response
<pre>
// 20190828081954
// https://api-sindo.herokuapp.com/internasional

{
  "status": 200,
  "jumlah": 20,
  "data": [
    {
      "link": "https://international.sindonews.com/read/1434112/40/al-china-bakal-gelar-latihan-militer-dekat-taiwan-1566935813",
      "judul": "AL China Bakal Gelar Latihan Militer dekat Taiwan",
      "waktu": "Rabu, 28 Agustus 2019 - 05:28 WIB",
      "tipe": "Internasional",
      "kutipan": "Tidak ada"
    },
    {
      "link": "https://international.sindonews.com/read/1433967/40/china-tolak-pernyataan-g7-terkait-hong-kong-1566900474",
      "judul": "China Tolak Pernyataan G7 Terkait Hong Kong",
      "waktu": "Selasa, 27 Agustus 2019 - 17:52 WIB",
      "tipe": "Internasional",
      "kutipan": "Tidak ada"
    }
  ]
}
</pre>

### 4. Mencari berita berdasarkan keinginan 

 #### Url => <a href='https://api-sindo.herokuapp.com/search/?q=' target='_blank'>https://api-sindo.herokuapp.com/search/?q=</a>
 <blokquote><strong>Catatan</strong> Untuk mencari informasi yang diiginkan jangan lupa untuk memasukan parameter <strong>q</strong> kemudian isi dengan berita apa yang kamu inginkan contoh <strog>?q=kominfo</strong></blocquote>
 
Response
<pre>
// 20190828082254
// https://api-sindo.herokuapp.com/search/?q=kominfo

{
  "status": 200,
  "jumlah": 12,
  "data": [
    {
      "link": "https://nasional.sindonews.com/read/1432844/15/ruu-penyiaran-tertahan-baleg-dpr-kominfo-siap-ambil-alih-1566565239",
      "judul": "RUU Penyiaran Tertahan Baleg DPR, Kominfo Siap Ambil Alih",
      "poster": "https://cdn.sindonews.net/dyn/120/content/2019/08/23/15/1432844/ruu-penyiaran-tertahan-baleg-dpr-kominfo-siap-ambil-alih-QLn-thumb.jpg",
      "waktu": "Jum'at, 23 Agustus 2019 - 20:01 WIB",
      "tipe": "nasional",
      "kutipan": "Kominfo menyesalkan bahwa pembahasan revisi Undang-Undang Nomor 32/2002 tentang Penyiaran (UU Penyiaran) belum bisa dikebut karena draf RUU itu masih tertahan di Baleg DPR."
    },
    {
      "link": "https://nasional.sindonews.com/read/1432653/15/kominfo-ajak-tv-swasta-perkuat-isi-siaran-di-perbatasan-1566534846",
      "judul": "Kominfo Ajak TV Swasta Perkuat Isi Siaran di Perbatasan",
      "poster": "https://cdn.sindonews.net/dyn/120/content/2019/08/23/15/1432653/kominfo-ajak-tv-swasta-perkuat-isi-siaran-di-perbatasan-VO0-thumb.jpg",
      "waktu": "Jum'at, 23 Agustus 2019 - 11:34 WIB",
      "tipe": "nasional",
      "kutipan": "Kementerian Komunikasi dan Informatika mengajak Lembaga Penyiaran Swasta (LPS) atau televisi swasta memperkuat daerah-daerah dan desa lewat siaran televisi."
    }
   ]
 }
</pre>
### 5. Mendapatkan berita berdasarkan kategori
daftar kategori yang tersedia
| nama |
|------|
| eksbis |
| lifestyle |
| kalam |
| olahraga |
| teknologi |

contoh request

```bash
https://api-sindo.herokuapp.com/category/?type=olahraga
```

### 6. Mendapatkan isi detail berita
#### Url => <a href='https://api-sindo.herokuapp.com/detail/?url=' target='_blank'>https://api-sindo.herokuapp.com/detail/?url=<strong>URL Berita ( masukan tanpa tanda kutip )</strong></a>

Response

<pre>
// 20190828083458
// https://api-sindo.herokuapp.com/detail/?url=https://nasional.sindonews.com/read/1434156/15/layanan-eyab-bagi-jamaah-haji-indonesia-di-bandara-jeddah-berakhir-hari-ini-1566955372

{
  "status": 200,
  "jumlah": 1,
  "data": [
    {
      "judul": "Layanan Eyab bagi Jamaah Haji Indonesia di Bandara Jeddah Berakhir Hari Ini",
      "reporter": " Abdul Malik Mubarok ",
      "waktu": "Rabu, 28 Agustus 2019 - 08:23 WIB",
      "views": "loading...",
      "poster": "https://cdn.sindonews.net/dyn/620/content/2019/08/28/15/1434156/layanan-eyab-bagi-jamaah-haji-indonesia-di-bandara-jeddah-berakhir-hari-ini-XES.jpg",
      "konten": " LAYANAN EYAB,JAMAAH HAJI INDONESIA,BANDARA JEDDAH - Pelayanan Eyab bagi jamaah haji Indonesia di Bandara King Abdul Aziz Jeddah akan berakhir hari ini, Rabu (28/8). Kelompok terbang (kloter) 36 Embarkasi Surabaya (SUB) menjadi yang terakhir mendapatkan fasilitas dari Pemerintah Arab Saudi tersebut.\"Kloter SUB 36 akan diberangkatkan pada pukul 22.45 Waktu Arab Saudi (WAS),\" kata Kepala Daerah Kerja (Daker) Bandara Jeddah-Madinah, Panitia Penyelenggara Ibadah Haji (PPIH) 2019, Arsyad Hidayat, Rabu (28/8/2019).Total ada 16 kloter yang mendapatkan fasilitas Eyab di Bandara King Abdul Aziz. Masing-masing kloter 4, 12, 14, 16, 18, 19, 20, 24, 26, dan 30 Embarkasi Jakarta-Bekasi (JKS); kloter 5 Jakarta-Pondok Gede (JKG); Kloter 4, 25, 32, 34, dan 36 SUB. Masing-masing kloter diterbangkan secara bertahap sejak 17 Agustus 2019. Baca Juga:Haji Jadi Alat Diplomasi Pasarkan Produk IndonesiaPhoto Booth di Lounge Eyab Jadi Buruan Jamaah Haji IndonesiaMenurut Arsyad, dari hasil pantauannya, pemulangan kloter yang menikmati fasilitas Eyab di Bandara King Abdul Aziz Jeddah, jauh lebih cepat dan lancar dibandingkan dengan yang melalui Terminal Haji. Jamaah haji juga mengapresiasi fasilitas ini karena tidak lagi menunggu di plaza terbuka yang sedikit panas. Setelah turun dari bus, jamaah langsung diarahkan masuk ke dalam lounge Eyab yang terdapat sofa-sofa empuk dan ber-AC. Mereka juga disuguhi banyak hal, ada tarian kebudayaan, hadiah, snack, dan layanan-layanan lainnya.Barang-barang khas Saudi seperti baju-baju Arab juga dijual di lounge Eyab. Karena itu, ketika masuk ruangan Eyab seperti halnya masuk ke ruangan VIP di bandara-bandara lainnya. \"Harapan mereka inisiatif atau inovasi ini akan berjalan kembali pada tahun berikutnya, bahkan mungkin jumlahnya pun akan lebih banyak dari tahun sekarang,\" katanya.Dengan berakhirnya kloter yang mendapatkan fasilitas Eyab, bukan berarti pemulangan jamaah haji Indonesia gelombang pertama dari Bandara King Abdul Aziz Jeddah telah selesai. Pemulangan jamaah haji dari bandara Jeddah baru berakhir pada 1 September 2019.\"Di saat bersamaan, pada tanggal 30 (Agustus 2019) akan ada pemulangan jamaah haji gelombang kedua melalui Bandara Princi Mohammad Bin Abdul Aziz Madinah. Jadi akan ada dua, di satu sisi kita akan menyelesaikan di Bandara King Abdul Aziz Jeddah, di sisi lain kita akan mulai pemulangan jamaah haji melalui Bandara Madinah,\" katanya. (pur) "
    }
  ]
}
</pre>

### Keterangan

| Parameter | Keterangan | 
| --------- | ---------- | 
| Status | Status dari request. jika status 200 maka data berhasil di ambil dan jika status 404 maka itu berbarti ada kesalahan di client <i>bisa jadi kamu tidak memasukan para meter yang diminta</i> |
| Jumlah | Menampilkan jumlah berita yang berhasil di ambil |
| Judul | Judul dari berita |
| Reporter | jabatan kewartawanan yang bertugas melakukan peliputan berita di lapangan dan melaporkannya kepada publik <small> <i>(sumber : Wikipedia )</i> </small> |
| Waktu | Waktu dipublikasikannya suatu berita |
| Views | Jumlah orang yang membaca suatu berita |
| Poster | Gambar dari suatu berita |
| Konten | Isi detail berita |


### LICENCE MIT
maintainer rizkimaulana348@gmail.com
