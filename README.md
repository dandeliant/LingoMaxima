# LingoMaxima

> Cytaty świata — sześć języków, jedna mądrość.

**LingoMaxima** to wielojęzyczna aplikacja do nauki języków przez cytaty. Łączy bibliotekę kuratorską ponad **560 sentencji** w sześciu językach (polski, angielski, niemiecki, francuski, hiszpański, rosyjski) z narzędziami nauki: słownikiem klikalnych słów, listą słownictwa, quizami i wydrukiem fiszek.

## Funkcje

- **🏠 Strona główna** — losowanie cytatów synchronizowanych w 6 językach
- **📚 Biblioteka** — przeglądanie z filtrami języka, kategorii, wyszukiwarką
- **♥ Ulubione** — własna kolekcja
- **📖 Słownik** — klikalne słowa, automatyczne tłumaczenia (MyMemory API), ręczna korekta tłumaczeń
- **🎓 Nauka** — cztery tryby:
  - ⭐ Słownictwo (lista słów do nauki, z drukiem fiszek)
  - 🎯 Quiz (4 opcje lub wpisanie tłumaczenia)
  - 📝 Cytat z luką (wybór brakującego słowa z cytatu)
  - ☁️ Częstość słów (chmura tagów per język)
- **⚙️ Admin** — dodawanie / edycja / usuwanie cytatów, grupy tłumaczeń (`tid`), Eksport/Import JSON
- **🖨️ Wydruk** — pięć trybów: Karty ozdobne, Karty 2 (grupowane), Lista kompaktowa, Fiszki 2×3, Fiszki 3×6
- **🌐 Tłumaczenia powiązane** — cytaty z tym samym `tid` są wersjami tej samej myśli; ikona 🌐 na karcie pokazuje wszystkie wersje językowe

## Struktura plików

```
LingoMaxima/
├── index.html      — szkielet aplikacji
├── styles.css      — wszystkie style (paleta złota, fonty Cormorant Garamond)
├── script.js       — logika: baza, słownik, quiz, druk, admin, vocab
├── README.md
└── .gitignore
```

Aplikacja jest **w pełni client-side** — działa po otwarciu `index.html` bez żadnego backendu. Wszystkie dane (cytaty, ulubione, słownictwo, edycje) trzymane w `localStorage` przeglądarki.

## Konto admina

Domyślne konto:
- **Login:** `Daniel`
- **Hasło:** `Cytaty17!`

Hasło w kodzie jest zaszyfrowane SHA-256 (Web Crypto API). Logowanie hashuje wpisane hasło i porównuje hashe.

## Baza danych

Aktualnie **564 cytaty** w **88 grupach tłumaczeń** + 14 unikalnych. Autorzy obejmują: Plutarch, Tokarczuk, Mandela, Dawkins, Nietzsche, Steve Jobs, Les Brown, Daniel Ostrowski (autor projektu), Marian Turski, Lao Tzu, Albert Schweitzer, Goethe, Wittgenstein i wielu innych.

Migracje bazy działają przez `DB_SEED_VERSION` — istniejący użytkownicy z localStorage dostają nowe cytaty automatycznie przy następnym otwarciu strony, nie tracąc swoich edycji.

## Tech stack

- Czysty HTML/CSS/JS (vanilla, bez frameworków)
- localStorage jako baza
- Web Crypto API (SHA-256 dla haseł)
- ResponsiveVoice + SpeechSynthesis API (TTS)
- MyMemory API (tłumaczenia słów w słowniku)
- `@media print` z 5 trybami druku

## Autor

**Daniel Ostrowski** ([@dandeliant](https://github.com/dandeliant))

## Licencja

Projekt prywatny. Wszelkie cytaty z tej bazy są publikowane w celach edukacyjnych z atrybucją do oryginalnych autorów.
