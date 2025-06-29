/**
 * Portfolio Galaxie - Animation et Interactivité Premium
 * Un script optimisé pour créer une expérience immersive sur le thème spatial
 * Version nettoyée et optimisée
 */

// ===== DONNÉES GLOBALES =====
// Variable globale pour stocker l'URL de l'image placeholder générée dynamiquement
let placeholderImageUrl = '';

// Définition centralisée des projets pour éviter la duplication
const projectsData = [
  // Projets Scolaires
  {
    id: 1,
    title: "TextAdventure",
    description: {
      short: "Aventure textuelle Dragon Ball Z avec choix de personnage et exploration dynamique.",
      long: "Dans le cadre d'un projet académique, j'ai réalisé un jeu d'aventure textuel en Python basé sur l'univers de Dragon Ball Z. Le joueur incarne soit Son Goku, soit Vegeta, chacun disposant de ses techniques emblématiques comme le Kamehameha ou le Final Flash. L'objectif est d'explorer les différents niveaux du vaisseau de Babidi pour remporter trois emblèmes. Le jeu comprend un système de gestion de santé et d'inventaire, avec des actions et événements spécifiques à chaque zone visitée."
    },
    category: "Scolaire",
    image: "assets/images/projet-placeholder.jpg",
    tags: ["Python", "Jeu", "Manga", "Scripte"],
    documents: [
      {name: "Cahier des charges", type: "pdf", icon: "fa-file-pdf", filename: "../textadventure/Cahier des charges — textadventure.pdf"},
      {name: "README", type: "md", icon: "fa-file-alt", filename: "../textadventure/READMEtextadventure.md"},
      {name: "Capture d'écran", type: "image", icon: "fa-image", filename: "../textadventure/textadventure.png"},
      {name: "Code source", type: "python", icon: "fa-file-code", filename: "../textadventure/textadventure.py"}
    ],
    period: "Janvier - Mars 2023",
    duration: "2 secondess",
    participants: 1,
    rating: 2
  },
  {
    id: 2,
    title: "JojoLegion",
    description: {
      short: "Plateforme communautaire JoJo avec classement, théories et gestion des personnages.",
      long: "Site web communautaire développé avec Django autour de JoJo's Bizarre Adventure. Intégration de l'API Jikan pour consulter 170 personnages, système de votes pour classer les favoris, espace théories interactif et gestion complète des utilisateurs. Le projet respecte l'esthétique de la série et a été mené avec Trello, GitHub et Discord pour un suivi collaboratif."
    },
    category: "Scolaire",
    image: "assets/images/projet-placeholder.jpg",
    tags: ["HTML/CSS", "JavaScript", "Django", "Base de données", "Travail d'équipe", "API Jikan", "Site communautaire"],
    documents: [
      {name: "README", type: "md", icon: "fa-file-alt", filename: "../jojolegion/README_Jojolegion.md"},
      {name: "Charte graphique", type: "pdf", icon: "fa-file-alt", filename: "../jojolegion/Diagramme de base de donnees Jojolegion.png"},
      {name: "Logo du projet", type: "image", icon: "fa-image", filename: "../jojolegion/logo_jojolegion.png"},
      {name: "Diagramme de bdd", type: "png", icon: "fa-file-alt", filename: "../jojolegion/README_Jojolegion.md"},
      {name: "Aperçu JojoLegion", type: "png", icon: "fa-file-alt", filename: "../jojolegion/aperçu jojo.png"},
    ],
    period: "A - Janvier 2025",
    duration: "3 mois",
    participants: 4,
    rating: 5
  },
  {
    id: 3,
    title: "GestEPI",
    description: {
      short: "Gestion numérique des équipements de sécurité avec alertes et suivi en temps réel.",
      long: "Application web React / TypeScript pour la gestion des Équipements de Protection Individuelle (EPI). Gestion centralisée des équipements et des contrôles, alertes automatisées pour les vérifications à venir et tableau de bord dynamique pour un suivi en temps réel. Solution moderne et intuitive, remplaçant les registres papier pour une société de travaux en hauteur."
    },
    category: "Scolaire",
    image: "assets/images/projet-placeholder.jpg",
    tags: ["React/TypeScript", "Gestion", "EPI", "Automatisation"],
    documents: [
      {name: "Diagramme de cas d'utilisation", type: "image", icon: "fa-project-diagram", filename: "../gestepi/diagramme_de_cas_utilisation_GestEPI.png"}
    ],
    period: "Septembre - Avril 2025",
    duration: "3 mois",
    participants: 1,
    rating: 3
  },
  {
    id: 4,
    title: "Nimbus Railway",
    description: {
      short: "Gestion ferroviaire du Poudlard Express avec planification et rapports détaillés.",
      long: "Application de gestion ferroviaire développée en JavaFX, inspirée de l'univers de Harry Potter. L'outil permet de planifier les trajets du Poudlard Express, d'optimiser la répartition des élèves dans les wagons et de suivre les horaires en temps réel pour limiter retards et attentes. Intégrant une base de données pour la gestion des élèves et des trajets, l'application génère également des rapports d'analyse détaillés. Architecture MVC et interface moderne réalisée avec SceneBuilder pour une expérience fluide et maintenable."
    },
    category: "Scolaire",
    image: "assets/images/projet-placeholder.jpg",
    tags: ["JavaFX", "Maquettage", "Harry Potter", "SceneBuilder", "Planification"],
    documents: [
      {name: "Cahier Techniques", type: "md", icon: "fa-file-alt", filename: "../nimbus_railway/cahier techniques.md"},
      {name: "Modèle Relationnel", type: "md", icon: "fa-file-alt", filename: "../nimbus_railway/Modèle Relationnel (1).md"},
      {name: "Maquette", type: "pdf", icon: "fa-file-alt", filename: "../nimbus_railway/NR_Maquette.pdf"},
      {name: "README", type: "md", icon: "fa-file-alt", filename: "README (3).md"},
    ],
    period: "Décembre - Mars 2025",
    duration: "3 mois",
    participants: 3,
    rating: 4.5
  },
  {
    id: 5,
    title: "Projet JO Ticket",
    description: {
      short: "Billetterie complète pour les JO 2024 avec QR codes et gestion des événements.",
      long: "Système complet de billetterie pour les Jeux Olympiques 2024, développé avec Django. L'application gère la réservation et l'achat de billets pour les matchs de football, avec génération de QR codes personnalisés selon les catégories. La base de données centralise les informations sur les matchs, les stades et les billets. L'écosystème inclut une API RESTful pour connecter l'administration, l'application mobile des supporters et l'outil de scan des billets à l'entrée des stades. Interface dédiée pour les organisateurs, gestion des utilisateurs et vérification en temps réel des QR codes lors des événements."
    },
    category: "Scolaire",
    image: "assets/images/projet-placeholder.jpg",
    tags: ["Django", "Application", "QR Code", "Gestion", "Authentification", "JO2024"],
    documents: [
      {name: "Aperçu du Projet", type: "png", icon: "fa-file-alt", filename: "../projet_jo_ticket/Aperçu_Projet_Jo_Ticket.png"},
      {name: "README", type: "md", icon: "fa-file-alt", filename: "../projet_jo_ticket/README_projet_JO_Ticket.md"},
      {name: "Schema du Projet", type: "md", icon: "fa-file-alt", filename: "../projet_jo_ticket/Schema Projet JO.png"},
    ],
    period: "Janvier - Avril 2025",
    duration: "3 mois",
    participants: 1,
    rating: 4
  },
  {
    id: 6,
    title: "Génération de Ticket JO",
    description: {
      short: "Génération automatique de billets des JO avec QR codes et design officiel.",
      long: "Application de génération de billets pour les matchs de football des JO 2024. À partir de fichiers JSON de la base de données (matchs, stades, billets), le programme crée automatiquement les billets personnalisés avec QR Code unique, catégories de placement et formatage conforme à une charte graphique (Paris 2024). Gestion des devises (EUR/USD), des emplacements, et impression des détails des matchs avec date et heure formatées."
    },
    category: "Scolaire",
    image: "assets/images/projet-placeholder.jpg",
    tags: ["Python", "Automatisation", "Sécurité", "QR Code", "JSON", "Paris 2024"],
    documents: [
      {name: "README", type: "md", icon: "fa-file-alt", filename: "../generation_de_ticket_jo/README_billeterie.md"},
      {name: "Cahier des Charges", type: "pdf", icon: "fa-file-code", filename: "../generation_de_ticket_jo/billetterie.py"},
      {name: "Code source", type: "python", icon: "fa-file-code", filename: "../generation_de_ticket_jo/Cahier des charges — Billeterie _JO Tickets_.pdf"},
    ],
    period: "2 semaines",
    duration: "2 semaines",
    participants: 1,
    rating: 2
  },
  
  // Projets Professionnels
  {
    id: 7,
    title: "Optimisation des logiciels entreprise",
    description: {
      short: "Optimisation des performances et de l'ergonomie d'un logiciel interne pour améliorer l'efficacité des utilisateurs.",
      long: "Optimisation des performances et de l'ergonomie d'un logiciel interne pour améliorer l'efficacité des utilisateurs."
    },
    category: "Professionnel",
    image: "assets/images/projet-placeholder.jpg",
    tags: ["Optimisation", "Analyse"],
    documents: [
      {name: "Présentation 1", type: "png", icon: "fa-file-powerpoint", filename: "../optimisation_logiciels/update flex (1).png"},
      {name: "Présentation 2", type: "png", icon: "fa-file-powerpoint", filename: "../optimisation_logiciels/update flex (2).png"},
      {name: "Présentation 3", type: "png", icon: "fa-file-powerpoint", filename: "../optimisation_logiciels/update flex (3).png"},
    ],
    period: "1 mois",
    duration: "2 mois",
    participants: 2,
    rating: 3
  },
  {
    id: 8,
    title: "Mission de sondages",
    description: {
      short: "Développement d'une interface de sondage dans le cadre du développement des outils de l'entreprise.",
      long: "Développement d'une interface de sondage dans le cadre du développement des outils de l'entreprise."
    },
    category: "Professionnel",
    image: "assets/images/projet-placeholder.jpg",
    tags: ["Google Forms", "Analyse de données", "UX", "Automatisation"],
    documents: [
      {name: "Cahier des Charges", type: "pdf", icon: "fa-file-image", filename: "../mission_de_sondages/cdc_sondages (3) (1).pdf"},
      {name: "Message de Lancement", type: "pdf", icon: "fa-file-image", filename: "../mission_de_sondages/message lancement sondage.pdf"},
      {name: "Extrait Sondage", type: "jpeg", icon: "fa-file-image", filename: "../mission_de_sondages/screenshot_sondage.jpeg"},
      {name: "Maquette du Sondage 1", type: "jpeg", icon: "fa-file-image", filename: "../mission_de_sondages/Sondage_maquette_1.jpeg"},
      {name: "Maquette du Sondage 2", type: "jpeg", icon: "fa-file-image", filename: "../mission_de_sondages/Sondage_maquette_2.jpeg"},
    ],
    period: "3 mois",
    duration: "3 mois",
    participants: 2,
    rating: 4.5
  },
  {
    id: 9,
    title: "Développement section utilisateur (App mobile)",
    description: {
      short: "Maquette d'une section de l'application mobile permettant aux employés de consulter leurs fiches de paie et autres documents liés à l'entreprise (attestation France Travail)",
      long: "Maquette d'une section de l'application mobile permettant aux employés de consulter leurs fiches de paie et autres documents liés à l'entreprise (attestation France Travail)"
    },
    category: "Professionnel",
    image: "assets/images/projet-placeholder.jpg",
    tags: ["Mobile", "Design", "HTML/CSS", "JavaScript"],
    documents: [
      {name: "Cahier des Charges", type: "pdf", icon: "fa-file-alt", filename: "../section_utilisateur/cdc_section_utilisateur (1).pdf"},
      {name: "Message de lancement", type: "pdf", icon: "fa-file-alt", filename: "../section_utilisateur/message lancement section utilisateur.pdf"},
      {name: "Modèle relationnel", type: "md", icon: "fa-file-alt", filename: "../section_utilisateur/modele relationnel utilisateur.md"},
      {name: "Extrait section utilisateur", type: "jpeg", icon: "fa-file-alt", filename: "../section_utilisateur/Section_utilisateur.jpeg"},
    ],
    period: "2 semaines",
    duration: "2 semaines",
    participants: 2,
    rating: 4
  },
  {
    id: 10,
    title: "Mise en conformité RGPD",
    description: {
      short: "Mise à jour du registre de traitement de données de l'entreprise."},
    category: "Professionnel",
    image: "assets/images/projet-placeholder.jpg",
    tags: ["RGPD", "Sécurité", "Documentation", "Données"],
    documents: [
      {name: "Extrait registre", type: "image", icon: "fa-clipboard-list", filename: "registre.png"}
    ],
    period: "2 mois",
    duration: "2 mois",
    participants: 2,
    rating: 2
  },
  {
    id: 11,
    title: "Refonte graphique application mobile",
    description: {
      short: "Refonte et modernisation graphique de l'application mobile.",
      long: "Refonte et modernisation graphique de l'application mobile."
    },
    category: "Professionnel",
    image: "assets/images/projet-placeholder.jpg",
    tags: ["Design", "Mobile", "Accessibilité"],
    documents: [
      {name: "Cahier des Charges", type: "pdf", icon: "fa-images", filename: "../refonte_graphique/cdc_ref.pdf"},
      {name: "Charte Graphique", type: "pdf", icon: "fa-images", filename: "../refonte_graphique/charte graphique flex-flux.pdf"},
      {name: "Extrait de code", type: "jpeg", icon: "fa-images", filename: "../refonte_graphique/screenshot_refonte.jpeg"},
      {name: "Aperçu Après", type: "jpeg", icon: "fa-images", filename: "../refonte_graphique/Refonte_graphique_appli.jpeg"},
      {name: "Aperçu Avant", type: "jpeg", icon: "fa-images", filename: "../refonte_graphique/Refonte_graphique_appli.jpeg"},
    ],
    period: "Octobre - Novembre 2024",
    duration: "2 mois",
    participants: 2,
    rating: 5
  }
];

