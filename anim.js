// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Desde que te conocí", time: 3 },
  { text: "Todo cambió en mi universo", time: 5 },
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
  { text: "Me eleva hasta el cielo", time: 50 },
  { text: "Contigo vuelo", time: 52 },
  { text: "Tan alto que yo sé que esto es verdadero", time: 54 },
  { text: "Contigo es diferente, si estás de frente", time: 57 },
  { text: "Mi corazón se agita y te juro", time: 62 },  // Corregido de 102 a 62
  { text: "Que quiero tenerte (Yeh eh)", time: 65 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 70 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 73 },
  { text: "Hasta la muerte", time: 79 },
  { text: "Quiero tenerte", time: 81 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 86 },
  { text: "Para amarte", time: 88 },
  { text: "Amarte por siempre", time: 92 },
  { text: "Tú para mí", time: 97 },
  { text: "Eres todo lo que quiero", time: 100 },
  { text: "Y yo para ti", time: 102 },
  { text: "Quien cura tus lamentos", time: 104 },
  { text: "Sé que aquí lo nuestro es algo eterno", time: 106 },
  { text: "Esto es lo que siento", time: 110 },
  { text: "Tú eres mi sustento", time: 112 },
  { text: "Yo para ti", time: 114 },
  { text: "El dueño de tu fuego", time: 116 },
  { text: "Tú para mí", time: 118 },
  { text: "Las alas de mi vuelo", time: 120 },
  { text: "Sé que sin ti", time: 122 },
  { text: "Caería en un abismo", time: 124 },
  { text: "No sería lo mismo sin tu amor", time: 127 },
  { text: "Te juro que quiero tenerte, yeah yeah", time: 129 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 134 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 138 },
  { text: "Hasta la muerte, eh eh eh", time: 144 },
  { text: "Conmigo siempre", time: 150 },
  { text: "Si siempre", time: 152 },
  { text: "Sin ti no quiero vivir", time: 154 },
  { text: "Eres todo para mí", time: 161 },
  { text: "Que quiero tenerte (ye-eh)", time: 162 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 167 },
  { text: "Para besarte, acariciarte, siempre amarte", time: 170 },
  { text: "Hasta la muerte", time: 176 },
  { text: "Quiero tenerte", time: 178 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 183 },
  { text: "Para amarte", time: 186 },
  { text: "Amarte por siempre", time: 190 },
  { text: "Quiero tenerte", time: 194 },
  { text: "Conmigo siempre, siempre, siempre, siempre", time: 199 },
  { text: "Para amarte por siempre", time: 206 }
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  
  for (var i = 0; i < lyricsData.length; i++) {
    var currentLine = lyricsData[i];
    var nextLine = lyricsData[i + 1];

    if (nextLine) {
      // Mostrar la letra hasta el inicio de la siguiente
      if (time >= currentLine.time && time < nextLine.time) {
        lyrics.innerHTML = currentLine.text;
        lyrics.style.opacity = 1;
        return;
      }
    } else {
      // Última línea
      if (time >= currentLine.time) {
        lyrics.innerHTML = currentLine.text;
        lyrics.style.opacity = 1;
        return;
      }
    }
  }

  // Ocultar si no hay línea activa
  lyrics.style.opacity = 0;
  lyrics.innerHTML = "";
}

setInterval(updateLyrics, 250);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
