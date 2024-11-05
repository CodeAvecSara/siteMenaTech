const eventDate = new Date('November 10, 2024 08:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (days < 10) {
            document.getElementById('days').textContent = '0' + days; 
        } else {
            document.getElementById('days').textContent = days;
        }
        
        if (hours < 10) {
            document.getElementById('hours').textContent = ':0' + hours; // Retrait de ':' ici
        } else {
            document.getElementById('hours').textContent = ':'+hours; // Retrait de ':' ici
        }
        
        if (minutes < 10) {
            document.getElementById('minutes').textContent = ':0' + minutes; // Retrait de ':' ici
        } else {
            document.getElementById('minutes').textContent = ':'+minutes; // Retrait de ':' ici
        }
        
        if (seconds < 10) {
            document.getElementById('seconds').textContent = ':0' + seconds; // Retrait de ':' ici
        } else {
            document.getElementById('seconds').textContent = ':'+seconds; // Retrait de ':' ici
        }
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.background-image').innerHTML = '<h1 class="text-5xl font-bold">The Event Has Started!</h1>';
        }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);