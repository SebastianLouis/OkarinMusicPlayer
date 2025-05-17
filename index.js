/////////////////////
// iframes del nav //
/////////////////////

function reproductorPage() {
  document.getElementById("testPage").innerHTML = `<iframe src="Playlist/playlist.html" width="100%" height="782px" style="border: none;"></iframe>`;
}

function contenidoPage(){
  document.getElementById("testPage").innerHTML=`<iframe src="contenido.html" width="100%" height="770px" style="border: none;"></iframe>`;
}

function album1(){
  document.getElementById("testPage").innerHTML=`<iframe src="Playlist/Albums/album1.html" width="100%" height="782px" style="border: none;"></iframe>`;
}

function album2(){
  document.getElementById("testPage").innerHTML=`<iframe src="Playlist/Albums/album2.html" width="100%" height="782px" style="border: none;"></iframe>`;
}

function album3(){
  document.getElementById("testPage").innerHTML=`<iframe src="Playlist/Albums/album3.html" width="100%" height="782px" style="border: none;"></iframe>`;
}

/////////////////////////////////////
// Usuarios del simulador de sesión//
/////////////////////////////////////

const usuarios = [
  { usuario: "Sebastian", contraseña: "1234" },
  { usuario: "Patrick", contraseña: "1234" },
];

////////////////////
// Iniciar Sesión //
////////////////////

function login() {
  document.getElementById("login").style.visibility = "visible";
  document.getElementById("fondoBlur").style.visibility = "visible";
  document.getElementById("register").style.visibility = "hidden";
  document.getElementById("botonBlur").style.visibility = "visible";
}

function loginPass() {
  const usuario = document.getElementById("usuarioLog").value;
  const contraseña = document.getElementById("passwordLog").value;
  const mensajeLog = document.getElementById("mensajeLog");

  const usuarioEncontrado = usuarios.find(
    (u) => u.usuario === usuario && u.contraseña === contraseña
  );

  if (usuarioEncontrado) {
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("log_reg").style.visibility = "hidden";
    document.getElementById("userID").textContent = "Usuario: " + usuario;
    document.getElementById("userID").style.color = "white";
    document.getElementById("logout").style.visibility = "visible";
    document.getElementById("fondoBlur").style.visibility = "hidden";
    document.getElementById("botonBlur").style.visibility = "hidden";
  } else {
    mensajeLog.textContent = "Usuario o contraseña incorrectos";
    mensajeLog.style.color = "red";
    mensajeLog.style.fontSize = "12px";
  }
}

///////////////////
// Cerrar sesión //
///////////////////

function logout() {
  document.getElementById("log_reg").style.visibility = "visible";
  document.getElementById("logout").style.visibility = "hidden";
}

function botonBlur() {
  document.getElementById("login").style.visibility = "hidden";
  document.getElementById("register").style.visibility = "hidden";
  document.getElementById("fondoBlur").style.visibility = "hidden";
  document.getElementById("botonBlur").style.visibility = "hidden";
}

//////////////
// Registro //
//////////////

function register() {
  document.getElementById("register").style.visibility = "visible";
  document.getElementById("fondoBlur").style.visibility = "visible";
  document.getElementById("login").style.visibility = "hidden";
  document.getElementById("botonBlur").style.visibility = "visible";
}

function registerPass() {
  const userReg = document.getElementById("userReg").value.trim();
  const passReg = document.getElementById("passReg").value.trim();
  const correoReg = document.getElementById("correoReg").value.trim();
  const terminosReg = document.getElementById("terminos").checked;
  const msgReg = document.getElementById("msgReg");

  const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (userReg === "" || passReg === "" || correoReg === "") {
    msgReg.style.color = "red";
    msgReg.style.fontSize = "12px";
    msgReg.textContent = "Por favor, completa todos los campos.";

    return false;
  }

  if (!patronEmail.test(correoReg)) {
      msgReg.style.color = "red";
      msgReg.style.fontSize = "12px";
      msgReg.textContent = "El correo electrónico no es válido.";
      return false;
  }
  if (!terminosReg) {
      msgReg.style.color = "red";
      msgReg.style.fontSize = "12px";
      msgReg.textContent = "Debes aceptar los términos y condiciones.";
      return false;
  }

  document.getElementById("register").style.visibility = "hidden";
  document.getElementById("log_reg").style.visibility = "hidden";
  document.getElementById("logout").style.visibility = "visible";
  document.getElementById("userID").textContent = "Usuario: " + userReg;
  document.getElementById("userID").style.color = "white";
  document.getElementById("fondoBlur").style.visibility = "hidden";
  document.getElementById("botonBlur").style.visibility = "hidden";

  return true;
}

///////////////////////
// Audio de tarjetas //
///////////////////////

const zona1 = document.getElementById("cancion1");
const audio1 = document.getElementById("audio1");
let temporizador1; // Para controlar el retraso

  zona1.addEventListener("click", () => {
    audio1.play();
  });

zona1.addEventListener("mouseleave", () => {
  clearTimeout(temporizador1); // Cancela si el usuario se va antes
  audio1.pause();
  audio1.currentTime = 0;
});


const zona2 = document.getElementById("cancion2");
const audio2 = document.getElementById("audio2");
let temporizador2; 

  zona2.addEventListener("click", () => {
    audio2.play();
  });

zona2.addEventListener("mouseleave", () => {
  clearTimeout(temporizador2);
  audio2.pause();
  audio2.currentTime = 0;
});


const zona3 = document.getElementById("cancion3");
const audio3 = document.getElementById("audio3");
let temporizador3;

  zona3.addEventListener("click", () => {
    audio3.play();
  });

zona3.addEventListener("mouseleave", () => {
  clearTimeout(temporizador3);
  audio3.pause();
  audio3.currentTime = 0;
});


const zona4 = document.getElementById("cancion4");
const audio4 = document.getElementById("audio4");
let temporizador4;

  zona4.addEventListener("click", () => {
    audio4.play();
  });

zona4.addEventListener("mouseleave", () => {
  clearTimeout(temporizador4);
  audio4.pause();
  audio4.currentTime = 0;
});


const zona5 = document.getElementById("cancion5");
const audio5 = document.getElementById("audio5");
let temporizador5;

  zona5.addEventListener("click", () => {
    audio5.play();
  });

zona5.addEventListener("mouseleave", () => {
  clearTimeout(temporizador5);
  audio5.pause();
  audio5.currentTime = 0;
});


const zona6 = document.getElementById("cancion6");
const audio6 = document.getElementById("audio6");
let temporizador6;

  zona6.addEventListener("click", () => {
    audio6.play();
  });

zona6.addEventListener("mouseleave", () => {
  clearTimeout(temporizador6);
  audio6.pause();
  audio6.currentTime = 0;
});

///////////////////////////
// Banner en movimiento  //
//////////////////////////

      let currentIndex = 0;
      const slides = document.querySelectorAll('.banner-movimiento');
      const wrapper = document.getElementById('banner');
      const totalSlides = slides.length;

      function nextSlide() {
          currentIndex = (currentIndex + 1) % totalSlides;
          wrapper.style.transform = `translateX(-${currentIndex * 100}vw)`;
        }

      setInterval(nextSlide, 4000);