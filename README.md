# MareVero — Salento

Una web app mobile-first che risponde a una domanda semplice: **oggi è davvero giornata da mare?**

MareVero mette nella stessa schermata meteo, vento, raffiche, probabilità di pioggia, onde e temperatura superficiale del mare. Invece di mostrare un solo modello, calcola un consenso tra più fonti previsionali e rende visibile quanto sono d'accordo.

## Modelli confrontati

- Meteo e vento: ItaliaMeteo ICON-2I, ECMWF IFS, DWD ICON-EU, NOAA GFS.
- Onde: DWD EWAM, Météo-France MFWAM, ECMWF WAM e NOAA GFS Wave.
- Dati distribuiti tramite [Open-Meteo](https://open-meteo.com/).

## Località incluse

Punta Prosciutto, Torre Lapillo, Porto Cesareo, Gallipoli, Pescoluse, Santa Maria di Leuca, Castro, Otranto, Torre dell'Orso e San Foca.

## Pubblicazione

Il workflow GitHub Actions pubblica automaticamente il sito statico su GitHub Pages a ogni aggiornamento del branch `main`.

La previsione è pensata per organizzare una giornata in spiaggia. Non sostituisce bollettini ufficiali, avvisi di protezione civile o strumenti per la navigazione.
