// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Desde que te conocí", time: 5 },
  { text: "Todo cambió en mi universo", time: 9 },
  { text: "Sentí el fuego", time: 13 },
  { text: "Y hoy, me arriesgo decirte", time: 17 },
  { text: "Quiero tenerte", time: 21 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 25 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 31 },
  { text: "Hasta la muerte", time: 37 },
  { text: "Caíste desde el cielo, así lo siento", time: 42 },
  { text: "Tú naciste para mí", time: 48 },
  { text: "Junto a ti, soy tan feliz", time: 52 },
  { text: "Me encantan tus caricias, tu sonrisa", time: 57 },
  { text: "Me encanta tu aliento", time: 62 },
  { text: "Que me azota con la brisa", time: 66 },
  { text: "Me eleva hasta el cielo", time: 71 },
  { text: "Contigo vuelo", time: 75 },
  { text: "Tan alto que yo sé que esto es verdadero", time: 79 },
  { text: "Contigo es diferente, si estás de frente", time: 85 },
  { text: "Mi corazón se agita y te juro", time: 90 },
  { text: "Que quiero tenerte (Yeh eh)", time: 95 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 100 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 106 },
  { text: "Hasta la muerte", time: 112 },
  { text: "Quiero tenerte", time: 117 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 122 },
  { text: "Para amarte", time: 128 },
  { text: "Amarte por siempre", time: 132 },
  { text: "Tú para mí", time: 137 },
  { text: "Eres todo lo que quiero", time: 141 },
  { text: "Y yo para ti", time: 145 },
  { text: "Quien cura tus lamentos", time: 149 },
  { text: "Sé que aquí lo nuestro es algo eterno", time: 153 },
  { text: "Esto es lo que siento", time: 158 },
  { text: "Tú eres mi sustento", time: 162 },
  { text: "Yo para ti", time: 166 },
  { text: "El dueño de tu fuego", time: 170 },
  { text: "Tú para mí", time: 174 },
  { text: "Las alas de mi vuelo", time: 178 },
  { text: "Sé que sin ti", time: 182 },
  { text: "Caería en un abismo", time: 186 },
  { text: "No sería lo mismo sin tu amor", time: 190 },
  { text: "Te juro que quiero tenerte, yeah yeah", time: 195 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 200 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 206 },
  { text: "Hasta la muerte, eh eh eh", time: 212 },
  { text: "Conmigo siempre", time: 217 },
  { text: "Si siempre", time: 221 },
  { text: "Sin ti no quiero vivir", time: 225 },
  { text: "Eres todo para mí", time: 229 },
  { text: "Que quiero tenerte (ye-eh)", time: 233 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 237 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 243 },
  { text: "Hasta la muerte", time: 249 },
  { text: "Quiero tenerte", time: 254 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 259 },
  { text: "Para amarte", time: 265 },
  { text: "Amarte por siempre", time: 269 },
  { text: "Quiero tenerte", time: 273 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 278 },
  { text: "Para amarte por siempre", time: 283 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    lyrics.innerHTML = currentLine.text;
    lyrics.style.opacity = 1;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 500);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
