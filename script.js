document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.play-button');
    
    // Добавляем базовые стили для анимации
    playButton.style.transition = 'all 0.3s ease';
    playButton.style.cursor = 'pointer';
    
    // Массив эмодзи сердечек
    const heartEmojis = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💖', '💗', '💓', '💝', '💕'];
    
    // Функция для создания эффекта пульсации
    function createPulseEffect() {
        playButton.style.transform = 'scale(1.05)';
        setTimeout(() => {
            playButton.style.transform = 'scale(1)';
        }, 500);
    }
    
    // Запускаем пульсацию каждые 2 секунды
    setInterval(createPulseEffect, 2000);
    
    // Эффект при наведении
    playButton.addEventListener('mouseenter', () => {
        playButton.style.backgroundColor = '#ff3366';
        playButton.style.transform = 'scale(1.1) rotate(5deg)';
        playButton.style.boxShadow = '0 0 20px rgba(255, 51, 102, 0.5)';
    });
    
    // Возврат к исходному состоянию при уходе курсора
    playButton.addEventListener('mouseleave', () => {
        playButton.style.backgroundColor = '';
        playButton.style.transform = 'scale(1)';
        playButton.style.boxShadow = '';
    });

    // Функция создания сердечка
    function createHeart() {
        const heart = document.createElement('div');
        // Выбираем случайный эмодзи из массива
        heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.position = 'fixed';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.opacity = '0';
        heart.style.transform = 'translateY(0) scale(0)';
        heart.style.transition = 'all 0.5s ease-out';
        document.body.appendChild(heart);

        // Анимация появления
        requestAnimationFrame(() => {
            heart.style.opacity = '1';
            heart.style.transform = 'translateY(-20px) scale(1)';
        });

        // Удаление сердечка через 2 секунды
        setTimeout(() => {
            heart.style.opacity = '0';
            heart.style.transform = 'translateY(-100px) scale(0)';
            setTimeout(() => heart.remove(), 500);
        }, 2000);
    }

    // Функция создания множества сердечек
    function createHearts() {
        const heartCount = 30;
        for (let i = 0; i < heartCount; i++) {
            setTimeout(() => createHeart(), i * 50);
        }
    }
    
    // Эффект при клике
    playButton.addEventListener('click', () => {
        playButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            playButton.style.transform = 'scale(1)';
        }, 150);
        
        // Создаем сердечки
        createHearts();
    });
}); 