// Images génériques pour les projets
function assignGenericImages() {
  // Correspondance entre les projets et leurs images génériques
  const projectImages = {
    "TextAdventure": "assets/images/projects/adventure-game.jpg",
    "JojoLegion": "assets/images/projects/anime-site.jpg",
    "GestEPI": "assets/images/projects/safety-equipment.jpg",
    "Nimbus Railway": "assets/images/projects/train-management.jpg",
    "Projet JO Ticket": "assets/images/projects/olympics-ticket.jpg",
    "Génération de Ticket JO": "assets/images/projects/ticket-generator.jpg",
    "Optimisation des logiciels entreprise": "assets/images/projects/software-optimization.jpg",
    "Mission de sondages": "assets/images/projects/survey-app.jpg",
    "Développement section utilisateur (App mobile)": "assets/images/projects/mobile-app.jpg",
    "Mise en conformité RGPD": "assets/images/projects/data-protection.jpg",
    "Refonte graphique application mobile": "assets/images/projects/app-design.jpg"
  };

  // Attribuer les images aux projets
  projectsData.forEach(project => {
    if (projectImages[project.title]) {
      project.image = projectImages[project.title];
    }
  });
}

// Exécuter la fonction d'attribution d'images
assignGenericImages();

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM chargé - Initialisation des composants');
  
  // Initialiser l'image placeholder au chargement
  placeholderImageUrl = createPlaceholderImage();
  
  // Ordre d'initialisation optimisé
  initializeLoader();
  initializeCanvas();
  initializeNavigation();
  initializeDarkMode();
  initializeScrollEffects();
  initializeGlitchText();
  
  // Section critique - Gestion des projets
  try {
    initializeProjectFilters();
    initializeModals();
  } catch (error) {
    console.error('Erreur lors de l\'initialisation des projets:', error);
    // Récupération des erreurs
    handleProjectError();
  }
  
  // Ajouts supplémentaires
  initializeMeteorShower();
  initializeNebula();
  initializeScrollIndicator();
  enhanceGlitchEffect();
  enhanceAccessibility();
  
  // Force la disparition du loader après un temps maximum
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader && loader.style.display !== 'none') {
      console.log('Forçage de la fermeture du loader (timeout de sécurité)');
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
        animateHeroElements();
      }, 500);
    }
  }, 4000); // 4 secondes maximum
});

