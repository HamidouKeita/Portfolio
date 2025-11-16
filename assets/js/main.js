/**
 * main.js
 * Fichier JavaScript principal pour le portfolio
 * Gère : thème clair/sombre, menu hamburger, smooth scroll, validation formulaire
 */

// ========================================
// Gestion du thème clair/sombre
// ========================================
(function() {
    'use strict';

    // Fonction pour obtenir le thème actuel
    function getTheme() {
        return localStorage.getItem('theme') || 'light';
    }

    // Fonction pour définir le thème
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    }

    // Fonction pour mettre à jour l'icône du thème
    function updateThemeIcon(theme) {
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    // Initialisation du thème au chargement
    const currentTheme = getTheme();
    setTheme(currentTheme);

    // Écouteur pour le bouton de basculement de thème
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = getTheme();
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
})();

// ========================================
// Menu hamburger pour mobile
// ========================================
(function() {
    'use strict';

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle du menu mobile
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            });
        });

        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            }
        });
    }
})();

// ========================================
// Smooth scroll pour les ancres
// ========================================
(function() {
    'use strict';

    // Sélectionner tous les liens d'ancrage
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorer les liens vides ou juste "#"
            if (href === '#' || href === '') {
                return;
            }

            // Ignorer les liens vers des sections inexistantes
            const target = document.querySelector(href);
            if (!target) {
                return;
            }

            e.preventDefault();

            // Calculer la position avec offset pour la navbar fixe
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - navbarHeight;

            // Scroll smooth
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
})();

// ========================================
// Animation au scroll (fade-in)
// ========================================
(function() {
    'use strict';

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .experience-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
})();

// ========================================
// Validation et soumission du formulaire
// ========================================
(function() {
    'use strict';

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Récupérer les valeurs du formulaire
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validation côté client
            let isValid = true;
            let errorMessage = '';

            // Validation du nom
            if (name === '') {
                isValid = false;
                errorMessage = 'Le nom est obligatoire.';
            }

            // Validation de l'email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                isValid = false;
                errorMessage = 'L\'email est obligatoire.';
            } else if (!emailRegex.test(email)) {
                isValid = false;
                errorMessage = 'Veuillez entrer une adresse email valide.';
            }

            // Validation du message
            if (message === '') {
                isValid = false;
                errorMessage = 'Le message est obligatoire.';
            } else if (message.length < 10) {
                isValid = false;
                errorMessage = 'Le message doit contenir au moins 10 caractères.';
            }

            // Afficher les erreurs ou soumettre
            if (!isValid) {
                showFormMessage(errorMessage, 'error');
                return;
            }

            // Vérifier si Formspree est configuré
            const formAction = contactForm.getAttribute('action');
            if (formAction && formAction.includes('YOUR_FORM_ID')) {
                // Si Formspree n'est pas configuré, utiliser mailto comme fallback
                const subject = encodeURIComponent(`Contact depuis le portfolio - ${name}`);
                const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                const mailtoLink = `mailto:contact@example.com?subject=${subject}&body=${body}`;
                
                // Afficher un message et copier les données
                showFormMessage('Redirection vers votre client email...', 'success');
                
                // Ouvrir le client email
                setTimeout(() => {
                    window.location.href = mailtoLink;
                }, 500);

                // Copier les informations dans le presse-papiers (optionnel)
                if (navigator.clipboard) {
                    const textToCopy = `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        console.log('Informations copiées dans le presse-papiers');
                    });
                }

                // Réinitialiser le formulaire
                contactForm.reset();
            } else {
                // Soumission via Formspree
                const formData = new FormData(contactForm);

                // Afficher un message de chargement
                showFormMessage('Envoi en cours...', 'success');

                fetch(formAction, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        showFormMessage('Message envoyé avec succès ! Je vous répondrai bientôt.', 'success');
                        contactForm.reset();
                    } else {
                        throw new Error('Erreur lors de l\'envoi');
                    }
                })
                .catch(error => {
                    showFormMessage('Une erreur est survenue. Veuillez réessayer plus tard.', 'error');
                    console.error('Erreur:', error);
                });
            }
        });
    }

    // Fonction pour afficher un message dans le formulaire
    function showFormMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';

            // Masquer le message après 5 secondes
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
})();

// ========================================
// Navigation active au scroll
// ========================================
(function() {
    'use strict';

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
})();

// ========================================
// Affichage de la navbar au scroll
// ========================================
(function() {
    'use strict';

    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            // Scrolling down
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            // Scrolling up
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }

        lastScroll = currentScroll;
    });
})();

// ========================================
// Gestion des images manquantes
// ========================================
(function() {
    'use strict';

    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Remplacer par une image placeholder si l'image ne charge pas
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23e9ecef"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="18" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EImage non disponible%3C/text%3E%3C/svg%3E';
            this.alt = 'Image non disponible';
        });
    });
})();

// ========================================
// Initialisation au chargement
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio chargé avec succès !');
    
    // Ajouter une classe au body pour les animations
    document.body.classList.add('loaded');
});

