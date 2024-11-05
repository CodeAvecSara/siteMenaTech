const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let currentIndex = 2; // Starting image index

// Function to update the slider display
function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.classList.add('hidden');
        if (index === currentIndex) {
            item.classList.remove('hidden');
        }
    });
    
    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle('bg-gray-300', index === currentIndex);
        dot.classList.toggle('bg-white', index !== currentIndex);
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
});

// Add click event to each dot for direct navigation
dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
        currentIndex = parseInt(event.target.getAttribute('data-index'));
        updateCarousel();
    });
});

updateCarousel(); // Initialize display on load