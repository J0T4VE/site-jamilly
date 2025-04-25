const btn = document.getElementById('entrar');
if (btn) {
  btn.addEventListener('click', () => {
    window.location.href = "segunda-tela.html";
  });
}



  // 📸 Slideshow

  const fotos = [
    "assets/fotos/Foto1Jota.jpg",
    "assets/fotos/Foto2Jota.jpg",
    "assets/fotos/Foto3Jota.jpg",
    "assets/fotos/Foto4Jota.jpg",
    "assets/fotos/Foto5Jota.jpg",
    "assets/fotos/Foto6Jota.jpg",
    "assets/fotos/Foto7Jota.jpg"
  ];
  
  let index = 0;
  const img = document.getElementById("fotoSlide");
  if (img) {
    setInterval(() => {
      index = (index + 1) % fotos.length;
      img.src = fotos[index];
    }, 5000);
  }
  
 // 🕒 CONTADOR DE TEMPO JUNTOS
function atualizarContador() {
  console.log("atualizando contador...");


  const inicio = new Date("2023-04-29T00:00:00");
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  const tempo = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos juntos 💖`;
  const el = document.getElementById("tempoJuntos");
  if (el) el.textContent = tempo;
}

setInterval(atualizarContador, 1000);
atualizarContador();
