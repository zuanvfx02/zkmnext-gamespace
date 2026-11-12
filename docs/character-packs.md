# Paket karakter (maskot) & notifikasi dalam aplikasi

Pembaruan runtime v42: [Zea Glow EX, equipment & action stage](zea-glow-ex.md). Pack terbaru: [ZEA Void](zea-void.md) (desain baru); [ZEA Glow EX II](zea-glow-ex2.md).

GameSpace tidak membawa gambar karakter di dalam APK. Karakter datang sebagai **paket ZIP yang kamu import**, bisa diekspor lagi untuk dibagikan. Aplikasi hanya memutarnya, jadi ukuran APK tidak naik.

## Di mana

Game Space Center → **Virtual Character** → **Archive**. Ruang karakter juga bisa dibuka lewat MTP → **CHARACTER ROOM**.

- **IMPORT CHARACTER ZIP** — pasang paket. Paket dengan `id` yang sama menimpa yang lama.
- **EXPORT** — simpan paket terpasang sebagai ZIP yang sama.
- **USE IN ROOM / USE ASSISTANT / DELETE** — pilih peran atau hapus dengan konfirmasi. Maksimal 12 paket.

## Ruang karakter

Game Space Center → Virtual Character → **Enter character room**. Layar penuh bergaya game:

- Karakter besar di panggung kiri, bisa disentuh (kepala, badan, kaki punya reaksi sendiri) dan kadang bicara sendiri.
- Rail kiri: latar (3 bawaan yang digambar kode, plus latar dari paket), zoom 1X/2X, sembunyikan UI.
- **Dress up**: preview outfit lewat kartu, lalu **WEAR NOW** untuk memakainya. Tab **Expressions** mempratinjau ekspresi; pilihan **Iris / Lagoon / Rose** mengubah warna antarmuka studio. Outfit dipakai bersama: asisten ikut ganti kalau paketnya punya outfit dengan `id` yang sama.
- Kartu bawah: **Companion** (pengaturan asisten dan notifikasi), **MTP studio**, **Profile** (data dan arsip cerita karakter), **Archive** (import, export, pilih peran, hapus). Ikon settings kanan atas membuka pengaturan yang sama.
- **MTP studio**: tab **Dialogs / Playback / Voices / Packs**, preview dialog asli, starter lines, duplikasi, dan hapus dengan konfirmasi. Editor custom menyediakan **Message / Style / Media & voice / Schedule** dalam satu studio. Voice studio menyediakan import audio, listen/stop, dan volume tersimpan. Detail: [Character Studio UI](character-studio-ui.md).

Dua peran karakter: paket besar (tinggi kanvas di atas 96 px) otomatis jadi karakter **ruang**, paket kecil jadi **asisten**. Pack v42 bisa menyatakan `role: "room"` atau `role: "assistant"` agar chibi beresolusi tinggi tetap menjadi asisten. Keduanya bisa diatur manual di Archive, dan satu paket boleh memegang dua peran.

## Teman virtual di Handheld

Saat Handheld mode terbuka, karakter berdiri di layar dan hidup sendiri:

| Kamu | Dia |
|---|---|
| Ketuk kepala / badan / kaki | Reaksi berbeda per zona: `touch_head`, `touch_body`, `touch_feet` |
| Ketuk cepat 4 kali | Marah atau ngambek (`touch_many`) |
| Geser (drag) | Diangkat, pose `held`, badannya miring mengikuti gerakan (`pick_up`), lalu diam di tempat kamu lepas (`drop`) |
| Lempar (geser cepat lalu lepas) | Terbang, mendarat pusing (`throw`) |
| Diam beberapa menit | Tertidur (`bored`); disentuh langsung bangun (`wake`) |
| Kelamaan di menu | Ngajak main (`nag_play`) |
| Main lama atau sudah malam | Nyuruh istirahat (`nag_rest`) |
| Sesekali | Jalan-jalan sedikit dan ngobrol (`chat`) |

