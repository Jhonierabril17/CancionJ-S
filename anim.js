// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Llamando mi atención como nunca hubiera pensado", time: 6 },
  { text: "Intento comprenderlo pero lo supe desde el principio", time: 9 },
  { text: "Trabajas un poco diferente a cualquiera que haya conocido", time: 12 },
  { text: "Espero que estos pequeños momentos me persigan por millas", time: 20 },
  { text: "Abro la ventana solo para ver si estás cerca", time: 24 },
  { text: "Desearía poder mostrarte todos estos sentimientos que tengo oh oh", time: 27 },
  { text: "Me tienes en tus manos", time: 35 },
  { text: "Me zambullo de cabeza, Esperando poder amarte sin importar que", time: 40 },
  { text: "Me golpeaste como una gran ola, me estoy cayendo", time: 46  },
  { text: "Me tienes hipnotizado, Fascinado", time: 50 },
  { text: "Estoy bajo tu control hasta que las luces se apagan", time: 54 },
  { text: "Me tienes en tus manos", time: 57 },
  { text: "EN TUS MANOS", time: 62},
  { text: "Alimentando la adrenalina que late mi corazón", time: 74 },
  { text: "Caminas un poco más cerca y la siento venir", time: 78 },
  { text: "Enloquezco por tu energía que resuena donde quiera que voy", time: 81 },
  { text: "Estando en lo alto, tocando fondo", time: 88 },
  { text: "Aún en mi mente, está fuera de control", time: 91 },
  { text: "No puedo dejarte ir, tengo mis cartas en la mesa estoy esperandote, Cariño", time: 96 },
  { text: "Me tienes en tus manos", time: 102 },
  { text: "Me zambullo de cabeza, Esperando poder amarte sin importar que", time: 107 },
  { text: "Me golpeaste como una gran ola, me estoy cayendo", time: 115  },
  { text: "Me tienes hipnotizado, Fascinado", time: 118 },
  { text: "Estoy bajo tu control hasta que las luces se apagan", time: 122 },
  { text: "Me tienes en tus manos", time: 125 },
  { text: "EN TUS MANOS...", time: 128},
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);