
let currentSlide = 0;
function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    const carouselInner = document.getElementById('carouselInner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}
     
function openCarouselZoom(imgElement) {
    modal.style.display = 'flex';
    modalImg.src = imgElement.src;
}
  // 1. Iluminación inteligente del menú lateral al hacer Scroll
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let currentSection = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 200) {
                    currentSection = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').includes(currentSection)) {
                    item.classList.add('active');
                }
            });
        });

    
        function copyText(elementId) {
            const text = document.getElementById(elementId).innerText;
            navigator.clipboard.writeText(text).then(() => {
                const button = event.target;
                button.innerText = '¡Copiado!';
                button.style.borderColor = 'var(--accent-green)';
                button.style.color = 'var(--accent-green)';
                setTimeout(() => {
                    button.innerText = 'Copiar';
                    button.style.borderColor = '#334155';
                    button.style.color = 'var(--text-body)';
                }, 2000);
            });
        }

function moveSlide(btn, direction) {
   
    const container = btn.closest('.carousel-container');
    const inner = container.querySelector('.carousel-inner');
    const totalSlides = container.querySelectorAll('.carousel-slide').length;
    
   
    let currentSlide = parseInt(container.getAttribute('data-slide')) || 0;
    

    currentSlide += direction;
    
   
    if (currentSlide < 0) { currentSlide = totalSlides - 1; }
    else if (currentSlide >= totalSlides) { currentSlide = 0; }
    
    container.setAttribute('data-slide', currentSlide);
    inner.style.transform = `translateX(-${currentSlide * 100}%)`;
}