// Gestion d'erreur des projets
function handleProjectError() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;
  
  // Créer un message d'erreur visuel
  const errorMsg = document.createElement('div');
  errorMsg.className = 'error-message';
  errorMsg.innerHTML = `
    <i class="fas fa-exclamation-circle"></i>
    <h3>Chargement des projets impossible</h3>
    <p>Veuillez actualiser la page ou réessayer ultérieurement.</p>
  `;
  projectsGrid.appendChild(errorMsg);
  
  // Générer un projet de démonstration pour éviter une page vide
  const placeholderProject = document.createElement('div');
  placeholderProject.classList.add('project-card');
  placeholderProject.innerHTML = `
    <div class="project-info">
      <h3 class="project-title">Exemple de projet</h3>
      <p class="project-description">Description du projet. Cliquez pour voir les détails.</p>
      <div class="project-tags">
        <span class="project-tag">HTML/CSS</span>
        <span class="project-tag">JavaScript</span>
      </div>
      <a href="#" class="project-link">Voir détails <i class="fas fa-arrow-right"></i></a>
    </div>
  `;
  projectsGrid.appendChild(placeholderProject);
}

// ===== CHARGEMENT DU SITE =====
function initializeLoader() {
  const loader = document.getElementById('loader');
  const progressBar = document.querySelector('.loader-progress-bar');
  
  if (!loader || !progressBar) return;
  
  // Variable pour suivre si le chargement est terminé
  let loadingComplete = false;
  
  // Supprimer tout attribut onload qui pourrait interférer
  document.body.removeAttribute('onload');
  
  // Simuler une progression de chargement avec vérification de sécurité
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 5; // Progression plus lente (5 au lieu de 10)
    if (progress > 100) progress = 100;
    
    progressBar.style.width = `${progress}%`;
    
    if (progress === 100) {
      loadingComplete = true;
      clearInterval(interval);
      
      // Délai augmenté pour voir l'animation à 100% complète
      setTimeout(() => {
        // Disparition progressive avec animation
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
          animateHeroElements();
        }, 800); // Délai augmenté pour une transition plus fluide
      }, 1200); // Délai augmenté pour voir la fusée à 100%
    }
  }, 300); // Intervalle plus long pour une progression plus lente
  
  // Assurer que le loader disparaît même si des ressources prennent du temps
  window.addEventListener('load', () => {
    console.log('Fenêtre chargée - Finalisation du loader');
    
    // Au lieu de forcer à 100%, permettre à l'animation de se terminer naturellement
    if (progress < 80) {
      progress = 80; // Accélérer jusqu'à 80% seulement
      progressBar.style.width = '80%';
    }
    
    setTimeout(() => {
      // Assurer d'atteindre 100% naturellement
      if (progress < 100) {
        progress = 100;
        progressBar.style.width = '100%';
      }
      
      if (!loadingComplete) {
        loadingComplete = true;
        clearInterval(interval);
        
        setTimeout(() => {
          loader.style.opacity = '0';
          setTimeout(() => {
            loader.style.display = 'none';
            animateHeroElements();
          }, 800);
        }, 1000);
      }
    }, 1000);
  });
  
  // Sécurité pour garantir la disparition du loader (délai augmenté)
  setTimeout(() => {
    if (!loadingComplete) {
      console.log('Forçage du chargement complet (délai expiré)');
      progress = 100;
      progressBar.style.width = '100%';
      clearInterval(interval);
      
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
        animateHeroElements();
      }, 800);
    }
  }, 8000); // 8 secondes maximum (au lieu de 5)
}

