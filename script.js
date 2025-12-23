// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Function to alternate colors on text (wrap each word in span)
function alternateText(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        const words = el.textContent.split(' ');
        el.innerHTML = words.map((word, i) => `<span>${word}</span>`).join(' ');
    });
}

alternateText('.alternating');

// Re-apply on page load (in case of dynamic content)
window.onload = () => alternateText('.alternating');
