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
- **📝 Smart Cloze** — system skoruje słowa wg wartości (pomija „i", „w", „nie") i wybiera najwartościowsze, z filtrem CEFR i podpowiedzią pierwszej litery
- **🧩 Sentence Jigsaw** — układanka zdania (klik = przenieś), 3 długości, tolerancja interpunkcji i wielkości liter
- **🔄 Reverse Translation** — cytat w jednym języku → wpisujesz tłumaczenie, Levenshtein + word matching z 5-poziomowym werdyktem
- **🎧 Audio Dyktando** — odtwarza cytat (TTS), wpisz to co usłyszysz, system porówna
- **🎙️ Wymowa** — Web Speech API rozpoznaje Twoją mowę i porównuje z wzorcem
- **👥 Shadowing Mode** — posłuchaj wzorca (Google neural), nagraj siebie (MediaRecorder), porównaj A/B
- **📖 Czytanie równoległe** — ten sam cytat w dwóch językach obok siebie
- **⭐ Lista słownictwa** — z statusem „do nauki" / „znane", auto-podświetlenie w cytatach
- **☁️ Częstość słów** — chmura tagów najczęstszych słów per język

### 📖 Słownik
- **Klikalne słowa** — każde słowo w cytacie otwiera słownik
- **Automatyczne tłumaczenia** przez MyMemory API
- **Ręczna korekta tłumaczeń** — popraw to, co API błędnie tłumaczy
- **🗣️ Transkrypcja IPA** — fonetyka per słowo (manual + best-effort fetch z Wiktionary REST API)

### 🔥 Odkrywanie
- **🔥 Swipe (Tinder dla cytatów)** — stos kart z gestami: ❤️ ulubione, ⏭️ pomiń, 📚 dodaj wartościowe słowa do nauki, 🔊 odsłuchaj
- **📖 Tematyczne historie** — 6 curated chains (Od strachu do odwagi, Co Stoicy wiedzieli o stracie, Czas — najcenniejsza waluta, Miłość w 7 odsłonach, Sukces nie istnieje bez porażki, Mądrość milczenia), z paskiem postępu i wznawianiem
- **⏰ Quote of the Moment** — kontekstowy cytat dnia 5x dziennie (poranny/południowy/popołudniowy/wieczorny/nocny) z dopasowanymi kategoriami i tagami

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

### 🌍 Społeczność i udostępnianie
- **🌐 Wielojęzyczny UI** — interfejs w 6 językach (PL/EN/DE/FR/ES/RU), auto-detekcja
- **💫 Sytuacje życiowe** — wybierz nastrój (Motywacja, Smutek, Miłość, Strata, Rodzina, Sukces, Czas, Mądrość, Wątpliwości, Nadzieja, Przyjaźń, Odwaga) → odpowiednie cytaty
- **🔗 URL per cytat** — `#/q/123` deep linking, każdy cytat ma własny link
- **📸 Obrazki PNG 1080×1080** — generator obrazków cytatów (Instagram-ready) przez Canvas API
- **📤 Web Share API** — natywne udostępnianie pliku + tekstu na mobile
- **✍️ Propozycje cytatów** — użytkownicy mogą zgłaszać własne cytaty przez formularz
- **🗳️ Moderacja** — admin pobiera propozycje z GitHub Issues, zatwierdza/odrzuca jednym klikiem
- **🔍 SEO** — meta tags, Open Graph, Twitter Card, JSON-LD (Quotation schema) per cytat

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
- `ql_ui_lang` — wybrany język interfejsu (pl/en/de/fr/es/ru)
- `ql_submissions` — propozycje cytatów od użytkowników (pending/approved/rejected)
- `ql_tts_pref` — preferencja TTS (google/responsivevoice/system)
- `ql_ipa` — transkrypcje fonetyczne IPA per word|lang
- `ql_chains_progress` — postęp przejścia tematycznych historii

## 🛠️ Tech stack

- Czysty HTML/CSS/JS (vanilla, bez frameworków)
- localStorage jako baza
- Web Crypto API (SHA-256 dla haseł admina)
- Web Speech API (SpeechRecognition dla wymowy)
- SpeechSynthesis + ResponsiveVoice (TTS)
- MyMemory API (tłumaczenia w słowniku)
- Notification API (powiadomienia push)
- Service Worker (offline + cache, network-first)
- Canvas API (generowanie obrazków cytatów PNG 1080×1080)
- MediaRecorder API (Shadowing Mode — nagrywanie własnej wymowy)
- Web Share API (natywne udostępnianie z plikiem)
- Pointer/Touch events (Tinder-style swipe gestures)
- Wiktionary REST API (auto-suggest IPA dla słów)
- GitHub Issues API (kolejka propozycji od użytkowników)
- Open Graph + Twitter Card + JSON-LD (SEO i preview na social)
- Hash-based routing (`#/q/ID`) dla deep linkingu cytatów
- `@media print` z 5 trybami druku

## 🚀 Live

Po opublikowaniu na GitHub Pages: **`https://dandeliant.github.io/LingoMaxima/`**

(Wymaga włączenia GitHub Pages w Settings → Pages → Source: `main` / root)

## 👤 Autor

**Daniel Ostrowski** ([@dandeliant](https://github.com/dandeliant))

## 📄 Licencja

Projekt prywatny. Wszystkie cytaty publikowane w celach edukacyjnych z atrybucją do oryginalnych autorów.
