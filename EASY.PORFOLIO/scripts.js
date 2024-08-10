document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-theme');
    const body = document.body;
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    // Alterna entre modo escuro e claro
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        toggleButton.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
    });

    // Atualiza data e hora
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        document.getElementById('current-datetime').textContent = now.toLocaleDateString('pt-BR', options);
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Animação ao rolar a página
    function handleScrollAnimations() {
        elementsToAnimate.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            if (elementTop < viewportHeight * 0.75) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    // Adiciona a animação inicial
    handleScrollAnimations();
    window.addEventListener('scroll', handleScrollAnimations);

    // Efeito de aumento ao passar o mouse sobre as cartas de recurso
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // Valida formulário de contato
    const contactForm = document.querySelector('form[action^="mailto"]');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Obrigado por entrar em contato! Sua mensagem foi enviada.');
            contactForm.reset();
        });
    }

    // Valida formulário de feedback
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Obrigado pelo seu feedback!');
            feedbackForm.reset();
        });
    }

    // Função para criar efeitos de texto animado
    function animateText() {
        const texts = document.querySelectorAll('.animated-text');
        texts.forEach(text => {
            const textContent = text.textContent;
            const animatedHTML = textContent.split('').map(char => `<span class="char">${char}</span>`).join('');
            text.innerHTML = animatedHTML;
        });

        const chars = document.querySelectorAll('.char');
        let charIndex = 0;
        function animateChars() {
            chars.forEach((char, index) => {
                if (index === charIndex) {
                    char.classList.add('fade-in');
                } else {
                    char.classList.remove('fade-in');
                }
            });

            charIndex = (charIndex + 1) % chars.length;
            setTimeout(animateChars, 100);
        }

        animateChars();
    }

    // Inicializa animação de texto
    animateText();
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggle-theme');
    const currentDatetime = document.getElementById('current-datetime');
    
    // Função para atualizar a data e hora
    function updateDatetime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        currentDatetime.textContent = now.toLocaleDateString('pt-BR', options);
    }
    
    // Atualizar data e hora a cada segundo
    setInterval(updateDatetime, 1000);

    // Função para alternar o modo escuro
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    // Adiciona o evento de clique ao botão de alternância
    toggleThemeButton.addEventListener('click', toggleDarkMode);
});


























