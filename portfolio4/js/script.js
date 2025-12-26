document.addEventListener('DOMContentLoaded', () => {

    // --- Translations ---
    const translations = {
        ru: {
            nav_properties: "Объекты",
            nav_mortgage: "Ипотека",
            nav_quiz: "Подбор",
            nav_contact: "Связаться",
            hero_title: "Инвестиции в будущее",
            hero_subtitle: "Премиальная недвижимость в Дубае с доходностью от 8% годовых",
            hero_btn_quiz: "Подобрать объект",
            hero_btn_catalog: "Смотреть каталог",
            stat_tax: "Налог на доходы",
            stat_ownership: "Право собственности",
            stat_visa: "Visa для инвесторов",
            stat_roi: "Средняя доходность",
            prop_title: "Избранные проекты",
            price_from_450: "от $450,000",
            price_from_890: "от $890,000",
            price_from_320: "от $320,000",
            bed_1: "1 спальня",
            bed_2: "2 спальни",
            bed_3: "3 спальни",
            btn_details: "Подробнее",
            calc_title: "Ипотечный калькулятор",
            calc_desc: "Рассчитайте примерный ежемесячный платеж для вашей инвестиции.",
            calc_price: "Стоимость недвижимости ($)",
            calc_down_payment: "Первоначальный взнос (%)",
            calc_term: "Срок (лет)",
            calc_rate: "Процентная ставка (%)",
            calc_monthly: "Ежемесячный платеж",
            calc_loan_amount: "Сумма кредита:",
            calc_down_amount: "Первоначальный взнос:",
            calc_btn_approve: "Получить одобрение",
            quiz_title: "Подберите идеальный объект",
            quiz_step1_title: "Какова цель покупки?",
            quiz_goal_invest: "Инвестиции (сдача)",
            quiz_goal_living: "Для жизни",
            quiz_goal_resale: "Перепродажа",
            btn_next: "Далее",
            quiz_step2_title: "Какой бюджет вы рассматриваете?",
            quiz_budget_low: "до $300k",
            quiz_budget_mid: "$300k - $700k",
            quiz_budget_high: "от $700k",
            btn_prev: "Назад",
            quiz_step3_title: "Оставьте контакты для получения подборки",
            ph_name: "Ваше имя",
            ph_phone: "Телефон / WhatsApp",
            btn_submit: "Получить подборку",
            footer_privacy: "Политика конфиденциальности",
            footer_terms: "Условия использования",
            footer_copy: "© 2025 Dubai Estate. All rights reserved."
        },
        en: {
            nav_properties: "Properties",
            nav_mortgage: "Mortgage",
            nav_quiz: "Selection",
            nav_contact: "Contact",
            hero_title: "Invest in Future",
            hero_subtitle: "Premium real estate in Dubai with 8% annual ROI",
            hero_btn_quiz: "Find Property",
            hero_btn_catalog: "View Catalog",
            stat_tax: "Income Tax",
            stat_ownership: "Ownership",
            stat_visa: "Investor Visa",
            stat_roi: "Average ROI",
            prop_title: "Featured Projects",
            price_from_450: "from $450,000",
            price_from_890: "from $890,000",
            price_from_320: "from $320,000",
            bed_1: "1 Bedroom",
            bed_2: "2 Bedrooms",
            bed_3: "3 Bedrooms",
            btn_details: "Details",
            calc_title: "Mortgage Calculator",
            calc_desc: "Calculate estimated monthly payment for your investment.",
            calc_price: "Property Price ($)",
            calc_down_payment: "Down Payment (%)",
            calc_term: "Term (Years)",
            calc_rate: "Interest Rate (%)",
            calc_monthly: "Monthly Payment",
            calc_loan_amount: "Loan Amount:",
            calc_down_amount: "Down Payment:",
            calc_btn_approve: "Get Pre-Approval",
            quiz_title: "Find Your Ideal Property",
            quiz_step1_title: "What is your goal?",
            quiz_goal_invest: "Investment (Rental)",
            quiz_goal_living: "Living",
            quiz_goal_resale: "Resale",
            btn_next: "Next",
            quiz_step2_title: "What is your budget?",
            quiz_budget_low: "up to $300k",
            quiz_budget_mid: "$300k - $700k",
            quiz_budget_high: "from $700k",
            btn_prev: "Back",
            quiz_step3_title: "Leave contacts to get selection",
            ph_name: "Your Name",
            ph_phone: "Phone / WhatsApp",
            btn_submit: "Get Selection",
            footer_privacy: "Privacy Policy",
            footer_terms: "Terms of Use",
            footer_copy: "© 2025 Dubai Estate. All rights reserved."
        },
        ua: {
            nav_properties: "Об'єкти",
            nav_mortgage: "Іпотека",
            nav_quiz: "Підбір",
            nav_contact: "Зв'язатися",
            hero_title: "Інвестиції в майбутнє",
            hero_subtitle: "Преміальна нерухомість в Дубаї з прибутковістю від 8% річних",
            hero_btn_quiz: "Підібрати об'єкт",
            hero_btn_catalog: "Дивитись каталог",
            stat_tax: "Податок на доходи",
            stat_ownership: "Право власності",
            stat_visa: "Visa для інвесторів",
            stat_roi: "Середня прибутковість",
            prop_title: "Обрані проекти",
            price_from_450: "від $450,000",
            price_from_890: "від $890,000",
            price_from_320: "від $320,000",
            bed_1: "1 спальня",
            bed_2: "2 спальні",
            bed_3: "3 спальні",
            btn_details: "Детальніше",
            calc_title: "Іпотечний калькулятор",
            calc_desc: "Розрахуйте приблизний щомісячний платіж для вашої інвестиції.",
            calc_price: "Вартість нерухомості ($)",
            calc_down_payment: "Початковий внесок (%)",
            calc_term: "Термін (років)",
            calc_rate: "Відсоткова ставка (%)",
            calc_monthly: "Щомісячний платіж",
            calc_loan_amount: "Сума кредиту:",
            calc_down_amount: "Початковий внесок:",
            calc_btn_approve: "Отримати схвалення",
            quiz_title: "Підберіть ідеальний об'єкт",
            quiz_step1_title: "Яка мета покупки?",
            quiz_goal_invest: "Інвестиції (здача)",
            quiz_goal_living: "Для життя",
            quiz_goal_resale: "Перепродаж",
            btn_next: "Далі",
            quiz_step2_title: "Який бюджет ви розглядаєте?",
            quiz_budget_low: "до $300k",
            quiz_budget_mid: "$300k - $700k",
            quiz_budget_high: "від $700k",
            btn_prev: "Назад",
            quiz_step3_title: "Залиште контакти для отримання підбірки",
            ph_name: "Ваше ім'я",
            ph_phone: "Телефон / WhatsApp",
            btn_submit: "Отримати підбірку",
            footer_privacy: "Політика конфіденційності",
            footer_terms: "Умови використання",
            footer_copy: "© 2025 Dubai Estate. Всі права захищені."
        }
    };

    const langBtns = document.querySelectorAll('.lang-btn');
    let currentLang = 'ru';

    function setLanguage(lang) {
        currentLang = lang;

        // Update Buttons
        langBtns.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) {
                if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
                    if (el.classList.contains('btn-text')) {
                        el.innerHTML = `${translations[lang][key]} <i class="fas fa-arrow-right"></i>`;
                    } else {
                        el.textContent = translations[lang][key];
                    }
                }
            }
        });

        // Update Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });


    // --- Mortgage Calculator ---
    const priceInput = document.getElementById('prop-price');
    const downPaymentInput = document.getElementById('down-payment');
    const downPaymentRange = document.getElementById('down-payment-range');
    const termInput = document.getElementById('loan-term');
    const rateInput = document.getElementById('interest-rate');

    const monthlyPaymentDisplay = document.getElementById('monthly-payment');
    const loanAmountDisplay = document.getElementById('loan-amount');
    const downPaymentAmountDisplay = document.getElementById('down-payment-amount');
    const btnGetApproval = document.getElementById('btn-get-approval');

    function calculateMortgage() {
        const price = parseFloat(priceInput.value);
        const downPaymentPercent = parseFloat(downPaymentInput.value);
        const termYears = parseFloat(termInput.value);
        const annualRate = parseFloat(rateInput.value);

        // Sync range and number input
        downPaymentRange.value = downPaymentPercent;

        const downPaymentAmount = price * (downPaymentPercent / 100);
        const loanAmount = price - downPaymentAmount;

        const monthlyRate = annualRate / 100 / 12;
        const numberOfPayments = termYears * 12;

        let monthlyPayment = 0;

        if (annualRate === 0) {
            monthlyPayment = loanAmount / numberOfPayments;
        } else {
            monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        }

        // Update UI
        monthlyPaymentDisplay.textContent = Math.round(monthlyPayment).toLocaleString();
        loanAmountDisplay.textContent = Math.round(loanAmount).toLocaleString();
        downPaymentAmountDisplay.textContent = Math.round(downPaymentAmount).toLocaleString();
    }

    // Event Listeners for Calculator
    [priceInput, downPaymentInput, termInput, rateInput].forEach(input => {
        input.addEventListener('input', calculateMortgage);
    });

    downPaymentRange.addEventListener('input', (e) => {
        downPaymentInput.value = e.target.value;
        calculateMortgage();
    });

    // Initial Calculation
    calculateMortgage();

    // Calculator CTA
    if (btnGetApproval) {
        btnGetApproval.addEventListener('click', () => {
            document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
        });
    }


    // --- Quiz Logic ---
    const quizForm = document.getElementById('quiz-form');
    const steps = document.querySelectorAll('.quiz-step');
    const nextBtns = document.querySelectorAll('.next-step');
    const prevBtns = document.querySelectorAll('.prev-step');
    const progressBar = document.getElementById('quiz-progress');
    let currentStep = 1;

    function updateStep(step) {
        // Hide all steps
        steps.forEach(s => {
            s.classList.remove('active');
        });

        // Show current step
        const currentStepEl = document.querySelector(`.quiz-step[data-step="${step}"]`);
        if (currentStepEl) {
            currentStepEl.classList.add('active');
        }

        // Update progress bar
        const progress = (step / steps.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep < steps.length) {
                currentStep++;
                updateStep(currentStep);
            }
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateStep(currentStep);
            }
        });
    });

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = quizForm.querySelector('button[type="submit"]');
        const originalText = btn.innerText;

        let sendingText = 'Sending...';
        if (currentLang === 'ru') sendingText = 'Отправка...';
        if (currentLang === 'ua') sendingText = 'Відправка...';

        btn.innerText = sendingText;
        
        setTimeout(() => {
            let alertText = 'Thank you! We have selected 3 properties for you. A manager will contact you shortly.';
            if (currentLang === 'ru') alertText = 'Спасибо! Мы подобрали для вас 3 объекта. Менеджер свяжется с вами в ближайшее время.';
            if (currentLang === 'ua') alertText = 'Дякуємо! Ми підібрали для вас 3 об\'єкти. Менеджер зв\'яжеться з вами найближчим часом.';

            alert(alertText);
    });


    // --- Mobile Menu ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Close mobile menu if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });
});