// ===== ANIMATION DES ÉLÉMENTS HERO =====
function animateHeroElements() {
  const heroElements = document.querySelectorAll('.hero-content *');
  if (heroElements.length === 0) return;
  
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, index * 200);
  });

  setTimeout(() => {
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
      heroVisual.style.opacity = '1';
      heroVisual.style.transform = 'translateY(0)';
    }
  }, 800);
}

// ===== CANVAS ÉTOILES INTERACTIVES =====
function initializeCanvas() {
  const canvas = document.getElementById('space-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let width, height;
  let stars = [];
  let starCount = 150;
  
  // Réduire le nombre d'étoiles sur mobile pour les performances
  if (window.innerWidth < 768) {
    starCount = 80;
  }
  
  let mouseX = 0;
  let mouseY = 0;
  let interactionRadius = 100;
  
  // Initialiser le canvas
  function setupCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    
    // Créer les étoiles avec différentes profondeurs
    stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        initialX: Math.random() * width,
        initialY: Math.random() * height,
        depth: Math.random() * 3 + 1,
        glow: Math.random() > 0.7
      });
    }
  }
  
  // Dessiner et animer les étoiles
  function animateStars() {
    // Vérifier que le canvas est toujours dans le DOM
    if (!document.body.contains(canvas)) return;
    
    ctx.clearRect(0, 0, width, height);
    
    // Dessiner les étoiles
    stars.forEach(star => {
      ctx.beginPath();
      
      // Effet de lueur pour certaines étoiles
      if (star.glow) {
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.radius * 4
        );
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // L'étoile elle-même
      ctx.fillStyle = star.color;
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Effet d'interaction avec la souris
      const dx = mouseX - star.x;
      const dy = mouseY - star.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < interactionRadius) {
        const angle = Math.atan2(dy, dx);
        const force = (interactionRadius - distance) / interactionRadius;
        
        star.x -= Math.cos(angle) * force * 2;
        star.y -= Math.sin(angle) * force * 2;
      } else {
        // Retour progressif à la position initiale
        star.x += (star.initialX - star.x) * 0.01;
        star.y += (star.initialY - star.y) * 0.01;
      }
      
      // Mouvement normal des étoiles
      star.x += star.vx / star.depth;
      star.y += star.vy / star.depth;
      
      // Rebond sur les bords
      if (star.x < 0 || star.x > width) {
        star.vx *= -1;
        star.initialX = star.x;
      }
      if (star.y < 0 || star.y > height) {
        star.vy *= -1;
        star.initialY = star.y;
      }
    });
    
    requestAnimationFrame(animateStars);
  }
  
  // Suivi de la souris pour l'interactivité
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Gestion du redimensionnement
  window.addEventListener('resize', setupCanvas);
  
  // Initialisation
  setupCanvas();
  animateStars();
}

// ===== NAVIGATION RESPONSIVE =====
function initializeNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('header');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
  
  // Navigation collante et effet de défilement
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}

// ===== DARK MODE TOGGLE =====
function initializeDarkMode() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (!darkModeToggle) return;
  
  // Créer un élément de transition
  const transitionElement = document.createElement('div');
  transitionElement.classList.add('dark-mode-transition');
  document.body.appendChild(transitionElement);
  
  // Vérifier la préférence du système ou du stockage local
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedDarkMode = localStorage.getItem('darkMode');
  
  // Appliquer le thème initial
  if (storedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
  } else if (storedDarkMode === 'false') {
    document.body.classList.remove('dark-mode');
  } else if (prefersDarkMode) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  }
  
  // Mettre à jour les icônes selon le thème actuel
  updateDarkModeIcons();
  
  // Toggle du mode sombre avec transition
  darkModeToggle.addEventListener('click', () => {
    // Activer la transition
    transitionElement.classList.add('active');
    
    // Changer le mode après un délai
    setTimeout(() => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
      
      // Mettre à jour les icônes du bouton
      updateDarkModeIcons();
      
      // Animation des planètes
      const planets = document.querySelectorAll('.planet');
      planets.forEach(planet => {
        planet.style.transition = 'all 0.5s ease';
        planet.style.transform = 'scale(1.2)';
        setTimeout(() => {
          planet.style.transform = '';
        }, 500);
      });
    }, 400);
    
    // Désactiver la transition après l'animation
    setTimeout(() => {
      transitionElement.classList.remove('active');
    }, 800);
  });
  
  // Fonction pour mettre à jour les icônes du bouton
  function updateDarkModeIcons() {
    const moonIcon = darkModeToggle.querySelector('.fa-moon');
    const sunIcon = darkModeToggle.querySelector('.fa-sun');
    
    if (!moonIcon || !sunIcon) return;
    
    if (document.body.classList.contains('dark-mode')) {
      moonIcon.style.opacity = '0';
      moonIcon.style.transform = 'rotate(-180deg) scale(0)';
      sunIcon.style.opacity = '1';
      sunIcon.style.transform = 'rotate(0) scale(1)';
    } else {
      moonIcon.style.opacity = '1';
      moonIcon.style.transform = 'rotate(0) scale(1)';
      sunIcon.style.opacity = '0';
      sunIcon.style.transform = 'rotate(180deg) scale(0)';
    }
  }
}

