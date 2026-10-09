// src/lib/data.ts

export interface TimelineItem {
  title: string;
  place: string;
  desc: string;
}

export interface SkillCategory {
  category: string;
  tags: string[];
}

export interface ProjectItem {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface CertificationItem {
  title: string;
  fileUrl: string;
}

export interface CVDataType {
  personal: {
    name: string;
    lastName: string;
    title: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    photoUrl: string; // <-- Ajout de la photo
  };
  about: {
    paragraphs: string[];
    qualities: string[];
  };
  timeline: TimelineItem[];
  certifications: CertificationItem[]; // <-- Modification ici
  skills: SkillCategory[];
  projects: ProjectItem[];
}

export const cvData: CVDataType = {
  personal: {
    name: "DJOKO Tanguy",
    lastName: "Mawougnon Ezékiel",
    title: "Étudiant en Administration des Réseaux & Cybersécurité",
    description: "Passionné par les infrastructures IT, la sécurité des systèmes et le développement web. Je construis des solutions fiables et je reste en veille permanente sur les technologies émergentes.",
    email: "djokotanguy@gmail.com",
    phone: "+229 01 41 76 51 57",
    location: "Abomey-Calavi, Bénin",
    photoUrl: "/images/profile.jpg", // <-- Le chemin de ta photo
  },
  about: {
    paragraphs: [
      "Étudiant béninois en fin de formation en Administration des Réseaux Informatiques à l’ENEAM, je suis animé par une forte curiosité technique et le désir de contribuer à des infrastructures robustes et sécurisées.",
      "Mon parcours m’a permis d’acquérir des bases solides en réseaux, cybersécurité, développement web et initiation à l’Intelligence Artificielle. Je privilégie la rigueur, l’autonomie et le travail en équipe.",
      "En dehors de l’informatique, je pratique le volleyball et la course à pied — des activités qui renforcent ma discipline et mon esprit d’équipe."
    ],
    qualities: [
      "Motivation & curiosité", 
      "Rigueur et autonomie", 
      "Esprit d’analyse", 
      "Travail en équipe", 
      "Volonté d’apprendre"
    ]
  },
  timeline: [
    { 
      title: "Administration des Réseaux Informatiques", 
      place: "ENEAM · En cours", 
      desc: "Formation complète en administration réseau, systèmes et sécurité informatique." 
    },
    { 
      title: "Baccalauréat (BAC)", 
      place: "2022 – 2023", 
      desc: "" 
    },
    { 
      title: "Brevet d’Études du Premier Cycle (BEPC)", 
      place: "2019 – 2020", 
      desc: "" 
    }
  ],
  // TES CERTIFICATIONS CLIQUABLES
  certifications: [
    { title: "Introduction à la cybersécurité", fileUrl: "/documents/certs/cybersecurite.pdf" },
    { title: "Notion de base réseaux", fileUrl: "/documents/certs/base-reseaux.pdf" },
    //{ title: "Network Foundations", fileUrl: "/documents/certs/network-foundations.pdf" },
    { title: "Introduction to Networking", fileUrl: "/documents/certs/intro-networking.pdf" },
    //{ title: "Introduction to Penetration Testing", fileUrl: "/documents/certs/pentesting.pdf" },
    { title: "Sécurité de l’IA et gestion des risques", fileUrl: "/documents/certs/securite-ia.pdf" },
    { title: "Responsive Web Design", fileUrl: "/documents/certs/responsive-web.pdf" },
    { title: "Machine Learning ", fileUrl: "/documents/certs/machine-learning.pdf" },
    { title: "LLM", fileUrl: "/documents/certs/llm.pdf" },
    { title: "L'IA pour le travail", fileUrl: "/documents/certs/ai-work.pdf" },
    { title: "IA générative", fileUrl: "/documents/certs/ia-generatrice.pdf" },
    { title: "Éthique de l’IA", fileUrl: "/documents/certs/ethique-ia.pdf" },
    { title: "Python_Essentiels", fileUrl: "/documents/certs/Python_Essentials_1_Netcard.pdf" }

  ],
  skills: [
    { category: "Réseaux & Sécurité", tags: ["Réseaux informatiques", "Cybersécurité", "Administration réseau", "Sécurité des systèmes"] },
    { category: "Développement", tags: ["HTML / CSS", "JavaScript", "Next.js", "Python"] },
    { category: "Données & Outils", tags: ["SQL", "Visual Studio Code", "Git"] },
    { category: "Intelligence Artificielle", tags: ["Machine Learning", "LLM", "IA générative", "Éthique de l’IA"] }
  ],
  projects: [
    { 
      icon: "🌐", 
      title: "Conception d’un réseau de petite taille", 
      desc: "Conception et schématisation d’un réseau domestique / petite entreprise : routage, switching, points d’accès Wi-Fi et segmentation basique.", 
      tags: ["Réseaux", "Infrastructure"] 
    },
    { 
      icon: "💻", 
      title: "Projets web personnels", 
      desc: "Développement de sites et interfaces avec HTML, CSS et Next.js. Focus sur le responsive design, la performance et l’expérience utilisateur.", 
      tags: ["HTML/CSS", "Next.js", "Frontend"] 
    },
    { 
      icon: "🔒", 
      title: "Veille cybersécurité & IA", 
      desc: "Suivi permanent des bonnes pratiques de sécurité, des vulnérabilités et des évolutions de l’intelligence artificielle appliquée aux systèmes d’information.", 
      tags: ["Cybersécurité", "IA", "Veille"] 
    }
  ]
};