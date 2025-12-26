const translations = {
    ru: {
        "hero.title.start": "Создаю",
        "hero.title.highlight": "цифровые продукты",
        "hero.subtitle": "Разработка сложных веб-приложений и высоконагруженных систем.",
        "hero.btn.contact": "Обсудить проект",
        "hero.btn.works": "Смотреть работы",
        "projects.title": "Избранные проекты",
        "project1.title": "Банковский дашборд",
        "project1.desc": "Система аналитики транзакций в реальном времени. Ускорила обработку данных на 40%.",
        "project2.title": "Маркетплейс электроники",
        "project2.desc": "Полная разработка: от базы данных до фронтенда. Интеграция с 1С и платежными шлюзами.",
        "project3.title": "AI Ассистент",
        "project3.desc": "Интерфейс для работы с нейросетями. Поддержка голосового ввода и истории чатов.",
        "common.details": "Подробнее",
        "footer.copyright": "Nevolko. Все права защищены.",
        "modal.title": "Обсудить проект",
        "modal.subtitle": "Заполните форму, и я свяжусь с вами в ближайшее время.",
        "form.name": "Ваше имя",
        "form.message": "Сообщение",
        "form.submit": "Отправить",
        "analytics.title": "Эффективность решений"
    },
    ua: {
        "hero.title.start": "Створюю",
        "hero.title.highlight": "цифрові продукти",
        "hero.subtitle": "Розробка складних веб-додатків та високонавантажених систем.",
        "hero.btn.contact": "Обговорити проект",
        "hero.btn.works": "Дивитися роботи",
        "projects.title": "Вибрані проекти",
        "project1.title": "Банківський дашборд",
        "project1.desc": "Система аналітики транзакцій у реальному часі. Прискорила обробку даних на 40%.",
        "project2.title": "Маркетплейс електроніки",
        "project2.desc": "Повна розробка: від бази даних до фронтенду. Інтеграція з 1С та платіжними шлюзами.",
        "project3.title": "AI Асистент",
        "project3.desc": "Інтерфейс для роботи з нейромережами. Підтримка голосового введення та історії чатів.",
        "common.details": "Детальніше",
        "footer.copyright": "Nevolko. Всі права захищені.",
        "modal.title": "Обговорити проект",
        "modal.subtitle": "Заповніть форму, і я зв'яжуся з вами найближчим часом.",
        "form.name": "Ваше ім'я",
        "form.message": "Повідомлення",
        "form.submit": "Надіслати",
        "analytics.title": "Ефективність рішень"
    },
    en: {
        "hero.title.start": "Building",
        "hero.title.highlight": "digital products",
        "hero.subtitle": "Development of complex web applications and high-load systems.",
        "hero.btn.contact": "Discuss Project",
        "hero.btn.works": "View Work",
        "projects.title": "Selected Projects",
        "project1.title": "FinTech Dashboard",
        "project1.desc": "Real-time transaction analytics system. Accelerated data processing by 40%.",
        "project2.title": "Electronics Marketplace",
        "project2.desc": "Full-cycle development: from database to frontend. Integration with payment gateways.",
        "project3.title": "AI Assistant",
        "project3.desc": "Interface for working with neural networks. Voice input support and chat history.",
        "common.details": "Details",
        "footer.copyright": "Nevolko. All rights reserved.",
        "modal.title": "Discuss Project",
        "modal.subtitle": "Fill out the form and I will contact you shortly.",
        "form.name": "Your Name",
        "form.message": "Message",
        "form.submit": "Send",
        "analytics.title": "Solution Efficiency"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher
    const langBtns = document.querySelectorAll('.lang-btn');

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });

        // Update active button state
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // --- Chart.js Implementation ---
    const ctx = document.getElementById('performanceChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Optimization Impact (%)',
                    data: [12, 19, 35, 45, 60, 85],
                    borderColor: '#38bdf8',
                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Load Time (ms)',
                    data: [800, 750, 600, 450, 300, 150],
                    borderColor: '#a855f7',
                    backgroundColor: 'rgba(168, 85, 247, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: { color: '#fff' }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: { color: '#aaa' }
                    },
                    x: {
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: { color: '#aaa' }
                    }
                }
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
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

            btn.innerText = '...'; // Simple loading state
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                btn.innerText = 'OK!';
                btn.style.background = '#10b981'; // Green color

                setTimeout(() => {
                    closeModal();
                    contactForm.reset();
                    // Restore original text based on current language
                    const currentLang = document.querySelector('.lang-btn.active').getAttribute('data-lang');
                    btn.innerText = translations[currentLang]['form.submit'];
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
                alert('Demo link / Демо ссылка');
            }
        });
    });
});