// ===== EFFETS DE DÉFILEMENT ET VISIBILITÉ =====
function initializeScrollEffects() {
  // Vérifier si IntersectionObserver est supporté
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });
    
    // Parallaxe subtile
    const parallaxElements = document.querySelectorAll('.hero, .planet');
    
    // Optimisation : limiter la fréquence d'appel pour le scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          parallaxElements.forEach(element => {
            const speed = element.classList.contains('hero') ? 0.3 : 0.1;
            element.style.transform = `translateY(${scrollY * speed}px)`;
          });
          
          ticking = false;
        });
        
        ticking = true;
      }
    });
  } else {
    // Fallback pour les navigateurs qui ne supportent pas IntersectionObserver
    document.querySelectorAll('.section').forEach(section => {
      section.classList.add('visible');
    });
  }
}

// ===== ANIMATION DU TEXTE GLITCH =====
function initializeGlitchText() {
  const glitchText = document.querySelector('.glitch-text');
  
  if (!glitchText) return;
  
  // Ajouter l'attribut data-text pour l'effet de glitch
  const text = glitchText.innerText;
  glitchText.setAttribute('data-text', text);
  
  // Créer un effet de glitch aléatoire
  setInterval(() => {
    if (Math.random() > 0.9) {
      glitchText.classList.add('active');
      setTimeout(() => {
        glitchText.classList.remove('active');
      }, 200);
    }
  }, 3000);
}

// ===== FILTRES DE PROJETS =====
function initializeProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectsGrid = document.getElementById('projects-grid');
  
  if (!filterButtons.length || !projectsGrid) {
    console.warn('Éléments de filtrage de projets non trouvés');
    return;
  }
  
  console.log('Initialisation des filtres de projets');
  
  // Générer les cartes de projet
  function generateProjectCards(projectsToShow) {
    if (!projectsGrid) return;
    
    console.log('Génération de', projectsToShow.length, 'projets');
    projectsGrid.innerHTML = '';
    
    if (projectsToShow.length === 0) {
      projectsGrid.innerHTML = '<div class="no-projects">Aucun projet ne correspond à ce filtre</div>';
      return;
    }
    
    projectsToShow.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      projectCard.dataset.id = project.id;
      
      const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
      
      projectCard.innerHTML = `
        <div class="project-image-container">
          <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='${placeholderImageUrl}'">
        </div>
        <div class="project-info">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description.short}</p>
          <div class="project-tags">
            ${tagsHTML}
          </div>
          <a href="#" class="project-link" data-id="${project.id}">Voir détails <i class="fas fa-arrow-right"></i></a>
        </div>
      `;
      
      projectsGrid.appendChild(projectCard);
      
      // Ajouter l'événement pour ouvrir la modale
      const projectLink = projectCard.querySelector('.project-link');
      if (projectLink) {
        projectLink.addEventListener('click', (e) => {
          e.preventDefault();
          openProjectModal(project.id);
        });
      }
    });
  }
  
  // Filtrer les projets
  function filterProjects(category) {
    let filteredProjects;
    
    if (category === 'all') {
      filteredProjects = projectsData;
    } else {
      filteredProjects = projectsData.filter(project => project.category === category);
    }
    
    console.log('Filtre:', category, '- Projets filtrés:', filteredProjects.length);
    generateProjectCards(filteredProjects);
  }
  
  // Initialiser les filtres
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Mettre à jour l'état actif des boutons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filtrer les projets
      const filter = button.getAttribute('data-filter');
      filterProjects(filter);
    });
  });
  
  // Charger tous les projets au démarrage
  if (projectsGrid && filterButtons.length) {
    console.log('Chargement initial des projets');
    // Trouver le bouton actif initial
    const activeButton = Array.from(filterButtons).find(btn => btn.classList.contains('active'));
    const initialFilter = activeButton ? activeButton.getAttribute('data-filter') : 'all';
    filterProjects(initialFilter);
  }
}

// ===== MODALES DE PROJET =====
function initializeModals() {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  
  if (!modalOverlay) {
    console.warn('Élément modal-overlay non trouvé');
    return;
  }
  
  // Fermer la modale quand on clique sur le bouton ou en-dehors
  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
    });
  }
  
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
  
  // Fermer avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
      closeModal();
    }
  });
}

