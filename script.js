// Gerekli elementleri seçiyoruz
const button = document.getElementById('surpriseButton');
const message = document.getElementById('surpriseMessage');
const balloonContainer = document.getElementById('balloonContainer');
const cardContainer = document.querySelector('.card-container');

// Butona tıklandığında ne olacağını belirliyoruz
button.addEventListener('click', () => {

    // 1. Mesajı görünür yap
    message.classList.remove('hidden');

    // 2. Balonları Uçur (hidden sınıfını kaldır)
    balloonContainer.classList.remove('hidden');

    // 3. Butonu gizle
    button.classList.add('hidden');

    // Opsiyonel: Kartı biraz yukarı kaldırarak dikkati mesaja çek
    cardContainer.style.transform = 'translateY(-10px)';
});