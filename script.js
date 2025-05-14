let currentIndex = 0;
        const gallery = document.getElementById('gallery');
        const images = gallery.querySelectorAll('img');
        const totalImages = images.length;

        function updateButtonStates() {
            const prevButton = document.getElementById('prev-button');
            const nextButton = document.getElementById('next-button');
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === totalImages - 1;
        }

        function changeImage(direction) {
            currentIndex = Math.max(0, Math.min(currentIndex + direction, totalImages - 1));
            gallery.scrollTo({
                left: currentIndex * gallery.clientWidth,
                behavior: 'smooth'
            });
            updateButtonStates();
        }

        // Initialize button states
        updateButtonStates();

        // Ensure correct positioning on window resize
        window.addEventListener('resize', () => {
            gallery.scrollTo({
                left: currentIndex * gallery.clientWidth,
                behavior: 'auto'
            });
        });