// Ouvrir la modale de projet avec les données correctes
function openProjectModal(projectId) {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalImage = document.getElementById('modal-image');
  const modalPeriod = document.getElementById('modal-period');
  const modalDuration = document.getElementById('modal-duration');
  const modalParticipants = document.getElementById('modal-participants');
  const modalRating = document.getElementById('modal-rating');
  const modalTags = document.getElementById('modal-tags');
  const modalDocuments = document.getElementById('modal-documents');
  
  if (!modalOverlay || !modalTitle || !modalDescription) {
    console.error('Éléments de la modale non trouvés');
    return;
  }
  
  try {
    // Trouver le projet correspondant à l'ID
    const projectDetails = projectsData.find(project => project.id === parseInt(projectId));
    
    if (!projectDetails) {
      console.error("Projet non trouvé avec l'ID:", projectId);
      throw new Error("Projet non trouvé");
    }
    
    // Remplir la modale avec les détails du projet
    modalTitle.textContent = projectDetails.title;
    modalDescription.textContent = projectDetails.description.long;
    
    // Gestion de l'image avec fallback
    modalImage.onerror = function() {
      this.onerror = null; // Éviter les boucles infinies
      this.src = placeholderImageUrl;
    };
    
    modalImage.src = projectDetails.image;
    modalImage.alt = projectDetails.title;
    modalPeriod.textContent = projectDetails.period;
    
    // Ajouter les nouvelles informations
    if (modalDuration) {
      modalDuration.textContent = projectDetails.duration || "Non spécifié";
    }
    
    if (modalParticipants) {
      modalParticipants.textContent = projectDetails.participants ? `${projectDetails.participants}` : "Non spécifié";
    }
    
    // Génération des étoiles pour la note
    if (modalRating) {
      modalRating.innerHTML = '';
      modalRating.className = 'rating-stars';
      
      if (projectDetails.rating) {
        // Créer les étoiles basées sur la note (sur 5)
        const fullStars = Math.floor(projectDetails.rating);
        const hasHalfStar = projectDetails.rating % 1 >= 0.5;
        
        // Étoiles pleines
        for (let i = 0; i < fullStars; i++) {
          const star = document.createElement('i');
          star.className = 'fas fa-star';
          modalRating.appendChild(star);
        }
        
        // Demi-étoile si nécessaire
        if (hasHalfStar) {
          const halfStar = document.createElement('i');
          halfStar.className = 'fas fa-star-half-alt';
          modalRating.appendChild(halfStar);
        }
        
        // Étoiles vides
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
          const emptyStar = document.createElement('i');
          emptyStar.className = 'far fa-star';
          modalRating.appendChild(emptyStar);
        }
      } else {
        modalRating.textContent = "Non évalué";
      }
    }
    
    // Générer les tags
    modalTags.innerHTML = '';
    projectDetails.tags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.classList.add('project-tag');
      tagElement.textContent = tag;
      modalTags.appendChild(tagElement);
    });
    
    // PARTIE SIMPLIFIÉE: Gestion des documents avec liens directs
    if (modalDocuments && projectDetails.documents) {
      modalDocuments.innerHTML = '';
      
      // Table de correspondance exacte pour les dossiers de projets
      const folderMapping = {
        "TextAdventure": "textadventure",
        "JojoLegion": "jojolegion",
        "GestEPI": "gestepi",
        "Nimbus Railway": "nimbus_railway",
        "Projet JO Ticket": "projet_jo_ticket",
        "Génération de Ticket JO": "generation_de_ticket_jo",
        "Optimisation des logiciels entreprise": "optimisation_logiciels",
        "Mission de sondages": "mission_de_sondages",
        "Développement section utilisateur (App mobile)": "section_utilisateur",
        "Mise en conformité RGPD": "rgpd",
        "Refonte graphique application mobile": "refonte_graphique"
      };
      
      // Déterminer le dossier du projet
      const projectFolder = folderMapping[projectDetails.title] || 
        projectDetails.title.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, '_');
      
      if (Array.isArray(projectDetails.documents)) {
        // Format tableau d'objets
        projectDetails.documents.forEach(doc => {
          // Créer un lien direct vers le document
          const docLink = document.createElement('a');
          
          // Construire l'URL directement avec le nom de fichier fourni
          let filePath = '';
          if (doc.filename) {
            filePath = `assets/documents/${projectFolder}/${doc.filename}`;
          } else {
            // Construire un nom de fichier basé sur le nom du document
            const fileName = doc.name
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/\s+/g, '_')
              .toLowerCase();
            
            // Ajouter l'extension en fonction du type
            let extension = '';
            switch (doc.type?.toLowerCase()) {
              case 'md':
              case 'markdown':
                extension = '.md';
                break;
              case 'pdf':
                extension = '.pdf';
                break;
              case 'python':
                extension = '.py';
                break;
              case 'js':
              case 'javascript':
                extension = '.js';
                break;
              case 'html':
                extension = '.html';
                break;
              case 'css':
                extension = '.css';
                break;
              case 'png':
              case 'image':
              case 'images':
                extension = '.png';
                break;
              case 'jpg':
              case 'jpeg':
                extension = '.jpg';
                break;
              case 'webp':
                extension = '.webp';
                break;
              default:
                extension = '';
                break;
            }
            
            filePath = `assets/documents/${projectFolder}/${fileName}${extension}`;
          }
          
          docLink.href = filePath;
          docLink.className = 'document-link';
          
          // Pour les fichiers texte, ajouter l'attribut download
          if (['pdf', 'md', 'markdown', 'python', 'js', 'javascript', 'html', 'css'].includes(doc.type?.toLowerCase())) {
            docLink.setAttribute('download', '');
          }
          
          // Pour les images, ouvrir dans un nouvel onglet
          // Remplacez ou modifiez cette partie dans la fonction openProjectModal
// Pour les images, ajouter un gestionnaire pour ouvrir la popup au lieu d'un nouvel onglet
if (['image', 'images', 'png', 'jpg', 'jpeg', 'webp'].includes(doc.type?.toLowerCase())) {
  docLink.removeAttribute('target');
  docLink.addEventListener('click', function(e) {
    e.preventDefault();
    const popup = document.getElementById('image-popup-overlay');
    const popupImg = document.getElementById('popup-image');
    const popupCaption = document.getElementById('popup-caption');
    
    popupImg.src = this.href;
    popupCaption.textContent = buttonText;
    popup.style.display = 'block';
  });
}
          
          // Déterminer l'icône appropriée
          let iconClass = 'fa-file';
          if (doc.icon) {
            iconClass = doc.icon;
          } else {
            // Icônes par défaut selon le type
            switch (doc.type?.toLowerCase()) {
              case 'pdf':
                iconClass = 'fa-file-pdf';
                break;
              case 'md':
              case 'markdown':
                iconClass = 'fa-file-alt';
                break;
              case 'python':
              case 'js':
              case 'javascript':
              case 'html':
              case 'css':
                iconClass = 'fa-file-code';
                break;
              case 'image':
              case 'images':
              case 'png':
              case 'jpg':
              case 'jpeg':
              case 'webp':
                iconClass = 'fa-file-image';
                break;
            }
          }
          
          // Personnaliser le texte du bouton selon le type de document
          let buttonText = doc.name;
          if (doc.type) {
            if (doc.type.toLowerCase() === 'md' || doc.type.toLowerCase() === 'markdown') {
              buttonText = `Documentation ${doc.name}`;
            } else if (doc.type.toLowerCase() === 'pdf') {
              buttonText = `PDF: ${doc.name}`;
            } else if (doc.type.toLowerCase() === 'python') {
              buttonText = `Code source: ${doc.name}`;
            } else if (['image', 'png', 'jpg', 'jpeg', 'webp'].includes(doc.type.toLowerCase())) {
              buttonText = `Image: ${doc.name}`;
            } else if (doc.type.toLowerCase() === 'js' || doc.type.toLowerCase() === 'javascript') {
              buttonText = `Script: ${doc.name}`;
            } else if (doc.type.toLowerCase() === 'html') {
              buttonText = `HTML: ${doc.name}`;
            } else if (doc.type.toLowerCase() === 'css') {
              buttonText = `Style: ${doc.name}`;
            }
          }
          
          // Créer le contenu du lien avec icône
          docLink.innerHTML = `<i class="far ${iconClass}"></i> ${buttonText}`;
          
          // Ajouter à la section des documents
          modalDocuments.appendChild(docLink);
        });
      } else if (typeof projectDetails.documents === 'string') {
        // Format chaîne simple (pour la rétrocompatibilité)
        const documentItems = projectDetails.documents.split(',');
        documentItems.forEach(item => {
          const docName = item.trim();
          const docLink = document.createElement('a');
          
          // Créer un chemin de fichier simple
          docLink.href = `assets/documents/${projectFolder}/${docName.toLowerCase().replace(/\s+/g, '_')}.pdf`;
          docLink.className = 'document-link';
          docLink.setAttribute('download', '');
          docLink.innerHTML = `<i class="far fa-file-pdf"></i> Document: ${docName}`;
          
          modalDocuments.appendChild(docLink);
        });
      }
    }
    
    // Afficher la modale avec animation
    modalOverlay.classList.add('show');
    setTimeout(() => {
      const modal = modalOverlay.querySelector('.modal');
      if (modal) modal.style.opacity = '1';
    }, 10);
    
  } catch (error) {
    console.error("Erreur lors de l'ouverture de la modale:", error);
    
    // Afficher des informations par défaut en cas d'erreur
    if (modalTitle) modalTitle.textContent = "Détails du projet";
    if (modalDescription) modalDescription.textContent = "Les détails de ce projet ne sont pas disponibles actuellement.";
    if (modalImage) {
      modalImage.src = placeholderImageUrl;
      modalImage.alt = "Image non disponible";
    }
    if (modalPeriod) modalPeriod.textContent = "Période non spécifiée";
    if (modalDuration) modalDuration.textContent = "Non spécifié";
    if (modalParticipants) modalParticipants.textContent = "Non spécifié";
    if (modalRating) modalRating.textContent = "Non évalué";
    if (modalTags) modalTags.innerHTML = '<span class="project-tag">Information indisponible</span>';
    if (modalDocuments) modalDocuments.innerHTML = '';
    
    // Afficher la modale malgré l'erreur
    modalOverlay.classList.add('show');
    setTimeout(() => {
      const modal = modalOverlay.querySelector('.modal');
      if (modal) modal.style.opacity = '1';
    }, 10);
  }
}

