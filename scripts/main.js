// ==============================
// 🌱 Sélection des éléments
// ==============================
const wrapper = document.querySelector('.wrapper');
// ==============================
// 🧠 Variables globales
// ==============================
const centreDeFormation = {
  nom: "Bruxelles Formation",
  adresse: "Rue des Compétences, 42, 1000 Bruxelles",
  formations: [
    {
      nom: "Fullstack JS",
      duree: "4 mois",
      lieu: "Bruxelles",
      formateur: "Olivier C.",
      modules: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    },
    {
      nom: "UX/UI Design",
      duree: "3 mois",
      lieu: "Charleroi",
      formateur: "Charlotte B.",
      modules: ["Figma", "Design System", "Accessibilité", "Tests utilisateurs"],
    },
    {
      nom: "WordPress & SEO",
      duree: "2 mois",
      lieu: "Liège",
      formateur: "Luc D.",
      modules: ["WordPress", "SEO", "Yoast", "Performance", "Pagespeed"],
    },
    {
      nom: "Data Analyst",
      duree: "5 mois",
      lieu: "Namur",
      formateur: "Hassan T.",
      modules: ["Excel", "SQL", "Python", "Power BI"],
    },
    {
      nom: "Webdesign",
      duree: "3 mois",
      lieu: "Mons",
      formateur: "Sophie M.",
      modules: ["Photoshop", "Illustrator", "Figma", "UI Kits"],
    },
    {
      nom: "Python pour débutants",
      duree: "2 mois",
      lieu: "Bruxelles",
      formateur: "Dimitri P.",
      modules: ["Variables", "Boucles", "Fonctions", "Fichiers"],
    },
    {
      nom: "DevOps & Cloud",
      duree: "4 mois",
      lieu: "Liège",
      formateur: "Jérôme V.",
      modules: ["Linux", "Docker", "Git", "CI/CD", "AWS"],
    },
    {
      nom: "Marketing Digital",
      duree: "3 mois",
      lieu: "Namur",
      formateur: "Amandine R.",
      modules: ["Social Media", "Emailing", "Google Ads", "Analytics"],
    },
    {
      nom: "Java avancé",
      duree: "4 mois",
      lieu: "Charleroi",
      formateur: "Marc S.",
      modules: ["POO", "Collections", "Streams", "Spring Boot"],
    },
    {
      nom: "Cybersécurité",
      duree: "3 mois",
      lieu: "Bruxelles",
      formateur: "Thierry N.",
      modules: ["Réseaux", "Cryptographie", "Tests d’intrusion"],
    },
    {
      nom: "Développement mobile",
      duree: "3 mois",
      lieu: "Liège",
      formateur: "Inès G.",
      modules: ["Flutter", "React Native", "Firebase"],
    },
    {
      nom: "Intégration Web",
      duree: "2 mois",
      lieu: "Mons",
      formateur: "Benoît F.",
      modules: ["HTML", "CSS", "SASS", "Responsive"],
    },
    {
      nom: "Gestion de projet Agile",
      duree: "1 mois",
      lieu: "Namur",
      formateur: "Florence T.",
      modules: ["Scrum", "Kanban", "Jira", "Méthodes Agiles"],
    },
    {
      nom: "Test logiciel",
      duree: "2 mois",
      lieu: "Charleroi",
      formateur: "Khaled M.",
      modules: ["Unit Testing", "Automatisation", "Selenium"],
    },
    {
      nom: "Business Intelligence",
      duree: "4 mois",
      lieu: "Bruxelles",
      formateur: "Nathalie P.",
      modules: ["SQL", "Data Viz", "Power BI", "Dashboarding"],
    }
  ]
};
// ==============================
// 🎊 Fonctionnalités
// ==============================

for (let i of centreDeFormation.formations) {
  const div = document.createElement('div');
  const modules = document.createElement('ul');
  i.modules.forEach((module) => {
    const li = document.createElement('li');
    li.textContent = module;
    modules.append(li);
  })
  div.className = "card";
  div.innerHTML =
  `
  <h2>${i.nom}</h2>
  <div class="duree">${i.duree}</div>
  <h3>Modules :</h3>
  `;
  wrapper.append(div);
  div.append(modules);
}

// ==============================
// 🧲 Événements
// ==============================