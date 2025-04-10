/**
 * Portfolio d'Elijah Dabo - Script principal
 * Auteur: Elijah Dabo
 * Description: Gestion des interactions, animations et fonctionnalités du portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===================================
    // VARIABLES GLOBALES
    // ===================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggle = document.getElementById('theme-btn');
    const body = document.body;
    const cursorFollower = document.querySelector('.cursor-follower');
    const backToTopBtn = document.getElementById('back-to-top');
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // ===================================
    // GESTION DE LA NAVIGATION
    // ===================================
    
    // Affiche la section active par défaut (Accueil)
    sections[0].classList.add('active');
    
    // Gestion des liens de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Mise à jour des classes active pour les liens
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
            
            // Récupération de l'ID de la section cible
            const targetId = link.getAttribute('href');
            
            // Animation de transition
            sections.forEach(section => {
                if (section.classList.contains('active')) {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        section.classList.remove('active');
                        section.style.display = 'none';
                        
                        // Affichage de la nouvelle section
                        const targetSection = document.querySelector(targetId);
                        targetSection.style.display = 'block';
                        
                        setTimeout(() => {
                            targetSection.classList.add('active');
                            targetSection.style.opacity = '1';
                            targetSection.style.transform = 'translateY(0)';
                            
                            // Scroll en haut de la section
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        }, 50);
                    }, 300);
                }
            });
        });
    });
    
    // ===================================
    // GESTION DU THEME (CLAIR/SOMBRE)
    // ===================================
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        
        // Mise à jour de l'icône
        if (body.classList.contains('light-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        // Sauvegarde de la préférence
        localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
    });
    
    // Chargement de la préférence de thème
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // ===================================
    // EFFETS VISUELS
    // ===================================
    
    // Effet de curseur personnalisé
    document.addEventListener('mousemove', (e) => {
        if (cursorFollower) {
            cursorFollower.style.left = `${e.clientX}px`;
            cursorFollower.style.top = `${e.clientY}px`;
        }
    });
    
    // Effet hover sur les éléments interactifs
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .contact-card, .veille-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (cursorFollower) {
                cursorFollower.style.width = '50px';
                cursorFollower.style.height = '50px';
                cursorFollower.style.backgroundColor = 'rgba(26, 145, 255, 0.2)';
            }
        });
        
        element.addEventListener('mouseleave', () => {
            if (cursorFollower) {
                cursorFollower.style.width = '20px';
                cursorFollower.style.height = '20px';
                cursorFollower.style.backgroundColor = 'rgba(26, 145, 255, 0.5)';
            }
        });
    });
    
    // Gestion du bouton "Retour en haut"
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
        
        // Animation du header en scroll
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===================================
    // FILTRAGE DES PROJETS
    // ===================================
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Mise à jour des classes active pour les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Récupération du filtre
            const filter = button.getAttribute('data-filter');
            
            // Application du filtre
            projectCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // ===================================
    // MODAL DES PROJETS
    // ===================================
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Récupération des données du projet
            const title = card.querySelector('h3').textContent;
            const description = card.getAttribute('data-description') || 'Aucune description disponible.';
            const technologies = card.getAttribute('data-technologies') || 'Non spécifiées';
            const documents = card.getAttribute('data-documents') || '';
            
            // Mise à jour du contenu de la modal
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-description').textContent = description;
            document.getElementById('modal-technologies').textContent = technologies;
            
            // Gestion des tags
            const tagsContainer = document.getElementById('modal-tags');
            tagsContainer.innerHTML = '';
            
            const tags = card.querySelectorAll('.project-tag');
            tags.forEach(tag => {
                const newTag = document.createElement('span');
                newTag.className = 'project-tag';
                newTag.textContent = tag.textContent;
                tagsContainer.appendChild(newTag);
            });
            
            // Gestion des documents
            const documentsContainer = document.getElementById('modal-documents');
            documentsContainer.innerHTML = '';
            
            if (documents && documents.trim() !== '') {
                const documentsList = documents.split(',').map(doc => doc.trim());
                
                documentsList.forEach(doc => {
                    // Détermination de l'icône en fonction du type de document
                    let icon = '';
                    if (doc.includes('capture')) {
                        icon = '<i class="fas fa-image"></i>';
                    } else if (doc.includes('README')) {
                        icon = '<i class="fas fa-file-alt"></i>';
                    } else if (doc.includes('cahier des charges')) {
                        icon = '<i class="fas fa-clipboard-list"></i>';
                    } else if (doc.includes('planning')) {
                        icon = '<i class="fas fa-calendar-alt"></i>';
                    } else if (doc.includes('diagramme')) {
                        icon = '<i class="fas fa-project-diagram"></i>';
                    } else if (doc.includes('extrait de code')) {
                        icon = '<i class="fas fa-code"></i>';
                    } else if (doc.includes('schéma')) {
                        icon = '<i class="fas fa-sitemap"></i>';
                    } else if (doc.includes('charte graphique')) {
                        icon = '<i class="fas fa-paint-brush"></i>';
                    } else {
                        icon = '<i class="fas fa-file"></i>';
                    }
                    
                    // Création du lien
                    const docLink = document.createElement('a');
                    docLink.className = 'document-link';
                    docLink.href = '#'; // À remplacer par le lien réel
                    docLink.innerHTML = `${icon} ${doc}`;
                    documentsContainer.appendChild(docLink);
                });
            } else {
                documentsContainer.innerHTML = '<p>Aucun document associé.</p>';
            }
            
            // Affichage de la modal
            projectModal.classList.add('active');
        });
    });
    
    // Fermeture de la modal
    modalClose.addEventListener('click', () => {
        projectModal.classList.remove('active');
    });
    
    // Fermeture de la modal en cliquant en dehors
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
        }
    });
    
    // ===================================
    // TRI DES ARTICLES DE VEILLE
    // ===================================
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        const veilleGrid = document.querySelector('.veille-grid');
        const veilleCards = Array.from(document.querySelectorAll('.veille-card'));
        
        sortSelect.addEventListener('change', () => {
            const sortValue = sortSelect.value;
            let sortedCards = [];
            
            switch (sortValue) {
                case 'oldest':
                    sortedCards = veilleCards.sort((a, b) => {
                        const dateA = new Date(a.getAttribute('data-date'));
                        const dateB = new Date(b.getAttribute('data-date'));
                        return dateA - dateB;
                    });
                    break;
                    
                case 'newest':
                    sortedCards = veilleCards.sort((a, b) => {
                        const dateA = new Date(a.getAttribute('data-date'));
                        const dateB = new Date(b.getAttribute('data-date'));
                        return dateB - dateA;
                    });
                    break;
                    
                case 'year-2023':
                    sortedCards = veilleCards.filter(card => {
                        const date = new Date(card.getAttribute('data-date'));
                        return date.getFullYear() === 2023;
                    });
                    break;
                    
                case 'year-2024':
                    sortedCards = veilleCards.filter(card => {
                        const date = new Date(card.getAttribute('data-date'));
                        return date.getFullYear() === 2024;
                    });
                    break;
                    
                default:
                    sortedCards = veilleCards;
                    break;
            }
            
            // Mise à jour de l'affichage
            veilleGrid.innerHTML = '';
            sortedCards.forEach(card => {
                veilleGrid.appendChild(card);
            });
        });
    }
    
    // ===================================
    // ANIMATIONS AU SCROLL
    // ===================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Éléments à animer
    const animateElements = document.querySelectorAll(
        '.section-title, .competence-card, .mission-card, .tool-card, .veille-card, .project-card'
    );
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
    
    // Animation spéciale pour la timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });
});