// Fermer la modale
function closeModal() {
  const modalOverlay = document.querySelector('.modal-overlay');
  if (!modalOverlay) return;
  
  const modal = modalOverlay.querySelector('.modal');
  if (modal) modal.style.opacity = '0';
  
  setTimeout(() => {
    modalOverlay.classList.remove('show');
  }, 300);
}

// ===== GESTION DES ERREURS GLOBALES =====
window.addEventListener('error', function(event) {
  console.error('Erreur globale capturée:', event.error);
  
  // Masquer le loader s'il est toujours affiché lors d'une erreur
  const loader = document.getElementById('loader');
  if (loader && loader.style.display !== 'none') {
    console.warn('Forçage de la fermeture du loader suite à une erreur');
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
  
  // Ne pas afficher les erreurs de chargement d'image aux utilisateurs
  if (event.target && event.target.tagName === 'IMG') {
    event.preventDefault();
    return false;
  }
});

// ===== EFFETS SUPPLÉMENTAIRES POUR LE THÈME SPATIAL =====
// Créer des météores aléatoires
function initializeMeteorShower() {
  try {
    // Réduire le nombre de météores sur mobile pour les performances
    const meteorCount = window.innerWidth < 768 ? 2 : 3;
    
    // Créer des conteneurs de météores
    for (let i = 0; i < meteorCount; i++) {
      const meteor = document.createElement('div');
      meteor.classList.add('meteor');
      meteor.style.top = `${Math.random() * 70}%`;
      meteor.style.left = `${Math.random() * 70}%`;
      meteor.style.animationDelay = `${Math.random() * 10}s`;
      document.body.appendChild(meteor);
    }
  } catch (error) {
    console.error('Erreur lors de l\'initialisation des météores:', error);
    // Ne pas bloquer l'exécution si cette fonctionnalité échoue
  }
}

// Ajouter une nébuleuse de fond
function initializeNebula() {
  try {
    const nebula = document.createElement('div');
    nebula.classList.add('nebula');
    document.body.appendChild(nebula);
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de la nébuleuse:', error);
  }
}

// Amélioration de l'indicateur de défilement
function initializeScrollIndicator() {
  const heroSection = document.querySelector('.hero');
  
  if (!heroSection) return;
  
  try {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.classList.add('scroll-indicator');
    scrollIndicator.innerHTML = `
      <span>Défiler</span>
      <div class="mouse"></div>
    `;
    
    heroSection.appendChild(scrollIndicator);
    
    scrollIndicator.addEventListener('click', () => {
      const nextSection = heroSection.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    // Cacher l'indicateur au défilement
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
          } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'all';
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de l\'indicateur de défilement:', error);
  }
}

// Amélioration de l'effet de glitch pour le texte
function enhanceGlitchEffect() {
  const glitchText = document.querySelector('.glitch-text');
  if (!glitchText) return;
  
  try {
    // Ajouter un événement au survol pour déclencher un effet plus prononcé
    glitchText.addEventListener('mouseenter', () => {
      glitchText.classList.add('active');
    });
    
    glitchText.addEventListener('mouseleave', () => {
      setTimeout(() => {
        glitchText.classList.remove('active');
      }, 500);
    });
  } catch (error) {
    console.error('Erreur lors de l\'amélioration de l\'effet de glitch:', error);
  }
}

// Amélioration de l'accessibilité
function enhanceAccessibility() {
  try {
    // Focus visible uniquement lors de la navigation au clavier
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-nav');
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    });
    
    // Ajouter des attributs aria pour une meilleure accessibilité
    document.querySelectorAll('.project-card').forEach(card => {
      card.setAttribute('role', 'article');
      card.setAttribute('tabindex', '0');
    });
  } catch (error) {
    console.error('Erreur lors de l\'amélioration de l\'accessibilité:', error);
  }
}

// ===== OPTIMISATION DES PERFORMANCES =====
// Lazy loading des images
function lazyLoadImages() {
  // Vérifier si le navigateur supporte l'attribut loading
  const supportsLazyLoading = 'loading' in HTMLImageElement.prototype;
  
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach(img => {
    // Ajouter l'attribut loading natif si supporté
    if (supportsLazyLoading) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Ajouter un fallback pour les images qui échouent à charger
    img.addEventListener('error', function() {
      console.warn('Erreur de chargement d\'image:', this.src);
      this.src = placeholderImageUrl || '';
    });
    
    // Optimisation supplémentaire: définir les dimensions si elles ne sont pas spécifiées
    if (!img.getAttribute('width') && !img.getAttribute('height')) {
      img.setAttribute('width', '300');
      img.setAttribute('height', '200');
    }
  });
}

