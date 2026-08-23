# MareVero — Salento

Una web app mobile-first che mette nella stessa schermata meteo, vento, raffiche, probabilità di pioggia, onde e temperatura superficiale del mare per 53 località costiere della provincia di Lecce.

## Modelli e rielaborazione

- Meteo e vento: ItaliaMeteo ICON-2I, ECMWF IFS, DWD ICON-EU e NOAA GFS.
- Onde: DWD EWAM, Météo-France MFWAM, ECMWF WAM e NOAA GFS Wave.
- Temperatura superficiale del mare: Météo-France tramite Open-Meteo.
- MareVero normalizza unità e orari, interpola i dati disponibili, calcola medie aritmetiche e circolari, aggrega finestre di tre ore e applica un indice euristico per la giornata in spiaggia.

L’indice di consenso descrive l’accordo fra i modelli selezionati: **non è una probabilità scientificamente calibrata di accuratezza, non è una misura ufficiale di affidabilità e non garantisce il verificarsi della previsione**.

## Scelta della spiaggia

- Il riquadro iniziale mostra in verticale oggi, domani e dopodomani con punteggio, finestra migliore, vento e onde.
- “Dove vado al mare oggi?” confronta sei località campione per l’Adriatico e sei per lo Ionio con due richieste aggregate e suggerisce la costa e la spiaggia più favorevoli.
- “Best beach near me” si attiva solo dopo il clic e il consenso del browser: confronta le otto spiagge più vicine combinando distanza e condizioni.
- I preferiti salvano esclusivamente gli identificativi delle località nel localStorage del browser.

## Webcam

La sezione webcam seleziona automaticamente fino a due webcam pubbliche entro 15 km dalla località scelta. Il catalogo verificato copre tutte le 53 località attraverso 15 punti costieri fra Casalabate e Porto Cesareo.

MareVero mostra soltanto nome, distanza e collegamento: non incorpora player, immagini, script o tracker del gestore. La pagina esterna viene contattata esclusivamente dopo il clic dell’utente; disponibilità, immagini e policy dipendono dal gestore della webcam.

## Radar e allerte

MareVero esegue uno screening prudenziale su temporali, probabilità di pioggia, vento, raffiche e onde. Non è un’allerta ufficiale. La sezione collega direttamente alla piattaforma Radar-DPC e ai messaggi e bollettini della Protezione Civile Puglia senza incorporare mappe o contenuti esterni.

## Dati, attribuzione e licenze

Dati meteorologici e marini forniti da [Open-Meteo](https://open-meteo.com/), disponibili secondo [Creative Commons Attribution 4.0 International — CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.it). I dati sono aggregati e rielaborati da MareVero; Open-Meteo e i fornitori originari non approvano, certificano o sponsorizzano l’app.

Fonti e condizioni dettagliate: [Open-Meteo Data Sources & License](https://open-meteo.com/en/license) e [Terms & Privacy](https://open-meteo.com/en/terms). Il servizio usa l’API gratuita non commerciale e non contiene pubblicità o abbonamenti.

## Privacy

Il codice dell’app non crea account, non imposta cookie e non integra analytics, pubblicità, pixel, fingerprinting o profilazione. Il parametro URL `spot` contiene soltanto l’identificativo della località. Le coordinate predefinite sono richieste direttamente alle API Open-Meteo.

I preferiti sono l’unico dato persistente dell’app: nel localStorage viene conservato un array di ID delle località, rimovibile dall’interfaccia o cancellando i dati del sito. “Best beach near me” richiede la posizione soltanto dopo un clic; le coordinate dell’utente vengono elaborate localmente, non sono memorizzate né trasmesse, e alle API vengono inviate soltanto le coordinate pubbliche delle spiagge candidate.

La Cache Storage del Service Worker conserva soltanto un elenco chiuso di file statici essenziali. Le risposte previsionali sono riutilizzate per non più di 10 minuti e restano soltanto nella memoria volatile della pagina. Webcam, radar e allerte sono collegamenti esterni e non vengono caricati dentro MareVero. Non viene mostrato un cookie banner perché non sono presenti cookie, tracker o storage pubblicitario; il salvataggio degli ID preferiti è necessario alla funzione esplicitamente richiesta.

Open-Meteo e GitHub Pages possono trattare log tecnici secondo le rispettive informative. L’informativa completa è disponibile nel modal “Fonti, licenze e privacy” dell’app.

## Sicurezza

- Content Security Policy restrittiva: script, stili, immagini, worker e connessioni limitati alle origini indispensabili.
- Nessuno script o stile inline e nessuna dipendenza esterna.
- Richieste aggregate multi-modello quando supportate, confronto regionale in due richieste batch con cache volatile di 15 minuti, cache di sessione per località di 10 minuti, singola richiesta principale in volo e cooldown di 60 secondi sul refresh manuale.
- Service Worker limitato ai soli asset statici noti; non intercetta né memorizza le API esterne e non crea cache illimitate per gli URL con query.

MareVero serve esclusivamente a organizzare una giornata in spiaggia. **Non usare per navigazione, balneazione in sicurezza, emergenze, allerte o decisioni ad alto rischio.** Consultare sempre Protezione Civile, Guardia Costiera, bollettini e ordinanze ufficiali.

## Pubblicazione

Il sito statico è pubblicato con GitHub Pages dal branch `main`, cartella root.

[MareVero — Salento](https://azzaroaleandro.github.io/meteo-app/)
