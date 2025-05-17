////////////////////////
// Reproductor simple //
////////////////////////

function reproducirCancion(ruta, titulo) {
      const audio = document.getElementById("audio");
      const cancionActual = document.getElementById("cancionActual");

      audio.src = ruta;
      cancionActual.textContent = "🎵 Reproduciendo: " + titulo;
      audio.play();
    }