// Optimisation des animations pour réduire la consommation CPU
function optimizeAnimations() {
  // Vérifier si le navigateur est en mode batterie faible ou si l'utilisateur préfère réduire les animations
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;
  const isLowPowerMode = prefersReducedMotion || isMobile;
  
  if (isLowPowerMode) {
    document.body.classList.add('reduced-motion');
    
    // Désactiver certaines animations
    document.querySelectorAll('.orbit').forEach(orbit => {
      orbit.style.animationDuration = isMobile ? '60s' : '0s';
    });
    
    // Réduire les effets visuels coûteux
    document.querySelectorAll('.meteor, .nebula').forEach(element => {
      element.style.display = 'none';
    });
  }
}

// Fonction de détection des performances du dispositif
function detectDevicePerformance() {
  // Estimation basique des performances selon le nombre de cœurs logiques
  const logicalCores = window.navigator.hardwareConcurrency || 2;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  let performanceLevel = 'high';
  
  if (isMobile || logicalCores <= 2) {
    performanceLevel = 'low';
  } else if (logicalCores <= 4) {
    performanceLevel = 'medium';
  }
  
  document.body.setAttribute('data-performance', performanceLevel);
  return performanceLevel;
}

// Fonction pour créer une image de placeholder
function createPlaceholderImage() {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    
    // Dessiner un fond dégradé
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#2e3899');
    gradient.addColorStop(1, '#1a2855');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Ajouter du texte
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Projet', canvas.width / 2, canvas.height / 2 - 10);
    ctx.font = '16px Arial, sans-serif';
    ctx.fillText('Image non disponible', canvas.width / 2, canvas.height / 2 + 20);
    
    // Convertir le canvas en URL de données
    return canvas.toDataURL('image/png');
  } catch (error) {
    console.error('Erreur lors de la création de l\'image placeholder:', error);
    return '';
  }
}

// Initialisation des optimisations
window.addEventListener('load', () => {
  // Optimisations basées sur les performances détectées
  const performanceLevel = detectDevicePerformance();
  lazyLoadImages();
  optimizeAnimations();
  
  console.log('Optimisations appliquées pour niveau de performance:', performanceLevel);
});

/* JavaScript pour animer les barres de compétences */
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Ajouter la classe pour animer les composants
        const items = entry.target.querySelectorAll('.skill-item, .tool-item, .language-card');
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animate');
          }, index * 100);
        });
        
        // Ne plus observer une fois animé
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  // Observer les sections avec animations
  const animatedSections = document.querySelectorAll('.languages-section, .tools-section, .skills-section');
  animatedSections.forEach(section => {
    if (section) {
      observer.observe(section);
    }
  });
});

// SOLUTION D'URGENCE - REMPLACEZ TOUT CODE PRÉCÉDENT PAR CELUI-CI
document.addEventListener('DOMContentLoaded', function() {
  // Cette fonction s'exécute dès que la page est chargée
  // Vérifier si nous sommes sur la page de réalisations
  if (window.location.pathname.includes('realisations') || document.querySelector('.projects-grid')) {
    // L'ancienne fonction openProjectModal
    const originalOpenModal = window.openProjectModal;
    
    // Nouvelle fonction qui remplace l'ancienne
    window.openProjectModal = function(projectId) {
      // Appeler la fonction d'origine
      if (typeof originalOpenModal === 'function') {
        originalOpenModal(projectId);
      }
      
      // Attendre que la modale soit chargée
      setTimeout(function() {
        // Trouver le projet concerné
        const project = projectsData.find(p => p.id === parseInt(projectId));
        if (!project || !project.documents) return;
        
        // Trouver la section des documents
        const documentsSection = document.querySelector('.documents-section');
        if (!documentsSection) return;
        
        // Supprimer tous les liens existants pour repartir de zéro
        const existingLinks = documentsSection.querySelectorAll('.document-link');
        existingLinks.forEach(link => link.remove());
        
        // Titre de la section
        const docTitle = document.createElement('h3');
        docTitle.textContent = "Documents associés";
        documentsSection.appendChild(docTitle);
        
        // Trouver le dossier du projet en se basant sur le titre
        const projectName = project.title;
        let projectFolder = "";
        
        // Dossiers connus
        const knownFolders = {
          "TextAdventure": "textadventure",
          "JojoLegion": "jojolegion",
          "GestEPI": "gestepi",
          "Nimbus Railway": "nimbus_railway",
          "Projet JO Ticket": "projet_jo_ticket",
          "Génération de Ticket JO": "generation_de_ticket_jo"
        };
        
        // Déterminer le bon dossier
        if (knownFolders[projectName]) {
          projectFolder = knownFolders[projectName];
        } else {
          // Fallback: normaliser le nom du projet
          projectFolder = projectName.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, '_');
        }
        
        // Créer un lien pour chaque document
        project.documents.forEach(doc => {
          // Dossier du projet
          const baseUrl = `assets/documents/${projectFolder}/`;
          
          // Créer le lien
          const link = document.createElement('a');
          link.className = "document-link";
          link.target = "_blank"; // Ouvrir dans un nouvel onglet
          
          // Déterminer l'URL du document
          if (doc.filename) {
            link.href = baseUrl + doc.filename;
          } else {
            // Si pas de nom de fichier spécifié, créer un nom basé sur le nom du document
            const fileName = doc.name
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/\s+/g, '_');
            
            // Ajouter une extension selon le type
            let extension = '';
            switch (doc.type) {
              case 'md': extension = '.md'; break;
              case 'pdf': extension = '.pdf'; break;
              case 'python': extension = '.py'; break;
              case 'image': extension = '.png'; break;
              default: extension = '';
            }
            
            link.href = baseUrl + fileName + extension;
          }
          
          // Déterminer l'icône selon le type
          let iconClass = 'fa-file';
          switch (doc.type) {
            case 'md': iconClass = 'fa-file-alt'; break;
            case 'pdf': iconClass = 'fa-file-pdf'; break;
            case 'python': iconClass = 'fa-file-code'; break;
            case 'image': iconClass = 'fa-file-image'; break;
            default: iconClass = doc.icon || 'fa-file';
          }
          
          // Créer le contenu du lien avec icône
          link.innerHTML = `<i class="far ${iconClass}"></i> ${doc.name}`;
          
          // Ajouter à la section
          documentsSection.appendChild(link);
        });
      }, 300);
    };
  }
});