# Coding Challenge

## Installationshinweise

### Inhalt der .env Datei

- den Link zur Testdatenbank bei MongoDB schicke ich in der Mail mit. Diese muss in der .env Datei eingetragen werden

### lokal

- npm install
- npm run build
- npm start

### Docker

- docker build -t time-tracker:v1 .
- docker run time-tracker:v1

### Heroku

https://time-tracker-alkawi.herokuapp.com/

## Fragen

### Benötigte Zeit

- die vollen 8 Stunden

### Weitere Informationen

Den Timer zu bauen war relativ schnell gemacht. Probleme hatte ich beim Rechnen mit Uhrzeiten beim Fall, dass die Dauer nicht über den Timer, sondern über das Formular eingegeben wird. Mir ist erst sehr spät eingefallen, dass man diese Dauer auch per Input eingeben kann. Dadurch habe ich extrem viel Zeit verloren, weswegen ich leider nicht alle User Stories komplett erfüllen konnte.
