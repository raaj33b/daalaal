// Add event listener to the discover more button
document.querySelector('button').addEventListener('click', () => {
    // Scroll to the about section
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to the project cards
document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mouseover', () => {
        // Add a cosmic animation effect
        card.style.transform = 'scale(1.1)';
        card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    });

    card.addEventListener('mouseout', () => {
        // Remove the cosmic animation effect
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });
});