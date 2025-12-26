// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const threeApp = initThreeJS();
    initAnimations();
    initUI(threeApp);
    simulateLoader();
});

function simulateLoader() {
    const loader = document.querySelector('.loader');
    const progress = document.querySelector('.loader__progress');

    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 10;
        if (width > 100) width = 100;
        progress.style.width = width + '%';

        if (width === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
                // Trigger hero animations
                gsap.to('.reveal', {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out'
                });
                gsap.to('.reveal-text', {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.5
                });
            }, 500);
        }
    }, 100);
}

function initUI(threeApp) {
    // Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        menuOverlay.classList.toggle('active');

        if (menuOverlay.classList.contains('active')) {
            scrollIndicator.classList.add('hidden'); // Hide scroll indicator
            gsap.to(menuLinks, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.3
            });
        } else {
            if (window.scrollY <= 50) scrollIndicator.classList.remove('hidden'); // Show if at top
            gsap.to(menuLinks, {
                y: 20,
                opacity: 0,
                duration: 0.3
            });
        }
    });

    // Close menu on link click
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            menuOverlay.classList.remove('active');
            if (window.scrollY <= 50) scrollIndicator.classList.remove('hidden');

            gsap.to(menuLinks, {
                y: 20,
                opacity: 0,
                duration: 0.3
            });
        });
    });

    // Scroll Indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            scrollIndicator.classList.add('hidden');
        } else {
            scrollIndicator.classList.remove('hidden');
        }
    });

    // Theme Switcher
    const themeBtn = document.querySelector('.theme-btn');
    const body = document.body;

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        const isLight = body.classList.contains('light-theme');

        // Update Three.js colors
        if (threeApp) {
            threeApp.updateTheme(isLight);
        }
    });

    // Language Switcher
    const langBtns = document.querySelectorAll('.lang-btn');
    const translations = {
        en: {
            "scroll": "SCROLL TO EXPLORE",
            "menu.home": "HOME",
            "menu.work": "WORK",
            "menu.about": "ABOUT",
            "menu.contact": "CONTACT",
            "hero.title1": "DIGITAL",
            "hero.title2": "REALITY",
            "hero.subtitle": "Creating immersive web experiences through code and design.",
            "projects.title": "SELECTED WORKS",
            "project1.desc": "Interactive Soundscape",
            "project2.desc": "WebGL Experiment",
            "project3.desc": "Generative Art",
            "about.title": "THE VISION",
            "about.desc": "I build digital products that merge art, technology, and human interaction. Every pixel is calculated, every motion is intentional.",
            "about.cta": "START A PROJECT"
        },
        ru: {
            "scroll": "ЛИСТАЙТЕ ВНИЗ",
            "menu.home": "ГЛАВНАЯ",
            "menu.work": "ПОРТФОЛИО",
            "menu.about": "ОБО МНЕ",
            "menu.contact": "КОНТАКТЫ",
            "hero.title1": "ЦИФРОВАЯ",
            "hero.title2": "РЕАЛЬНОСТЬ",
            "hero.subtitle": "Создаю иммерсивный веб-опыт через код и дизайн.",
            "projects.title": "ИЗБРАННЫЕ РАБОТЫ",
            "project1.desc": "Интерактивный Звук",
            "project2.desc": "WebGL Эксперимент",
            "project3.desc": "Генеративное Искусство",
            "about.title": "ВИДЕНИЕ",
            "about.desc": "Я создаю цифровые продукты, объединяющие искусство, технологии и взаимодействие с человеком. Каждый пиксель рассчитан, каждое движение намеренно.",
            "about.cta": "НАЧАТЬ ПРОЕКТ"
        },
        ua: {
            "scroll": "ГОРТАЙТЕ ВНИЗ",
            "menu.home": "ГОЛОВНА",
            "menu.work": "ПОРТФОЛІО",
            "menu.about": "ПРО МЕНЕ",
            "menu.contact": "КОНТАКТИ",
            "hero.title1": "ЦИФРОВА",
            "hero.title2": "РЕАЛЬНІСТЬ",
            "hero.subtitle": "Створюю іммерсивний веб-досвід через код та дизайн.",
            "projects.title": "ВИБРАНІ РОБОТИ",
            "project1.desc": "Інтерактивний Звук",
            "project2.desc": "WebGL Експеримент",
            "project3.desc": "Генеративне Мистецтво",
            "about.title": "БАЧЕННЯ",
            "about.desc": "Я створюю цифрові продукти, що поєднують мистецтво, технології та взаємодію з людиною. Кожен піксель розрахований, кожен рух навмисний.",
            "about.cta": "ПОЧАТИ ПРОЕКТ"
        }
    };

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang, translations);
        });
    });
}

function updateLanguage(lang, translations) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            gsap.to(el, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                    el.textContent = translations[lang][key];
                    gsap.to(el, { opacity: 1, duration: 0.2 });
                }
            });
        }
    });
}

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Initial State
    gsap.set('.reveal', { y: 100, opacity: 0 });
    gsap.set('.reveal-text', { y: 20, opacity: 0 });

    // Projects Animation
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: i * 0.1
        });
    });

    // About Section Parallax
    gsap.from('.about__content', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            scrub: 1
        },
        y: 100,
        opacity: 0.5
    });
}

function initThreeJS() {
    const canvas = document.querySelector('#webgl-canvas');

    // Scene Setup
    const scene = new THREE.Scene();
    // Fog for depth
    const darkColor = 0x050505;
    const lightColor = 0xf0f0f0;

    scene.fog = new THREE.FogExp2(darkColor, 0.002);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    camera.position.y = 10;
    camera.rotation.x = -0.2;

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;

    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Material
    const material = new THREE.PointsMaterial({
        size: 0.15,
        color: 0x00f3ff,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    // Animation Loop
    const clock = new THREE.Clock();

    const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        // Wave effect
        const positions = particlesGeometry.attributes.position.array;

        for(let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            const x = positions[i3];

            positions[i3 + 1] = Math.sin(elapsedTime * 0.5 + x * 0.5) * 2
                              + Math.sin(elapsedTime * 0.3 + x * 0.5) * 2;
        }

        particlesGeometry.attributes.position.needsUpdate = true;

        // Mouse Parallax
        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
        particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

        particlesMesh.rotation.z = elapsedTime * 0.05;

        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
    };

    tick();

    // Resize handling
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Return interface for updates
    return {
        updateTheme: (isLight) => {
            if (isLight) {
                scene.fog.color.setHex(lightColor);
                material.color.setHex(0x00a8ff); // Darker blue for light theme
                material.blending = THREE.NormalBlending; // Better visibility on light
            } else {
                scene.fog.color.setHex(darkColor);
                material.color.setHex(0x00f3ff);
                material.blending = THREE.AdditiveBlending;
            }
        }
    };
}