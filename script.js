const envelope = document.getElementById('envelope');
const openButton = document.getElementById('openCard');
const card = document.getElementById('card');
const music = document.getElementById('bgMusic');
const heartsContainer = document.getElementById('hearts-container');

// เปิดการ์ด
openButton.addEventListener('click', () => {
  envelope.style.transform = "rotateX(180deg)"; // ซองพลิก
  setTimeout(() => {
    card.classList.add('show'); // การ์ดค่อยๆ ขยาย
    playMusic();
    startHearts();
  }, 1000);
});

// เล่นเพลง
function playMusic() {
  if(music.paused) music.play();
}

// สร้างหัวใจ
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.width = heart.style.height = (20 + Math.random() * 20) + 'px';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

function startHearts() {
  setInterval(createHeart, 300); // สร้างหัวใจทุก 0.3 วินาที
}
