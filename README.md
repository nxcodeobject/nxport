# NXPORT

Dasbor interaktif real-time di terminal untuk melihat port TCP/UDP yang sedang
listen — lengkap dengan proses pemiliknya dan **direktori kerja** (`Dir`) dari
mana port itu dibuka. Berjalan di **Windows dan Linux**, ditulis dalam C++ native
tanpa dependensi pihak ketiga.

Pengganti yang lebih cepat dan mudah diingat untuk
`Get-NetTCPConnection` (Windows) dan `ss -tlnp` (Linux) — dengan tambahan
kolom `Dir` yang tidak dimiliki keduanya.

```
LocalAddress  LocalPort  State   PID    Process            Dir
------------  ---------  ------  -----  -----------------  -----------------
0.0.0.0       3107       Listen  13504  node [Express]     D:\Warkop\chat\
0.0.0.0       8080       Listen  12024  editor.exe         D:/Website/Tatiye
```

## Fitur Utama

- **Dasbor interaktif real-time** — navigasi panah, buka browser, kill port,
  health check, refresh, semua dari satu layar. Flicker-free.
- **Kolom `Dir`** — folder kerja proses pemilik port (PEB Windows / `/proc/<pid>/cwd` Linux).
- **Pencarian pintar** — `nxport node`, `nxport warkop`, atau rentang `nxport 8000-8090`.
- **Sniffer tech stack** — `[Next.js]`, `[Express]`, `[FastAPI]`, `[Laravel]`, `[Docker]`, `[WSL]`, `[PUB!]`.
- **Menu pengaturan (`s`)** — hide folder permanen, Server History (start/stop server dari dasbor),
  System Info (CPU/RAM/Disk/Network), UDP & all-states toggle, refresh interval, reset.
- **API Server internal** — `nxport serve` (default port 7900):
  `GET /health`, `/api/ports`, `/api/servers`, `/api/stats`, `/api/start/<port>`, `/api/stop/<port>`.
- **Siap untuk script & CI** — `--once`, `-w`, `--json`/`--yaml`/`--csv`, `wait`, `find`, `kill <port> -f`.
- **Integrasi NxCode IDE** — port `editor.exe` dipetakan ke folder proyek aslinya.
- **Ekstensi VS Code / NxCode** — lihat & kelola port langsung dari IDE (`vscode-nxport/`).

## Build

```sh
# Windows (Visual Studio, workload Desktop development with C++)
./build.bat         # menghasilkan nxport.exe

# Linux (g++)
./build.sh          # menghasilkan nxport
sudo install -m755 nxport /usr/local/bin/nxport
```

## Penggunaan

```sh
nxport              # dasbor interaktif real-time (default)
nxport 8080         # filter satu port
nxport node         # smart search proses/folder
nxport --json       # ekspor JSON (juga: --yaml, --csv)
nxport kill 8080 -f # force kill
nxport wait 8080    # tunggu sampai port aktif
nxport serve        # jalankan API server (port 7900)
```

## Website

Landing page proyek: [nxcodeobject.github.io/nxport](https://nxcodeobject.github.io/nxport/)
(sumber: `index.html` + `style.css` + `index.js` di repo ini).

## Lisensi

MIT — lihat [LICENSE](LICENSE).