Notifikasi dalam aplikasi, termasuk pesan yang dulu berupa toast Android di Explore, Handheld, dan Gamepad, diucapkan lewat balon katanya selama dia tampil. Hanya karakter dan balon kata yang menangkap sentuhan; sisa layar tetap bisa dipakai. Semua timer berhenti saat aplikasi tidak tampil.

Pengaturan: tampil/sembunyi, jalan-jalan dan ngobrol sendiri (mati = hanya menjawab sentuhan), ukuran.

## Yang dilakukan karakter

| Tempat | Perilaku |
|---|---|
| Explore, Handheld, Gamepad | Pesan yang dulu berupa toast Android muncul sebagai banner. Karakter membawakan pesan dan berekspresi sesuai isinya. |
| Salam | Kalimat `welcome` saat pertama dibuka (pagi/malam punya kalimat sendiri), `mode_*` saat ganti mode. |
| Panas & baterai lemah | Kalimat `hot` dan `battery_low`. Dikirim sistem Android, tidak ada polling. Jeda 10 dan 15 menit. |
| Dialog MTP dalam game | Dialog tanpa gambar memakai karakter, dengan ekspresi per dialog. Mulut bergerak selama suara dialog diputar. |

Banner tidak menangkap sentuhan dan tidak merebut fokus D-pad. Saat dialog menutupi layar, atau di dalam game, pesan kembali memakai toast Android supaya tidak ada yang hilang.

Tanpa paket terpasang, banner tetap jalan dengan ikon biasa, dan Gamepad tetap memakai banner konsolnya sendiri.

## Isi paket

Satu berkas `mascot.json`, ditambah gambar PNG/WebP bila dipakai. Nama berkas huruf kecil, tanpa folder wajib.

Ada dua cara menyimpan gambar, dan keduanya bisa dicampur:

- **Paket gambar** — satu PNG per frame (`neutral.png`, `neutral_blink.png`, ...). Ini bentuk `Character-zea.zip`, dan yang paling mudah ditiru: ganti tiap PNG dengan gambarmu.
- **Paket teks** — pixel ditulis langsung di `mascot.json` sebagai kisi huruf. Tanpa berkas gambar sama sekali, ukurannya sekitar 2 KB. Ini bentuk `Character-zea-text.zip`.

Contoh paket teks:

```json
{
  "format": 1,
  "id": "zea",
  "name": "Zea",
  "author": "nama kamu",
  "width": 32, "height": 32,
  "palette": { "o": "#1b1428", "s": "#ffe3d0", "k": "#2a1a3c" },
  "parts": {
    "base":        { "x": 3, "y": 0, "rows": ["..oo..", ".osso."] },
    "eyes_open":   { "x": 10, "y": 13, "rows": ["kkkk"] },
    "eyes_closed": { "x": 10, "y": 15, "rows": ["k..k"] },
    "mouth_smile": { "x": 14, "y": 19, "rows": ["o..o", ".oo."] },
    "mouth_open":  { "x": 14, "y": 19, "rows": ["oooo", ".oo."] }
  },
  "moods": {
    "neutral": {
      "layers": ["base", "eyes_open", "mouth_smile"],
      "blink": { "eyes_open": "eyes_closed" },
      "talk":  { "mouth_smile": "mouth_open" }
    }
  },
  "lines": {
    "welcome": ["Hai!", { "text": "Siap main?", "mood": "happy" }]
  }
}
```

