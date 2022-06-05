# Responsywna aplikacja do oceniania Memów.

## Nawigacja:

Poruszanie się po aplikacji za pomocą menu.
Pozycje w menu: Strona główna, Hot Mems, Niedocenione, Ulubione, Dodaj Mema
Logo linkuje do Strony głównej.
W wersji na urządzenia mobilne Strona główna jako jedyna posiada menu, powrót z pozostałych stron do strony głównej (i dostępu do menu) w tym przypadku za pomocą przycisku Back lub logo.

## Strona główna:

Przywitanie użytkownika i przykładowy tekst z wykorzystaniem Khaled Ipsum.

## Hot mems:

Tytuł oraz krótki opis, przejście do listy memów za pomocą scrolla lub animowanej strzałki.
Lista memów, dla których różnica pozytywnych i negatywnych ocen jest większa niż +5 (upvotes-downvotes>5)
Umożliwia głosowanie na Memy. W przypadku, gdy pozytywnych ocen będzie nie więcej niż o 5 więcej w stosunku do negatywnych, to mem przejdzie do memów niedocenionych.
Głosowanie odbywa się poprzez naciśnięcie odpowiedniego przycisku pod memem.
W prawym górnym rogu znajduje się przycisk-gwiazdka umożliwiający oznaczenie mema i dodanie do ulubionych.
W przypadku braku memów spełniających te kryteria wyświatlana jest informacja o braku Hot memów wraz z linkiem do Niedocenione

## Niedocenione:

Tytuł oraz krótki opis, przejście do listy memów za pomocą scrolla lub animowanej strzałki.
Lista memów, dla których różnica pozytywnych i negatywnych ocen nie jest większa niż +5 (upvotes-downvotes<=5)
Umożliwia głosowanie na Memy. W przypadku, gdy pozytywnych ocen będzie więcej niż o 5 więcej w stosunku do negatywnych, to mem przejdzie do memów hot.
Głosowanie odbywa się poprzez naciśnięcie odpowiedniego przycisku pod memem.
W prawym górnym rogu znajduje się przycisk-gwiazdka umożliwiający oznaczenie mema i dodanie do ulubionych.
W przypadku braku memów spełniających te kryteria wyświatlana jest informacja o braku Hot memów wraz z linkiem do Niedocenione

## Ulubione:

Lista memów oznaczonych gwiazdką, ponowne wciśnięcie gwiazdki powoduje usunięcie mema z listy ulubionych.

## Dodaj Mema:

Możliwość dodania własnego mema. Wymagany jest tytuł oraz prawidłowy adres url mema.
Aplikacja sprawdza podane dane. W przypadku błędnych danych (brak tytułu lub brak ścieżki/nieprawidłowa ścieżka) mem nie zostanie dodany.

## Użyte technologie:

React, Redux, React Router, Fontawsome, Validator, JavaScript, CSS3, HTML5
