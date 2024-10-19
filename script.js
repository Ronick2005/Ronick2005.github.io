// Smooth Scroll to Classify Section
document.querySelector('.cta-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('classify').scrollIntoView({ behavior: 'smooth' });
});
