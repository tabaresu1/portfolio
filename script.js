document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos do carrossel específico do lightbox da Anhanguera
    const carouselAnhanguera = document.querySelector('#lightbox-anhanguera .meu-carrossel');
    
    // Só executa se o carrossel da Anhanguera existir na página
    if (carouselAnhanguera) {
        const slides = carouselAnhanguera.querySelectorAll('.slide');
        const prevButton = document.querySelector('#lightbox-anhanguera .carousel-prev');
        const nextButton = document.querySelector('#lightbox-anhanguera .carousel-next');
        let currentSlide = 0;

        function showSlide(index) {
            // Esconde todos os slides
            slides.forEach(slide => {
                slide.classList.remove('active');
                // Se não usar a classe 'active' para display, faria: slide.style.display = 'none';
            });
            // Mostra o slide desejado
            slides[index].classList.add('active');
            // Se não usar a classe 'active' para display, faria: slides[index].style.display = 'block';
        }

        function nextSlide() {
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0; // Volta para o primeiro (loop)
            }
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = slides.length - 1; // Vai para o último (loop)
            }
            showSlide(currentSlide);
        }

        // Event listeners para os botões
        if (nextButton) {
            nextButton.addEventListener('click', nextSlide);
        }
        if (prevButton) {
            prevButton.addEventListener('click', prevSlide);
        }

        // Mostrar o primeiro slide inicialmente
        if (slides.length > 0) {
            showSlide(currentSlide);
        }
    }

    // NOVO: Carrossel Black Pentagram
    const carouselBP = document.querySelector('#lightbox-blackpentagram .meu-carrossel-bp'); // Usando a nova classe
    if (carouselBP) {
        const slidesBP = carouselBP.querySelectorAll('.slide');
        const prevButtonBP = document.querySelector('#lightbox-blackpentagram .carousel-prev-bp'); // Usando a nova classe
        const nextButtonBP = document.querySelector('#lightbox-blackpentagram .carousel-next-bp'); // Usando a nova classe
        let currentSlideBP = 0;

        function showSlideBP(index) {
            slidesBP.forEach(slide => slide.classList.remove('active'));
            slidesBP[index].classList.add('active');
        }

        function nextSlideBP() {
            currentSlideBP++;
            if (currentSlideBP >= slidesBP.length) {
                currentSlideBP = 0;
            }
            showSlideBP(currentSlideBP);
        }

        function prevSlideBP() {
            currentSlideBP--;
            if (currentSlideBP < 0) {
                currentSlideBP = slidesBP.length - 1;
            }
            showSlideBP(currentSlideBP);
        }

        if (nextButtonBP) {
            nextButtonBP.addEventListener('click', nextSlideBP);
        }
        if (prevButtonBP) {
            prevButtonBP.addEventListener('click', prevSlideBP);
        }

        if (slidesBP.length > 0) {
            showSlideBP(currentSlideBP);
        }
    }

    // NOVO: Carrossel Nocturna
    const carouselNC = document.querySelector('#lightbox-nocturna .meu-carrossel-nc'); // Usando a nova classe
    if (carouselNC) {
        const slidesNC = carouselNC.querySelectorAll('.slide');
        const prevButtonNC = document.querySelector('#lightbox-nocturna .carousel-prev-nc'); // Usando a nova classe
        const nextButtonNC = document.querySelector('#lightbox-nocturna .carousel-next-nc'); // Usando a nova classe
        let currentSlideNC = 0;

        function showSlideNC(index) {
            slidesNC.forEach(slide => slide.classList.remove('active'));
            slidesNC[index].classList.add('active');
        }

        function nextSlideNC() {
            currentSlideNC++;
            if (currentSlideNC >= slidesNC.length) {
                currentSlideNC = 0;
            }
            showSlideNC(currentSlideNC);
        }

        function prevSlideNC() {
            currentSlideNC--;
            if (currentSlideNC < 0) {
                currentSlideNC = slidesNC.length - 1;
            }
            showSlideNC(currentSlideNC);
        }

        if (nextButtonNC) {
            nextButtonNC.addEventListener('click', nextSlideNC);
        }
        if (prevButtonNC) {
            prevButtonNC.addEventListener('click', prevSlideNC);
        }

        if (slidesNC.length > 0) {
            showSlideNC(currentSlideNC);
        }
    }
});