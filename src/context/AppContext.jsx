import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const translations = {
  fr: {
    nav: { home: "Accueil", about: "À propos", work: "Expérience", skills: "Compétences", projects: "Projets", contact: "Contact" },
    hero: {
      role: "Développeur & Expert IT",
      description: "Profil hybride alliant développement web et opérations IT. Je conçois des solutions digitales robustes et créatives, du code à l'infrastructure.",
      greeting: "Bonjour, je suis",
      cta1: "Voir mon travail",
      cta2: "Contact",
      available: "Disponible"
    },
    sections: {
      about: "À propos",
      experience: "Mon Parcours",
      skills: "Artillerie Technique",
      projects: "Réalisations", 
      contact: "Travaillons Ensemble"
    },
    work: {
      readMore: "Lire plus",
      readLess: "Fermer",
      jobs: [
        {
          id: 1,
          role: "Développeur Web Freelance (Full-stack) & Acquisition (Ads)",
          company: "Freelance",
          period: "2023 - Présent",
          description: "Je conçois et livre des sites web orientés conversion pour des commerces : de la personnalisation de templates à des projets sur mesure (vitrine ou dynamique), avec design, contenu, cadrage et mise en place des publicités.",
          details: [
            "Prospection & relation client : démarchage de commerces, qualification du besoin, négociation, cadrage et suivi de projet.",
            "Réalisation end-to-end : sites vitrines, landing pages et sites dynamiques (template optimisé ou développement sur mesure).",
            "Déploiement & mise en production : configuration de l’hébergement (serveur/plateforme), nom de domaine/DNS, certificat SSL, mise en ligne et vérifications post-release.",
            "Design & identité visuelle : maquettes haute fidélité sur Figma, déclinaison de charte graphique et cohérence UI.",
            "Architecture & contenu : arborescence, structure des pages, préparation du contenu et parcours utilisateur orienté conversion (CTA, preuves sociales, sections clés).",
            "Développement front-end : intégration responsive en HTML/CSS/JavaScript + React (composants réutilisables, performances, UX).",
            "Développement back-end / fonctionnalités : formulaires, espaces dynamiques, gestion de données, intégrations API et authentification si nécessaire (selon projet).",
            "Personnalisation de templates : adaptation complète au branding client (design, sections, contenus, performances) et livraison prête à publier.",
            "Publicité & acquisition : paramétrage et mise en ligne de campagnes Meta (Facebook/Instagram), Google Ads, TikTok Ads et Snapchat Ads.",
            "Tracking & mesure : mise en place des bases de suivi (pixels/tags), objectifs et lecture des performances pour optimiser.",
            "Documentation & livraison : cahier des charges, livrables, consignes, et accompagnement à la prise en main.",
            "Mise en production & support : déploiement, corrections, itérations et améliorations continues."
          ],
          tags: ["Figma","UI/UX","HTML5","CSS3","JavaScript","React","Responsive Design","SEO (bases)","Optimisation conversion (CRO)","Meta Ads","Google Ads","TikTok Ads","Snapchat Ads","Tracking (Pixel/Tags)","Gestion client","Prospection / Vente","Déploiement","Hébergement web","DNS"]
        },
        {
          id: 2,
          role: "Alternant Administrateur / Technicien IT",
          company: "Bibliothèques Sans Frontières",
          period: "2020 - 2022",
          description: "Pilotage de l’IT interne et du déploiement matériel/logiciel pour des équipes internationales : support, préparation d’équipements, administration Microsoft 365 et gestion des stocks/logistique.",
          details: [
            "Provisioning orienté métier : préparation des postes selon le rôle, la mission, le contexte pays et la durée d’affectation (profils, applicatifs, paramètres, niveaux d’accès).",
            "Administration Microsoft 365 + Active Directory : gestion des comptes, accès, standardisation des environnements et support N1/N2 (FR/EN).",
            "Déploiement d’équipements (PC/tablettes/téléphones) : configuration, contrôle qualité, expédition, traçabilité et passation au service logistique.",
            "Montée en charge : préparation de +300 appareils en une semaine via masterisation, déploiements en parallèle et procédures standardisées.",
            "Politiques et restrictions : cadrage des usages (installations, paramètres sensibles, demandes hors standard) via AD/GPO et administration Microsoft.",
            "Gestion de flotte mobile : enrôlement/configuration Android avec Samsung Knox (automatisé + manuel selon contraintes terrain).",
            "Migration vers Microsoft 365 : structuration des espaces par pôles (Teams/SharePoint) et création des groupes d’accès par rôle afin d’appliquer le principe du moindre privilège (accès strictement nécessaire).",
            "Gestion des habilitations : traitement des demandes d’accès (fichiers/espaces), attribution ciblée des permissions et maintien de la segmentation par équipes/canaux.",
            "Automatisation : scripts PowerShell (installations, configuration, renommage, durcissement de base) pour fiabiliser et accélérer la mise en service.",
            "Pilotage & traçabilité : suivi des demandes via Microsoft Planner (Tasks by Planner and To Do), statuts, priorisation, reporting et documentation."
          ],
          tags: ["Microsoft 365","Microsoft Planner (Tasks by Planner and To Do)","Active Directory","GPO","Exchange Online","Migration Zimbra","PowerShell","Windows / Windows Server","Déploiement / Provisioning","Samsung Knox","Support international (EN)","Asset / Inventory Management","Run & Documentation","Agile","Support international (EN)","Microsoft Sharepoint"]
        },
        {
          id: 3,
          role: "Stagiaire Technicien Support / Déploiement (2 mois)",
          company: "RSM-Consulting",
          period: "2017 - 2018",
          description: "Préparation et déploiement de postes pour des clients : installation/mises à jour, configuration et dépannage matériel/logiciel.",
          details: [
            "Préparation de parcs informatiques : installation et configuration des systèmes d’exploitation, pilotes et logiciels.",
            "Mise à jour et paramétrage des postes selon les besoins clients (comptes, droits, réseau, imprimantes).",
            "Diagnostic et résolution d’incidents : réinstallation, optimisation, remplacement de composants (RAM/SSD/HDD).",
            "Tests de bon fonctionnement avant livraison, traçabilité et suivi du matériel (inventaire, étiquetage, comptes-rendus)."
          ],
          tags: ["Windows", "Windows Server", "WSUS", "Déploiement", "Support IT"]
        }
      ]
    },
    contact: {
      title: "Me Contacter",
      subtitle: "Je suis actuellement disponible pour des projets freelance et des opportunités en CDI.",
      form: {
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer le message",
        sent: "Message Envoyer !",
        loading: "Envoi...",
        subjects: ["Proposition de projet", "Opportunité Freelance", "Juste un coucou"],
        placeholderName: "Jean Dupont",
        placeholderEmail: "jean@exemple.com",
        placeholderMessage: "Parlez-moi de votre projet..."
      }
    },
    projectsData: [
      {
        id: 1,
        title: "Pokedex Project",
        category: "Dév Web",
        image: "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tech: ["JavaScript", "HTML/CSS"],
        description: "Application web interactive consultant l'API PokeAPI pour afficher les statistiques des Pokémon.",
        link: "https://github.com/montas95100/pokemon"
      },
      {
        id: 2,
        title: "Projet BDD ESGI",
        category: "Base de données",
        image: "https://media.istockphoto.com/id/2148113350/photo/data-center-server-racks-it-modern-hardware-server-room-data-storage-center-database.jpg?s=1024x1024&w=is&k=20&c=uZhP-6i5cyG7mAQg-3Oh6UGIDaCyMJku1HrXOco1iNI=",
        tech: ["Oracle", "SQL"],
        description: "Conception et implémentation d'une base de données complexe.",
        link: "https://github.com/montas95100/bdd"
      },
      {
        id: 3,
        title: "Badminton Manager",
        category: "App Desktop",
        image: "https://images.unsplash.com/photo-1721760886493-61c47c1caec9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tech: ["C#", ".NET", "Windows Forms"],
        description: "Application gérant les équipements informatiques d'un club de badminton (Contexte M2L).",
        link: "https://github.com/montas95100/Badminton"
      },
      {
        id: 4,
        title: "Veille Juridique",
        category: "Documentation",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop",
        tech: ["Droit", "RGPD"],
        description: "Dossier de veille juridique réalisé pour le cursus.",
        link: "https://docs.google.com/document/d/1kRimi76mrLGAb1fzPPgE_PdGy1fqEM02D0xCcHPdPWs/edit?usp=sharing"
      },
      {
        id: 5,
        title: "Scripting PowerShell",
        category: "Automatisation",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2674&auto=format&fit=crop",
        tech: ["PowerShell", "Scripting"],
        description: "Scripts d'automatisation pour l'administration système.",
        link: "https://docs.google.com/document/d/1fZRU_WAGul_NsairnfR22zT-8w4S1P_cyp1vkjgXx9M/edit?usp=sharing"
      }
    ],
    footer: "Conçu & Développé avec passion."
  },
  en: {
    nav: { home: "Home", about: "About", work: "Experience", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      role: "Developer & IT Expert",
      description: "Hybrid profile blending web development with IT operations. I craft robust and creative digital solutions, from code to infrastructure.",
      greeting: "Hello, I am",
      cta1: "View Work",
      cta2: "Contact",
      available: "Available"
    },
    sections: {
      about: "About Me",
      experience: "My Journey",
      skills: "Technical Arsenal",
      projects: "Selected Works",
      contact: "Let's Work Together"
    },
    work: {
      readMore: "Read Details",
      readLess: "Close",
      jobs: [
        {
          id: 1,
          role: "Freelance Web Developer (Full-stack) & Paid Acquisition (Ads)",
          company: "Freelance",
          period: "2023 - Present",
          description:
            "I design and deliver conversion-focused websites for local businesses: from template customization to fully custom projects (showcase or dynamic), including design, content, scoping, and paid ads setup.",
          details: [
            "Prospecting & client management: outreach to local businesses, needs discovery, negotiation, project scoping, and delivery follow-up.",
            "End-to-end delivery: showcase websites, landing pages, and dynamic sites (optimized templates or custom development).",
            "Deployment & go-live: hosting/server setup (platform/VPS), domain & DNS configuration, SSL certificate, production release, and post-launch checks.",
            "Design & brand identity: high-fidelity Figma designs, brand guidelines, and consistent UI across pages.",
            "Information architecture & content: sitemap, page structure, content preparation, and conversion-oriented user journeys (CTAs, social proof, key sections).",
            "Front-end development: responsive builds using HTML/CSS/JavaScript + React (reusable components, performance, UX).",
            "Back-end development / features: forms, dynamic areas, data handling, API integrations, and authentication when needed (project-dependent).",
            "Template customization: full adaptation to the client’s branding (design, sections, content, performance) with production-ready delivery.",
            "Paid acquisition: setup and launch of campaigns on Meta (Facebook/Instagram), Google Ads, TikTok Ads, and Snapchat Ads.",
            "Tracking & measurement: implementation of tracking fundamentals (pixels/tags), goals/events, and performance monitoring for optimization.",
            "Documentation & handover: requirements/specs document, deliverables, guidelines, and onboarding support.",
            "Production support: fixes, iterations, and continuous improvements after launch."
          ],
          tags: ["Figma","UI/UX","HTML5","CSS3","JavaScript","React","Responsive Design","SEO (bases)","Optimisation conversion (CRO)","Meta Ads","Google Ads","TikTok Ads","Snapchat Ads","Tracking (Pixel/Tags)","Gestion client","Prospection / Vente","Déploiement","Hébergement web","DNS"]
        },
        {
          id: 2,
          role: "IT Administrator / IT Support Technician (Apprenticeship)",
          company: "Libraries Without Borders",
          period: "2020 - 2022",
          description: "Led internal IT operations and hardware/software deployments for international teams: user support, device preparation, Microsoft 365 administration, and logistics/asset management.",
          details: [
            "Role-based provisioning: prepared devices based on user role, mission, country context, and assignment duration (profiles, apps, settings, access levels).",
            "Microsoft 365 + Active Directory administration: account management, access control, environment standardization, and L1/L2 support (FR/EN).",
            "Device deployment (PCs/tablets/phones): configuration, QA checks, shipping readiness, asset tracking, and handoff to the logistics team.",
            "High-volume readiness: prepared 300+ devices in one week through imaging, parallel deployments, and standardized procedures.",
            "Policies & restrictions: enforced usage boundaries (installs, sensitive settings, non-standard requests) via AD/GPO and Microsoft admin tooling.",
            "Mobile fleet management: Android enrollment/configuration using Samsung Knox (automated + manual when required).",
            "Microsoft 365 migration: structured workspaces by department (Teams/SharePoint) and created role-based access groups following the principle of least privilege.",
            "Access governance: handled access requests (files/spaces), granted targeted permissions, and maintained team/channel segmentation.",
            "Automation: PowerShell scripting (software installs, configuration, renaming, basic hardening) to speed up and stabilize deployments.",
            "Operational tracking: request/status follow-up via Microsoft Planner (Tasks by Planner and To Do), prioritization, reporting, and full documentation."
          ],
          tags: ["Microsoft 365","Microsoft Planner (Tasks by Planner and To Do)","Active Directory","Group Policy (GPO)","Exchange Online","Zimbra Migration","PowerShell","Windows / Windows Server","Deployment / Provisioning","Samsung Knox","International Support (EN)","Asset / Inventory Management","Runbooks / Documentation","Agile"]
        },
        {
          id: 3,
          role: "IT Support / Deployment Technician Intern (2 months)",
          company: "RSM-Consulting",
          period: "2017 - 2018",
          description: "Prepared and deployed client workstations: OS installation/updates, configuration, and hardware/software troubleshooting.",
          details: [
            "Workstation fleet preparation: OS installation and configuration, driver setup, and software deployment.",
            "System updates and device configuration based on client requirements (user accounts, permissions, network, printers).",
            "Incident diagnosis and resolution: reimaging/reinstallation, performance optimization, and hardware upgrades (RAM/SSD/HDD).",
            "Pre-delivery QA testing, asset tracking, and maintenance follow-up (inventory, labeling, service reports)."
          ],
          tags: ["Windows", "Windows Server", "WSUS", "Deployment", "IT Support"]
        }
      ]
    },
    contact: {
      title: "Get in touch",
      subtitle: "I'm currently available for freelance projects and full-time opportunities.",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        sent: "Message Sent!",
        loading: "Sending...",
        subjects: ["Project Inquiry", "Freelance Opportunity", "Just saying hi"],
        placeholderName: "John Doe",
        placeholderEmail: "john@example.com",
        placeholderMessage: "Tell me about your project..."
      }
    },
    projectsData: [
      {
        id: 1,
        title: "Pokedex Project",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tech: ["PHP", "HTML/CSS"],
        description: "Interactive web app using PokeAPI to display Pokemon stats.",
        link: "https://github.com/montas95100/pokemon"
      },
      {
        id: 2,
        title: "ESGI DB Project",
        category: "Database",
        image: "https://media.istockphoto.com/id/2148113350/photo/data-center-server-racks-it-modern-hardware-server-room-data-storage-center-database.jpg?s=1024x1024&w=is&k=20&c=uZhP-6i5cyG7mAQg-3Oh6UGIDaCyMJku1HrXOco1iNI=",
        tech: ["Oracle", "SQL"],
        description: "Design and implementation of a complex database.",
        link: "https://github.com/montas95100/bdd"
      },
      {
        id: 3,
        title: "Badminton Manager",
        category: "Desktop App",
        image: "https://images.unsplash.com/photo-1721760886493-61c47c1caec9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tech: ["C#", ".NET", "Windows Forms"],
        description: "Desktop app managing IT equipment for a badminton club (M2L Context).",
        link: "https://github.com/montas95100/Badminton"
      },
      {
        id: 4,
        title: "Legal Watch",
        category: "Documentation",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop",
        tech: ["Law", "GDPR"],
        description: "Legal watch document produced for the curriculum.",
        link: "https://docs.google.com/document/d/1kRimi76mrLGAb1fzPPgE_PdGy1fqEM02D0xCcHPdPWs/edit?usp=sharing"
      },
      {
        id: 5,
        title: "PowerShell Scripting",
        category: "Automation",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2674&auto=format&fit=crop",
        tech: ["PowerShell", "Scripting"],
        description: "Automation scripts for system administration.",
        link: "https://docs.google.com/document/d/1fZRU_WAGul_NsairnfR22zT-8w4S1P_cyp1vkjgXx9M/edit?usp=sharing"
      }
    ],
    footer: "Designed & Developed with passion."
  }
};

export const AppProvider = ({ children }) => {
  // Theme State
  const [theme, setTheme] = useState('dark');
  
  // Language State
  const [language, setLanguage] = useState('fr');

  // Initialize Theme class on body
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleLanguage = () => setLanguage(prev => prev === 'fr' ? 'en' : 'fr');

  return (
    <AppContext.Provider value={{ 
      theme, 
      toggleTheme, 
      language, 
      toggleLanguage, 
      t: translations[language] 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
