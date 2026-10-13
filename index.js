// NXPORT — landing page: i18n ID/EN + interaksi ringan

const I18N = {
  id: {
    "meta.title": "NXPORT — Monitor Port Interaktif untuk Windows & Linux",
    "meta.desc": "NXPORT — dasbor terminal real-time untuk melihat port TCP/UDP, proses pemiliknya, dan direktori kerjanya. Kill port, health check, ekspor JSON/YAML/CSV. Tanpa dependensi.",
    "nav.features": "Fitur",
    "nav.dashboard": "Dasbor",
    "nav.cli": "CLI",
    "nav.install": "Pasang",
    "hero.badge": "nxport 1.0.0 · Windows & Linux · MIT",
    "hero.title": "Tahu <span class=\"accent\">port siapa</span> dijalankan dari folder mana",
    "hero.desc": "Dasbor interaktif real-time di terminal: daftar port yang listen, proses pemiliknya, dan <strong>direktori kerjanya</strong> — lalu buka browser, kill, ping, dan kelola semuanya dari satu layar.",
    "hero.cta1": "Mulai Pasang",
    "hero.cta2": "Lihat Fitur",
    "feat.title": "Fitur",
    "feat.sub": "Semua yang Anda butuhkan untuk memahami dan mengelola port di mesin Anda.",
    "feat.1t": "Dasbor Interaktif Real-time",
    "feat.1d": "Tetap hidup di terminal: navigasi panah, buka browser, kill port, ping, dan refresh — semua dari dasbor. Flicker-free, hanya menggambar ulang saat ada perubahan.",
    "feat.2t": "Kolom Dir (Direktori Kerja)",
    "feat.2d": "Keunggulan utama: tahu dari folder mana port dibuka — dibaca dari PEB proses (Windows) atau /proc/<pid>/cwd (Linux).",
    "feat.3t": "Pencarian Pintar",
    "feat.3d": "nxport node atau nxport warkop langsung memfilter berdasarkan nama proses atau folder. Filter rentang port: nxport 8000-8090.",
    "feat.4t": "Sniffer Tech Stack",
    "feat.4d": "Kenali stack otomatis: [Next.js], [Express], [FastAPI], [Laravel], [Docker], [WSL] — plus deteksi binding publik [PUB!] untuk audit keamanan.",
    "feat.5t": "Pengaturan & Server History",
    "feat.5d": "Sembunyikan folder tertentu secara permanen, simpan server favorit (folder + perintah start), lalu start/stop langsung dari dasbor.",
    "feat.6t": "Siap untuk Script & CI",
    "feat.6d": "Mode --once dan -w (watch), ekspor --json/--yaml/--csv, nxport wait (tunggu port up), nxport find (cari port bebas), dan nxport kill <port> -f.",
    "key.title": "Kontrol Dasbor",
    "key.sub": "Satu tombol untuk setiap aksi — tanpa perlu menghafal perintah panjang.",
    "key.move": "Pindah pilih port",
    "key.open": "Buka http://localhost:<port> di browser",
    "key.kill": "Kill proses pada port terpilih",
    "key.ping": "Health check port terpilih",
    "key.settings": "Buka menu Pengaturan",
    "key.search": "Cari di daftar port",
    "key.sort": "Ubah urutan (port / pid / process / dir)",
    "key.refresh": "Refresh daftar port",
    "key.quit": "Keluar dari dasbor",
    "set.title": "Isi Menu Pengaturan (s)",
    "set.1t": "Hide Folder",
    "set.1d": "Sembunyikan port dari folder tertentu — disimpan permanen ke settings.conf dan diterapkan antar sesi.",
    "set.2t": "Server History",
    "set.2d": "Daftar server tersimpan (folder + perintah start) untuk start/stop langsung dari dasbor — terisi otomatis dari port yang sedang berjalan.",
    "set.3t": "System Info",
    "set.3d": "Ringkasan host: nama komputer, OS, serta penggunaan CPU, RAM, disk, dan network di header dasbor.",
    "set.4t": "Show UDP & All TCP States",
    "set.4d": "Tampilkan soket UDP (setara -u) dan semua status TCP, bukan hanya Listen (setara -a).",
    "set.5t": "Refresh Interval",
    "set.5d": "Atur selang auto-refresh daftar port: 1–10 detik (default 2 detik).",
    "set.6t": "Reset All Settings",
    "set.6d": "Kosongkan semua pengaturan: folder tersembunyi, server history, dan preferensi kembali ke default.",
    "set.7t": "API Server",
    "set.7d": "Jalankan/hentikan API internal (default port 7900) langsung dari menu — status running/stopped tampil di daftar.",
    "set.8t": "API Server Port",
    "set.8d": "Ubah port API internal (1024–65535). Port harus dihentikan dulu sebelum diganti.",
    "api.title": "API Server — akses data via klien",
    "api.intro": "Aktifkan lewat menu Settings (pilih <em>API Server</em>) atau dari terminal, lalu konsumsi dari browser, script, atau tool apa pun:",
    "dash.status": "<strong>Penanda status:</strong> 🟢 port sehat/unik · 🔴 duplikat/konflik · <code>[NEW]</code>/<code>[GONE]</code> watch-diff · <code>[PUB!]</code> database terbuka ke publik · <code>[Docker]</code>/<code>[WSL]</code> kontainer",
    "cli.title": "Baris Perintah",
    "cli.sub": "Pengganti yang lebih cepat untuk Get-NetTCPConnection dan ss -tlnp.",
    "cli.compare": "<strong>Integrasi NxCode IDE:</strong> port dari <code>editor.exe</code> otomatis dipetakan ke folder proyek aslinya via QSettings IDE — jadi kolom <code>Dir</code> menampilkan <code>D:/Website/Tatiye</code>, bukan folder instalasi.",
    "ins.title": "Cara Pasang",
    "ins.sub": "Build dari source — tanpa dependensi pihak ketiga.",
    "ins.note": "Butuh Visual Studio (workload Desktop development with C++) di Windows, atau g++ di Linux. Baris dengan tanda “-” berarti proses tidak bisa diperiksa — jalankan sebagai administrator/root agar lebih banyak yang terbaca.",
    "foot.tag": "Monitor port interaktif — bagian dari ekosistem NXDOM.",
    "foot.company": "PT Tatiye Digital Solusindo",
    "foot.copy": "MIT License · © 2026 NXDOM"
  },
  en: {
    "meta.title": "NXPORT — Interactive Port Monitor for Windows & Linux",
    "meta.desc": "NXPORT — a real-time terminal dashboard to view TCP/UDP ports, their owning processes, and working directories. Kill ports, health check, export JSON/YAML/CSV. Zero dependencies.",
    "nav.features": "Features",
    "nav.dashboard": "Dashboard",
    "nav.cli": "CLI",
    "nav.install": "Install",
    "hero.badge": "nxport 1.0.0 · Windows & Linux · MIT",
    "hero.title": "Know <span class=\"accent\">whose port</span> runs from which folder",
    "hero.desc": "A real-time interactive dashboard in your terminal: listening ports, their owning processes, and their <strong>working directories</strong> — then open in browser, kill, ping, and manage everything from one screen.",
    "hero.cta1": "Get Started",
    "hero.cta2": "See Features",
    "feat.title": "Features",
    "feat.sub": "Everything you need to understand and manage ports on your machine.",
    "feat.1t": "Real-time Interactive Dashboard",
    "feat.1d": "Stays alive in the terminal: arrow navigation, open browser, kill port, ping, and refresh — all from the dashboard. Flicker-free: repaints only on change.",
    "feat.2t": "Dir Column (Working Directory)",
    "feat.2d": "The key advantage: know which folder opened a port — read from the process PEB (Windows) or /proc/<pid>/cwd (Linux).",
    "feat.3t": "Smart Search",
    "feat.3d": "nxport node or nxport warkop instantly filters by process name or folder. Port range filter: nxport 8000-8090.",
    "feat.4t": "Tech Stack Sniffer",
    "feat.4d": "Auto-detect the stack: [Next.js], [Express], [FastAPI], [Laravel], [Docker], [WSL] — plus [PUB!] public-binding detection for security audits.",
    "feat.5t": "Settings & Server History",
    "feat.5d": "Permanently hide specific folders, save favorite servers (folder + start command), then start/stop straight from the dashboard.",
    "feat.6t": "Script & CI Ready",
    "feat.6d": "--once and -w (watch) modes, --json/--yaml/--csv export, nxport wait (block until port is up), nxport find (find a free port), and nxport kill <port> -f.",
    "key.title": "Dashboard Controls",
    "key.sub": "One key per action — no long commands to memorize.",
    "key.move": "Move port selection",
    "key.open": "Open http://localhost:<port> in your browser",
    "key.kill": "Kill the process on the selected port",
    "key.ping": "Health check the selected port",
    "key.settings": "Open the Settings menu",
    "key.search": "Search the port list",
    "key.sort": "Change sorting (port / pid / process / dir)",
    "key.refresh": "Refresh the port list",
    "key.quit": "Quit the dashboard",
    "set.title": "Inside the Settings Menu (s)",
    "set.1t": "Hide Folder",
    "set.1d": "Hide ports from specific folders — saved permanently to settings.conf and applied across sessions.",
    "set.2t": "Server History",
    "set.2d": "Saved servers (folder + start command) to start/stop straight from the dashboard — auto-filled from running ports.",
    "set.3t": "System Info",
    "set.3d": "Host summary: computer name, OS, plus CPU, RAM, disk, and network usage in the dashboard header.",
    "set.4t": "Show UDP & All TCP States",
    "set.4d": "Show UDP sockets (same as -u) and all TCP states, not just Listen (same as -a).",
    "set.5t": "Refresh Interval",
    "set.5d": "Set the port list auto-refresh interval: 1–10 seconds (default 2 seconds).",
    "set.6t": "Reset All Settings",
    "set.6d": "Clear all settings: hidden folders, server history, and preferences return to defaults.",
    "set.7t": "API Server",
    "set.7d": "Start/stop the internal API (default port 7900) right from the menu — its running/stopped status is shown in the list.",
    "set.8t": "API Server Port",
    "set.8d": "Change the internal API port (1024–65535). Stop the server first before changing it.",
    "api.title": "API Server — access data from any client",
    "api.intro": "Enable it via the Settings menu (choose <em>API Server</em>) or from the terminal, then consume it from a browser, script, or any tool:",
    "dash.status": "<strong>Status markers:</strong> 🟢 healthy/unique port · 🔴 duplicate/conflict · <code>[NEW]</code>/<code>[GONE]</code> watch-diff · <code>[PUB!]</code> database exposed to the public · <code>[Docker]</code>/<code>[WSL]</code> containers",
    "cli.title": "Command Line",
    "cli.sub": "A faster, easier-to-remember replacement for Get-NetTCPConnection and ss -tlnp.",
    "cli.compare": "<strong>NxCode IDE integration:</strong> ports from <code>editor.exe</code> are automatically mapped to their real project folders via the IDE's QSettings — so the <code>Dir</code> column shows <code>D:/Website/Tatiye</code>, not the install folder.",
    "ins.title": "Installation",
    "ins.sub": "Build from source — no third-party dependencies.",
    "ins.note": "Requires Visual Studio (Desktop development with C++ workload) on Windows, or g++ on Linux. Rows marked “-” mean the process cannot be inspected — run as administrator/root to read more of them.",
    "foot.tag": "Interactive port monitor — part of the NXDOM ecosystem.",
    "foot.company": "PT Tatiye Digital Solusindo",
    "foot.copy": "MIT License · © 2026 NXDOM"
  }
};

function setLang(lang) {
  if (!I18N[lang]) lang = "id";
  document.documentElement.lang = lang;
  try { localStorage.setItem("nxport-lang", lang); } catch {}

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langBtn === lang);
  });

  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n-html")];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr").split(",").forEach((rule) => {
      const [attr, key] = rule.split("|");
      if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
    });
  });
  if (dict["meta.title"]) document.title = dict["meta.title"];
}

function handleScroll() {
  const navbar = document.getElementById("navbar");
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 20);
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  const navLinks = document.getElementById("navLinks");
  const navToggle = document.getElementById("navToggle");

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.langBtn));
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  let saved = null;
  try { saved = localStorage.getItem("nxport-lang"); } catch {}
  if (saved) {
    setLang(saved);
  } else {
    const browserLang = (navigator.language || "id").slice(0, 2).toLowerCase();
    setLang(browserLang === "id" ? "id" : "en");
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
