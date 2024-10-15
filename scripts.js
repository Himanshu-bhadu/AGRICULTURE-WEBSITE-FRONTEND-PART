const suggestions = [
    "Tractors",
    "Excavators",
    "Bulldozers",
    "Forklifts",
    "Generators",
    "Scaffolding",
    "Concrete Mixers",
    "Earthmovers",
    "Backhoes",
    "Crane Services"
];

document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const suggestionsContainer = document.getElementById('suggestions');
    
    suggestionsContainer.innerHTML = '';

    if (query) {
        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));

        if (filteredSuggestions.length) {
            suggestionsContainer.style.display = 'block';
            filteredSuggestions.forEach(suggestion => {
                const div = document.createElement('div');
                div.classList.add('suggestion-item');
                div.textContent = suggestion;
                div.addEventListener('click', () => {
                    document.getElementById('search').value = suggestion;
                    suggestionsContainer.innerHTML = '';
                });
                suggestionsContainer.appendChild(div);
            });
        } else {
            suggestionsContainer.style.display = 'none';
        }
    } else {
        suggestionsContainer.style.display = 'none';
    }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const dotsContainer = document.querySelector('.dots');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
    updateDots(index);
}

function updateDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function initializeDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

initializeDots();
showSlide(currentSlide);
setInterval(nextSlide, 3000);

function openChat() {
    document.getElementById('chatPopup').style.display = 'block';
}

function closeChat() {
    document.getElementById('chatPopup').style.display = 'none';
}