| Kunci | Aturan |
|---|---|
| `id` | 1–32 karakter `a-z 0-9 - _`. Menjadi nama folder paket. |
| `width`, `height` | 8–512. Sampai 96 dianggap pixel art (digambar tajam, ukuran dibulatkan ke kelipatan utuh). Di atas itu dihaluskan. Bisa dipaksa dengan `"smooth": true/false`. |
| `palette` | Maksimal 64 warna, kunci satu karakter, `#rgb`, `#rrggbb` atau `#rrggbbaa`. `.` dan spasi selalu transparan. |
| `parts` | 1–96 lapisan. Tiap bagian berisi `rows` (kisi kunci palet) **atau** `file` (gambar). `x`/`y` menggeser posisinya. |
| `moods` | 1–24 ekspresi. Wajib ada `neutral`. `layers` digambar dari bawah ke atas. `blink` dan `talk` menukar satu lapisan saat mata tertutup / mulut terbuka. `loop` memutar satu lapisan frame demi frame. |
| `bob` | `true` (bawaan): karakter naik-turun satu pixel saat diam. Isi `false` kalau frame `loop`-mu sudah bergerak sendiri. |
| `portrait` | `[x, y, lebar, tinggi]` bagian kanvas (kepala dan bahu) yang dipakai di tempat kecil: banner, dialog MTP, tombol M. Tanpa ini seluruh kanvas dipakai. |
| `skins` | Outfit: `[{ "id", "name", "prefix" }]`. Mood `happy` pada outfit dengan prefix `battle_` diambil dari `battle_happy` kalau ada, kalau tidak dari `happy`. Outfit pertama biasanya prefix kosong. |
| `backgrounds` | Latar ruang karakter: `[{ "id", "name", "file" }]`, PNG/WebP sampai 2048 px. Gambar kecil (≤ 640 px) digambar tajam seperti pixel art. |
| `profile` | Kartu karakter: `title`, `fields` (`[{ "label", "value" }]`, maks. 12) dan `archives` (`[{ "title", "text" }]`, maks. 12). |
| `companion` | Teman virtual: `height` (32–320 dp), mood `idle`, `walk`, `held`, `sleep`, dan `zones` (maks. 8) berupa `{ "nama": [x, y, lebar, tinggi] }`. Zona dicek berurutan; titik di luar semua zona: 40% atas = head, 15% bawah = feet, sisanya body. |
| `lines` | Kalimat per kejadian, maksimal 24 per kejadian, 140 karakter per kalimat. Boleh teks biasa atau `{ "text", "mood" }`. |

Ekspresi yang dipakai aplikasi: `neutral`, `happy`, `surprised`, `worried`, `sleepy`. Ekspresi lain boleh ditambah dan bisa dipilih per dialog MTP. Ekspresi yang tidak ada jatuh ke `neutral`.

Kejadian yang dikenal: `welcome`, `welcome_morning`, `welcome_night`, `mode_handheld`, `mode_gamepad`, `mode_explore`, `hot`, `battery_low`, `cheer`, dan untuk teman virtual `touch_head`, `touch_body`, `touch_feet`, `touch_many`, `pick_up`, `drop`, `throw`, `chat`, `nag_play`, `nag_rest`, `bored`, `wake`. Nama zona lain di `zones` belum punya kalimat sendiri dan diperlakukan sebagai body. `cheer` adalah kalimat penyemangat: tombol **+ Add lines** di halaman MTP mengubahnya menjadi dialog MTP siap pakai.

### Karakter dari gambar (pixel atau 2D ilustrasi)

Ganti `rows` dengan berkas gambar berlatar transparan, semua seukuran `width` × `height`:

```json
"parts": {
  "neutral":       { "file": "neutral.png" },
  "neutral_2":     { "file": "neutral_2.png" },
  "neutral_blink": { "file": "neutral_blink.png" },
  "neutral_talk":  { "file": "neutral_talk.png" }
},
"moods": {
  "neutral": {
    "layers": ["neutral"],
    "blink": { "neutral": "neutral_blink" },
    "talk":  { "neutral": "neutral_talk" },
    "loop":  { "of": "neutral", "frames": ["neutral", "neutral_2"], "fps": 2 }
  }
}
```

### Animasi banyak gambar (`loop`)

`loop` memutar satu lapisan melalui daftar frame, berulang:

- `of` — lapisan di `layers` yang dianimasikan.
- `frames` — 2–64 nama part, diputar berurutan. Nama boleh diulang untuk menahan satu frame lebih lama.
- `fps` — 1–24 frame per detik (bawaan 6).

Untuk sprite seluruh badan yang animasinya digambar per frame, pakai satu lapisan dengan semua framenya di `frames`, dan isi `"bob": false`. Saat berkedip atau bicara, frame `blink`/`talk` menggantikan frame loop pada lapisan yang sama.

Frame yang sudah digambar disimpan di memori sampai 2 juta pixel (8 MB). Sprite 32 px memakai beberapa KB per frame; untuk loop panjang, jaga ukuran kanvas di 256 px ke bawah.

