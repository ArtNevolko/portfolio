document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const links = document.querySelectorAll('a, button');

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            gsap.set(follower, {
                css: {
                    left: posX,
                    top: posY
                }
            });

            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    });

    // Floating Image on Hover
    const workItems = document.querySelectorAll('.work-item');
    const projectImage = document.querySelector('.project-image');
    const projectImageContainer = document.querySelector('.project-image-container');

    workItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const imageUrl = item.getAttribute('data-image');
            projectImage.style.backgroundImage = `url(${imageUrl})`;
            gsap.to(projectImage, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(projectImage, {
                opacity: 0,
                scale: 0.8,
                duration: 0.4,
                ease: "power2.out"
            });
        });

        item.addEventListener('mousemove', (e) => {
            // Calculate position relative to the viewport
            // We want the image to follow the cursor but with some offset/lag or just centered on cursor
            // Let's make it follow the cursor

            const x = e.clientX;
            const y = e.clientY;

            // Center the image on the cursor
            const imageWidth = 400;
            const imageHeight = 500;

            gsap.to(projectImage, {
                left: x - imageWidth / 2,
                top: y - imageHeight / 2,
                duration: 0.6, // More lag for smoother feel
                ease: "power3.out"
            });
        });
    });

    // Language Switcher
    const langBtns = document.querySelectorAll('.lang-btn');
    const translations = {
        ru: {
            "hero.line1": "Digital",
            "hero.line2": "Experience",
            "hero.line3": "Designer",
            "hero.desc": "Создаю уникальные цифровые впечатления на стыке дизайна и технологий.",
            "common.scroll": "Скролл",
            "work.label": "Избранные работы",
            "cat.ecommerce": "E-commerce",
            "cat.architecture": "Архитектура",
            "cat.web3": "Web3 / NFT",
            "cat.tech": "Технологии",
            "footer.title": "Давайте работать вместе"
        },
        ua: {
            "hero.line1": "Digital",
            "hero.line2": "Experience",
            "hero.line3": "Designer",
            "hero.desc": "Створюю унікальні цифрові враження на стику дизайну та технологій.",
            "common.scroll": "Скрол",
            "work.label": "Вибрані роботи",
            "cat.ecommerce": "E-commerce",
            "cat.architecture": "Архітектура",
            "cat.web3": "Web3 / NFT",
            "cat.tech": "Технології",
            "footer.title": "Давайте працювати разом"
        },
        en: {
            "hero.line1": "Digital",
            "hero.line2": "Experience",
            "hero.line3": "Designer",
            "hero.desc": "Creating unique digital experiences at the intersection of design and technology.",
            "common.scroll": "Scroll",
            "work.label": "Selected Work",
            "cat.ecommerce": "E-commerce",
            "cat.architecture": "Architecture",
            "cat.web3": "Web3 / NFT",
            "cat.tech": "Technology",
            "footer.title": "Let's work together"
        }
    };

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            langBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // Fade out, change text, fade in
                gsap.to(el, {
                    opacity: 0,
                    duration: 0.2,
                    onComplete: () => {
                        el.textContent = translations[lang][key];
                        gsap.to(el, {
                            opacity: 1,
                            duration: 0.2
                        });
                    }
                });
            }
        });
    }
});