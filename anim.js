var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Desde que te conocí", time: 5 },
  { text: "Todo cambió en mi universo", time: 10 },
  { text: "Sentí el fuego", time: 15 },
  { text: "Y hoy, me arriesgo decirte", time: 20 },
  { text: "Quiero tenerte", time: 25 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 30 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 37 },
  { text: "Hasta la muerte", time: 43 },
  { text: "Caíste desde el cielo, así lo siento", time: 48 },
  { text: "Tú naciste para mí", time: 54 },
  { text: "Junto a ti, soy tan feliz", time: 59 },
  { text: "Me encantan tus caricias, tu sonrisa", time: 64 },
  { text: "Me encanta tu aliento", time: 70 },
  { text: "Que me azota con la brisa", time: 75 },
  { text: "Me eleva hasta el cielo", time: 80 },
  { text: "Contigo vuelo", time: 85 },
  { text: "Tan alto que yo sé que esto es verdadero", time: 90 },
  { text: "Contigo es diferente, si estás de frente", time: 97 },
  { text: "Mi corazón se agita y te juro", time: 103 },
  { text: "Que quiero tenerte (Yeh eh)", time: 108 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 113 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 120 },
  { text: "Hasta la muerte", time: 126 },
  { text: "Quiero tenerte", time: 131 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 136 },
  { text: "Para amarte", time: 142 },
  { text: "Amarte por siempre", time: 146 },
  { text: "Tú para mí", time: 151 },
  { text: "Eres todo lo que quiero", time: 156 },
  { text: "Y yo para ti", time: 161 },
  { text: "Quien cura tus lamentos", time: 166 },
  { text: "Sé que aquí lo nuestro es algo eterno", time: 171 },
  { text: "Esto es lo que siento", time: 176 },
  { text: "Tú eres mi sustento", time: 181 },
  { text: "Yo para ti", time: 186 },
  { text: "El dueño de tu fuego", time: 191 },
  { text: "Tú para mí", time: 196 },
  { text: "Las alas de mi vuelo", time: 201 },
  { text: "Sé que sin ti", time: 206 },
  { text: "Caería en un abismo", time: 211 },
  { text: "No sería lo mismo sin tu amor", time: 216 },
  { text: "Te juro que quiero tenerte, yeah yeah", time: 221 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 226 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 233 },
  { text: "Hasta la muerte, eh eh eh", time: 239 },
  { text: "Conmigo siempre", time: 244 },
  { text: "Si siempre", time: 249 },
  { text: "Sin ti no quiero vivir", time: 254 },
  { text: "Eres todo para mí", time: 259 },
  { text: "Que quiero tenerte (ye-eh)", time: 264 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 269 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 276 },
  { text: "Hasta la muerte", time: 282 },
  { text: "Quiero tenerte", time: 287 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 292 },
  { text: "Para amarte", time: 298 },
  { text: "Amarte por siempre", time: 303 },
  { text: "Quiero tenerte", time: 308 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 313 },
  { text: "Para amarte por siempre", time: 318 }
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