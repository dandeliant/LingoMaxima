# LingoMaxima

> Cytaty świata — sześć języków, jedna mądrość.

**LingoMaxima** to wielojęzyczna aplikacja do nauki języków przez cytaty. Łączy bibliotekę kuratorską **ponad 1700 sentencji** w sześciu językach (polski, angielski, niemiecki, francuski, hiszpański, rosyjski) z zaawansowanymi narzędziami nauki: SRS, dyktando audio, ćwiczenia wymowy, czytanie równoległe, profile autorów i wiele więcej.

## ✨ Funkcje

### 📚 Treść
- **1700+ cytatów w 280+ grupach tłumaczeń** — każdy cytat dostępny w do 6 językach
- **Kategorie**: Filozofia, Miłość, Życie, Sukces, Motywacja, Mądrość
- **Poziomy CEFR** (A1–C2) — filtrowanie cytatów dostosowane do Twojego poziomu
- **Tagi tematyczne** — przeglądaj po motywach (czas, śmierć, miłość rodzicielska itp.)
- **Profile autorów** — klik w nazwisko → strona z wszystkimi cytatami autora, statystyki, języki

### 🎓 Nauka
- **📅 SRS (Spaced Repetition)** — algorytm SM-2 lite, planuje powtórki słówek
- **🎯 Quiz słownictwa** — multiple choice lub wpisywanie tłumaczenia
- **📝 Cytat z luką** — wybór brakującego słowa z kontekstu
- **🎧 Audio Dyktando** — odtwarza cytat (TTS), wpisz to co usłyszysz, system porówna
- **🎙️ Wymowa** — Web Speech API rozpoznaje Twoją mowę i porównuje z wzorcem
- **📖 Czytanie równoległe** — ten sam cytat w dwóch językach obok siebie
- **⭐ Lista słownictwa** — z statusem „do nauki" / „znane", auto-podświetlenie w cytatach
- **☁️ Częstość słów** — chmura tagów najczęstszych słów per język

### 📖 Słownik
- **Klikalne słowa** — każde słowo w cytacie otwiera słownik
- **Automatyczne tłumaczenia** przez MyMemory API
- **Ręczna korekta tłumaczeń** — popraw to, co API błędnie tłumaczy

### 🎮 Motywacja
- **🔥 Streak** — licznik dni z rzędu z aplikacją
- **🏆 13 odznak** — first_fav, vocab_25, streak_7, polyglot, explorer, mistrz słownictwa itd.
- **✦ Cytat dnia** — codzienny złoty cytat na stronie głównej + powiadomienia systemowe

### 🖨️ Wydruk
- **5 trybów**: Karty ozdobne, Karty 2 (grupowane), Lista kompaktowa, Fiszki 2×3, Fiszki 3×6
- **Wydruk grupowy** — jedna karta = jedna grupa tłumaczeń (świetne na plakaty)
- **Wydruk fiszek vocabulary** — Twoja lista słów do nauki w formacie do wycięcia

### 📱 PWA (Progressive Web App)
- **Instalowalna na telefonie i komputerze** (Chrome/Edge → Zainstaluj)
- **Działa offline** dzięki Service Worker
- **Powiadomienia push** — cytat dnia o 8:00 rano

### ⚙️ Admin
- **Konto: Daniel / Cytaty17!** (SHA-256, kod nie zawiera jawnego hasła)
- Dodawanie, edycja, usuwanie cytatów
- Pola: tekst, autor, język, kategoria, tid (grupa tłumaczeń), poziom CEFR, tagi
- **Eksport/Import bazy JSON** (cała baza cytatów)
- **Eksport/Import ustawień JSON** (ulubione, słownictwo, korekty, języki)
- **Powiel do innego języka** — szybkie tworzenie tłumaczeń

## 📁 Struktura plików

```
LingoMaxima/
├── index.html            — szkielet aplikacji
├── styles.css            — wszystkie style (paleta złota, fonty Cormorant Garamond)
├── script.js             — logika: baza, słownik, SRS, quiz, druk, admin, PWA
├── manifest.json         — PWA manifest
├── service-worker.js     — cache offline
├── README.md
└── .gitignore
```

Aplikacja jest **w pełni client-side** — działa po otwarciu `index.html` bez serwera. Wszystkie dane (cytaty, ulubione, słownictwo, edycje, SRS, streak, achievements) trzymane w `localStorage`.

## 💾 Klucze localStorage

- `ql_quotes` — cała baza cytatów (z migracją z DEFAULT_QUOTES)
- `ql_fav` — ID ulubionych
- `ql_vocab` — lista słownictwa z SRS state
- `ql_dict_edits` — ręczne korekty tłumaczeń
- `ql_langs` — aktywne języki na stronie głównej
- `ql_streak` — current, longest, lastVisit, totalDays
- `ql_achievements` — odblokowane odznaki
- `ql_daily_dismissed` — czy zamknąłeś cytat dnia dziś
- `ql_db_seed_version` — wersja seedu bazy (do migracji)
- `ql_seen` — przeczytane cytaty (dla odznaki „Odkrywca")

## 🛠️ Tech stack

- Czysty HTML/CSS/JS (vanilla, bez frameworków)
- localStorage jako baza
- Web Crypto API (SHA-256 dla haseł admina)
- Web Speech API (SpeechRecognition dla wymowy)
- SpeechSynthesis + ResponsiveVoice (TTS)
- MyMemory API (tłumaczenia w słowniku)
- Notification API (powiadomienia push)
- Service Worker (offline + cache)
- `@media print` z 5 trybami druku

## 🚀 Live

Po opublikowaniu na GitHub Pages: **`https://dandeliant.github.io/LingoMaxima/`**

(Wymaga włączenia GitHub Pages w Settings → Pages → Source: `main` / root)

## 👤 Autor

**Daniel Ostrowski** ([@dandeliant](https://github.com/dandeliant))

## 📄 Licencja

Projekt prywatny. Wszystkie cytaty publikowane w celach edukacyjnych z atrybucją do oryginalnych autorów.
