export const portfolio = {
    fr: {
        profile: {
            name: 'VLASOV Oleksandr',
            title: 'Étudiant ingénieur IA & Data Science',
            summary:
                "Étudiant ingénieur passionné par l'IA et la Data Science, je recherche une alternance de 2 ans dès septembre 2026 dans les domaines : Data Science, Data Analysis, Big Data, IA & ML, Data Engineering, IoT dev.",
            location: 'Troyes, France',
            availability: 'Alternance 2 ans dès septembre 2026',
        },
        contacts: {
            phone: '+33 7 67 34 23 88',
            email: 'sashanext18@gmail.com',
            instagram: 'https://www.instagram.com/sanjous1k/',
            linkedin: 'https://www.linkedin.com/in/vlasov-utt/',
            github: 'https://github.com/Sanjouk',
        },
        nav: {
            home: 'Accueil',
            about: 'À propos',
            projects: 'Projets',
            resume: 'CV',
            contact: 'Contact',
        },
        hero: {
            greeting: 'Bonjour, je suis',
            subtitle: 'Étudiant ingénieur IA & Data Science',
            description:
                "À la recherche d'une alternance de 2 ans dès septembre 2026 en Data Science, IA & ML, Data Engineering.",
            cta1: 'Voir les projets',
            cta2: 'Télécharger CV',
        },
        highlights: [
            {
                title: 'RAG & LLM',
                description: 'Agents conversationnels, retrieval-augmented generation, intégration Ollama.',
            },
            {
                title: 'ML Pipelines',
                description: 'Modèles de machine learning, scikit-learn, TensorFlow, prédiction.',
            },
            {
                title: 'REST & Docker',
                description: 'APIs FastAPI, conteneurisation Docker, déploiement automatisé.',
            },
            {
                title: 'Data Engineering',
                description: 'Pipelines de données, ETL, bases de données, automatisation.',
            },
        ],
        featuredTitle: 'Projets mis en avant',
        sections: {
            aboutMe: 'À propos de moi',
            aboutMeText:
                "Étudiant ingénieur à l'UTT (Université de Technologie de Troyes) en Systèmes Numériques, spécialisé en IA et Data Science. Passionné par le machine learning, le deep learning et l'ingénierie des données, je construis des projets concrets alliant recherche et déploiement. Je suis actuellement en quête d'une alternance de 2 ans pour approfondir mes compétences en entreprise.",
            whatIDo: 'Ce que je fais',
            skills: 'Compétences',
            languages: 'Langues',
            strengths: 'Atouts',
            projects: 'Projets',
            education: 'Formation',
            experience: 'Expérience',
            interests: "Centres d'intérêt",
            contact: 'Contact',
            openTo: 'Ouvert aux opportunités',
            openToText:
                "Je recherche une alternance de 2 ans dès septembre 2026 dans les domaines Data Science / IA & ML / Data Engineering. N'hésitez pas à me contacter !",
        },
        whatIDo: [
            {
                title: 'Machine Learning',
                description: 'Classification, régression, clustering, feature engineering, évaluation de modèles.',
                icon: 'Brain',
            },
            {
                title: 'Deep Learning & CV',
                description: 'Réseaux de neurones, TensorFlow, PyTorch, vision par ordinateur.',
                icon: 'Eye',
            },
            {
                title: 'Data Engineering',
                description: 'Pipelines ETL, bases de données SQL/NoSQL, automatisation, orchestration.',
                icon: 'Database',
            },
            {
                title: 'Déploiement',
                description: 'APIs REST (FastAPI), Docker, notions AWS/Azure, CI/CD.',
                icon: 'Cloud',
            },
        ],
        skills: [
            {
                category: 'Python',
                items: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'FastAPI', 'Flask', 'OpenCV', 'YOLO', 'MediaPipe'],
            },
            {
                category: 'Machine Learning',
                items: [
                    'Modélisation supervisée',
                    'Modélisation non supervisée',
                    'Random Forest',
                    'Gradient Boosting',
                    'SVM',
                    'Validation croisée',
                ],
            },
            {
                category: 'Deep Learning & LLM',
                items: ['Réseaux de neurones', 'TensorFlow', 'PyTorch', 'Keras', 'RAG', 'Ollama', 'OpenAI'],
            },
            {
                category: 'Bases de données (SGBD & NoSQL)',
                items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'ChromaDB'],
            },
            {
                category: 'Cloud & DevOps',
                items: ['Docker', 'Kubernetes (notions)', 'Terraform (notions)', 'AWS (notions)', 'Azure (notions)'],
            },
            {
                category: 'Programmation',
                items: ['Java', 'JavaScript', 'SQL', 'HTML/CSS', 'REST API', 'ETL', 'Data pipelines'],
            },
            {
                category: 'Outils',
                items: [
                    'GitHub',
                    'Postman',
                    'VS Code',
                    'Linux',
                    'Jira',
                    'Power BI',
                    'Excel',
                    'PowerPoint',
                    'Word',
                    'Notion',
                ],
            },
            {
                category: 'Analyse de données',
                items: ['EDA', 'Prétraitement des données', 'Feature engineering', 'Évaluation des performances'],
            },
        ],
        languages: [
            { name: 'Ukrainien', level: 'Natif', percent: 100 },
            { name: 'Russe', level: 'Natif', percent: 100 },
            { name: 'Français', level: 'C1', percent: 85 },
            { name: 'Anglais', level: 'B2', percent: 70 },
        ],
        strengths: [
            {
                title: 'Challenger',
                description: "J'aime me dépasser et relever des défis techniques complexes.",
            },
            {
                title: 'Curieux',
                description: 'Toujours en veille technologique, j\'explore de nouvelles technologies.',
            },
            {
                title: 'Bon relationnel',
                description: 'Communicatif et à l\'écoute, je travaille efficacement en équipe.',
            },
        ],
        projects: [
            {
                slug: 'agent-conversationnel-rag',
                title: 'Agent conversationnel imitant un utilisateur (RAG)',
                description:
                    "Système RAG complet permettant de simuler un utilisateur via un agent conversationnel. Utilise l'ingestion de documents, l'indexation vectorielle et la génération augmentée par récupération.",
                tech: ['Python', 'FastAPI', 'Ollama', 'ChromaDB', 'Docker'],
                features: [
                    'Ingestion et chunking automatique de documents',
                    'Indexation vectorielle avec ChromaDB',
                    'Génération de réponses via Ollama (LLM local)',
                    'API REST avec FastAPI',
                    'Conteneurisation Docker complète',
                ],
                featured: true,
                github: 'https://github.com/Sanjouk/Local-LLM-assistant',
                live: '#',
            },
            {
                slug: 'tracker-candidatures',
                title: 'Tracker de candidatures',
                description:
                    "Application de suivi automatisé des candidatures d'emploi. Récupère les emails, extrait les informations clés et les organise dans un tableau de bord.",
                tech: ['Python', 'Gmail API', 'Google Sheets API', 'Docker', 'SQLite', 'Ollama'],
                features: [
                    'Récupération automatique des emails via Gmail API',
                    'Extraction d\'informations par LLM (Ollama)',
                    'Synchronisation avec Google Sheets',
                    'Stockage local SQLite',
                    'Pipeline Docker automatisé',
                ],
                featured: true,
                github: 'https://github.com/Sanjouk/job-tracker',
                live: '#',
            },
            {
                slug: 'prediction-insuffisance-cardiaque',
                title: "Prédiction d'insuffisance cardiaque",
                description:
                    "Projet de machine learning pour la prédiction de l'insuffisance cardiaque à partir de données médicales. Comparaison de plusieurs modèles et analyse des features.",
                tech: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas'],
                features: [
                    'Analyse exploratoire des données médicales',
                    'Prétraitement et feature engineering',
                    'Comparaison de modèles (Random Forest, XGBoost, NN)',
                    'Évaluation avec métriques cliniques',
                    'Visualisations interprétables (SHAP)',
                ],
                featured: true,
                github: 'https://github.com/Sanjouk/IA01-Project',
                live: '#',
            },
            {
                slug: 'smart-home-iot-system',
                title: 'Système de maison intelligente (IoT)',
                description:
                    'Plateforme IoT pour superviser et piloter des capteurs et actionneurs domestiques en temps réel via MQTT, avec backend Flask et stockage MongoDB.',
                tech: ['ESP32', 'MQTT', 'Flask', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
                features: [
                    'Architecture publish/subscribe MQTT entre ESP32, broker et serveur',
                    'API REST Flask pour le pilotage des équipements et l’historisation des mesures',
                    'Modélisation MongoDB pour les états des appareils et les séries temporelles',
                    'Interface web responsive pour commandes manuelles et scénarios automatisés',
                    'Monitoring temps réel avec gestion des pertes de connexion',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/Connected-WeatherStation',
                live: '#',
            },
            {
                slug: 'vigilance-detection-system',
                title: 'Système de détection du niveau de vigilance',
                description:
                    'Analyse vidéo temps réel basée sur l’EAR, le MAR et l’estimation de la pose de la tête afin de détecter la somnolence et l’inattention.',
                tech: ['Python', 'OpenCV', 'MediaPipe'],
                features: [
                    'Détection des points faciaux et suivi continu des yeux et de la bouche',
                    'Calcul en continu des indicateurs EAR et MAR',
                    'Estimation de l’orientation de la tête pour identifier les phases de distraction',
                    'Score de vigilance combinant plusieurs signaux physiologiques',
                    'Alertes visuelles et sonores en cas de baisse du niveau de vigilance',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/driver-vigilance-detection-system',
                live: '#',
            },
            {
                slug: 'jest-card-game',
                title: 'Jeu de cartes « Jest »',
                description:
                    'Application Java orientée objet construite autour d’une architecture MVC avec design patterns pour garantir extensibilité, maintenabilité et qualité de code.',
                tech: ['Java', 'MVC', 'Strategy', 'Factory', 'Visitor', 'Multithreading'],
                features: [
                    'Architecture MVC séparant clairement règles métier, logique et interface',
                    'Utilisation des patterns Strategy, Factory et Visitor pour étendre les mécaniques',
                    'Système de persistance pour sauvegarder les parties et profils joueurs',
                    'Gestion du multithreading pour fluidifier les actions concurrentes',
                    'Code modulaire avec classes réutilisables et tests unitaires de base',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/Jest',
                live: '#',
            },
            {
                slug: 'telegram-automation-bot',
                title: 'Bot Telegram d’automatisation',
                description:
                    'Bot Python développé avec aiogram, connecté à plusieurs API et à une base SQLite pour orchestrer les flux utilisateurs et automatiser des tâches.',
                tech: ['Python', 'aiogram', 'SQLite', 'Telegram Bot API', 'REST API'],
                features: [
                    'Gestion d’états conversationnels pour des scénarios multi-étapes',
                    'Intégration de plusieurs API externes via des handlers dédiés',
                    'Stockage SQLite des profils, préférences et historiques de requêtes',
                    'Automatisation de notifications et de rappels selon des règles métier',
                    'Journalisation des actions pour le suivi et le débogage',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/telegram_bot',
                live: '#',
            },
            {
                slug: 'banking-system-web-simulator',
                title: 'Application web simulant un système bancaire',
                description:
                    'Application web reproduisant les fonctionnalités essentielles d’un espace bancaire avec authentification sécurisée et gestion complète des comptes. Utilise des bases de données SQL.',
                tech: ['SQL', 'JavaScript', 'HTML', 'CSS'],
                features: [
                    'Authentification sécurisée avec sessions, rôles et contrôle d’accès',
                    'Validation des données côté client et côté serveur',
                    'Gestion des comptes, opérations et historique de transactions',
                    'Interactions SQL structurées avec contrôles de cohérence des écritures',
                    'Interface utilisateur claire pour la simulation des parcours bancaires',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/project',
                live: '#',
            },
        ],
        education: [
            {
                title: 'Ingénieur Système Numérique',
                institution: 'UTT — Université de Technologie de Troyes',
                period: '2022 – 2028',
                location: 'Troyes, France',
                description: "Formation d'ingénieur avec spécialisation en IA et Data Science. Projets pratiques, stages et alternance.",
            },
            {
                title: 'Ingénieur en Cybersécurité',
                institution: 'NTU "KhPI" — National Technical University',
                period: '2021 – 2025',
                location: 'En ligne',
                description: "Formation en ingénierie informatique avec spécialisation en cybersécurité. Cours suivis en parallèle.",
            },
        ],
        experience: [
            {
                title: 'Stage ouvrier',
                company: 'Chronodrive',
                period: 'Stage ouvrier',
                location: 'France',
                description:
                    "Stage ouvrier chez Chronodrive dans le secteur de la distribution : immersion terrain, préparation de commandes et découverte des processus logistiques.",
            },
            {
                title: 'Agent immobilier',
                company: 'Cabinet juridique “Vsesvit”',
                period: 'Expérience professionnelle',
                location: 'Ukraine',
                description: "Gestion de la relation client, négociation, et accompagnement dans les transactions immobilières.",
            },
            {
                title: 'Volontaire — Compétitions de natation',
                company: 'Bénévolat',
                period: 'Volontariat',
                location: 'Ukraine',
                description: "Organisation et assistance lors de compétitions de natation. Coordination d'équipe et gestion d'événements.",
            },
        ],
        interests: [
            { title: 'Natation', description: '17 ans de pratique', icon: 'Waves' },
            { title: 'E-sport', description: 'CS2 — compétition et stratégie', icon: 'Gamepad2' },
            { title: 'Formule 1', description: 'Passion pour la F1 et l\'ingénierie automobile', icon: 'Trophy' },
        ],
        contactForm: {
            name: 'Nom',
            email: 'Email',
            message: 'Message',
            send: 'Envoyer',
            sending: 'Envoi...',
            success: 'Message envoyé avec succès !',
            submitError: "Échec de l'envoi. Veuillez réessayer.",
            error: 'Veuillez remplir tous les champs.',
        },
        footer: {
            rights: '© 2026 Vlasov Oleksandr. Tous droits réservés.',
        },
        search: 'Rechercher un projet...',
        filterAll: 'Tous',
        viewProject: 'Voir le projet',
        keyFeatures: 'Fonctionnalités clés',
        techStack: 'Stack technique',
        close: 'Fermer',
        noResults: 'Aucun projet trouvé.',
    },
    en: {
        profile: {
            name: 'VLASOV Oleksandr',
            title: 'AI & Data Science Engineering Student',
            summary:
                'Engineering student passionate about AI and Data Science, seeking a 2-year apprenticeship starting September 2026 in: Data Science, Data Analysis, Big Data, AI & ML, Data Engineering, IoT dev.',
            location: 'Troyes, France',
            availability: '2-year apprenticeship from September 2026',
        },
        contacts: {
            phone: '+33 7 67 34 23 88',
            email: 'sashanext18@gmail.com',
            instagram: 'https://www.instagram.com/sanjous1k/',
            linkedin: 'https://www.linkedin.com/in/vlasov-utt/',
            github: 'https://github.com/Sanjouk',
        },
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            resume: 'Resume',
            contact: 'Contact',
        },
        hero: {
            greeting: "Hi, I'm",
            subtitle: 'AI & Data Science Engineering Student',
            description:
                'Looking for a 2-year apprenticeship starting September 2026 in Data Science, AI & ML, Data Engineering.',
            cta1: 'View Projects',
            cta2: 'Download CV',
        },
        highlights: [
            {
                title: 'RAG & LLM',
                description: 'Conversational agents, retrieval-augmented generation, Ollama integration.',
            },
            {
                title: 'ML Pipelines',
                description: 'Machine learning models, scikit-learn, TensorFlow, prediction.',
            },
            {
                title: 'REST & Docker',
                description: 'FastAPI APIs, Docker containerization, automated deployment.',
            },
            {
                title: 'Data Engineering',
                description: 'Data pipelines, ETL, databases, automation.',
            },
        ],
        featuredTitle: 'Featured Projects',
        sections: {
            aboutMe: 'About Me',
            aboutMeText:
                'Engineering student at UTT (University of Technology of Troyes) in Digital Systems, specializing in AI and Data Science. Passionate about machine learning, deep learning and data engineering, I build practical projects combining research and deployment. Currently looking for a 2-year apprenticeship to deepen my skills in industry.',
            whatIDo: 'What I Do',
            skills: 'Skills',
            languages: 'Languages',
            strengths: 'Strengths',
            projects: 'Projects',
            education: 'Education',
            experience: 'Experience',
            interests: 'Interests',
            contact: 'Contact',
            openTo: 'Open to Opportunities',
            openToText:
                "I'm looking for a 2-year apprenticeship starting September 2026 in Data Science / AI & ML / Data Engineering. Feel free to reach out!",
        },
        whatIDo: [
            {
                title: 'Machine Learning',
                description: 'Classification, regression, clustering, feature engineering, model evaluation.',
                icon: 'Brain',
            },
            {
                title: 'Deep Learning & CV',
                description: 'Neural networks, TensorFlow, PyTorch, computer vision.',
                icon: 'Eye',
            },
            {
                title: 'Data Engineering',
                description: 'ETL pipelines, SQL/NoSQL databases, automation, orchestration.',
                icon: 'Database',
            },
            {
                title: 'Deployment',
                description: 'REST APIs (FastAPI), Docker, AWS/Azure basics, CI/CD.',
                icon: 'Cloud',
            },
        ],
        skills: [
            {
                category: 'Python',
                items: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'FastAPI', 'Flask', 'OpenCV', 'YOLO', 'MediaPipe'],
            },
            {
                category: 'Machine Learning',
                items: [
                    'Supervised Learning',
                    'Unsupervised Learning',
                    'Random Forest',
                    'Gradient Boosting',
                    'SVM',
                    'Cross-Validation',
                ],
            },
            {
                category: 'Deep Learning & LLM',
                items: ['Neural Networks', 'TensorFlow', 'PyTorch', 'Keras', 'RAG', 'Ollama', 'OpenAI'],
            },
            {
                category: 'Databases (RDBMS & NoSQL)',
                items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'ChromaDB'],
            },
            {
                category: 'Cloud & DevOps',
                items: ['Docker', 'Kubernetes (basics)', 'Terraform (basics)', 'AWS (basics)', 'Azure (basics)'],
            },
            {
                category: 'Programming',
                items: ['Java', 'JavaScript', 'SQL', 'HTML/CSS', 'REST API', 'ETL', 'Data pipelines'],
            },
            {
                category: 'Tools',
                items: [
                    'GitHub',
                    'Postman',
                    'VS Code',
                    'Linux',
                    'Jira',
                    'Power BI',
                    'Excel',
                    'PowerPoint',
                    'Word',
                    'Notion',
                ],
            },
            {
                category: 'Data Analysis',
                items: ['EDA', 'Data Preprocessing', 'Feature Engineering', 'Performance Evaluation'],
            },
        ],
        languages: [
            { name: 'Ukrainian', level: 'Native', percent: 100 },
            { name: 'Russian', level: 'Native', percent: 100 },
            { name: 'French', level: 'C1', percent: 85 },
            { name: 'English', level: 'B2', percent: 70 },
        ],
        strengths: [
            {
                title: 'Challenger',
                description: 'I love pushing boundaries and tackling complex technical challenges.',
            },
            {
                title: 'Curious',
                description: 'Always on the lookout for new technologies and best practices.',
            },
            {
                title: 'Team Player',
                description: 'Communicative and attentive, I work effectively in teams.',
            },
        ],
        projects: [
            {
                slug: 'agent-conversationnel-rag',
                title: 'Conversational Agent Simulating a User (RAG)',
                description:
                    'Complete RAG system to simulate a user via a conversational agent. Uses document ingestion, vector indexing and retrieval-augmented generation.',
                tech: ['Python', 'FastAPI', 'Ollama', 'ChromaDB', 'Docker'],
                features: [
                    'Automatic document ingestion and chunking',
                    'Vector indexing with ChromaDB',
                    'Response generation via Ollama (local LLM)',
                    'REST API with FastAPI',
                    'Full Docker containerization',
                ],
                featured: true,
                github: 'https://github.com/Sanjouk/Local-LLM-assistant',
                live: '#',
            },
            {
                slug: 'tracker-candidatures',
                title: 'Job Application Tracker',
                description:
                    'Automated job application tracking app. Fetches emails, extracts key information and organizes them in a dashboard.',
                tech: ['Python', 'Gmail API', 'Google Sheets API', 'Docker', 'SQLite', 'Ollama'],
                features: [
                    'Automatic email retrieval via Gmail API',
                    'Information extraction via LLM (Ollama)',
                    'Google Sheets synchronization',
                    'Local SQLite storage',
                    'Automated Docker pipeline',
                ],
                featured: true,
                github: 'https://github.com/Sanjouk/job-tracker',
                live: '#',
            },
            {
                slug: 'prediction-insuffisance-cardiaque',
                title: 'Heart Failure Prediction',
                description:
                    'Machine learning project to predict heart failure from medical data. Comparison of multiple models and feature analysis.',
                tech: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas'],
                features: [
                    'Exploratory analysis of medical data',
                    'Preprocessing and feature engineering',
                    'Model comparison (Random Forest, XGBoost, NN)',
                    'Evaluation with clinical metrics',
                    'Interpretable visualizations (SHAP)',
                ],
                featured: true,
                github: 'https://github.com/Sanjouk/IA01-Project',
                live: '#',
            },
            {
                slug: 'smart-home-iot-system',
                title: 'Smart Home System (IoT)',
                description:
                    'IoT platform to monitor and control home sensors and actuators in real time through MQTT, with a Flask backend and MongoDB persistence.',
                tech: ['ESP32', 'MQTT', 'Flask', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
                features: [
                    'MQTT publish/subscribe architecture between ESP32 devices, broker and server',
                    'Flask REST API for device control and telemetry history',
                    'MongoDB schema for device states and time-series measurements',
                    'Responsive web UI for manual control and automation scenarios',
                    'Real-time monitoring with connection-loss handling',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/Connected-WeatherStation',
                live: '#',
            },
            {
                slug: 'vigilance-detection-system',
                title: 'Driver Vigilance Detection System',
                description:
                    'Real-time video analysis using EAR, MAR and head-pose estimation to detect drowsiness and attention drops.',
                tech: ['Python', 'OpenCV', 'MediaPipe'],
                features: [
                    'Face landmark detection and continuous tracking of eyes and mouth',
                    'Real-time computation of EAR and MAR indicators',
                    'Head orientation estimation to identify distraction periods',
                    'Composite vigilance score combining multiple biometric signals',
                    'Visual and audio alerts when vigilance decreases',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/driver-vigilance-detection-system',
                live: '#',
            },
            {
                slug: 'jest-card-game',
                title: '“Jest” Card Game',
                description:
                    'Object-oriented Java application built with an MVC architecture and design patterns to keep the code extensible, maintainable and production-ready.',
                tech: ['Java', 'MVC', 'Strategy', 'Factory', 'Visitor', 'Multithreading'],
                features: [
                    'MVC structure separating game rules, business logic and presentation',
                    'Strategy, Factory and Visitor patterns for scalable gameplay mechanics',
                    'Persistence layer to save games and player profiles',
                    'Multithreading support for smooth concurrent game actions',
                    'Modular codebase with reusable classes and baseline unit tests',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/Jest',
                live: '#',
            },
            {
                slug: 'telegram-automation-bot',
                title: 'Telegram Automation Bot',
                description:
                    'Python bot built with aiogram, connected to multiple APIs and an SQLite database to orchestrate user flows and automate recurring tasks.',
                tech: ['Python', 'aiogram', 'SQLite', 'Telegram Bot API', 'REST API'],
                features: [
                    'State-based conversation flows for multi-step scenarios',
                    'Integration of multiple third-party APIs through dedicated handlers',
                    'SQLite storage for users, preferences and request history',
                    'Automated notifications and reminders driven by business rules',
                    'Action logging for monitoring and easier debugging',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/telegram_bot',
                live: '#',
            },
            {
                slug: 'banking-system-web-simulator',
                title: 'Banking System Web Simulator',
                description:
                    'Web application simulating core online banking workflows with secure authentication and complete account management. Uses SQL databases.',
                tech: ['SQL', 'JavaScript', 'HTML', 'CSS'],
                features: [
                    'Secure authentication with sessions, roles and access control',
                    'Client-side and server-side data validation',
                    'Account operations, transfers and transaction history',
                    'Structured SQL interactions with consistency checks',
                    'Clean user interface to simulate realistic banking journeys',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/project',
                live: '#',
            },
        ],
        education: [
            {
                title: 'Digital Systems Engineer',
                institution: 'UTT — University of Technology of Troyes',
                period: '2022 – 2028',
                location: 'Troyes, France',
                description: 'Engineering degree with specialization in AI and Data Science. Practical projects, internships and apprenticeships.',
            },
            {
                title: 'Cybersecurity Engineer',
                institution: 'NTU "KhPI" — National Technical University',
                period: '2021 – 2025',
                location: 'Online',
                description: 'Computer engineering degree with cybersecurity specialization. Courses taken in parallel.',
            },
        ],
        experience: [
            {
                title: 'Shop-floor Internship',
                company: 'Chronodrive',
                period: 'Shop-floor Internship',
                location: 'France',
                description:
                    'Shop-floor internship at Chronodrive in retail distribution: hands-on exposure to order preparation and logistics workflows.',
            },
            {
                title: 'Real Estate Agent',
                company: 'Vsesvit Law Firm',
                period: 'Work Experience',
                location: 'Ukraine',
                description: 'Client relationship management, negotiation, and support in real estate transactions.',
            },
            {
                title: 'Volunteer — Swimming Competitions',
                company: 'Volunteering',
                period: 'Volunteer Work',
                location: 'Ukraine',
                description: 'Organization and assistance at swimming competitions. Team coordination and event management.',
            },
        ],
        interests: [
            { title: 'Swimming', description: '17 years of practice', icon: 'Waves' },
            { title: 'E-sport', description: 'CS2 — competition and strategy', icon: 'Gamepad2' },
            { title: 'Formula 1', description: 'Passion for F1 and automotive engineering', icon: 'Trophy' },
        ],
        contactForm: {
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send',
            sending: 'Sending...',
            success: 'Message sent successfully!',
            submitError: 'Message could not be sent. Please try again.',
            error: 'Please fill in all fields.',
        },
        footer: {
            rights: '© 2026 Vlasov Oleksandr. All rights reserved.',
        },
        search: 'Search projects...',
        filterAll: 'All',
        viewProject: 'View project',
        keyFeatures: 'Key Features',
        techStack: 'Tech Stack',
        close: 'Close',
        noResults: 'No projects found.',
    },
    ru: {
        profile: {
            name: 'ВЛАСОВ Александр',
            title: 'Студент-инженер ИИ и Data Science',
            summary:
                'Я студент инженерного направления в области ИИ и Data Science. Ищу двухлетнюю стажировку с сентября 2026 года в сферах Data Science, Data Analysis, Big Data, AI & ML, Data Engineering и IoT.',
            location: 'Труа, Франция',
            availability: '2-летняя стажировка с сентября 2026',
        },
        contacts: {
            phone: '+33 7 67 34 23 88',
            email: 'sashanext18@gmail.com',
            instagram: 'https://www.instagram.com/sanjous1k/',
            linkedin: 'https://www.linkedin.com/in/vlasov-utt/',
            github: 'https://github.com/Sanjouk',
        },
        nav: {
            home: 'Главная',
            about: 'Обо мне',
            projects: 'Проекты',
            resume: 'Резюме',
            contact: 'Контакты',
        },
        hero: {
            greeting: 'Здравствуйте, я',
            subtitle: 'Студент-инженер ИИ и Data Science',
            description:
                'Ищу 2-летнюю стажировку с сентября 2026 года в Data Science, AI & ML, Data Engineering.',
            cta1: 'Смотреть проекты',
            cta2: 'Скачать CV',
        },
        highlights: [
            {
                title: 'RAG & LLM',
                description: 'Диалоговые агенты, retrieval-augmented generation, интеграция Ollama.',
            },
            {
                title: 'ML Pipelines',
                description: 'Модели машинного обучения, scikit-learn, TensorFlow, прогнозирование.',
            },
            {
                title: 'REST & Docker',
                description: 'API на FastAPI, контейнеризация Docker, автоматизированное развёртывание.',
            },
            {
                title: 'Data Engineering',
                description: 'Пайплайны данных, ETL, базы данных, автоматизация.',
            },
        ],
        featuredTitle: 'Избранные проекты',
        sections: {
            aboutMe: 'Обо мне',
            aboutMeText:
                'Я учусь в инженерной школе UTT (University of Technology of Troyes) по направлению Digital Systems и специализируюсь на ИИ и Data Science. Больше всего меня интересуют Machine Learning, Deep Learning и Data Engineering. Сейчас ищу двухлетнюю стажировку, чтобы развивать навыки в индустрии.',
            whatIDo: 'Чем я занимаюсь',
            skills: 'Навыки',
            languages: 'Языки',
            strengths: 'Сильные стороны',
            projects: 'Проекты',
            education: 'Образование',
            experience: 'Опыт',
            interests: 'Интересы',
            contact: 'Контакты',
            openTo: 'Открыт к возможностям',
            openToText:
                'Ищу 2-летнюю стажировку с сентября 2026 года в направлениях Data Science / AI & ML / Data Engineering. Буду рад Вашему сообщению!',
        },
        whatIDo: [
            {
                title: 'Machine Learning',
                description: 'Классификация, регрессия, кластеризация, feature engineering, оценка моделей.',
                icon: 'Brain',
            },
            {
                title: 'Deep Learning & CV',
                description: 'Нейронные сети, TensorFlow, PyTorch, компьютерное зрение.',
                icon: 'Eye',
            },
            {
                title: 'Data Engineering',
                description: 'ETL-пайплайны, базы данных SQL/NoSQL, автоматизация, оркестрация.',
                icon: 'Database',
            },
            {
                title: 'Развёртывание',
                description: 'REST API (FastAPI), Docker, основы AWS/Azure, CI/CD.',
                icon: 'Cloud',
            },
        ],
        skills: [
            {
                category: 'Python',
                items: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'FastAPI', 'Flask', 'OpenCV', 'YOLO', 'MediaPipe'],
            },
            {
                category: 'Машинное обучение',
                items: [
                    'Обучение с учителем',
                    'Обучение без учителя',
                    'Random Forest',
                    'Gradient Boosting',
                    'SVM',
                    'Кросс-валидация',
                ],
            },
            {
                category: 'Глубокое обучение и LLM',
                items: ['Нейронные сети', 'TensorFlow', 'PyTorch', 'Keras', 'RAG', 'Ollama', 'OpenAI'],
            },
            {
                category: 'Базы данных (СУБД и NoSQL)',
                items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'ChromaDB'],
            },
            {
                category: 'Облако и DevOps',
                items: ['Docker', 'Kubernetes (базовые знания)', 'Terraform (базовые знания)', 'AWS (базовые знания)', 'Azure (базовые знания)'],
            },
            {
                category: 'Программирование',
                items: ['Java', 'JavaScript', 'SQL', 'HTML/CSS', 'REST API', 'ETL', 'Data pipelines'],
            },
            {
                category: 'Инструменты',
                items: [
                    'GitHub',
                    'Postman',
                    'VS Code',
                    'Linux',
                    'Jira',
                    'Power BI',
                    'Excel',
                    'PowerPoint',
                    'Word',
                    'Notion',
                ],
            },
            {
                category: 'Анализ данных',
                items: ['EDA', 'Предобработка данных', 'Инженерия признаков', 'Оценка качества моделей'],
            },
        ],
        languages: [
            { name: 'Украинский', level: 'Родной', percent: 100 },
            { name: 'Русский', level: 'Родной', percent: 100 },
            { name: 'Французский', level: 'C1', percent: 85 },
            { name: 'Английский', level: 'B2', percent: 70 },
        ],
        strengths: [
            {
                title: 'Люблю вызовы',
                description: 'Мне нравится выходить за рамки и решать сложные технические задачи.',
            },
            {
                title: 'Любознательный',
                description: 'Постоянно изучаю новые технологии и лучшие практики.',
            },
            {
                title: 'Командный игрок',
                description: 'Коммуникабелен и внимателен к людям, эффективно работаю в команде.',
            },
        ],
        projects: [
            {
                slug: 'agent-conversationnel-rag',
                title: 'Диалоговый агент, имитирующий пользователя (RAG)',
                description:
                    'Полноценная RAG-система для симуляции пользователя через диалогового агента. Использует загрузку документов, векторную индексацию и генерацию с дополненной выборкой.',
                tech: ['Python', 'FastAPI', 'Ollama', 'ChromaDB', 'Docker'],
                features: [
                    'Автоматическая загрузка документов и chunking',
                    'Векторная индексация в ChromaDB',
                    'Генерация ответов через Ollama (локальная LLM)',
                    'REST API на FastAPI',
                    'Полная контейнеризация в Docker',
                ],
                featured: true,
                github: 'https://github.com/Sanjouk/Local-LLM-assistant',
                live: '#',
            },
            {
                slug: 'tracker-candidatures',
                title: 'Трекер откликов на вакансии',
                description:
                    'Автоматизированное приложение для отслеживания откликов на вакансии. Получает письма, извлекает ключевую информацию и организует её в дашборде.',
                tech: ['Python', 'Gmail API', 'Google Sheets API', 'Docker', 'SQLite', 'Ollama'],
                features: [
                    'Автоматическое получение писем через Gmail API',
                    'Извлечение информации с помощью LLM (Ollama)',
                    'Синхронизация с Google Sheets',
                    'Локальное хранение в SQLite',
                    'Автоматизированный Docker-пайплайн',
                ],
                featured: true,
                github: 'https://github.com/Sanjouk/job-tracker',
                live: '#',
            },
            {
                slug: 'prediction-insuffisance-cardiaque',
                title: 'Прогноз сердечной недостаточности',
                description:
                    'Проект машинного обучения для прогнозирования сердечной недостаточности на основе медицинских данных. Сравнение нескольких моделей и анализ признаков.',
                tech: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas'],
                features: [
                    'Исследовательский анализ медицинских данных',
                    'Предобработка и feature engineering',
                    'Сравнение моделей (Random Forest, XGBoost, NN)',
                    'Оценка по клиническим метрикам',
                    'Интерпретируемые визуализации (SHAP)',
                ],
                featured: true,
                github: 'https://github.com/Sanjouk/IA01-Project',
                live: '#',
            },
            {
                slug: 'smart-home-iot-system',
                title: 'Система умного дома (IoT)',
                description:
                    'IoT-платформа для мониторинга и управления домашними датчиками и исполнительными устройствами в реальном времени через MQTT с backend на Flask и MongoDB.',
                tech: ['ESP32', 'MQTT', 'Flask', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
                features: [
                    'MQTT-архитектура publish/subscribe между ESP32, брокером и сервером',
                    'REST API на Flask для управления оборудованием и хранения телеметрии',
                    'Структура MongoDB для состояний устройств и временных рядов',
                    'Веб-интерфейс для ручного управления и сценариев автоматизации',
                    'Мониторинг в реальном времени с обработкой потерь соединения',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/Connected-WeatherStation',
                live: '#',
            },
            {
                slug: 'vigilance-detection-system',
                title: 'Система определения уровня бдительности',
                description:
                    'Анализ видео в реальном времени на базе EAR, MAR и оценки положения головы для выявления сонливости и снижения внимания.',
                tech: ['Python', 'OpenCV', 'MediaPipe'],
                features: [
                    'Детекция лицевых ключевых точек и непрерывное отслеживание глаз и рта',
                    'Расчёт индикаторов EAR и MAR в реальном времени',
                    'Оценка ориентации головы для определения отвлечения',
                    'Сводный индекс бдительности на основе нескольких сигналов',
                    'Визуальные и звуковые предупреждения при снижении концентрации',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/driver-vigilance-detection-system',
                live: '#',
            },
            {
                slug: 'jest-card-game',
                title: 'Карточная игра «Jest»',
                description:
                    'Объектно-ориентированное Java-приложение на архитектуре MVC с паттернами проектирования для расширяемого, поддерживаемого и структурированного кода.',
                tech: ['Java', 'MVC', 'Strategy', 'Factory', 'Visitor', 'Multithreading'],
                features: [
                    'Архитектура MVC с чётким разделением логики, правил и представления',
                    'Паттерны Strategy, Factory и Visitor для гибкого расширения механик',
                    'Слой персистентности для сохранения партий и профилей игроков',
                    'Поддержка multithreading для параллельных игровых операций',
                    'Модульная кодовая база с переиспользуемыми компонентами',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/Jest',
                live: '#',
            },
            {
                slug: 'telegram-automation-bot',
                title: 'Telegram-бот для автоматизации',
                description:
                    'Python-бот на aiogram с интеграцией нескольких API и SQLite для управления пользователями, данными и автоматизированными сценариями.',
                tech: ['Python', 'aiogram', 'SQLite', 'Telegram Bot API', 'REST API'],
                features: [
                    'Сценарии с пошаговой логикой и управлением состояниями диалога',
                    'Интеграция внешних API через отдельные обработчики',
                    'SQLite-хранилище пользователей, настроек и истории запросов',
                    'Автоматические уведомления и напоминания по бизнес-правилам',
                    'Логирование действий для мониторинга и отладки',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/telegram_bot',
                live: '#',
            },
            {
                slug: 'banking-system-web-simulator',
                title: 'Веб-симулятор банковской системы',
                description:
                    'Веб-приложение, имитирующее базовые банковские процессы: безопасную авторизацию, управление счетами и операции. Использует базы данных SQL.',
                tech: ['SQL', 'JavaScript', 'HTML', 'CSS'],
                features: [
                    'Безопасная аутентификация с сессиями, ролями и контролем доступа',
                    'Валидация данных на клиентской и серверной стороне',
                    'Операции по счетам, переводы и история транзакций',
                    'Структурированные SQL-взаимодействия с проверкой целостности',
                    'Понятный интерфейс для симуляции банковских пользовательских сценариев',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/project',
                live: '#',
            },
        ],
        education: [
            {
                title: 'Инженер цифровых систем',
                institution: 'UTT — University of Technology of Troyes',
                period: '2022 – 2028',
                location: 'Труа, Франция',
                description:
                    'Инженерная программа со специализацией в ИИ и Data Science. Практические проекты, стажировки и обучение в компании.',
            },
            {
                title: 'Инженер по кибербезопасности',
                institution: 'NTU "KhPI" — National Technical University',
                period: '2021 – 2025',
                location: 'Онлайн',
                description:
                    'Программа по компьютерной инженерии со специализацией в кибербезопасности. Параллельное обучение.',
            },
        ],
        experience: [
            {
                title: 'Рабочая стажировка',
                company: 'Chronodrive',
                period: 'Рабочая стажировка',
                location: 'Франция',
                description:
                    'Рабочая стажировка в Chronodrive в сфере дистрибуции: практическое погружение в подготовку заказов и логистические процессы.',
            },
            {
                title: 'Агент по недвижимости',
                company: 'Юридическая фирма «Vsesvit»',
                period: 'Опыт работы',
                location: 'Украина',
                description:
                    'Управление отношениями с клиентами, переговоры и сопровождение сделок с недвижимостью.',
            },
            {
                title: 'Волонтёр — соревнования по плаванию',
                company: 'Волонтёрство',
                period: 'Волонтёрская деятельность',
                location: 'Украина',
                description:
                    'Организация и помощь на соревнованиях по плаванию. Координация команды и управление событиями.',
            },
        ],
        interests: [
            { title: 'Плавание', description: '17 лет практики', icon: 'Waves' },
            { title: 'Киберспорт', description: 'CS2 — соревнование и стратегия', icon: 'Gamepad2' },
            { title: 'Формула 1', description: 'Увлечение F1 и автомобильной инженерией', icon: 'Trophy' },
        ],
        contactForm: {
            name: 'Имя',
            email: 'Email',
            message: 'Сообщение',
            send: 'Отправить',
            sending: 'Отправка...',
            success: 'Сообщение успешно отправлено!',
            submitError: 'Не удалось отправить сообщение. Попробуйте ещё раз.',
            error: 'Пожалуйста, заполните все поля.',
        },
        footer: {
            rights: '© 2026 Власов Александр. Все права защищены.',
        },
        search: 'Поиск проектов...',
        filterAll: 'Все',
        viewProject: 'Посмотреть проект',
        keyFeatures: 'Ключевые функции',
        techStack: 'Технологический стек',
        close: 'Закрыть',
        noResults: 'Проекты не найдены.',
    },
    ua: {
        profile: {
            name: 'ВЛАСОВ Олександр',
            title: 'Студент-інженер ШІ та Data Science',
            summary:
                'Я студент-інженер у сфері ШІ та Data Science. Шукаю дворічне стажування з вересня 2026 року в напрямах Data Science, Data Analysis, Big Data, AI & ML, Data Engineering та IoT.',
            location: 'Труа, Франція',
            availability: '2-річне стажування з вересня 2026',
        },
        contacts: {
            phone: '+33 7 67 34 23 88',
            email: 'sashanext18@gmail.com',
            instagram: 'https://www.instagram.com/sanjous1k/',
            linkedin: 'https://www.linkedin.com/in/vlasov-utt/',
            github: 'https://github.com/Sanjouk',
        },
        nav: {
            home: 'Головна',
            about: 'Про мене',
            projects: 'Проєкти',
            resume: 'Резюме',
            contact: 'Контакти',
        },
        hero: {
            greeting: 'Вітаю, я',
            subtitle: 'Студент-інженер ШІ та Data Science',
            description:
                'Шукаю 2-річне стажування з вересня 2026 року в Data Science, AI & ML, Data Engineering.',
            cta1: 'Дивитися проєкти',
            cta2: 'Завантажити CV',
        },
        highlights: [
            {
                title: 'RAG & LLM',
                description: 'Діалогові агенти, retrieval-augmented generation, інтеграція Ollama.',
            },
            {
                title: 'ML Pipelines',
                description: 'Моделі машинного навчання, scikit-learn, TensorFlow, прогнозування.',
            },
            {
                title: 'REST & Docker',
                description: 'API на FastAPI, контейнеризація Docker, автоматизоване розгортання.',
            },
            {
                title: 'Data Engineering',
                description: 'Пайплайни даних, ETL, бази даних, автоматизація.',
            },
        ],
        featuredTitle: 'Рекомендовані проєкти',
        sections: {
            aboutMe: 'Про мене',
            aboutMeText:
                'Навчаюся в інженерній школі UTT (University of Technology of Troyes) за напрямом Digital Systems і спеціалізуюся на ШІ та Data Science. Найбільше мене цікавлять Machine Learning, Deep Learning та Data Engineering. Наразі шукаю 2-річне стажування, щоб розвивати навички в індустрії.',
            whatIDo: 'Що я роблю',
            skills: 'Навички',
            languages: 'Мови',
            strengths: 'Сильні сторони',
            projects: 'Проєкти',
            education: 'Освіта',
            experience: 'Досвід',
            interests: 'Інтереси',
            contact: 'Контакти',
            openTo: 'Відкритий до можливостей',
            openToText:
                'Шукаю 2-річне стажування з вересня 2026 року в напрямах Data Science / AI & ML / Data Engineering. Буду радий Вашому повідомленню!',
        },
        whatIDo: [
            {
                title: 'Machine Learning',
                description: 'Класифікація, регресія, кластеризація, feature engineering, оцінка моделей.',
                icon: 'Brain',
            },
            {
                title: 'Deep Learning & CV',
                description: 'Нейронні мережі, TensorFlow, PyTorch, комп’ютерний зір.',
                icon: 'Eye',
            },
            {
                title: 'Data Engineering',
                description: 'ETL-пайплайни, бази даних SQL/NoSQL, автоматизація, оркестрація.',
                icon: 'Database',
            },
            {
                title: 'Розгортання',
                description: 'REST API (FastAPI), Docker, базові знання AWS/Azure, CI/CD.',
                icon: 'Cloud',
            },
        ],
        skills: [
            {
                category: 'Python',
                items: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'FastAPI', 'Flask', 'OpenCV', 'YOLO', 'MediaPipe'],
            },
            {
                category: 'Машинне навчання',
                items: [
                    'Навчання з учителем',
                    'Навчання без учителя',
                    'Random Forest',
                    'Gradient Boosting',
                    'SVM',
                    'Крос-валідація',
                ],
            },
            {
                category: 'Глибоке навчання та LLM',
                items: ['Нейронні мережі', 'TensorFlow', 'PyTorch', 'Keras', 'RAG', 'Ollama', 'OpenAI'],
            },
            {
                category: 'Бази даних (СУБД та NoSQL)',
                items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'ChromaDB'],
            },
            {
                category: 'Хмара та DevOps',
                items: ['Docker', 'Kubernetes (базові знання)', 'Terraform (базові знання)', 'AWS (базові знання)', 'Azure (базові знання)'],
            },
            {
                category: 'Програмування',
                items: ['Java', 'JavaScript', 'SQL', 'HTML/CSS', 'REST API', 'ETL', 'Data pipelines'],
            },
            {
                category: 'Інструменти',
                items: [
                    'GitHub',
                    'Postman',
                    'VS Code',
                    'Linux',
                    'Jira',
                    'Power BI',
                    'Excel',
                    'PowerPoint',
                    'Word',
                    'Notion',
                ],
            },
            {
                category: 'Аналіз даних',
                items: ['EDA', 'Передобробка даних', 'Інженерія ознак', 'Оцінка якості моделей'],
            },
        ],
        languages: [
            { name: 'Українська', level: 'Рідна', percent: 100 },
            { name: 'Російська', level: 'Рідна', percent: 100 },
            { name: 'Французька', level: 'C1', percent: 85 },
            { name: 'Англійська', level: 'B2', percent: 70 },
        ],
        strengths: [
            {
                title: 'Люблю виклики',
                description: 'Мені подобається виходити за межі та вирішувати складні технічні задачі.',
            },
            {
                title: 'Допитливий',
                description: 'Постійно вивчаю нові технології та найкращі практики.',
            },
            {
                title: 'Командний гравець',
                description: 'Комунікабельний і уважний до людей, ефективно працюю в команді.',
            },
        ],
        projects: [
            {
                slug: 'agent-conversationnel-rag',
                title: 'Діалоговий агент, що імітує користувача (RAG)',
                description:
                    'Повноцінна RAG-система для симуляції користувача через діалогового агента. Використовує завантаження документів, векторну індексацію та генерацію з доповненим пошуком.',
                tech: ['Python', 'FastAPI', 'Ollama', 'ChromaDB', 'Docker'],
                features: [
                    'Автоматичне завантаження документів і chunking',
                    'Векторна індексація в ChromaDB',
                    'Генерація відповідей через Ollama (локальна LLM)',
                    'REST API на FastAPI',
                    'Повна контейнеризація в Docker',
                ],
                featured: true,
                github: 'https://github.com/Sanjouk/Local-LLM-assistant',
                live: '#',
            },
            {
                slug: 'tracker-candidatures',
                title: 'Трекер відгуків на вакансії',
                description:
                    'Автоматизований застосунок для відстеження відгуків на вакансії. Отримує листи, витягує ключову інформацію та організовує її в дашборді.',
                tech: ['Python', 'Gmail API', 'Google Sheets API', 'Docker', 'SQLite', 'Ollama'],
                features: [
                    'Автоматичне отримання листів через Gmail API',
                    'Витягування інформації за допомогою LLM (Ollama)',
                    'Синхронізація з Google Sheets',
                    'Локальне зберігання в SQLite',
                    'Автоматизований Docker-пайплайн',
                ],
                featured: true,
                github: 'https://github.com/Sanjouk/job-tracker',
                live: '#',
            },
            {
                slug: 'prediction-insuffisance-cardiaque',
                title: 'Прогноз серцевої недостатності',
                description:
                    'Проєкт машинного навчання для прогнозування серцевої недостатності на основі медичних даних. Порівняння кількох моделей і аналіз ознак.',
                tech: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas'],
                features: [
                    'Дослідницький аналіз медичних даних',
                    'Передобробка та feature engineering',
                    'Порівняння моделей (Random Forest, XGBoost, NN)',
                    'Оцінка за клінічними метриками',
                    'Інтерпретовані візуалізації (SHAP)',
                ],
                featured: true,
                github: 'https://github.com/Sanjouk/IA01-Project',
                live: '#',
            },
            {
                slug: 'smart-home-iot-system',
                title: 'Система розумного дому (IoT)',
                description:
                    'IoT-платформа для моніторингу й керування домашніми датчиками та виконавчими пристроями в реальному часі через MQTT, із backend на Flask і MongoDB.',
                tech: ['ESP32', 'MQTT', 'Flask', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
                features: [
                    'MQTT-архітектура publish/subscribe між ESP32, брокером і сервером',
                    'REST API на Flask для керування обладнанням та збереження телеметрії',
                    'Модель MongoDB для станів пристроїв і часових рядів вимірювань',
                    'Веб-інтерфейс для ручного керування та сценаріїв автоматизації',
                    'Моніторинг у реальному часі з обробкою втрат з’єднання',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/Connected-WeatherStation',
                live: '#',
            },
            {
                slug: 'vigilance-detection-system',
                title: 'Система визначення рівня пильності',
                description:
                    'Аналіз відео в реальному часі на основі EAR, MAR та оцінки пози голови для виявлення сонливості й зниження концентрації.',
                tech: ['Python', 'OpenCV', 'MediaPipe'],
                features: [
                    'Детекція ключових точок обличчя та безперервне відстеження очей і рота',
                    'Розрахунок показників EAR і MAR у реальному часі',
                    'Оцінка орієнтації голови для визначення моментів відволікання',
                    'Зведений індекс пильності на основі кількох біометричних сигналів',
                    'Візуальні та звукові попередження при падінні рівня пильності',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/driver-vigilance-detection-system',
                live: '#',
            },
            {
                slug: 'jest-card-game',
                title: 'Карткова гра «Jest»',
                description:
                    'Об’єктно-орієнтований Java-застосунок на архітектурі MVC з design patterns для розширюваного, підтримуваного та структурованого коду.',
                tech: ['Java', 'MVC', 'Strategy', 'Factory', 'Visitor', 'Multithreading'],
                features: [
                    'Архітектура MVC з чітким поділом правил гри, логіки та представлення',
                    'Патерни Strategy, Factory і Visitor для гнучкого розширення механік',
                    'Шар персистентності для збереження партій і профілів гравців',
                    'Підтримка multithreading для паралельних ігрових операцій',
                    'Модульна кодова база з перевикористовуваними компонентами',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/Jest',
                live: '#',
            },
            {
                slug: 'telegram-automation-bot',
                title: 'Telegram-бот для автоматизації',
                description:
                    'Python-бот на aiogram з інтеграцією кількох API та SQLite для керування користувачами, даними й автоматизованими сценаріями.',
                tech: ['Python', 'aiogram', 'SQLite', 'Telegram Bot API', 'REST API'],
                features: [
                    'Сценарії з покроковою логікою та керуванням станами діалогу',
                    'Інтеграція зовнішніх API через окремі обробники',
                    'SQLite-сховище користувачів, налаштувань та історії запитів',
                    'Автоматичні сповіщення й нагадування за бізнес-правилами',
                    'Логування дій для моніторингу та відлагодження',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/telegram_bot',
                live: '#',
            },
            {
                slug: 'banking-system-web-simulator',
                title: 'Веб-симулятор банківської системи',
                description:
                    'Веб-застосунок, що моделює базові банківські процеси: безпечну автентифікацію, керування рахунками та операції. Використовує бази даних SQL.',
                tech: ['SQL', 'JavaScript', 'HTML', 'CSS'],
                features: [
                    'Безпечна автентифікація із сесіями, ролями та контролем доступу',
                    'Валідація даних на клієнтському та серверному боці',
                    'Операції за рахунками, перекази та історія транзакцій',
                    'Структуровані SQL-взаємодії з контролем цілісності даних',
                    'Зрозумілий інтерфейс для моделювання банківських користувацьких сценаріїв',
                ],
                featured: false,
                github: 'https://github.com/Sanjouk/project',
                live: '#',
            },
        ],
        education: [
            {
                title: 'Інженер цифрових систем',
                institution: 'UTT — University of Technology of Troyes',
                period: '2022 – 2028',
                location: 'Труа, Франція',
                description:
                    'Інженерна програма зі спеціалізацією у ШІ та Data Science. Практичні проєкти, стажування та навчання в компанії.',
            },
            {
                title: 'Інженер з кібербезпеки',
                institution: 'NTU "KhPI" — National Technical University',
                period: '2021 – 2025',
                location: 'Онлайн',
                description:
                    'Програма з комп’ютерної інженерії зі спеціалізацією в кібербезпеці. Паралельне навчання.',
            },
        ],
        experience: [
            {
                title: 'Робітнича практика',
                company: 'Chronodrive',
                period: 'Робітнича практика',
                location: 'Франція',
                description:
                    'Робітнича практика в Chronodrive у сфері дистрибуції: практичне занурення в підготовку замовлень і логістичні процеси.',
            },
            {
                title: 'Агент з нерухомості',
                company: 'Юридична фірма «Vsesvit»',
                period: 'Досвід роботи',
                location: 'Україна',
                description:
                    'Управління відносинами з клієнтами, переговори та супровід угод з нерухомістю.',
            },
            {
                title: 'Волонтер — змагання з плавання',
                company: 'Волонтерство',
                period: 'Волонтерська діяльність',
                location: 'Україна',
                description:
                    'Організація та допомога під час змагань з плавання. Координація команди та управління подіями.',
            },
        ],
        interests: [
            { title: 'Плавання', description: '17 років практики', icon: 'Waves' },
            { title: 'Кіберспорт', description: 'CS2 — змагання та стратегія', icon: 'Gamepad2' },
            { title: 'Формула 1', description: 'Захоплення F1 та автомобільною інженерією', icon: 'Trophy' },
        ],
        contactForm: {
            name: 'Ім’я',
            email: 'Email',
            message: 'Повідомлення',
            send: 'Надіслати',
            sending: 'Надсилання...',
            success: 'Повідомлення успішно надіслано!',
            submitError: 'Не вдалося надіслати повідомлення. Спробуйте ще раз.',
            error: 'Будь ласка, заповніть усі поля.',
        },
        footer: {
            rights: '© 2026 Власов Олександр. Усі права захищено.',
        },
        search: 'Пошук проєктів...',
        filterAll: 'Усі',
        viewProject: 'Переглянути проєкт',
        keyFeatures: 'Ключові можливості',
        techStack: 'Технологічний стек',
        close: 'Закрити',
        noResults: 'Проєкти не знайдено.',
    },
};
