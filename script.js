document.querySelector('.floating-button').addEventListener('click', function() {
  const featuredItems = document.querySelector('.featured-items');
  featuredItems.scrollBy({ left: 200, behavior: 'smooth' }); // Scroll kwa 200px kwa haki
});

const floatingButton = document.querySelector('.floating-button');
const additionalFeatures = document.querySelector('.additional-features');

floatingButton.addEventListener('dblclick', () => {
    if (additionalFeatures.style.display === 'block') {
        additionalFeatures.style.display = 'none';
    } else {
        additionalFeatures.style.display = 'block';
    }
});