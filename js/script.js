// ===== PROJECT DATA =====
const projectsData = {
    1: {
        title: 'Spotify Streaming Data Pipeline',
        description: 'Real-time Spotify streaming pipeline that simulates user events, stores raw data in cloud object storage, and transforms it into analytics-ready models.',
        features: [
            'Ingests 3,600+ user actions per hour with reliable storage and scheduling',
            'Generates analytics-ready engagement models (DAU, retention, skip rates)',
            'Supports scalable deployment through containerized services and orchestration'
        ],
        techStack: ['Kafka', 'Snowflake', 'DBT', 'Airflow', 'MinIO', 'Docker'],
        impact: 'Enabled scalable real-time analytics on user engagement, turning raw streaming data into actionable insights.',
        github: 'https://github.com/Bayzid03/spotify-streaming-data-pipeline'
    },
    2: {
        title: 'Real-Time Stock Data Pipeline',
        description: 'End-to-end pipeline for stock market analytics — streaming ingestion, modular transformations, orchestration, and live dashboards.',
        features: [
            'Real-time Streaming: Ingests stock events (AAPL, MSFT, TSLA, GOOGL, AMZN) with low latency',
            'Medallion Architecture: Bronze (raw) → Silver (cleansed) → Gold (business‑ready)',
            'Transformations: SQL‑based modeling with version control',
            'Dashboards: Live KPIs, candlestick charts, and volatility insights'
        ],
        techStack: ['Kafka', 'MinIO', 'Airflow', 'DBT', 'Snowflake', 'Power BI'],
        impact: 'Delivered real‑time, analytics‑ready stock market insights for monitoring performance and volatility.',
        github: 'https://github.com/Bayzid03/real-time-stock-data-pipeline-dbt-airflow-snowflake'
    },
    3: {
        title: 'Snowflake Cricket Analytics Pipeline',
        description: 'Enterprise data warehouse for cricket analytics — processes raw JSON match data into star‑schema models for advanced insights.',
        features: [
            'Data Processing: Handles 2,400+ match files and 500K+ ball‑by‑ball records through layered architecture',
            'Star Schema Design: 6 dimensions and 2 fact tables for structured analytics',
            'Advanced SQL: Nested JSON parsing and window functions for complex calculations',
            'SCD Implementation: Type 1 slowly changing dimensions with surrogate keys and constraints'
        ],
        techStack: ['Snowflake', 'SQL (Star Schema, Window Functions, SCD)', 'JSON'],
        impact: 'Enabled comprehensive analytics on match outcomes, player performance, and venue statistics.',
        github: 'https://github.com/Bayzid03/end-to-end-snowflake-cricket-analytics-pipeline'
    },
    4: {
        title: 'Chroma Retail Data Platform',
        description: 'End-to-end retail data platform — automates ingestion, dimensional modeling, and BI-ready views for enterprise analytics.',
        features: [
            'Automated Ingestion: Real-time ETL pipelines from cloud storage',
            'Dimensional Modeling: Star schema with facts and conformed dimensions',
            'Data Governance: Role-based access control for secure enterprise usage',
            'Analytics: Real-time KPIs, inventory tracking, and customer lifetime value insights'
        ],
        techStack: ['Snowflake', 'Azure Blob Storage', 'Snowpipe', 'SQL(Star Schema, RBAC)', 'BI TOOLS'],
        impact: 'Delivered scalable, governed analytics for millions of daily retail transactions across core business entities.',
        github: 'https://github.com/Bayzid03/chroma-retail-data-platform-snowflake'
    },
    5: {
        title: 'AWS Glue Airline Data Pipeline',
        description: 'Automated ETL pipeline for airline flight delay analytics — processes raw data into enriched warehouse tables for reporting and insights.',
        features: [
            'Event-Driven Execution: S3 uploads trigger automated pipeline runs',
            'Workflow Orchestration: Multi-step scheduling with error handling',
            'Schema Discovery: Automated cataloging with Glue crawlers',
            'PySpark ETL: Complex joins and transformations for delay analysis',
            'Warehouse Analytics: Denormalized fact tables optimized for BI queries'
        ],
        techStack: ['AWS Glue', 'Step Functions', 'S3', 'PySpark', 'Redshift', 'SNS', 'EventBridge'],
        impact: 'Streamlined airline delay analytics with automated ingestion, transformation, and reporting for operational efficiency.',
        github: 'https://github.com/Bayzid03/aws-glue-etl-airline-data-pipeline'
    },
    6: {
        title: 'Azure Healthcare Real-Time Streaming Pipeline',
        description: 'Real-time healthcare data pipeline — ingests patient events, enforces data quality, and delivers analytics-ready views for clinical insights.',
        features: [
            'High-Volume Streaming: Ingests 3,600+ patient events/hour through Medallion Architecture (Bronze → Silver → Gold)',
            'Data Quality Framework: Automated corrections for invalid records and dynamic schema evolution',
            'Historical Tracking: SCD Type 2 in Delta Lake for patient history with effective dating',
            'Analytics Integration: Exposed via Synapse SQL for Power BI dashboards and reporting'
        ],
        techStack: ['Azure Event Hubs', 'Databricks (PySpark)', 'Delta Lake', 'Synapse Analytics', 'Power BI'],
        impact: 'Enabled reliable, real-time patient analytics with historical tracking and automated data quality enforcement.',
        github: 'https://github.com/Bayzid03/azure-healthcare-data-pipeline'
    },
    7: {
        title: 'Azure Vehicle Theft Data Engineering Pipeline',
        description: 'Enterprise‑grade pipeline migrating on‑premises vehicle theft data to Azure cloud — ensures data quality progression and delivers actionable insights.',
        features: [
            'Hybrid Integration: Secure ingestion of on‑premises data via self‑hosted runtime',
            'Medallion Architecture: Bronze (raw) → Silver (cleansed) → Gold (business‑ready) layers',
            'Enterprise Security: Secrets management with Azure Key Vault',
            'Scalable Processing: PySpark transformations on Databricks',
            'Analytics: Real‑time dashboards with Power BI DirectQuery'
        ],
        techStack: ['Azure Data Factory (Integration Runtime)', 'Databricks (PySpark)', 'ADLS Gen2', 'Key Vault', 'Power BI'],
        impact: 'Enabled secure, cloud‑native analytics on vehicle theft data with improved quality and real‑time insights.',
        github: 'https://github.com/Bayzid03/Azure-Vehicle-Theft-Data-Engineering-Pipeline'
    },
    8: {
        title: 'Fabric E‑Commerce Analytics',
        description: 'End‑to‑end e‑commerce data platform leveraging Microsoft Fabric — transforms raw data into actionable business intelligence through a modern medallion architecture.',
        features: [
            'Data Engineering: Metadata‑driven ingestion, schema evolution, and automated data quality checks',
            'Transformations: Temporal analytics, customer segmentation, product intelligence, and sentiment scoring',
            'Business Intelligence: 20+ pre‑aggregated KPIs, multi‑dimensional sales analysis, and behavioral tracking',
        ],
        techStack: ['Microsoft Fabric', 'PySpark', 'Medallion Architecture', 'SQL', 'Power BI'],
        impact: 'Delivered scalable, analytics‑ready insights enabling customer segmentation, product optimization, and real‑time business performance monitoring.',
        github: 'https://github.com/Bayzid03/fabric-ecommerce-analytics'
    },
    9: {
        title: 'Smart Customer Support Agent',
        description: 'Intelligent customer support automation system — classifies queries, routes workflows, and enhances satisfaction through AI‑driven insights.',
        features: [
            'Query Classification: Automatically categorizes requests into technical, billing, general, or escalation types',
            'Workflow Routing: Directs queries to specialized support handlers for faster resolution',
            'Satisfaction Scoring: Predicts customer sentiment and triggers proactive follow‑ups',
            'Escalation Management: Seamlessly hands off complex issues to human agents',
            'Conversation Tracking: Maintains detailed support interaction history for context‑aware responses',
            'Real‑time Processing: Delivers fast, AI‑powered support with low latency'],
        techStack: ['LangGraph', 'Google Gemini AI', 'Workflow Automation'],
        impact: 'Improved customer experience through intelligent automation, faster resolution times, and proactive satisfaction management.',
        github: 'https://github.com/Bayzid03/LangGraph-Hub/tree/main'
    },
    10: {
        title: 'AI Personal Productivity Assistant',
        description: 'Smart productivity companion powered by RAG architecture — delivers context‑aware responses, document intelligence, and real‑time interaction through modern web technologies.',
        features: [
            'Chat Interface: Clean, responsive UI with real‑time messaging',
            'RAG Architecture: Context‑aware responses using document retrieval',
            'Fast Processing: Sub‑second response times with Groq DeepSeek‑R1',
            'Document Intelligence: Automatic text chunking and semantic search',
            'Vector Search: Efficient similarity retrieval with ChromaDB',
            'REST API: Flask backend with CORS support for integration'
        ],
        techStack: ['RAG Architecture', 'Groq DeepSeek‑R1', 'ChromaDB', 'Flask', 'REST API'],
        impact: 'Enhanced personal productivity through intelligent assistance, fast responses, and seamless document‑aware workflows.',
        github: 'https://github.com/Bayzid03/AI-Personal-Productivity-Assistant'
    },
    11: {
        title: 'AI Mental Health Chatbot',
        description: 'AI‑powered chatbot designed to provide emotional support, stress management guidance, and safe crisis intervention through empathetic, context‑aware conversations.',
        features: [
            'Conversational AI: Natural, empathetic dialogue powered by Groq API',
            'Crisis Detection & Intervention: Identifies high‑risk language and delivers immediate safety messages with escalation support',
            'Resource Access: Provides stress management tips and mental health guidance via document Q&A',
            'Personalization: Maintains conversation context with memory and session tracking',
            'User Experience: Modern, calming interface with dark/light themes, responsive design, and accessibility features'
        ],
        techStack: ['Groq API', 'RAG', 'Memory System', 'Responsive Web UI'],
        impact: 'Enhanced mental health support through compassionate AI interactions, proactive crisis detection, and accessible stress management resources.',
        github: 'https://github.com/Bayzid03/AI-Mental-Health-Chatbot'
    },  
    12: {
        title: 'Smart Course Recommender',
        description: 'Intelligent course recommendation system leveraging semantic embeddings and cosine similarity to personalize learning paths. Built with Flask and advanced NLP models for accurate content understanding.',
        features: [
            'Semantic Search: Context‑aware recommendations using sentence‑transformer embeddings',
            'Smart Caching: Efficient embedding reuse with dataset change detection',
            'Modern UI: Glassmorphism design with responsive layout and smooth animations',
            'AI Explanations: Transparent recommendations powered by Groq reasoning'
        ],
        techStack: ['SentenceTransformers (all‑mpnet‑base‑v2)', 'Scikit‑learn', 'Groq API', 'Flask', 'JavaScript', 'HTML', 'CSS'],
        impact: 'Delivered personalized, transparent course recommendations with modern UX and optimized performance.',
        github: 'https://github.com/Bayzid03/Smart-Course-Recommender'
    },
    13: {
        title: 'AskMyLawyer‑AI',
        description: 'Cutting‑edge legal AI assistant that enables natural language querying of legal documents using RAG architecture. Provides precise, context‑aware answers powered by semantic search and large language models.',
        features: [
            'Document Processing: Intelligent PDF text extraction and chunking with PDFPlumber',
            'Semantic Search: FAISS vector database with HuggingFace embeddings for efficient retrieval',
            'RAG Pipeline: Context‑aware responses through retrieval‑augmented generation',
            'Legal Reasoning: Fast, accurate answers powered by Groq’s DeepSeek‑R1',
            'Interactive UI: Clean Streamlit interface with real‑time processing'
        ],
        techStack: ['RAG Architecture', 'FAISS', 'HuggingFace Embeddings', 'Groq DeepSeek‑R1', 'PDFPlumber', 'Streamlit'],
        impact: 'Enabled lawyers and clients to query complex legal documents with speed, accuracy, and privacy.',
        github: 'https://github.com/Bayzid03/AskMyLawyer-AI/branches'
    }
};

