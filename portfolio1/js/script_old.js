document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple reveal animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.6s ease, transform 0.6s ease ${index * 0.1}s`; // Staggered delay
        observer.observe(card);
    });

    // Modal Functionality
    const modal = document.getElementById('contact-modal');
    const openModalBtn = document.querySelector('a[href="#contact"]');
    const closeModalBtn = document.querySelector('.modal__close');
    const contactForm = document.getElementById('contact-form');

    if (openModalBtn && modal) {
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Form Submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            btn.innerText = 'Отправка...';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                btn.innerText = 'Отправлено!';
                btn.style.background = '#10b981'; // Green color

                setTimeout(() => {
                    closeModal();
                    contactForm.reset();
                    btn.innerText = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }

    // Handle Demo/Code links
    document.querySelectorAll('.project-card__btn, .project-card__link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                alert('Это демо-ссылка. В реальном проекте здесь будет переход на сайт или репозиторий.');
            }
        });
    });
});