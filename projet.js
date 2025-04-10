document.addEventListener('DOMContentLoaded', () => {
    // Gestion de la navigation entre les sections (code existant)
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));

            sections.forEach(section => {
                if (section.classList.contains('active')) {
                    section.classList.remove('active');
                    section.style.animation = 'fadeOutDown 0.5s forwards';
                    setTimeout(() => {
                        section.style.display = 'none';
                    }, 500);
                }
            });

            setTimeout(() => {
                target.style.display = 'block';
                target.classList.add('active');
                target.style.animation = 'fadeInUp 0.5s forwards';
            }, 500);
        });
    });

    // Affiche par défaut la section Accueil (code existant)
    const homeSection = document.querySelector('#home');
    if (homeSection) {
        homeSection.style.display = 'block';
        homeSection.classList.add('active');
        homeSection.style.animation = 'fadeInUp 0.5s forwards';
    }

    // Gestion des filtres dans la section "Mes Réalisations" (code existant)
    const filterButtons = document.querySelectorAll('.filters button');
    const projects = document.querySelectorAll('.projects-list .project');

    document.addEventListener('DOMContentLoaded', () => {
        // Gestion des sections (navigation)
        const links = document.querySelectorAll('nav ul li a');
        const sections = document.querySelectorAll('section');
    
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
    
                sections.forEach(section => {
                    if (section.classList.contains('active')) {
                        section.classList.remove('active');
                        section.style.display = 'none';
                    }
                });
    
                if (target) {
                    target.style.display = 'block';
                    target.classList.add('active');
                }
            });
        });
    
        // Par défaut, affiche la section "Accueil"
        const homeSection = document.querySelector('#home');
        if (homeSection) {
            homeSection.style.display = 'block';
            homeSection.classList.add('active');
        }
    
        // Gestion des filtres pour les projets
        const filterButtons = document.querySelectorAll('.filters button');
        const projects = document.querySelectorAll('.projects-list .project');
    
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
    
                const filter = button.getAttribute('data-filter');
    
                projects.forEach(project => {
                    if (filter === 'all' || project.classList.contains(filter)) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                });
            });
        });
    
        // Active le filtre "Toutes" par défaut
        const defaultFilter = document.querySelector('.filters button.active');
        if (defaultFilter) {
            defaultFilter.click();
        }
    
        // Gestion des pop-ups pour les projets
        const popup = document.getElementById('popup');
        const popupTitle = document.getElementById('popup-title');
        const popupDescription = document.getElementById('popup-description');
        const popupDetails = document.getElementById('popup-details');
        const popupClose = document.querySelector('.popup-close');
    
        projects.forEach(project => {
            project.addEventListener('click', () => {
                // Récupérer les données du projet
                const title = project.dataset.title || 'Sans titre';
                const description = project.dataset.description || 'Aucune description disponible.';
                const date = project.dataset.date || 'Non spécifiée';
                const duration = project.dataset.duration || 'Non spécifiée';
                const participants = project.dataset.participants || 'Non spécifié';
                const rating = project.dataset.rating || 'Non noté';
                const tools = (project.dataset.tools || '').split(',').map(tool => tool.trim());
                const documents = (project.dataset.documents || '').split(',').map(doc => doc.trim());
                const takeaways = project.dataset.takeaways || 'Non spécifié';
    
                // Construire le contenu des outils et des documents
                const toolsHTML = tools.map(tool => `<span class="tool-box">${tool}</span>`).join(' ');
                const documentsHTML = documents.map(doc => `<a href="#" class="document-link">${doc}</a>`).join('<br>');
    
                // Remplir les détails de la pop-up
                popupTitle.textContent = title;
                popupDescription.textContent = description;
                popupDetails.innerHTML = `
                    <p><strong>📅 Date :</strong> ${date}</p>
                    <p><strong>⏳ Durée :</strong> ${duration}</p>
                    <p><strong>👥 Participants :</strong> ${participants}</p>
                    <p><strong>⭐ Note :</strong> ${rating}/10</p>
                    <p><strong>🛠️ Outils utilisés :</strong> ${toolsHTML}</p>
                    <p><strong>📄 Documents associés :</strong><br>${documentsHTML}</p>
                    <p><strong>💡 Ce que je retiens :</strong> ${takeaways}</p>
                `;
    
                // Afficher la pop-up
                popup.classList.remove('hidden');
            });
        });
    
        // Gestion de la fermeture de la pop-up
        popupClose.addEventListener('click', () => {
            popup.classList.add('hidden');
        });
    
        // Tri des articles dans la section "Veille Technologique"
        const sortSelect = document.getElementById('sort-select');
        const articlesContainer = document.querySelector('.articles');
        if (articlesContainer) {
            const articles = Array.from(articlesContainer.children);
    
            sortSelect?.addEventListener('change', (event) => {
                const sortType = event.target.value;
                let sortedArticles;
    
                switch (sortType) {
                    case 'oldest':
                        sortedArticles = articles.sort((a, b) => {
                            return new Date(a.querySelector('.article-date').dataset.date) - new Date(b.querySelector('.article-date').dataset.date);
                        });
                        break;
    
                    case 'newest':
                        sortedArticles = articles.sort((a, b) => {
                            return new Date(b.querySelector('.article-date').dataset.date) - new Date(a.querySelector('.article-date').dataset.date);
                        });
                        break;
    
                    case 'year-2023':
                        sortedArticles = articles.filter(article => {
                            return new Date(article.querySelector('.article-date').dataset.date).getFullYear() === 2023;
                        });
                        break;
    
                    case 'year-2024':
                        sortedArticles = articles.filter(article => {
                            return new Date(article.querySelector('.article-date').dataset.date).getFullYear() === 2024;
                        });
                        break;
    
                    default:
                        sortedArticles = articles;
                }
    
                articlesContainer.innerHTML = '';
                sortedArticles.forEach(article => {
                    articlesContainer.appendChild(article);
                });
            });
        }
    });
    
            
    
    // Active le filtre "Toutes" par défaut (code existant)
    const defaultFilter = document.querySelector('.filters button.active');
    if (defaultFilter) {
        defaultFilter.click();
    }

    // Gestion des pop-ups dans la section "Mes Réalisations" (code existant)
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupDetails = document.getElementById('popup-details');
    const popupClose = document.querySelector('.popup-close');
    
    projects.forEach(project => {
        project.addEventListener('click', () => {
            // Récupérer les données du projet
            const title = project.dataset.title;
            const description = project.dataset.description;
            const date = project.dataset.date;
            const duration = project.dataset.duration;
            const participants = project.dataset.participants;
            const rating = project.dataset.rating;
            const tools = project.dataset.tools;
            const skills = project.dataset.skills;
            const documents = project.dataset.documents;
            const takeaways = project.dataset.takeaways;
    
            // Insérer les données dans la pop-up
            popupTitle.textContent = title;
            popupDescription.textContent = description;
            popupDetails.innerHTML = `
                <p><strong>Date :</strong> ${date}</p>
                <p><strong>Durée :</strong> ${duration}</p>
                <p><strong>Participants :</strong> ${participants}</p>
                <p><strong>Note :</strong> ${rating}/10</p>
                <p><strong>Outils utilisés :</strong> ${tools}</p>
                <p><strong>Documents associés :</strong> ${documents}</p>
                <p><strong>Ce que je retiens :</strong> ${takeaways}</p>
            `;
    
            // Afficher la pop-up
            popup.classList.remove('hidden');
            popup.style.opacity = '1';
            popup.style.visibility = 'visible';
        });
    });
    
    popup.classList.remove('hidden');

    popupClose.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Gestion du tri dans la section "Veille Technologique" avec un menu déroulant
    const sortSelect = document.getElementById('sort-select');
    const articlesContainer = document.querySelector('.articles');
    const articles = Array.from(articlesContainer.children);

    sortSelect.addEventListener('change', (event) => {
        const sortType = event.target.value;
        let sortedArticles;

        switch (sortType) {
            case 'oldest':
                sortedArticles = articles.sort((a, b) => {
                    return new Date(a.querySelector('.article-date').dataset.date) - new Date(b.querySelector('.article-date').dataset.date);
                });
                break;

            case 'newest':
                sortedArticles = articles.sort((a, b) => {
                    return new Date(b.querySelector('.article-date').dataset.date) - new Date(a.querySelector('.article-date').dataset.date);
                });
                break;

            case 'year-2023':
                sortedArticles = articles.filter(article => {
                    return new Date(article.querySelector('.article-date').dataset.date).getFullYear() === 2023;
                });
                break;

            case 'year-2024':
                sortedArticles = articles.filter(article => {
                    return new Date(article.querySelector('.article-date').dataset.date).getFullYear() === 2024;
                });
                break;

            default:
                sortedArticles = articles;
        }

        articlesContainer.innerHTML = '';
        sortedArticles.forEach(article => {
            articlesContainer.appendChild(article);
        });
    });

    // NOUVEL AJOUT : Animation pour la section "Ma Place dans le SI"
    const siPlaceSection = document.querySelector('#si-place');
    if (siPlaceSection) {
        siPlaceSection.style.opacity = '0';
        siPlaceSection.style.transform = 'translateY(20px)';
        setTimeout(() => {
            siPlaceSection.style.opacity = '1';
            siPlaceSection.style.transform = 'translateY(0)';
            siPlaceSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 500);
    }

    // NOUVEL AJOUT : Animation pour la section "Mes Missions en Entreprise"
    const missionsSection = document.querySelector('#missions');
    if (missionsSection) {
        missionsSection.style.opacity = '0';
        missionsSection.style.transform = 'translateY(20px)';
        setTimeout(() => {
            missionsSection.style.opacity = '1';
            missionsSection.style.transform = 'translateY(0)';
            missionsSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 500);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        if (project.id === 'jojo-legion') {
            project.dataset.title = "Jojo Legion";
            project.dataset.description = "Un site communautaire pour partager des théories et des discussions sur JoJo's Bizarre Adventure.";
            project.dataset.date = "2024-01-01";
            project.dataset.duration = "3 mois";
            project.dataset.participants = "4";
            project.dataset.rating = "9";
            project.dataset.tools = "HTML, CSS, JavaScript, Django";
            project.dataset.documents = "/documents/Cahier des Charges JojoLegion.pdf, /documents/charte graphique Finale JojoLegion.pdf, /documents/README.md";
            project.dataset.takeaways = "Importance de la collaboration en équipe et respect des contraintes techniques.";
        }
    });
});
