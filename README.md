# MareVero — Salento

Una web app mobile-first che mette nella stessa schermata meteo, vento, raffiche, probabilità di pioggia, onde e temperatura superficiale del mare per 53 località costiere della provincia di Lecce.

## Modelli e rielaborazione

- Meteo e vento: ItaliaMeteo ICON-2I, ECMWF IFS, DWD ICON-EU e NOAA GFS.
- Onde: DWD EWAM, Météo-France MFWAM, ECMWF WAM e NOAA GFS Wave.
- Temperatura superficiale del mare: Météo-France tramite Open-Meteo.
- MareVero normalizza unità e orari, interpola i dati disponibili, calcola medie aritmetiche e circolari, aggrega finestre di tre ore e applica un indice euristico per la giornata in spiaggia.

L’indice di consenso descrive l’accordo fra i modelli selezionati: **non è una probabilità scientificamente calibrata di accuratezza, non è una misura ufficiale di affidabilità e non garantisce il verificarsi della previsione**.

## Dati, attribuzione e licenze

Dati meteorologici e marini forniti da [Open-Meteo](https://open-meteo.com/), disponibili secondo [Creative Commons Attribution 4.0 International — CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.it). I dati sono aggregati e rielaborati da MareVero; Open-Meteo e i fornitori originari non approvano, certificano o sponsorizzano l’app.

Fonti e condizioni dettagliate: [Open-Meteo Data Sources & License](https://open-meteo.com/en/license) e [Terms & Privacy](https://open-meteo.com/en/terms). Il servizio usa l’API gratuita non commerciale e non contiene pubblicità o abbonamenti.

## Privacy

Il codice dell’app non crea account, non imposta cookie e non integra analytics, pubblicità, pixel, fingerprinting, geolocalizzazione o profilazione. Il parametro URL `spot` contiene soltanto l’identificativo della località. Le coordinate predefinite sono richieste direttamente alle API Open-Meteo.

La Cache Storage del Service Worker conserva soltanto un elenco chiuso di file statici essenziali. Le risposte previsionali sono riutilizzate per non più di 10 minuti e restano soltanto nella memoria volatile della pagina fino alla sua chiusura; non sono salvate in storage persistente. Non viene mostrato un cookie banner perché non sono presenti cookie o tecnologie non necessarie.

Open-Meteo e GitHub Pages possono trattare log tecnici secondo le rispettive informative. L’informativa completa è disponibile nel modal “Fonti, licenze e privacy” dell’app.

## Sicurezza

- Content Security Policy restrittiva: script, stili, immagini, worker e connessioni limitati alle origini indispensabili.
- Nessuno script o stile inline e nessuna dipendenza esterna.
- Richieste aggregate multi-modello quando supportate, cache di sessione per località di 10 minuti, singola richiesta in volo e cooldown di 60 secondi sul refresh manuale.
- Service Worker limitato ai soli asset statici noti; non intercetta né memorizza le API esterne e non crea cache illimitate per gli URL con query.

MareVero serve esclusivamente a organizzare una giornata in spiaggia. **Non usare per navigazione, balneazione in sicurezza, emergenze, allerte o decisioni ad alto rischio.** Consultare sempre Protezione Civile, Guardia Costiera, bollettini e ordinanze ufficiali.

## Pubblicazione

Il sito statico è pubblicato con GitHub Pages dal branch `main`, cartella root.

[MareVero — Salento](https://azzaroaleandro.github.io/meteo-app/)
