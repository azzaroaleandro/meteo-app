"use strict";

function makeSpot(id, name, coast, zone, lat, lon, seaSide) {
  var marineLat = lat;
  var marineLon = lon;
  var offset = 0.034;
  if (seaSide === "E") marineLon += offset;
  if (seaSide === "W") marineLon -= offset;
  if (seaSide === "S") marineLat -= offset;
  if (seaSide === "SE") {
    marineLat -= offset * 0.7;
    marineLon += offset * 0.7;
  }
  if (seaSide === "SW") {
    marineLat -= offset * 0.7;
    marineLon -= offset * 0.7;
  }
  return {
    id:id,
    name:name,
    coast:coast,
    zone:zone,
    lat:lat,
    lon:lon,
    marineLat:Number(marineLat.toFixed(4)),
    marineLon:Number(marineLon.toFixed(4))
  };
}

var SPOTS = [
  makeSpot("casalabate", "Casalabate", "Adriatico", "Lecce e nord Adriatico", 40.5250, 18.1210, "E"),
  makeSpot("torre-rinalda", "Torre Rinalda", "Adriatico", "Lecce e nord Adriatico", 40.4900, 18.1530, "E"),
  makeSpot("spiaggiabella", "Spiaggiabella", "Adriatico", "Lecce e nord Adriatico", 40.4730, 18.1790, "E"),
  makeSpot("torre-chianca", "Torre Chianca", "Adriatico", "Lecce e nord Adriatico", 40.4560, 18.2070, "E"),
  makeSpot("frigole", "Frigole", "Adriatico", "Lecce e nord Adriatico", 40.4270, 18.2440, "E"),
  makeSpot("san-cataldo", "San Cataldo", "Adriatico", "Lecce e nord Adriatico", 40.3780, 18.3060, "E"),
  makeSpot("torre-specchia", "Torre Specchia Ruggeri", "Adriatico", "Lecce e nord Adriatico", 40.3310, 18.3840, "E"),

  makeSpot("san-foca", "San Foca", "Adriatico", "Costa adriatica", 40.3034, 18.4037, "E"),
  makeSpot("roca-vecchia", "Roca Vecchia", "Adriatico", "Costa adriatica", 40.2850, 18.4230, "E"),
  makeSpot("torre-orso", "Torre dell'Orso", "Adriatico", "Costa adriatica", 40.2734, 18.4265, "E"),
  makeSpot("sant-andrea", "Sant'Andrea", "Adriatico", "Costa adriatica", 40.2580, 18.4460, "E"),
  makeSpot("conca-specchiulla", "Conca Specchiulla", "Adriatico", "Costa adriatica", 40.2400, 18.4560, "E"),
  makeSpot("frassanito", "Frassanito", "Adriatico", "Costa adriatica", 40.2260, 18.4620, "E"),
  makeSpot("alimini", "Alimini", "Adriatico", "Costa adriatica", 40.2080, 18.4580, "E"),
  makeSpot("baia-turchi", "Baia dei Turchi", "Adriatico", "Costa adriatica", 40.1810, 18.4720, "E"),
  makeSpot("otranto", "Otranto", "Adriatico", "Costa adriatica", 40.1480, 18.4869, "E"),
  makeSpot("porto-badisco", "Porto Badisco", "Adriatico", "Costa adriatica", 40.0790, 18.4840, "E"),
  makeSpot("santa-cesarea", "Santa Cesarea Terme", "Adriatico", "Costa adriatica", 40.0360, 18.4560, "E"),
  makeSpot("porto-miggiano", "Porto Miggiano", "Adriatico", "Costa adriatica", 40.0250, 18.4530, "E"),
  makeSpot("castro", "Castro", "Adriatico", "Costa adriatica", 40.0073, 18.4256, "E"),
  makeSpot("marina-marittima", "Marina di Marittima", "Adriatico", "Costa adriatica", 39.9850, 18.4030, "E"),
  makeSpot("acquaviva", "Cala dell'Acquaviva", "Adriatico", "Costa adriatica", 39.9780, 18.3950, "E"),
  makeSpot("tricase-porto", "Tricase Porto", "Adriatico", "Costa adriatica", 39.9310, 18.3940, "E"),
  makeSpot("marina-serra", "Marina Serra", "Adriatico", "Costa adriatica", 39.9100, 18.3900, "E"),
  makeSpot("novaglie", "Marina di Novaglie", "Adriatico", "Costa adriatica", 39.8560, 18.3920, "E"),

  makeSpot("ciolo", "Ciolo", "Capo", "Capo di Leuca", 39.8430, 18.3870, "SE"),
  makeSpot("santa-maria-leuca", "Santa Maria di Leuca", "Capo", "Capo di Leuca", 39.7968, 18.3589, "S"),
  makeSpot("felloniche", "Felloniche", "Ionio", "Capo di Leuca", 39.8080, 18.3230, "SW"),
  makeSpot("san-gregorio", "San Gregorio", "Ionio", "Capo di Leuca", 39.8170, 18.3100, "W"),
  makeSpot("torre-vado", "Torre Vado", "Ionio", "Capo di Leuca", 39.8350, 18.2750, "W"),

  makeSpot("pescoluse", "Pescoluse", "Ionio", "Costa ionica", 39.8378, 18.2561, "W"),
  makeSpot("torre-pali", "Torre Pali", "Ionio", "Costa ionica", 39.8430, 18.2080, "W"),
  makeSpot("lido-marini", "Lido Marini", "Ionio", "Costa ionica", 39.8570, 18.1830, "W"),
  makeSpot("torre-mozza", "Torre Mozza", "Ionio", "Costa ionica", 39.8700, 18.1470, "W"),
  makeSpot("fontanelle", "Fontanelle", "Ionio", "Costa ionica", 39.8850, 18.1260, "W"),
  makeSpot("torre-san-giovanni", "Torre San Giovanni", "Ionio", "Costa ionica", 39.8910, 18.1140, "W"),
  makeSpot("posto-rosso", "Posto Rosso", "Ionio", "Costa ionica", 39.9290, 18.0640, "W"),
  makeSpot("capilungo", "Capilungo", "Ionio", "Costa ionica", 39.9470, 18.0520, "W"),
  makeSpot("torre-suda", "Torre Suda", "Ionio", "Costa ionica", 39.9680, 18.0390, "W"),
  makeSpot("mancaversa", "Marina di Mancaversa", "Ionio", "Costa ionica", 39.9930, 18.0140, "W"),
  makeSpot("punta-pizzo", "Punta Pizzo", "Ionio", "Costa ionica", 40.0100, 17.9990, "W"),
  makeSpot("baia-verde", "Baia Verde", "Ionio", "Costa ionica", 40.0370, 18.0180, "W"),
  makeSpot("gallipoli", "Gallipoli", "Ionio", "Costa ionica", 40.0559, 17.9925, "W"),
  makeSpot("rivabella", "Rivabella", "Ionio", "Costa ionica", 40.0830, 18.0060, "W"),
  makeSpot("lido-conchiglie", "Lido Conchiglie", "Ionio", "Costa ionica", 40.1050, 18.0170, "W"),
  makeSpot("santa-maria-bagno", "Santa Maria al Bagno", "Ionio", "Costa ionica", 40.1260, 17.9940, "W"),
  makeSpot("santa-caterina", "Santa Caterina", "Ionio", "Costa ionica", 40.1390, 17.9830, "W"),
  makeSpot("porto-selvaggio", "Porto Selvaggio", "Ionio", "Costa ionica", 40.1500, 17.9680, "W"),
  makeSpot("torre-uluzzo", "Torre Uluzzo", "Ionio", "Costa ionica", 40.1630, 17.9570, "W"),
  makeSpot("sant-isidoro", "Sant'Isidoro", "Ionio", "Costa ionica", 40.2190, 17.9260, "W"),
  makeSpot("porto-cesareo", "Porto Cesareo", "Ionio", "Costa ionica", 40.2595, 17.8984, "W"),
  makeSpot("torre-lapillo", "Torre Lapillo", "Ionio", "Costa ionica", 40.2873, 17.8527, "W"),
  makeSpot("punta-prosciutto", "Punta Prosciutto", "Ionio", "Costa ionica", 40.2969, 17.7681, "W")
];

