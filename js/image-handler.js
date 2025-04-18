/**
 * Gestionnaire d'images pour le portfolio
 * - Attribue des images thématiques aux projets
 * - Gère l'affichage des images en pop-up
 */

// Fonction exécutée au chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initialisation du gestionnaire d\'images');
    
    // 1. Attribuer des images thématiques aux projets
    assignGenericImages();
    
    // 2. Initialiser la pop-up d'image
    initializeImagePopup();
  });
  
  // Fonction pour attribuer des images génériques aux projets
  function assignGenericImages() {
    // S'assurer que projectsData est disponible
    if (typeof projectsData === 'undefined') {
      console.error('projectsData n\'est pas défini');
      return;
    }
    
    // Liste d'URLs d'images génériques de haute qualité
    const thematicImages = {
      "TextAdventure": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500&auto=format&fit=crop",
      "JojoLegion": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=500&auto=format&fit=crop",
      "GestEPI": "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=500&auto=format&fit=crop",
      "Nimbus Railway": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=500&auto=format&fit=crop",
      "Projet JO Ticket": "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=500&auto=format&fit=crop",
      "Génération de Ticket JO": "https://images.unsplash.com/photo-1585974738771-84483dd9f89f?q=80&w=500&auto=format&fit=crop",
      "Optimisation des logiciels entreprise": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
      "Mission de sondages": "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=500&auto=format&fit=crop",
      "Développement section utilisateur (App mobile)": "https://images.unsplash.com/photo-1592159945470-78ce6f364a1a?q=80&w=500&auto=format&fit=crop",
      "Mise en conformité RGPD": "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=500&auto=format&fit=crop",
      "Refonte graphique application mobile": "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=500&auto=format&fit=crop"
    };
    
    // Appliquer les images aux projets
    projectsData.forEach(project => {
      // Si une image thématique est disponible pour ce projet
      if (thematicImages[project.title]) {
        console.log(`Attribué image thématique à ${project.title}`);
        project.image = thematicImages[project.title];
      }
    });
  }
  
  // Fonction pour initialiser la pop-up d'image
  function initializeImagePopup() {
    const popup = document.getElementById('image-popup-overlay');
    const popupImage = document.getElementById('popup-image');
    const popupCaption = document.getElementById('popup-caption');
    const closeBtn = document.querySelector('.image-popup-close');
    
    if (!popup || !popupImage || !closeBtn) {
      console.error('Éléments de popup non trouvés dans le DOM');
      return;
    }
    
    // Fonction pour ouvrir la popup avec une image
    window.openImagePopup = function(imageSrc, caption) {
      popupImage.src = imageSrc;
      popupCaption.textContent = caption || '';
      popup.style.display = 'block';
      
      // Vérifier que l'image se charge correctement
      popupImage.onerror = function() {
        console.error('Erreur de chargement de l\'image:', imageSrc);
        popupCaption.textContent = 'Erreur de chargement de l\'image';
      };
    };
    
    // Gestionnaires pour fermer la popup
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
    
    popup.addEventListener('click', function(e) {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && popup.style.display === 'block') {
        popup.style.display = 'none';
      }
    });
    
    // Modifier la fonction openProjectModal pour gérer les clics sur les images
    const originalOpenProjectModal = window.openProjectModal;
    if (typeof originalOpenProjectModal === 'function') {
      window.openProjectModal = function(projectId) {
        // Appeler la fonction originale
        originalOpenProjectModal(projectId);
        
        // Ajouter des gestionnaires d'événements pour les liens d'images
        setTimeout(() => {
          const docLinks = document.querySelectorAll('.document-link');
          docLinks.forEach(link => {
            const href = link.getAttribute('href');
            // Vérifier si c'est une image
            if (href && (href.endsWith('.png') || href.endsWith('.jpg') || href.endsWith('.jpeg') || 
                href.endsWith('.webp') || href.endsWith('.gif') || 
                href.includes('image') || link.innerHTML.includes('Image'))) {
              
              // Remplacer le comportement par défaut
              link.removeAttribute('target');
              link.removeAttribute('download');
              
              // Ajouter un gestionnaire pour ouvrir la popup
              link.addEventListener('click', function(e) {
                e.preventDefault();
                const caption = this.textContent.trim();
                window.openImagePopup(href, caption);
              });
            }
          });
        }, 100);
      };
    }
  }
  
  // Fonction pour précharger les images thématiques
  function preloadThematicImages() {
    const thematicImages = [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585974738771-84483dd9f89f?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592159945470-78ce6f364a1a?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=500&auto=format&fit=crop"
    ];
    
    thematicImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }
  
  // Précharger les images
  preloadThematicImages();