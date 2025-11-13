let angkaRahasia = Math.floor(Math.random() * 20) + 1;
let jumlahPercobaan = 0;
let maxPercobaan = 5;

function tebakAngka() {
  let input = document.getElementById("tebakan");
  let tebakan = parseInt(input.value);
  let hasil = document.getElementById("hasil");
  let percobaanText = document.getElementById("percobaan");

  // Validasi input
  if (isNaN(tebakan) || tebakan < 1 || tebakan > 20) {
    hasil.innerHTML = "⚠️ Masukkan angka antara 1 sampai 20!";
    hasil.style.color = "red";
    return;
  }

  jumlahPercobaan++;
  percobaanText.innerHTML = `Percobaan: ${jumlahPercobaan}`;

  // Jika tebakan benar
  if (tebakan === angkaRahasia) {
    hasil.innerHTML = `🎉 Keren! Angka ${angkaRahasia} benar! Kamu menebak dalam ${jumlahPercobaan} percobaan.`;
    hasil.style.color = "green";
    confetti();
    input.disabled = true;
  } 
  // Jika terlalu rendah
  else if (tebakan < angkaRahasia) {
    hasil.innerHTML = "🔽 Terlalu rendah! Coba angka lebih besar.";
    hasil.style.color = "orange";
  } 
  // Jika terlalu tinggi
  else {
    hasil.innerHTML = "🔼 Terlalu tinggi! Coba angka lebih kecil.";
    hasil.style.color = "orange";
  }

  // Jika sudah melebihi batas percobaan
  if (jumlahPercobaan >= maxPercobaan && tebakan !== angkaRahasia) {
    hasil.innerHTML = `😢 Kesempatan habis! Angka yang benar adalah ${angkaRahasia}.`;
    hasil.style.color = "red";
    input.disabled = true;
  }
}

function resetGame() {
  angkaRahasia = Math.floor(Math.random() * 20) + 1;
  jumlahPercobaan = 0;
  document.getElementById("tebakan").value = "";
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("percobaan").innerHTML = "Percobaan: 0";
  document.getElementById("tebakan").disabled = false;
}

// Efek confetti 🎉
function confetti() {
  for (let i = 0; i < 20; i++) {
    let partikel = document.createElement("div");
    partikel.style.position = "fixed";
    partikel.style.width = "10px";
    partikel.style.height = "10px";
    partikel.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    partikel.style.top = "-10px";
    partikel.style.left = Math.random() * 100 + "vw";
    partikel.style.borderRadius = "50%";
    partikel.style.animation = "jatuh 2s linear forwards";
    document.body.appendChild(partikel);

    setTimeout(() => partikel.remove(), 2000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes jatuh {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
