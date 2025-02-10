// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Desde que te conocí", time: 3 },
  { text: "Todo cambió en mi universo", time: 7 },
  { text: "Sentí el fuego", time: 11 },
  { text: "Y hoy, me arriesgo decirte", time: 12 },
  { text: "Quiero tenerte", time: 16 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 20 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 24 },
  { text: "Hasta la muerte", time: 30 },
  { text: "Caíste desde el cielo, así lo siento", time: 33 },
  { text: "Tú naciste para mí", time: 37 },
  { text: "Junto a ti, soy tan feliz", time: 40 },
  { text: "Me encantan tus caricias, tu sonrisa", time: 41 },
  { text: "Me encanta tu aliento", time: 45 },
  { text: "Que me azota con la brisa", time: 47 },
  { text: "Me eleva hasta el cielo", time: 50},
  { text: "Contigo vuelo", time: 52 },
  { text: "Tan alto que yo sé que esto es verdadero", time: 54 },
  { text: "Contigo es diferente, si estás de frente", time: 57 },
  { text: "Mi corazón se agita y te juro", time: 102 },
  { text: "Que quiero tenerte (Yeh eh)", time: 105 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 110 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 113 },
  { text: "Hasta la muerte", time: 119 },
  { text: "Quiero tenerte", time: 121 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 126 },
  { text: "Para amarte", time: 128 },
  { text: "Amarte por siempre", time: 132 },
  { text: "Tú para mí", time: 137 },
  { text: "Eres todo lo que quiero", time: 140 },
  { text: "Y yo para ti", time: 142 },
  { text: "Quien cura tus lamentos", time: 144 },
  { text: "Sé que aquí lo nuestro es algo eterno", time: 146 },
  { text: "Esto es lo que siento", time: 150 },
  { text: "Tú eres mi sustento", time: 152 },
  { text: "Yo para ti", time: 154 },
  { text: "El dueño de tu fuego", time: 156 },
  { text: "Tú para mí", time: 158 },
  { text: "Las alas de mi vuelo", time: 200 },
  { text: "Sé que sin ti", time: 202 },
  { text: "Caería en un abismo", time: 204},
  { text: "No sería lo mismo sin tu amor", time: 207 },
  { text: "Te juro que quiero tenerte, yeah yeah", time: 209 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 214 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 218 },
  { text: "Hasta la muerte, eh eh eh", time: 224},
  { text: "Conmigo siempre", time: 230 },
  { text: "Si siempre", time: 232 },
  { text: "Sin ti no quiero vivir", time: 234 },
  { text: "Eres todo para mí", time: 241 },
  { text: "Que quiero tenerte (ye-eh)", time: 242 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 247 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 250 },
  { text: "Hasta la muerte", time: 256},
  { text: "Quiero tenerte", time: 258},
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 303 },
  { text: "Para amarte", time: 206 },
  { text: "Amarte por siempre", time: 310 },
  { text: "Quiero tenerte", time: 314 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 319},
  { text: "Para amarte por siempre", time: 326 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
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
