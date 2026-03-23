// typing effect
const text = `Selamat ulang tahun yang ke 22 sayang ❤️

I’m so grateful to have you in my life and I wish you all the happiness in the world. ❤️`;

let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

typing();

// pindah halaman
function nextPage() {
  window.location.href = "love.html";
}

// musik
function playMusic() {
  const music = document.getElementById("music");
  music.play();
}

// auto play setelah interaksi (biar gak diblokir browser)
document.body.addEventListener("click", function () {
  const music = document.getElementById("music");
  music.play();
});

// hati jatuh
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// bunga jatuh
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.innerHTML = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.fontSize = Math.random() * 20 + 15 + "px";
  flower.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 6000);
}

setInterval(createFlower, 300);