var WEBCAMS = [
  { name:"Casalabate", view:"Marina di Trepuzzi", lat:40.525, lon:18.121, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/casalabate-marina-di-trepuzzi.html" },
  { name:"San Cataldo", view:"Spiaggia e costa", lat:40.378, lon:18.306, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/marina-san-cataldo.html" },
  { name:"Alimini", view:"Spiaggia di Alimini", lat:40.208, lon:18.458, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/spiaggia-di-alimini.html" },
  { name:"Otranto", view:"Lungomare degli Eroi", lat:40.148, lon:18.487, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/lungomare-di-otranto.html" },
  { name:"Santa Cesarea Terme", view:"Palazzo Sticchi e costa", lat:40.036, lon:18.456, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/santa-cesarea-terme.html" },
  { name:"Castro Marina", view:"Porto di Castro", lat:40.007, lon:18.426, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/castro-marina-porto.html" },
  { name:"Santa Maria di Leuca", view:"Panorama sul mare", lat:39.797, lon:18.359, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/santa-maria-di-leuca.html" },
  { name:"Torre Mozza", view:"Spiaggia di Ugento", lat:39.870, lon:18.147, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/torre-mozza-ugento.html" },
  { name:"Torre San Giovanni", view:"Porto e spiaggia", lat:39.891, lon:18.114, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/torre-san-giovanni-ugento.html" },
  { name:"Marina di Alliste", view:"Costa ionica", lat:39.947, lon:18.052, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/marina-di-alliste.html" },
  { name:"Baia Verde", view:"Spiaggia di Gallipoli", lat:40.037, lon:18.018, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/gallipoli.html" },
  { name:"Gallipoli", view:"Porticciolo del Canneto", lat:40.056, lon:17.993, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/porto-di-gallipoli.html" },
  { name:"Lido Conchiglie", view:"Spiaggia del litorale nord", lat:40.105, lon:18.017, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/gallipoli-lido-conchiglie.html" },
  { name:"Padula Bianca", view:"Spiaggia di Padula Bianca", lat:40.095, lon:18.004, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/padula-bianca-gallipoli.html" },
  { name:"Porto Cesareo", view:"Porto e Isola dei Conigli", lat:40.260, lon:17.898, url:"https://www.skylinewebcams.com/it/webcam/italia/puglia/lecce/porto-cesareo.html" }
];

var WEATHER_MODELS = [
  { id:"italia_meteo_arpae_icon_2i", label:"ItaliaMeteo ICON-2I" },
  { id:"ecmwf_ifs", label:"ECMWF IFS" },
  { id:"icon_eu", label:"DWD ICON-EU" },
  { id:"ncep_gfs_seamless", label:"NOAA GFS" }
];

var WAVE_MODELS = [
  { id:"dwd_ewam", label:"DWD EWAM" },
  { id:"meteofrance_wave", label:"Météo-France MFWAM" },
  { id:"ecmwf_wam025", label:"ECMWF WAM" },
  { id:"ncep_gfswave025", label:"NOAA GFS Wave" }
];

var WEATHER_FIELDS = [
  "temperature_2m","apparent_temperature","precipitation","weather_code",
  "cloud_cover","wind_speed_10m","wind_direction_10m","wind_gusts_10m",
  "precipitation_probability","uv_index"
];
var WAVE_FIELDS = ["wave_height","wave_direction","wave_period"];
var CACHE_TTL_MS = 10 * 60 * 1000;
var REGIONAL_CACHE_TTL_MS = 15 * 60 * 1000;
var REFRESH_COOLDOWN_MS = 60 * 1000;
var FAVORITES_KEY = "marevero-favorites-v1";
var REGIONAL_SPOT_IDS = [
  "san-cataldo","torre-orso","alimini","otranto","santa-cesarea","castro",
  "pescoluse","torre-mozza","torre-san-giovanni","gallipoli","porto-cesareo","punta-prosciutto"
];

var state = {
  spot:null,
  unit:"kmh",
  rows:[],
  days:[],
  selectedDate:null,
  currentTime:null,
  weatherModels:[],
  waveModels:[],
  sstModel:null,
  cache:new Map(),
  inFlight:false,
  lastNetworkAt:0,
  favorites:[],
  regionalRanking:null,
  regionalFetchedAt:0,
  regionalInFlight:false,
  nearMeInFlight:false
};

var $ = function(id) { return document.getElementById(id); };

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function validNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function distanceKm(a, b) {
  var radius = 6371;
  var latDelta = (b.lat - a.lat) * Math.PI / 180;
  var lonDelta = (b.lon - a.lon) * Math.PI / 180;
  var value = Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
    Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) *
    Math.sin(lonDelta / 2) * Math.sin(lonDelta / 2);
  return 2 * radius * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function mean(values) {
  var clean = values.filter(validNumber);
  if (!clean.length) return null;
  return clean.reduce(function(sum, value) { return sum + value; }, 0) / clean.length;
}

function deviation(values) {
  var clean = values.filter(validNumber);
  if (clean.length < 2) return 0;
  var average = mean(clean);
  return Math.sqrt(mean(clean.map(function(value) { return Math.pow(value - average, 2); })));
}

function mode(values) {
  if (!values.length) return null;
  var counts = {};
  values.forEach(function(value) {
    var key = String(Math.round(value));
    counts[key] = (counts[key] || 0) + 1;
  });
  return Number(Object.keys(counts).sort(function(a, b) { return counts[b] - counts[a]; })[0]);
}

function circularMean(values) {
  var clean = values.filter(validNumber);
  if (!clean.length) return null;
  var sin = mean(clean.map(function(value) { return Math.sin(value * Math.PI / 180); }));
  var cos = mean(clean.map(function(value) { return Math.cos(value * Math.PI / 180); }));
  return (Math.atan2(sin, cos) * 180 / Math.PI + 360) % 360;
}

function hourFromTime(time) {
  return Number(time.slice(11, 13));
}

function dateFromTime(time) {
  return time.slice(0, 10);
}

function formatDay(date, style) {
  var value = new Date(date + "T12:00:00");
  return new Intl.DateTimeFormat("it-IT", style || { weekday:"short", day:"numeric", month:"short" }).format(value);
}

function romeHourKey() {
  var parts = new Intl.DateTimeFormat("en-CA", {
    timeZone:"Europe/Rome",
    year:"numeric",
    month:"2-digit",
    day:"2-digit",
    hour:"2-digit",
    hourCycle:"h23"
  }).formatToParts(new Date());
  var get = function(type) {
    var part = parts.find(function(item) { return item.type === type; });
    return part ? part.value : "00";
  };
  return get("year") + "-" + get("month") + "-" + get("day") + "T" + get("hour") + ":00";
}

function directionName(degrees) {
  if (!validNumber(degrees)) return "—";
  var names = ["N","NE","E","SE","S","SO","O","NO"];
  return names[Math.round(degrees / 45) % 8];
}

function weatherIcon(code) {
  if (!validNumber(code)) return "◌";
  if (code === 0) return "☀";
  if (code <= 2) return "🌤";
  if (code === 3) return "☁";
  if (code === 45 || code === 48) return "≋";
  if (code >= 95) return "⛈";
  if (code >= 71 && code <= 86) return "❄";
  if (code >= 51) return "🌧";
  return "☀";
}

function windValue(value) {
  if (!validNumber(value)) return "—";
  var converted = state.unit === "kn" ? value * 0.539957 : value;
  return Math.round(converted) + " " + (state.unit === "kn" ? "kt" : "km/h");
}

function numberValue(value, decimals, suffix) {
  if (!validNumber(value)) return "—";
  return value.toFixed(decimals || 0) + (suffix || "");
}

function setLoading(active) {
  $("loadingOverlay").classList.toggle("hidden", !active);
}

function showError(message) {
  $("errorBanner").textContent = message;
  $("errorBanner").hidden = !message;
}

function weatherUrl(spot, model, basic) {
  var params = new URLSearchParams();
  params.set("latitude", spot.lat);
  params.set("longitude", spot.lon);
  params.set("timezone", "Europe/Rome");
  params.set("forecast_days", "7");
  params.set("wind_speed_unit", "kmh");
  params.set("models", model);
  var variables = WEATHER_FIELDS.slice(0, 8);
  if (!basic) variables = WEATHER_FIELDS.slice();
  params.set("hourly", variables.join(","));
  return "https://api.open-meteo.com/v1/forecast?" + params.toString();
}

function waveUrl(spot, model) {
  var params = new URLSearchParams();
  params.set("latitude", spot.marineLat);
  params.set("longitude", spot.marineLon);
  params.set("timezone", "Europe/Rome");
  params.set("forecast_days", "7");
  params.set("models", model);
  params.set("hourly", "wave_height,wave_direction,wave_period");
  return "https://marine-api.open-meteo.com/v1/marine?" + params.toString();
}

function sstUrl(spot) {
  var params = new URLSearchParams();
  params.set("latitude", spot.marineLat);
  params.set("longitude", spot.marineLon);
  params.set("timezone", "Europe/Rome");
  params.set("forecast_days", "7");
  params.set("models", "meteofrance_sea_surface_temperature");
  params.set("hourly", "sea_surface_temperature");
  return "https://marine-api.open-meteo.com/v1/marine?" + params.toString();
}

function batchWeatherUrl(spots, forecastDays) {
  var horizon = Math.max(1, Math.min(3, forecastDays || 1));
  var params = new URLSearchParams();
  params.set("latitude", spots.map(function(spot) { return spot.lat; }).join(","));
  params.set("longitude", spots.map(function(spot) { return spot.lon; }).join(","));
  params.set("timezone", "Europe/Rome");
  params.set("forecast_days", String(horizon));
  params.set("wind_speed_unit", "kmh");
  params.set("hourly", [
    "temperature_2m","apparent_temperature","precipitation","precipitation_probability",
    "weather_code","cloud_cover","wind_speed_10m","wind_direction_10m","wind_gusts_10m"
  ].join(","));
  return "https://api.open-meteo.com/v1/forecast?" + params.toString();
}

function batchMarineUrl(spots, forecastDays) {
  var horizon = Math.max(1, Math.min(3, forecastDays || 1));
  var params = new URLSearchParams();
  params.set("latitude", spots.map(function(spot) { return spot.marineLat; }).join(","));
  params.set("longitude", spots.map(function(spot) { return spot.marineLon; }).join(","));
  params.set("timezone", "Europe/Rome");
  params.set("forecast_days", String(horizon));
  params.set("hourly", "wave_height,wave_direction,wave_period");
  return "https://marine-api.open-meteo.com/v1/marine?" + params.toString();
}

async function fetchJson(url, preserveArray) {
  var controller = new AbortController();
  var timeout = setTimeout(function() { controller.abort(); }, 16000);
  try {
    var response = await fetch(url, {
      signal:controller.signal,
      cache:"no-store",
      credentials:"omit",
      referrerPolicy:"no-referrer"
    });
    var data = await response.json();
    if (!response.ok || data.error) throw new Error(data.reason || "Fonte non disponibile");
    return Array.isArray(data) && !preserveArray ? data[0] : data;
  } finally {
    clearTimeout(timeout);
  }
}

function splitCombinedData(payload, models, fields) {
  var responses = Array.isArray(payload) ? payload : [payload];
  if (responses.length === models.length) {
    return models.map(function(meta, index) {
      return { meta:meta, data:responses[index] };
    }).filter(function(item) { return item.data && item.data.hourly; });
  }

  var combined = responses[0];
  if (!combined || !combined.hourly || !Array.isArray(combined.hourly.time)) return [];
  var parsed = models.map(function(meta) {
    var hourly = { time:combined.hourly.time };
    fields.forEach(function(field) {
      var modelKey = field + "_" + meta.id;
      if (Array.isArray(combined.hourly[modelKey])) hourly[field] = combined.hourly[modelKey];
    });
    if (Object.keys(hourly).length === 1) return null;
    var data = Object.assign({}, combined);
    data.hourly = hourly;
    return { meta:meta, data:data };
  }).filter(Boolean);

  if (!parsed.length && models.length === 1) {
    return [{ meta:models[0], data:combined }];
  }
  return parsed;
}

function hourlyValue(data, key, index) {
  if (!data || !data.hourly || !Array.isArray(data.hourly[key])) return null;
  var value = data.hourly[key][index];
  return validNumber(value) ? value : null;
}

function summarizeQuickSpot(spot, weather, marine, forecastDays) {
  if (!weather || !weather.hourly || !Array.isArray(weather.hourly.time)) return null;
  var today = romeHourKey().slice(0, 10);
  var horizon = Math.max(1, Math.min(3, forecastDays || 1));
  var forecastDates = [];
  weather.hourly.time.forEach(function(time) {
    var date = dateFromTime(time);
    if (date >= today && forecastDates.indexOf(date) === -1 && forecastDates.length < horizon) {
      forecastDates.push(date);
    }
  });

  var points = weather.hourly.time.map(function(time, index) {
    if (forecastDates.indexOf(dateFromTime(time)) === -1) return null;
    var precipitation = hourlyValue(weather, "precipitation", index);
    var probability = hourlyValue(weather, "precipitation_probability", index);
    if (!validNumber(probability) && validNumber(precipitation)) probability = clamp(precipitation * 75, 0, 100);
    var wave = marine ? nearestValue(marine, time, "wave_height", 2.2) : null;
    return {
      time:time,
      temperature:hourlyValue(weather, "temperature_2m", index),
      apparentTemperature:hourlyValue(weather, "apparent_temperature", index),
      wind:hourlyValue(weather, "wind_speed_10m", index),
      windDirection:hourlyValue(weather, "wind_direction_10m", index),
      gust:hourlyValue(weather, "wind_gusts_10m", index),
      cloud:hourlyValue(weather, "cloud_cover", index),
      precipitation:precipitation,
      rainProbability:probability,
      weatherCode:hourlyValue(weather, "weather_code", index),
      wave:wave,
      waveDirection:marine ? nearestValue(marine, time, "wave_direction", 2.2) : null,
      wavePeriod:marine ? nearestValue(marine, time, "wave_period", 2.2) : null,
      seaTemperature:null,
      confidence:70,
      windSpread:0,
      tempSpread:0,
      modelCount:1,
      marineCount:validNumber(wave) ? 1 : 0
    };
  }).filter(Boolean);
  if (!points.length) return null;

  var days = forecastDates.map(function(date) {
    var beachHours = points.filter(function(point) {
      var hour = hourFromTime(point.time);
      return dateFromTime(point.time) === date && hour >= 7 && hour <= 21;
    });
    if (!beachHours.length) return null;
    var best = bestBeachWindow(beachHours);
    var firstHour = best.points.length ? hourFromTime(best.points[0].time) : 9;
    var lastHour = best.points.length ? hourFromTime(best.points[best.points.length - 1].time) + 1 : 12;
    return {
      date:date,
      score:Math.round(best.score || 0),
      summary:averagePoints(best.points),
      bestPoints:best.points,
      window:String(firstHour).padStart(2, "0") + ":00–" + String(lastHour).padStart(2, "0") + ":00"
    };
  }).filter(Boolean);
  if (!days.length) return null;

  var strongestDay = days.slice().sort(function(a, b) { return b.score - a.score; })[0];
  var allBestPoints = [];
  days.forEach(function(day) {
    allBestPoints = allBestPoints.concat(day.bestPoints);
  });
  return {
    spot:spot,
    score:Math.round(mean(days.map(function(day) { return day.score; })) || 0),
    summary:averagePoints(allBestPoints),
    window:strongestDay.window,
    bestDate:strongestDay.date,
    days:days
  };
}

async function rankBeachSpots(spots, forecastDays) {
  var horizon = Math.max(1, Math.min(3, forecastDays || 1));
  var raw = await Promise.all([
    fetchJson(batchWeatherUrl(spots, horizon), true),
    fetchJson(batchMarineUrl(spots, horizon), true).catch(function() { return []; })
  ]);
  var weatherList = Array.isArray(raw[0]) ? raw[0] : [raw[0]];
  var marineList = Array.isArray(raw[1]) ? raw[1] : raw[1] ? [raw[1]] : [];
  return spots.map(function(spot, index) {
    return summarizeQuickSpot(spot, weatherList[index], marineList[index] || null, horizon);
  }).filter(Boolean);
}

async function loadWeatherModel(spot, meta) {
  try {
    return { meta:meta, data:await fetchJson(weatherUrl(spot, meta.id, false)) };
  } catch (fullError) {
    try {
      return { meta:meta, data:await fetchJson(weatherUrl(spot, meta.id, true)) };
    } catch (basicError) {
      return { meta:meta, error:basicError };
    }
  }
}

async function loadWeatherModels(spot) {
  var modelIds = WEATHER_MODELS.map(function(meta) { return meta.id; }).join(",");
  for (var attempt = 0; attempt < 2; attempt += 1) {
    try {
      var payload = await fetchJson(weatherUrl(spot, modelIds, attempt === 1), true);
      var combined = splitCombinedData(payload, WEATHER_MODELS, attempt === 1 ? WEATHER_FIELDS.slice(0, 8) : WEATHER_FIELDS);
      if (combined.length >= 2) return combined;
    } catch (error) {}
  }
  return Promise.all(WEATHER_MODELS.map(function(meta) {
    return loadWeatherModel(spot, meta);
  }));
}

async function loadWaveModel(spot, meta) {
  try {
    return { meta:meta, data:await fetchJson(waveUrl(spot, meta.id)) };
  } catch (error) {
    return { meta:meta, error:error };
  }
}

async function loadWaveModels(spot) {
  var modelIds = WAVE_MODELS.map(function(meta) { return meta.id; }).join(",");
  try {
    var payload = await fetchJson(waveUrl(spot, modelIds), true);
    var combined = splitCombinedData(payload, WAVE_MODELS, WAVE_FIELDS);
    if (combined.length >= 2) return combined;
  } catch (error) {}
  return Promise.all(WAVE_MODELS.map(function(meta) {
    return loadWaveModel(spot, meta);
  }));
}

async function loadSst(spot) {
  try {
    return { meta:{ id:"meteofrance_sea_surface_temperature", label:"Météo-France SST" }, data:await fetchJson(sstUrl(spot)) };
  } catch (error) {
    return { meta:{ id:"meteofrance_sea_surface_temperature", label:"Météo-France SST" }, error:error };
  }
}

function nearestValue(data, time, key, maxHours) {
  if (!data || !data.hourly || !Array.isArray(data.hourly.time) || !Array.isArray(data.hourly[key])) return null;
  var exact = data.hourly.time.indexOf(time);
  if (exact >= 0) {
    var exactValue = data.hourly[key][exact];
    return validNumber(exactValue) ? exactValue : null;
  }
  var target = new Date(time).getTime();
  var nearestIndex = -1;
  var nearestGap = Infinity;
  data.hourly.time.forEach(function(item, index) {
    var gap = Math.abs(new Date(item).getTime() - target);
    if (gap < nearestGap) {
      nearestGap = gap;
      nearestIndex = index;
    }
  });
  if (nearestIndex < 0 || nearestGap > maxHours * 3600000) return null;
  var value = data.hourly[key][nearestIndex];
  return validNumber(value) ? value : null;
}

function valuesFor(models, time, key, maxHours) {
  return models.map(function(model) {
    return nearestValue(model.data, time, key, maxHours || 1.1);
  }).filter(validNumber);
}

function rainForModel(model, time) {
  var probability = nearestValue(model.data, time, "precipitation_probability", 1.1);
  if (validNumber(probability)) return probability;
  var precipitation = nearestValue(model.data, time, "precipitation", 1.1);
  return validNumber(precipitation) ? clamp(precipitation * 75, 0, 100) : null;
}

function consensusPoint(time, weatherModels, waveModels, sstModel) {
  var temperatures = valuesFor(weatherModels, time, "temperature_2m");
  var feels = valuesFor(weatherModels, time, "apparent_temperature");
  var winds = valuesFor(weatherModels, time, "wind_speed_10m");
  var windDirections = valuesFor(weatherModels, time, "wind_direction_10m");
  var gusts = valuesFor(weatherModels, time, "wind_gusts_10m");
  var clouds = valuesFor(weatherModels, time, "cloud_cover");
  var precipitations = valuesFor(weatherModels, time, "precipitation");
  var rainProbabilities = weatherModels.map(function(model) { return rainForModel(model, time); }).filter(validNumber);
  var codes = valuesFor(weatherModels, time, "weather_code");
  var uvValues = valuesFor(weatherModels, time, "uv_index");
  var waves = valuesFor(waveModels, time, "wave_height", 2.2);
  var waveDirections = valuesFor(waveModels, time, "wave_direction", 2.2);
  var wavePeriods = valuesFor(waveModels, time, "wave_period", 2.2);
  var seaTemperature = sstModel && sstModel.data ? nearestValue(sstModel.data, time, "sea_surface_temperature", 4.2) : null;

  var confidence = 100;
  confidence -= deviation(temperatures) * 11;
  confidence -= deviation(winds) * 3.2;
  confidence -= deviation(gusts) * 1.5;
  confidence -= deviation(rainProbabilities) * 0.45;
  confidence -= Math.max(0, WEATHER_MODELS.length - temperatures.length) * 7;
  confidence = Math.round(clamp(confidence, 32, 98));

  return {
    time:time,
    temperature:mean(temperatures),
    apparentTemperature:mean(feels),
    wind:mean(winds),
    windDirection:circularMean(windDirections),
    gust:mean(gusts),
    cloud:mean(clouds),
    precipitation:mean(precipitations),
    rainProbability:mean(rainProbabilities),
    weatherCode:mode(codes),
    uv:mean(uvValues),
    wave:mean(waves),
    waveDirection:circularMean(waveDirections),
    wavePeriod:mean(wavePeriods),
    seaTemperature:seaTemperature,
    modelCount:temperatures.length,
    marineCount:waves.length,
    confidence:confidence,
    windSpread:deviation(winds),
    tempSpread:deviation(temperatures)
  };
}

function buildConsensus(weatherModels, waveModels, sstModel) {
  var times = [];
  weatherModels.forEach(function(model) {
    if (model.data && model.data.hourly && Array.isArray(model.data.hourly.time)) {
      times = times.concat(model.data.hourly.time);
    }
  });
  times = Array.from(new Set(times)).sort();
  return times.map(function(time) {
    return consensusPoint(time, weatherModels, waveModels, sstModel);
  });
}

function scoreHour(point) {
  var score = 100;
  if (validNumber(point.temperature)) {
    if (point.temperature < 22) score -= (22 - point.temperature) * 7;
    if (point.temperature > 35) score -= (point.temperature - 35) * 6;
  } else score -= 10;
  if (validNumber(point.rainProbability)) score -= Math.max(0, point.rainProbability - 8) * 0.62;
  if (validNumber(point.wind)) score -= Math.max(0, point.wind - 13) * 2.45;
  if (validNumber(point.gust)) score -= Math.max(0, point.gust - 25) * 1.18;
  if (validNumber(point.wave)) score -= Math.max(0, point.wave - 0.55) * 23;
  if (validNumber(point.cloud)) score -= Math.max(0, point.cloud - 48) * 0.18;
  if (validNumber(point.weatherCode) && point.weatherCode >= 95) score -= 30;
  else if (validNumber(point.weatherCode) && point.weatherCode >= 51) score -= 10;
  return Math.round(clamp(score, 5, 99));
}

function averagePoints(points) {
  var keys = [
    "temperature","apparentTemperature","wind","gust","cloud","precipitation",
    "rainProbability","wave","wavePeriod","seaTemperature","confidence","windSpread","tempSpread"
  ];
  var result = {};
  keys.forEach(function(key) {
    result[key] = mean(points.map(function(point) { return point[key]; }));
  });
  result.windDirection = circularMean(points.map(function(point) { return point.windDirection; }));
  result.waveDirection = circularMean(points.map(function(point) { return point.waveDirection; }));
  result.weatherCode = mode(points.map(function(point) { return point.weatherCode; }).filter(validNumber));
  result.modelCount = Math.max.apply(null, points.map(function(point) { return point.modelCount || 0; }));
  result.marineCount = Math.max.apply(null, points.map(function(point) { return point.marineCount || 0; }));
  return result;
}

function bestBeachWindow(hours) {
  var candidates = hours.filter(function(point) {
    var hour = hourFromTime(point.time);
    return hour >= 9 && hour <= 19;
  });
  if (!candidates.length) return { points:hours.slice(0, 1), score:scoreHour(hours[0] || {}) };
  var windowSize = Math.min(3, candidates.length);
  var best = null;
  for (var index = 0; index <= candidates.length - windowSize; index += 1) {
    var slice = candidates.slice(index, index + windowSize);
    var score = mean(slice.map(scoreHour));
    if (!best || score > best.score) best = { points:slice, score:score };
  }
  return best;
}

function groupDays(rows) {
  var grouped = {};
  rows.forEach(function(point) {
    var date = dateFromTime(point.time);
    if (!grouped[date]) grouped[date] = [];
    grouped[date].push(point);
  });
  return Object.keys(grouped).sort().map(function(date) {
    var hours = grouped[date].filter(function(point) {
      var hour = hourFromTime(point.time);
      return hour >= 7 && hour <= 21;
    });
    var best = bestBeachWindow(hours);
    var summary = averagePoints(best.points);
    var firstHour = best.points.length ? hourFromTime(best.points[0].time) : 9;
    var lastHour = best.points.length ? hourFromTime(best.points[best.points.length - 1].time) + 1 : 12;
    return {
      date:date,
      hours:hours,
      bestPoints:best.points,
      score:Math.round(best.score || 0),
      summary:summary,
      window:String(firstHour).padStart(2, "0") + ":00–" + String(lastHour).padStart(2, "0") + ":00"
    };
  }).slice(0, 6);
}

function verdictFor(day) {
  var score = day ? day.score : 0;
  if (score >= 84) return { title:"Sì. Mare pieno.", short:"Giornata da prendere al volo" };
  if (score >= 69) return { title:"Sì, nella finestra giusta.", short:"Buona idea" };
  if (score >= 52) return { title:"Si può fare. Occhio al vento.", short:"Giornata variabile" };
  return { title:"Meglio cambiare piano.", short:"Condizioni poco invitanti" };
}

function reasonsFor(summary) {
  var reasons = [];
  if (validNumber(summary.wind) && summary.wind > 22) reasons.push("vento sostenuto");
  if (validNumber(summary.gust) && summary.gust > 34) reasons.push("raffiche forti");
  if (validNumber(summary.rainProbability) && summary.rainProbability > 32) reasons.push("rischio pioggia");
  if (validNumber(summary.wave) && summary.wave > 1.1) reasons.push("mare mosso");
  if (validNumber(summary.temperature) && summary.temperature < 23) reasons.push("aria fresca");
  if (!reasons.length) return "Vento, temperatura e mare sono dalla vostra parte.";
  return "Il punto debole è " + reasons.slice(0, 2).join(" e ") + ".";
}

function scoreClass(score) {
  if (score >= 80) return "score-good";
  if (score >= 62) return "score-medium";
  return "score-low";
}

function setLevelClass(element, prefix, value) {
  Array.from(element.classList).forEach(function(className) {
    if (className.indexOf(prefix) === 0) element.classList.remove(className);
  });
  element.classList.add(prefix + Math.round(clamp(value || 0, 0, 100) / 10));
}

function setWindDirectionClass(element, degrees) {
  Array.from(element.classList).forEach(function(className) {
    if (className.indexOf("dir-") === 0) element.classList.remove(className);
  });
  var direction = validNumber(degrees) ? Math.round(degrees / 45) % 8 : 0;
  element.classList.add("dir-" + direction);
}

function closestPoint(rows, targetTime) {
  if (!rows.length) return null;
  var target = new Date(targetTime).getTime();
  return rows.reduce(function(best, point) {
    var gap = Math.abs(new Date(point.time).getTime() - target);
    return !best || gap < best.gap ? { point:point, gap:gap } : best;
  }, null).point;
}

function renderHero(day, current) {
  var verdict = verdictFor(day);
  $("heroDate").textContent = "OGGI · " + state.spot.coast.toUpperCase() + " · " + state.spot.name.toUpperCase();
  $("verdict").textContent = verdict.title;
  $("verdictSub").textContent = reasonsFor(day.summary);
  $("bestWindow").textContent = day.window;
  $("scoreValue").textContent = day.score;
  setLevelClass($("scoreRing"), "score-level-", day.score);

  var confidence = Math.round(day.summary.confidence || current.confidence || 0);
  var confidenceLabel = confidence >= 82 ? "Accordo alto" : confidence >= 66 ? "Accordo buono" : "Previsione variabile";
  $("confidenceLabel").textContent = confidenceLabel;
  $("confidenceText").textContent = (current.modelCount || 0) + " modelli meteo attivi · scarto vento ±" + numberValue(current.windSpread, 1, " km/h") + " · indice euristico, non probabilità di accuratezza";
  setLevelClass($("confidenceBar"), "level-", confidence);

  $("tempValue").textContent = numberValue(current.temperature, 0, "°");
  $("feelsValue").textContent = "percepiti " + numberValue(current.apparentTemperature, 0, "°");
  $("windValue").textContent = windValue(current.wind);
  $("windDetail").textContent = "da " + directionName(current.windDirection);
  setWindDirectionClass($("windArrow"), current.windDirection);
  $("waveValue").textContent = numberValue(current.wave, 1, " m");
  $("waveDetail").textContent = validNumber(current.wavePeriod) ? numberValue(current.wavePeriod, 0, " s di periodo") : "dato marino variabile";
  $("seaTempValue").textContent = numberValue(current.seaTemperature, 0, "°");
  $("rainValue").textContent = numberValue(current.rainProbability, 0, "%");
  $("cloudValue").textContent = numberValue(current.cloud, 0, "% nuvole");
  $("gustValue").textContent = windValue(current.gust);
  $("gustDetail").textContent = validNumber(current.gust) && current.gust > 35 ? "da tenere d'occhio" : "raffica prevista";
}

function renderHeroDays() {
  var container = $("heroDays");
  container.replaceChildren();
  state.days.slice(0, 3).forEach(function(day, index) {
    var card = document.createElement("article");
    card.className = "hero-day-card";

    var top = document.createElement("div");
    top.className = "hero-day-top";
    var label = document.createElement("span");
    label.textContent = index === 0 ? "Oggi" : index === 1 ? "Domani" : formatDay(day.date, { weekday:"long" });
    var score = document.createElement("strong");
    score.textContent = day.score + "/100";
    top.append(label, score);

    var verdict = document.createElement("p");
    verdict.textContent = verdictFor(day).short;

    var meta = document.createElement("div");
    meta.className = "hero-day-meta";
    var windowItem = document.createElement("span");
    windowItem.textContent = "Meglio ";
    var windowValue = document.createElement("strong");
    windowValue.textContent = day.window;
    windowItem.appendChild(windowValue);
    var windItem = document.createElement("span");
    windItem.textContent = "Vento ";
    var windStrong = document.createElement("strong");
    windStrong.textContent = windValue(day.summary.wind);
    windItem.appendChild(windStrong);
    var waveItem = document.createElement("span");
    waveItem.textContent = "Onde ";
    var waveStrong = document.createElement("strong");
    waveStrong.textContent = numberValue(day.summary.wave, 1, " m");
    waveItem.appendChild(waveStrong);
    meta.append(windowItem, windItem, waveItem);

    card.append(top, verdict, meta);
    container.appendChild(card);
  });
}

function renderWebcams() {
  $("webcamSpotName").textContent = state.spot.name;
  var container = $("webcamCards");
  container.replaceChildren();

  var nearby = WEBCAMS.map(function(webcam) {
    return { webcam:webcam, distance:distanceKm(state.spot, webcam) };
  }).filter(function(item) {
    return item.distance <= 15;
  }).sort(function(a, b) {
    return a.distance - b.distance;
  }).slice(0, 2);

  nearby.forEach(function(item) {
    var card = document.createElement("article");
    card.className = "webcam-card";
    var copy = document.createElement("div");
    copy.className = "webcam-card-copy";

    var live = document.createElement("span");
    live.className = "webcam-live";
    live.textContent = "WEBCAM PUBBLICA";
    var title = document.createElement("h3");
    title.textContent = item.webcam.name;
    var detail = document.createElement("p");
    detail.textContent = item.webcam.view + " · " +
      (item.distance < 1 ? "nella località" : item.distance.toFixed(1).replace(".", ",") + " km");
    var provider = document.createElement("small");
    provider.className = "webcam-provider";
    provider.textContent = "SkylineWebcams · verificata il 24 agosto 2026";
    copy.append(live, title, detail, provider);

    var link = document.createElement("a");
    link.className = "webcam-open";
    link.href = item.webcam.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Apri webcam ↗";
    link.setAttribute("aria-label", "Apri la webcam di " + item.webcam.name + " sul sito del gestore");

    card.append(copy, link);
    container.appendChild(card);
  });

  if (!nearby.length) {
    var empty = document.createElement("p");
    empty.className = "webcam-empty";
    empty.textContent = "Nessuna webcam pubblica verificata entro 15 km da questa località.";
    container.appendChild(empty);
  }
}

function renderFavorites() {
  var button = $("favoriteBtn");
  button.disabled = !state.spot;
  var selected = Boolean(state.spot && state.favorites.indexOf(state.spot.id) !== -1);
  button.textContent = selected ? "★" : "☆";
  button.setAttribute("aria-pressed", String(selected));
  button.setAttribute("aria-label", selected ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti");

  var container = $("favoriteList");
  container.replaceChildren();
  if (!state.favorites.length) {
    container.hidden = true;
    return;
  }
  state.favorites.forEach(function(spotId) {
    var spot = SPOTS.find(function(item) { return item.id === spotId; });
    if (!spot) return;
    var chip = document.createElement("button");
    chip.type = "button";
    chip.className = "favorite-chip";
    chip.dataset.spotId = spot.id;
    chip.textContent = spot.name;
    container.appendChild(chip);
  });
  var clear = document.createElement("button");
  clear.type = "button";
  clear.className = "favorites-clear";
  clear.dataset.clearFavorites = "true";
  clear.textContent = "Svuota preferiti";
  container.appendChild(clear);
  container.hidden = false;
}

function saveFavorites() {
  try {
    if (state.favorites.length) localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites));
    else localStorage.removeItem(FAVORITES_KEY);
  } catch (error) {}
  renderFavorites();
}

function loadFavorites() {
  try {
    var parsed = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
    state.favorites = Array.isArray(parsed) ? parsed.filter(function(spotId) {
      return SPOTS.some(function(spot) { return spot.id === spotId; });
    }) : [];
  } catch (error) {
    state.favorites = [];
  }
  renderFavorites();
}

function renderRegionalRanking(items) {
  var container = $("coastCompare");
  container.replaceChildren();
  var coasts = ["Adriatico","Ionio"].map(function(coast) {
    var ranked = items.filter(function(item) { return item.spot.coast === coast; }).sort(function(a, b) {
      return b.score - a.score;
    });
    return {
      name:coast,
      score:Math.round(mean(ranked.slice(0, 3).map(function(item) { return item.score; })) || 0),
      best:ranked[0]
    };
  }).filter(function(coast) { return coast.best; });
  var bestScore = Math.max.apply(null, coasts.map(function(coast) { return coast.score; }));

  coasts.forEach(function(coast) {
    var card = document.createElement("article");
    card.className = "coast-card" + (coast.score === bestScore ? " recommended" : "");
    var top = document.createElement("div");
    top.className = "coast-card-top";
    var badge = document.createElement("span");
    var horizon = coast.best.days ? coast.best.days.length : 1;
    badge.textContent = coast.score === bestScore ? "CONSIGLIATO · " + horizon + " GIORNI" : "ALTERNATIVA · " + horizon + " GIORNI";
    var score = document.createElement("strong");
    score.textContent = coast.score + "/100";
    top.append(badge, score);
    var title = document.createElement("h4");
    title.textContent = coast.name;
    var detail = document.createElement("p");
    var bestDayLabel = coast.best.bestDate ? formatDay(coast.best.bestDate, { weekday:"long", day:"numeric" }) : "oggi";
    detail.textContent = "Più costante: " + coast.best.spot.name + " · giornata migliore " + bestDayLabel + ", " + coast.best.window;
    var button = document.createElement("button");
    button.type = "button";
    button.className = "feature-spot-button";
    button.dataset.spotId = coast.best.spot.id;
    button.textContent = "Vedi " + coast.best.spot.name;
    card.append(top, title, detail, button);
    container.appendChild(card);
  });
}

async function loadRegionalRanking() {
  if (state.regionalInFlight) return;
  if (state.regionalRanking && Date.now() - state.regionalFetchedAt < REGIONAL_CACHE_TTL_MS) {
    renderRegionalRanking(state.regionalRanking);
    return;
  }
  state.regionalInFlight = true;
  $("coastCompare").innerHTML = '<p class="panel-status">Confronto sui prossimi tre giorni in corso…</p>';
  try {
    var spots = REGIONAL_SPOT_IDS.map(function(id) {
      return SPOTS.find(function(spot) { return spot.id === id; });
    }).filter(Boolean);
    state.regionalRanking = await rankBeachSpots(spots, 3);
    state.regionalFetchedAt = Date.now();
    if (!state.regionalRanking.length) throw new Error("Confronto non disponibile");
    renderRegionalRanking(state.regionalRanking);
  } catch (error) {
    $("coastCompare").innerHTML = '<p class="panel-status">Confronto temporaneamente non disponibile. Le previsioni della località selezionata restano attive.</p>';
  } finally {
    state.regionalInFlight = false;
  }
}

function renderNearMeResults(items) {
  var container = $("nearMeResults");
  container.replaceChildren();
  items.slice(0, 3).forEach(function(item) {
    var card = document.createElement("article");
    card.className = "near-result";
    var title = document.createElement("strong");
    title.textContent = item.spot.name + " · " + item.score + "/100";
    var detail = document.createElement("span");
    detail.textContent = item.distance.toFixed(1).replace(".", ",") + " km · meglio " + item.window;
    var button = document.createElement("button");
    button.type = "button";
    button.className = "feature-spot-button";
    button.dataset.spotId = item.spot.id;
    button.textContent = "Apri";
    card.append(title, detail, button);
    container.appendChild(card);
  });
}

function locateBestBeach() {
  if (state.nearMeInFlight) return;
  if (!("geolocation" in navigator)) {
    $("nearMeStatus").textContent = "La geolocalizzazione non è disponibile in questo browser.";
    return;
  }
  state.nearMeInFlight = true;
  $("nearMeBtn").disabled = true;
  $("nearMeBtn").textContent = "Cerco le spiagge vicine…";
  $("nearMeStatus").textContent = "Il browser potrebbe chiederti il permesso. La posizione non viene conservata.";
  $("nearMeResults").replaceChildren();

  navigator.geolocation.getCurrentPosition(async function(position) {
    var userPosition = { lat:position.coords.latitude, lon:position.coords.longitude };
    var nearest = SPOTS.map(function(spot) {
      return { spot:spot, distance:distanceKm(userPosition, spot) };
    }).sort(function(a, b) {
      return a.distance - b.distance;
    });
    if (!nearest.length || nearest[0].distance > 150) {
      $("nearMeStatus").textContent = "La posizione risulta fuori dall’area del Salento coperta da MareVero.";
      state.nearMeInFlight = false;
      $("nearMeBtn").disabled = false;
      $("nearMeBtn").textContent = "Usa la mia posizione";
      return;
    }
    try {
      var candidates = nearest.slice(0, 8);
      var ranked = await rankBeachSpots(candidates.map(function(item) { return item.spot; }));
      ranked.forEach(function(item) {
        var match = candidates.find(function(candidate) { return candidate.spot.id === item.spot.id; });
        item.distance = match ? match.distance : 0;
        item.nearScore = item.score - Math.min(item.distance, 60) * 0.3;
      });
      ranked.sort(function(a, b) { return b.nearScore - a.nearScore; });
      $("nearMeStatus").textContent = "Posizione elaborata nel browser. Confrontate le 8 spiagge più vicine.";
      renderNearMeResults(ranked);
    } catch (error) {
      $("nearMeStatus").textContent = "Non riesco a confrontare le spiagge vicine in questo momento. Riprova tra poco.";
    } finally {
      state.nearMeInFlight = false;
      $("nearMeBtn").disabled = false;
      $("nearMeBtn").textContent = "Aggiorna dalla mia posizione";
    }
  }, function(error) {
    var message = error && error.code === 1 ?
      "Permesso non concesso. Puoi abilitarlo dalle impostazioni del browser e riprovare." :
      "Posizione non disponibile. Controlla il segnale e riprova.";
    $("nearMeStatus").textContent = message;
    state.nearMeInFlight = false;
    $("nearMeBtn").disabled = false;
    $("nearMeBtn").textContent = "Usa la mia posizione";
  }, {
    enableHighAccuracy:false,
    timeout:12000,
    maximumAge:10 * 60 * 1000
  });
}

function renderRiskSignal(day) {
  var rows = day && day.hours ? day.hours : [];
  var maximum = function(key) {
    var values = rows.map(function(point) { return point[key]; }).filter(validNumber);
    return values.length ? Math.max.apply(null, values) : null;
  };
  var storm = rows.some(function(point) { return validNumber(point.weatherCode) && point.weatherCode >= 95; });
  var rain = maximum("rainProbability");
  var gust = maximum("gust");
  var wind = maximum("wind");
  var wave = maximum("wave");
  var severe = storm || (validNumber(gust) && gust >= 55) || (validNumber(wave) && wave >= 2.2);
  var watch = severe || (validNumber(rain) && rain >= 60) || (validNumber(gust) && gust >= 42) ||
    (validNumber(wind) && wind >= 30) || (validNumber(wave) && wave >= 1.4);
  var signal = $("riskSignal");
  signal.className = "risk-signal" + (severe ? " alert" : watch ? " watch" : "");
  signal.replaceChildren();
  var title = document.createElement("strong");
  title.textContent = severe ? "Condizioni potenzialmente critiche" :
    watch ? "Condizioni da controllare" : "Nessun segnale evidente nel consenso";
  var detail = document.createElement("p");
  detail.textContent = severe || watch ?
    "Apri radar e allerte ufficiali prima di partire. Lo screening automatico non è un livello di allerta." :
    "Lo screening non rileva soglie prudenziali superate, ma devi comunque verificare le fonti ufficiali.";
  signal.append(title, detail);
}

function openFeatureSpot(spotId) {
  if (!SPOTS.some(function(spot) { return spot.id === spotId; })) return;
  $("spotSelect").value = spotId;
  loadSpot(spotId, { force:false });
  document.querySelector(".location-bar").scrollIntoView({ behavior:"smooth", block:"start" });
}

function renderDays() {
  $("dayCards").innerHTML = state.days.slice(0, 5).map(function(day, index) {
    var verdict = verdictFor(day);
    var active = day.date === state.selectedDate ? " active" : "";
    var label = index === 0 ? "oggi" : formatDay(day.date, { weekday:"short", day:"numeric" });
    return '<button class="day-card' + active + '" type="button" data-date="' + day.date + '">' +
      '<span class="day-name">' + label + '</span>' +
      '<div class="day-score-row"><span class="day-score ' + scoreClass(day.score) + '">' + day.score + '</span>' +
      '<span class="day-weather" aria-hidden="true">' + weatherIcon(day.summary.weatherCode) + '</span></div>' +
      '<div class="day-verdict">' + verdict.short + '</div>' +
      '<div class="day-meta">' +
      '<span>Vento<strong>' + windValue(day.summary.wind) + '</strong></span>' +
      '<span>Onde<strong>' + numberValue(day.summary.wave, 1, " m") + '</strong></span>' +
      '<span>Temp.<strong>' + numberValue(day.summary.temperature, 0, "°") + '</strong></span>' +
      '<span>Meglio<strong>' + day.window.slice(0, 5) + '</strong></span>' +
      '</div></button>';
  }).join("");
}

function renderHourly() {
  var day = state.days.find(function(item) { return item.date === state.selectedDate; }) || state.days[0];
  if (!day) return;
  $("selectedDayLabel").textContent = formatDay(day.date, { weekday:"long", day:"numeric", month:"long" });
  $("hourlyTrack").innerHTML = day.hours.filter(function(point) {
    var hour = hourFromTime(point.time);
    return hour >= 8 && hour <= 20;
  }).map(function(point) {
    return '<article class="hour-card">' +
      '<time datetime="' + point.time + '">' + point.time.slice(11, 16) + '</time>' +
      '<div class="hour-icon" aria-hidden="true">' + weatherIcon(point.weatherCode) + '</div>' +
      '<div class="hour-temp">' + numberValue(point.temperature, 0, "°") + '</div>' +
      '<div class="hour-list">' +
      '<span>vento <strong>' + windValue(point.wind) + '</strong></span>' +
      '<span>raffiche <strong>' + windValue(point.gust) + '</strong></span>' +
      '<span>pioggia <strong>' + numberValue(point.rainProbability, 0, "%") + '</strong></span>' +
      '<span>onde <strong>' + numberValue(point.wave, 1, " m") + '</strong></span>' +
      '</div></article>';
  }).join("");
}

function renderModels() {
  var time = state.currentTime;
  $("weatherModelsBody").innerHTML = state.weatherModels.map(function(model) {
    var temperature = nearestValue(model.data, time, "temperature_2m", 1.2);
    var wind = nearestValue(model.data, time, "wind_speed_10m", 1.2);
    var gust = nearestValue(model.data, time, "wind_gusts_10m", 1.2);
    var rain = rainForModel(model, time);
    return "<tr><td><span class=\"model-ok\"></span>" + model.meta.label + "</td><td>" +
      numberValue(temperature, 1, "°") + "</td><td>" + windValue(wind) + "</td><td>" +
      windValue(gust) + "</td><td>" + numberValue(rain, 0, "%") + "</td></tr>";
  }).join("");

  $("waveModelsBody").innerHTML = state.waveModels.map(function(model) {
    var wave = nearestValue(model.data, time, "wave_height", 2.2);
    var period = nearestValue(model.data, time, "wave_period", 2.2);
    var direction = nearestValue(model.data, time, "wave_direction", 2.2);
    return "<tr><td><span class=\"model-ok\"></span>" + model.meta.label + "</td><td>" +
      numberValue(wave, 2, " m") + "</td><td>" + numberValue(period, 1, " s") +
      "</td><td>" + directionName(direction) + "</td></tr>";
  }).join("");
}

function renderAll() {
  var current = closestPoint(state.rows, romeHourKey()) || state.rows[0];
  state.currentTime = current.time;
  var today = dateFromTime(current.time);
  var heroDay = state.days.find(function(day) { return day.date === today; }) || state.days[0];
  if (!state.selectedDate || !state.days.some(function(day) { return day.date === state.selectedDate; })) {
    state.selectedDate = heroDay.date;
  }
  renderHero(heroDay, current);
  renderHeroDays();
  renderWebcams();
  renderRiskSignal(heroDay);
  renderDays();
  renderHourly();
  renderModels();
}

function updateSpotUrl(spot) {
  var url = new URL(window.location.href);
  url.searchParams.set("spot", spot.id);
  history.replaceState(null, "", url);
}

function applySpotSnapshot(spot, snapshot, fromCache) {
  state.spot = spot;
  state.weatherModels = snapshot.weatherModels;
  state.waveModels = snapshot.waveModels;
  state.sstModel = snapshot.sstModel;
  state.rows = snapshot.rows;
  state.days = snapshot.days;
  state.selectedDate = null;
  renderAll();

  var time = new Intl.DateTimeFormat("it-IT", {
    timeZone:"Europe/Rome", hour:"2-digit", minute:"2-digit"
  }).format(new Date(snapshot.fetchedAt));
  $("updatedAt").textContent = (fromCache ? "Dati di sessione delle " : "Aggiornato alle ") + time + " · " +
    state.weatherModels.length + " modelli meteo, " + state.waveModels.length + " marini";

  if (state.weatherModels.length < WEATHER_MODELS.length || state.waveModels.length < WAVE_MODELS.length) {
    showError("Alcune fonti stanno aggiornando i dati. Il consenso usa solo i modelli disponibili in questo momento.");
  }
  $("spotSelect").value = spot.id;
  renderFavorites();
  updateSpotUrl(spot);
  loadRegionalRanking();
}

async function loadSpot(spotId, options) {
  options = options || {};
  var spot = SPOTS.find(function(item) { return item.id === spotId; }) || SPOTS[2];
  var force = options.force === true;
  var now = Date.now();
  var cached = state.cache.get(spot.id);

  if (state.inFlight) return;
  if (!force && cached && now - cached.fetchedAt < CACHE_TTL_MS) {
    showError("");
    applySpotSnapshot(spot, cached, true);
    return;
  }
  if (force && now - state.lastNetworkAt < REFRESH_COOLDOWN_MS) {
    var seconds = Math.ceil((REFRESH_COOLDOWN_MS - (now - state.lastNetworkAt)) / 1000);
    $("updatedAt").textContent = "Dati già recenti · nuovo aggiornamento disponibile tra " + seconds + " s";
    return;
  }

  state.inFlight = true;
  setLoading(true);
  showError("");
  $("refreshBtn").disabled = true;
  $("spotSelect").disabled = true;

  try {
    state.lastNetworkAt = Date.now();
    var raw = await Promise.all([
      loadWeatherModels(spot),
      loadWaveModels(spot),
      loadSst(spot)
    ]);
    var weatherModels = raw[0].filter(function(item) { return item.data; });
    var waveModels = raw[1].filter(function(item) { return item.data; });
    var sstModel = raw[2].data ? raw[2] : null;

    if (weatherModels.length < 2) {
      throw new Error("Non ci sono abbastanza modelli disponibili per calcolare un consenso affidabile.");
    }

    var rows = buildConsensus(weatherModels, waveModels, sstModel);
    var snapshot = {
      weatherModels:weatherModels,
      waveModels:waveModels,
      sstModel:sstModel,
      rows:rows,
      days:groupDays(rows),
      fetchedAt:Date.now()
    };
    state.cache.set(spot.id, snapshot);
    applySpotSnapshot(spot, snapshot, false);
  } catch (error) {
    showError(error.message || "Non siamo riusciti a scaricare le previsioni. Riprova tra poco.");
    if (state.spot) $("spotSelect").value = state.spot.id;
  } finally {
    state.inFlight = false;
    setLoading(false);
    $("refreshBtn").disabled = false;
    $("spotSelect").disabled = false;
  }
}

function bindEvents() {
  $("spotSelect").addEventListener("change", function(event) {
    loadSpot(event.target.value, { force:false });
  });
  $("favoriteBtn").addEventListener("click", function() {
    if (!state.spot) return;
    var index = state.favorites.indexOf(state.spot.id);
    if (index >= 0) state.favorites.splice(index, 1);
    else state.favorites.push(state.spot.id);
    saveFavorites();
  });
  $("favoriteList").addEventListener("click", function(event) {
    var clear = event.target.closest("[data-clear-favorites]");
    if (clear) {
      state.favorites = [];
      saveFavorites();
      return;
    }
    var chip = event.target.closest("[data-spot-id]");
    if (chip) openFeatureSpot(chip.dataset.spotId);
  });
  ["coastCompare","nearMeResults"].forEach(function(id) {
    $(id).addEventListener("click", function(event) {
      var button = event.target.closest("[data-spot-id]");
      if (button) openFeatureSpot(button.dataset.spotId);
    });
  });
  $("nearMeBtn").addEventListener("click", locateBestBeach);
  $("refreshBtn").addEventListener("click", function() {
    loadSpot(state.spot ? state.spot.id : $("spotSelect").value, { force:true });
  });
  document.querySelectorAll(".unit-button").forEach(function(button) {
    button.addEventListener("click", function() {
      state.unit = button.dataset.unit;
      document.querySelectorAll(".unit-button").forEach(function(item) {
        item.classList.toggle("active", item === button);
      });
      if (state.rows.length) renderAll();
    });
  });
  $("dayCards").addEventListener("click", function(event) {
    var card = event.target.closest("[data-date]");
    if (!card) return;
    state.selectedDate = card.dataset.date;
    renderDays();
    renderHourly();
    $("hourlyTitle").scrollIntoView({ behavior:"smooth", block:"start" });
  });
}

function setupLegalDialog() {
  var dialog = $("legalDialog");
  $("legalBtn").addEventListener("click", function() {
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  });
  $("legalCloseBtn").addEventListener("click", function() {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  });
  dialog.addEventListener("click", function(event) {
    if (event.target === dialog) {
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
    }
  });
}

function setupInstall() {
  var promptEvent = null;
  window.addEventListener("beforeinstallprompt", function(event) {
    event.preventDefault();
    promptEvent = event;
    $("installBtn").hidden = false;
  });
  $("installBtn").addEventListener("click", async function() {
    if (!promptEvent) return;
    promptEvent.prompt();
    await promptEvent.userChoice;
    promptEvent = null;
    $("installBtn").hidden = true;
  });
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker.register("./sw.js?v=20260824-1").catch(function() {});
    });
  }
}

function init() {
  var groupedSpots = {};
  SPOTS.forEach(function(spot) {
    if (!groupedSpots[spot.zone]) groupedSpots[spot.zone] = [];
    groupedSpots[spot.zone].push(spot);
  });
  Object.keys(groupedSpots).forEach(function(zone) {
    var group = document.createElement("optgroup");
    group.label = zone;
    groupedSpots[zone].forEach(function(spot) {
      var option = document.createElement("option");
      option.value = spot.id;
      option.textContent = spot.name;
      group.appendChild(option);
    });
    $("spotSelect").appendChild(group);
  });
  var requested = new URLSearchParams(window.location.search).get("spot");
  var initial = SPOTS.some(function(spot) { return spot.id === requested; }) ? requested : "porto-cesareo";
  $("spotSelect").value = initial;
  loadFavorites();
  bindEvents();
  setupLegalDialog();
  setupInstall();
  loadSpot(initial, { force:false });
}

init();
