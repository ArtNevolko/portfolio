document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mortgage Calculator ---
    const priceInput = document.getElementById('prop-price');
    const downPaymentInput = document.getElementById('down-payment');
    const downPaymentRange = document.getElementById('down-payment-range');
    const termInput = document.getElementById('loan-term');
    const rateInput = document.getElementById('interest-rate');
    
    const monthlyPaymentDisplay = document.getElementById('monthly-payment');
    const loanAmountDisplay = document.getElementById('loan-amount');
    const downPaymentAmountDisplay = document.getElementById('down-payment-amount');

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
        
        btn.innerText = 'Отправка...';
        
        setTimeout(() => {
            alert('Спасибо! Мы подобрали для вас 3 объекта. Менеджер свяжется с вами в ближайшее время.');
            btn.innerText = originalText;
            quizForm.reset();
            currentStep = 1;
            updateStep(1);
        }, 1500);
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
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });
});
