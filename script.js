// Alternar entre modo claro e escuro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Lightbox para imagens
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img'); // Seleciona todas as imagens
    const lightbox = document.createElement('div'); // Cria o lightbox
    lightbox.classList.add('lightbox-overlay');
    document.body.appendChild(lightbox);

    const closeButton = document.createElement('button'); // Cria botão de fechar
    closeButton.innerText = '✖';
    closeButton.classList.add('close-btn');
    lightbox.appendChild(closeButton);

    const lightboxImage = document.createElement('img'); // Imagem no lightbox
    lightbox.appendChild(lightboxImage);

    // Fechar o lightbox
    closeButton.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Exibir imagem ao clicar
    images.forEach(image => {
        image.addEventListener('click', () => {
            lightboxImage.src = image.src; // Copia a imagem
            lightbox.classList.add('active'); // Exibe o lightbox
        });
    });

    // Fechar o lightbox ao clicar fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImage && e.target !== closeButton) {
            lightbox.classList.remove('active');
        }
    });
});