Atau satu sprite sheet: tambahkan `"cell": [lebar, tinggi]` di akar, lalu `{ "file": "sheet.png", "cell": 3 }` (sel dihitung dari kiri atas, baris demi baris).

### Batas

- ZIP total 16 MB, `mascot.json` 512 KB, tiap gambar 4 MB dan 2048 px, maksimal 600 part (gambar) dan 160 mood.
- Gambar tanpa `cell` maksimal 512 px per sisi.
- Hanya `mascot.json`, `.png` dan `.webp` yang diterima. Berkas lain membuat import ditolak.
- Gambar yang tidak disebut di `mascot.json` (misalnya `preview.png` untuk dilihat orang) dibuang saat import.

Pesan galat import menyebut bagian yang salah, misalnya nama part atau karakter palet yang tidak dikenal.

## Membuat paket sendiri

Skrip di `tools/character-pack/` (Python 3; `rig.py`, `build_companion.py`, `preview.py` dan `render.py` butuh Pillow, `rig.py` juga numpy).

Zea versi terbaru (wajah besar, 3 outfit, latar, profil):

```
python3 tools/character-pack/build_v2.py out/
```

- `rig2.py` — desain Zea v2: dua bentuk (besar 96×190, chibi 52×72), tiga outfit (Tech Idol, Hoodie, Battle dengan Pixel Edge).
- `backgrounds.py` — dua latar pixel 320×180 (Gamer room, Sky deck).
- `build_v2.py` — menulis `Zea.zip` (ruang) dan `Zea-Chibi.zip` (asisten), lembar ekspresi dan GIF.

Versi sebelumnya, tiga paket dari satu rig (chibi, hd, vivid):

```
python3 tools/character-pack/build_companion.py out/
```

- `rig.py` — kerangka karakter yang bisa diatur posenya (lengan, kaki, napas, rambut, mata, mulut, efek) dalam tiga gaya.
- `build_companion.py` — 15 ekspresi/gerakan, kalimat untuk tiap kejadian, zona sentuh, lalu menulis `Zea-chibi.zip`, `Zea-hd.zip`, `Zea-vivid.zip` beserta pratinjau PNG dan GIF.

Paket Zea 32 px yang lama:

```
python3 tools/character-pack/build_pack.py out/
python3 tools/character-pack/preview.py out/zea-text/mascot.json out/preview.png
python3 tools/character-pack/animate.py out/zea-text/mascot.json out/animation.gif
```

- `draw.py` — gambar Zea ditulis sebagai kode: palet, bentuk, mata, mulut, ekspresi, frame loop.
- `build_pack.py` — kalimat (`LINES`) dan pembuatan kedua ZIP: paket gambar (`Character-zea.zip`) dan paket teks (`Character-zea-text.zip`).
- `render.py`, `preview.py`, `animate.py` — merender paket dengan aturan penyusunan yang sama dengan aplikasi (gambar diam dan GIF), untuk dicek sebelum import.

Cara tercepat membuat karakter sendiri tanpa kode: buka `Character-zea.zip`, ganti tiap PNG dengan gambarmu (nama dan ukuran sama, latar transparan), ubah `id`, `name` dan kalimat di `mascot.json`, lalu zip lagi.

Untuk meminta AI membuat karakter baru, berikan berkas ini dan `draw.py` sebagai contoh, lalu minta `mascot.json` format 1 dengan `id` baru, lima ekspresi di atas, dan kalimat untuk tiap kejadian. Pakai karakter buatan sendiri atau yang kamu punya izinnya.

## Pengaturan

| Saklar | Arti |
|---|---|
| In-app banners | Banner menggantikan toast saat GameSpace tampil. Mati = toast seperti sebelumnya. |
| Character in notices | Karakter ikut tampil di banner. Mati = banner polos, paket tetap terpasang. |
| Greetings and device alerts | Salam, peringatan panas dan baterai lemah. |
| Character in MTP dialogs | Dialog MTP tanpa gambar memakai karakter. |
| Character size | Kecil, sedang, besar. |