// ===== CERTIFICATE DATA =====
const certificatesData = {
    1: {
        title: 'Database(MySQL/Oracle/SQL Server)',
        organization: 'Bangladesh Computer Council, ICT Division',
        date: '17-Jul-2025',
        fileName: 'Database(MySQLOracleSQL Server).pdf'
    },
    2: {
        title: 'Introduction to Natural Language Processing',
        organization: 'Analytics Vidhya',
        date: '2024-09-30',
        fileName: 'Introduction to NLP.pdf'
    },
    3: {
        title: 'Introduction to Generative AI',
        organization: 'Analytics Vidhya',
        date: '2024-09-22',
        fileName: 'Introduction to Generative AI.pdf'
    },
    4: {
        title: 'Convolutional Neural Networks (CNN) from Scratch',
        organization: 'Analytics Vidhya',
        date: '2024-09-30',
        fileName: 'Convolutional Neural Networks (CNN) from Scratch.pdf'
    },
    5: {
        title: 'Getting Started with Large Language Models',
        organization: 'Analytics Vidhya',
        date: '2024-09-25',
        fileName: 'Getting Started with Large Language Models.pdf'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // ===== INITIALIZE AOS =====
    AOS.init({
        duration: 800,
        once: false,
        mirror: true
    });

    // ===== SMOOTH SCROLLING & ACTIVE NAV =====
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });

        // Show/Hide Back to Top Button
        const backToTop = document.getElementById('back-to-top');
        if (backToTop) {
            backToTop.style.display = window.pageYOffset > 300 ? 'block' : 'none';
        }
    });

    // ===== BACK TO TOP BUTTON =====
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== MOBILE MENU =====
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when link is clicked
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // ===== PROJECT FILTERING =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    function filterProjects(filterValue) {
        const normalizedFilter = filterValue.toLowerCase();

        projectCards.forEach(card => {
            const categoryAttr = card.getAttribute('data-category');
            if (!categoryAttr) return; // Safety check
            
            const categories = categoryAttr.toLowerCase().split(' ').map(cat => cat.trim()).filter(cat => cat.length > 0);
            let shouldShow = false;

            if (normalizedFilter === 'all') {
                // Show all projects
                shouldShow = true;
            } else if (normalizedFilter === 'data-engineering') {
                // Show only pure data-engineering projects (no genai)
                // Project must have ONLY 'data-engineering' category
                shouldShow = categories.length === 1 && categories[0] === 'data-engineering';
            } else if (normalizedFilter === 'genai') {
                // Show all projects that have 'genai' category (including those with both)
                shouldShow = categories.includes('genai');
            }

            // Remove any existing animation and reset
            card.style.animation = 'none';
            void card.offsetWidth; // Force reflow to reset animation

            // Get current visibility state
            const currentDisplay = window.getComputedStyle(card).display;
            const wasVisible = currentDisplay !== 'none';

            if (shouldShow) {
                // Show the card
                if (!wasVisible) {
                    // Was hidden, animate in
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    requestAnimationFrame(() => {
                        card.style.animation = 'fadeIn 0.3s ease forwards';
                    });
                }
                // If already visible, do nothing (keep it visible)
            } else {
                // Hide the card
                if (wasVisible) {
                    // Was visible, animate out then hide
                    let animationCompleted = false;
                    const completeHide = () => {
                        if (!animationCompleted) {
                            animationCompleted = true;
                            card.style.display = 'none';
                            card.style.animation = 'none';
                            card.style.opacity = '';
                        }
                    };
                    
                    // Listen for animation end
                    const onAnimationEnd = () => {
                        completeHide();
                        card.removeEventListener('animationend', onAnimationEnd);
                    };
                    card.addEventListener('animationend', onAnimationEnd, { once: true });
                    
                    // Start fade out animation
                    card.style.animation = 'fadeOut 0.3s ease forwards';
                    
                    // Fallback: ensure hidden after animation duration
                    setTimeout(completeHide, 350);
                } else {
                    // Already hidden, ensure it stays hidden
                    card.style.display = 'none';
                }
            }
        });
    }

    function initFilters() {
        const allBtn = document.querySelector('[data-filter="all"]');
        if (allBtn) {
            allBtn.classList.add('active');
        }
        filterProjects('all');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const filterValue = this.getAttribute('data-filter').toLowerCase();
                filterProjects(filterValue);
            });
        });
    }
    initFilters();

    // ===== PROJECT MODAL FUNCTIONALITY =====
    const projectModal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const projectBtns = document.querySelectorAll('.project-btn');

    // Function to open project modal
    function openProjectModal(projectId) {
        const project = projectsData[projectId];
        if (!project) return;

        // Update modal content
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-description').textContent = project.description;
        
        // Update features list
        const featuresList = document.getElementById('modal-features');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            li.className = 'mb-2 flex items-start';
            featuresList.appendChild(li);
        });

        // Update tech stack
        const techStackDiv = document.getElementById('modal-tech');
        techStackDiv.innerHTML = '';
        project.techStack.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'inline-block bg-[rgba(0,217,255,0.1)] text-[#00d9ff] text-xs px-3 py-1 rounded-full border border-[rgba(0,217,255,0.3)] mr-2 mb-2';
            span.textContent = tech;
            techStackDiv.appendChild(span);
        });

        // Update GitHub link
        const githubLink = document.getElementById('modal-github');
        if (githubLink) {
            githubLink.href = project.github;
        }
        
        // Show modal
        projectModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    // Close modal function
    function closeProjectModal() {
        projectModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    // Add click event to all project buttons
    projectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    // Close modal when clicking the close button
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }

    // Close modal when clicking outside the modal content
    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !projectModal.classList.contains('hidden')) {
            closeProjectModal();
        }
    });

    // ===== SMOOTH SCROLLING FOR BUTTONS =====
    // View Work Button
    const viewWorkBtn = document.getElementById('view-work-btn');
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Contact Button
    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // ===== CERTIFICATE VIEWER =====
    const certButtons = document.querySelectorAll('.cert-btn');

    function openCertificate(certId) {
        const certificate = certificatesData[certId];
        if (!certificate) return;

        // Build the PDF path and open in a new tab; encode to handle spaces/special chars
        const fileName = certificate.fileName || `${certificate.title}.pdf`;
        const encodedFileName = encodeURIComponent(fileName);
        const pdfUrl = `images/certificates/${encodedFileName}`;

        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    }

    certButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const certId = btn.getAttribute('data-cert-id');
            openCertificate(certId);
        });
    });

    // ===== DOWNLOAD CV FUNCTIONALITY =====
    function downloadCV() {
        const cvFileName = 'Data Engineer CV.pdf';
        const encodedFileName = encodeURIComponent(cvFileName);
        const cvUrl = `images/cv/${encodedFileName}`;
        
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = cvFileName;
        link.style.display = 'none';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Add event listeners to both Download CV buttons
    const downloadCvBtn = document.getElementById('download-cv-btn');
    const downloadCvBtnMobile = document.getElementById('download-cv-btn-mobile');

    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', (e) => {
            e.preventDefault();
            downloadCV();
        });
    }

    if (downloadCvBtnMobile) {
        downloadCvBtnMobile.addEventListener('click', (e) => {
            e.preventDefault();
            downloadCV();
        });
    }

    // ===== INITIALIZATION CHECK =====
    console.log('Portfolio initialized successfully!');
    console.log('Total Projects:', Object.keys(projectsData).length);
    console.log('Total Certifications:', Object.keys(certificatesData).length);
});