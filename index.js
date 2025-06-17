/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

const projectData = [
    {
        id: 'hr-analytics',
        title: 'HR Analytics Dashboard – Power BI',
        date: 'May 2025 - Jun 2025',
        imageUrl: 'https://via.placeholder.com/300x180/6F42C1/FFFFFF?text=HR+Analytics',
        imageAlt: 'HR Analytics Dashboard – Power BI',
        shortDescription: 'An interactive Power BI dashboard revealing key HR insights like employee attrition, salary impacts, and departmental trends to support strategic decision-making.',
        fullDescriptionHTML: `
            <p>Built a professional HR Analytics dashboard using Power BI with a dark-themed UI to analyze employee attrition trends, salary influence, and departmental churn. The project delivers actionable insights for HR decision-making through interactive visuals and KPIs. Finalized with a polished presentation and detailed report for stakeholder.</p>
            <h4>Key Highlights:</h4>
            <ul>
                <li>Highest attrition in 26–35 age group</li>
                <li>Low-salary roles & technical/sales departments showed high churn</li>
                <li>Metrics built around tenure, job level, and satisfaction</li>
            </ul>
            <h4>Tools Used:</h4>
            <p>Power BI, Excel, Data Visualization, Storytelling</p>
        `,
        skills: 'Microsoft Power BI · Microsoft Excel · Data Visualization · Data Cleaning · Visual Storytelling',
        githubUrl: 'https://github.com/Abhishek-Singhal-007/HR-Analytics-PowerBI',
        dashboardUrl: 'https://www.novypro.com/project/hr-analytics-210',
        iframeSrc: 'https://app.powerbi.com/reportEmbed?reportId=239ea47e-6b8c-4b8c-b4a3-5bb79acdbae8&autoAuth=true&ctid=402f0a2c-31f2-4ac2-9f4f-42e6bf98004e&actionBarEnabled=true'
    },
    {
        id: 'madhav-ecommerce',
        title: 'Madhav E-Commerce Sales Dashboard',
        date: 'Jun 2025 - Jun 2025',
        imageUrl: 'https://via.placeholder.com/300x180/28A745/FFFFFF?text=E-Commerce+Sales',
        imageAlt: 'Madhav E-Commerce Sales Dashboard',
        shortDescription: 'A dynamic Power BI dashboard analyzing e-commerce sales, product profitability, and payment behaviors to drive business growth and optimize strategies.',
        fullDescriptionHTML: `
            <p>Built a professional sales performance dashboard using Power BI with a sleek, dark-themed UI to analyze retail sales trends, product profitability, payment behavior, and geographic insights. The dashboard empowers data-driven decisions through interactive visuals, DAX-powered KPIs, and custom slicers. Finalized with a clean visual story for business stakeholders.</p>
            <h4>Key Highlights:</h4>
            <ul>
                <li>Electronics category led in both sales volume and profit</li>
                <li>Clothing sub-categories like Sarees & Kurtis showed losses via UPI & COD payments</li>
                <li>EMI and Credit Card payments resulted in higher average order values</li>
                <li>Cities like Pune and Mathura contributed the highest revenue</li>
                <li>Dashboard enables granular filtering by product, location, and payment type</li>
            </ul>
            <h4>Tools Used:</h4>
            <p>Power BI · DAX · Excel · Power Query · Data Modeling · Storytelling</p>
        `,
        skills: 'Microsoft Power BI · Data Visualization · Business Intelligence (BI) · Visual Storytelling · Data Cleaning',
        githubUrl: 'https://github.com/Abhishek-Singhal-007/Madhav_Sales_Dashboard',
        dashboardUrl: 'https://www.novypro.com/project/madhav-ecommerce-sales-dashboard-26',
        iframeSrc: 'https://app.powerbi.com/reportEmbed?reportId=2e963f65-3e0d-4881-8b75-20491294244e&autoAuth=true&ctid=402f0a2c-31f2-4ac2-9f4f-42e6bf98004e&actionBarEnabled=true'
    }
];


document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');

                    const navUl = document.getElementById('main-nav-ul');
                    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
                    if (navUl && navUl.classList.contains('nav-open') && mobileMenuToggle) {
                        navUl.classList.remove('nav-open');
                        mobileMenuToggle.setAttribute('aria-expanded', 'false');
                        mobileMenuToggle.innerHTML = '☰';
                    }
                }
            }
        });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('main section');
    const header = document.getElementById('header');
    const headerHeight = header ? header.offsetHeight : 70; 

    function changeActiveLink() {
        let index = sections.length;
        const scrollPosition = window.scrollY + headerHeight + 50; 

        while(--index >= 0 && scrollPosition < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));

        if (index >= 0 && sections[index]) {
             const activeLink = document.querySelector(`header nav ul li a[href="#${sections[index].id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        } else if (sections.length > 0 && window.scrollY < sections[0].offsetTop - headerHeight) { 
            const homeLink = document.querySelector(`header nav ul li a[href="#${sections[0].id}"]`); 
            if (homeLink) {
               homeLink.classList.add('active');
            }
        } else if (index < 0 && sections.length > 0) { 
             const homeLink = document.querySelector(`header nav ul li a[href="#${sections[0].id}"]`);
             if (homeLink) {
                homeLink.classList.add('active');
             }
        }
    }

    if (sections.length > 0) { 
        if (window.location.hash) {
            const targetLink = document.querySelector(`header nav ul li a[href="${window.location.hash}"]`);
            if (targetLink) {
                navLinks.forEach(l => l.classList.remove('active'));
                targetLink.classList.add('active');
                const targetElement = document.getElementById(window.location.hash.substring(1));
                if (targetElement) {
                    setTimeout(() => {
                         targetElement.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }
            } else {
                 changeActiveLink(); 
            }
        } else {
            changeActiveLink();
        }
        window.addEventListener('scroll', changeActiveLink);
    }


    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            if (themeToggle) {
                themeToggle.textContent = 'Light Mode';
                themeToggle.setAttribute('aria-pressed', 'true');
            }
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
             if (themeToggle) {
                themeToggle.textContent = 'Dark Mode';
                themeToggle.setAttribute('aria-pressed', 'false');
            }
            localStorage.setItem('theme', 'light');
        }
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (document.body.classList.contains('dark-mode')) {
                applyTheme('light');
            } else {
                applyTheme('dark');
            }
        });
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme) applyTheme(savedTheme);
        else if (prefersDark) applyTheme('dark');
        else applyTheme('light'); 
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const action = contactForm.action;
            if (!action || action === "YOUR_FORMSPREE_ENDPOINT_HERE" || !action.includes("formspree.io")) {
                 formStatus.textContent = "Form endpoint not configured.";
                 formStatus.className = 'error';
                 return;
            }
            formStatus.textContent = 'Sending...';
            formStatus.className = ''; 
            try {
                const response = await fetch(action, { method: 'POST', body: formData, headers: {'Accept': 'application/json'} });
                if (response.ok) {
                    formStatus.textContent = "Thanks for your message! I'll get back to you soon.";
                    formStatus.className = 'success';
                    contactForm.reset();
                } else {
                    const data = await response.json().catch(() => ({})); 
                    formStatus.textContent = data.errors?.map((error) => `${error.field ? error.field + ': ' : ''}${error.message}`).join(", ") || (response.status === 422 ? "Please check input fields." : "Oops! Problem submitting.");
                    formStatus.className = 'error';
                }
            } catch (error) {
                formStatus.textContent = "Oops! Problem submitting. Check connection.";
                formStatus.className = 'error';
            }
        });
    }

    // Scroll Animation
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); 
                }
            });
        };
        const scrollObserver = new IntersectionObserver(observerCallback, { root: null, rootMargin: '0px', threshold: 0.1 });
        animatedElements.forEach(el => scrollObserver.observe(el));
    } else {
        animatedElements.forEach(el => el.classList.add('is-visible'));
    }

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNavUl = document.getElementById('main-nav-ul');
    if (mobileMenuToggle && mainNavUl) {
        mobileMenuToggle.addEventListener('click', () => {
            const isMenuOpen = mainNavUl.classList.toggle('nav-open');
            mobileMenuToggle.setAttribute('aria-expanded', isMenuOpen.toString());
            mobileMenuToggle.innerHTML = isMenuOpen ? '&times;' : '☰';
        });
    }

    // Multi-Item Carousel Functionality
    function initMultiItemCarousel(carouselSelector, configuredItemsPerPage, infiniteLoopEnabled) {
        const carouselWrapper = document.querySelector(carouselSelector);
        if (!carouselWrapper) return;

        const track = carouselWrapper.querySelector('.multi-item-carousel-track');
        const prevButton = carouselWrapper.querySelector('.carousel-button.prev');
        const nextButton = carouselWrapper.querySelector('.carousel-button.next');

        if (!track || !prevButton || !nextButton) {
            if(carouselWrapper) carouselWrapper.style.display = 'none';
            return;
        }
        
        const originalSlidesElements = Array.from(track.children);
        if (originalSlidesElements.length === 0) {
            carouselWrapper.style.display = 'none';
            return;
        }

        let itemsPerPage = configuredItemsPerPage;
        const transitionTime = 500;

        function getItemsPerPageForScreen() {
            if (carouselSelector === '.project-carousel-wrapper') {
                 if (window.innerWidth <= 768) return 1; 
                 return 2; 
            }
            if (window.innerWidth <= 768) return Math.min(configuredItemsPerPage, 1);
            if (window.innerWidth <= 992) return Math.min(configuredItemsPerPage, Math.max(1, configuredItemsPerPage - 1), 2);
            return configuredItemsPerPage;
        }
        
        let currentTrackIndex;
        const originalSlidesCount = originalSlidesElements.length;

        function setupSlides() {
            itemsPerPage = getItemsPerPageForScreen();
            track.innerHTML = ''; 
            originalSlidesElements.forEach(s => track.appendChild(s.cloneNode(true)));
            
            let currentSlidesInTrack = Array.from(track.children);

            if (infiniteLoopEnabled && originalSlidesCount > itemsPerPage) {
                for (let i = 0; i < itemsPerPage; i++) {
                    track.appendChild(currentSlidesInTrack[i % originalSlidesCount].cloneNode(true));
                }
                for (let i = 0; i < itemsPerPage; i++) {
                    track.insertBefore(currentSlidesInTrack[(originalSlidesCount - 1 - (i % originalSlidesCount) + originalSlidesCount) % originalSlidesCount].cloneNode(true), track.firstChild);
                }
                currentTrackIndex = itemsPerPage;
            } else {
                currentTrackIndex = 0;
            }
            
            const allTrackSlides = Array.from(track.children);
            allTrackSlides.forEach(slide => {
                 slide.style.flex = `0 0 calc(100% / ${itemsPerPage})`;
                 slide.style.minWidth = `calc(100% / ${itemsPerPage})`;
            });

            positionTrack(true);
            updateButtonStates();
        }

        function positionTrack(noTransition = false) {
            if (noTransition) track.style.transition = 'none';
            const percentageOffset = currentTrackIndex * (100 / itemsPerPage);
            track.style.transform = `translateX(-${percentageOffset}%)`;
            if (noTransition) {
                void track.offsetWidth; 
                track.style.transition = `transform ${transitionTime / 1000}s ease-in-out`;
            }
        }

        function updateButtonStates() {
            if (originalSlidesCount <= itemsPerPage && !infiniteLoopEnabled) { 
                prevButton.disabled = true;
                nextButton.disabled = true;
            } else if (!infiniteLoopEnabled) {
                prevButton.disabled = currentTrackIndex === 0;
                nextButton.disabled = currentTrackIndex >= originalSlidesCount - itemsPerPage;
            } else { 
                prevButton.disabled = originalSlidesCount <= itemsPerPage; 
                nextButton.disabled = originalSlidesCount <= itemsPerPage;
            }
        }
        
        function moveToNext() {
            if (!infiniteLoopEnabled && currentTrackIndex >= originalSlidesCount - itemsPerPage) return;
            currentTrackIndex++;
            positionTrack();
            if (infiniteLoopEnabled && originalSlidesCount > itemsPerPage && currentTrackIndex === originalSlidesCount + itemsPerPage) {
                setTimeout(() => { currentTrackIndex = itemsPerPage; positionTrack(true); }, transitionTime);
            }
            updateButtonStates();
        }

        function moveToPrev() {
            if (!infiniteLoopEnabled && currentTrackIndex === 0) return;
            currentTrackIndex--;
            positionTrack();
            if (infiniteLoopEnabled && originalSlidesCount > itemsPerPage && currentTrackIndex < itemsPerPage) {
                if (currentTrackIndex === itemsPerPage - 1) { 
                    setTimeout(() => { 
                        currentTrackIndex = originalSlidesCount + itemsPerPage - 1; 
                        positionTrack(true); 
                    }, transitionTime);
                }
            }
            updateButtonStates();
        }

        prevButton.addEventListener('click', moveToPrev);
        nextButton.addEventListener('click', moveToNext);
        
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(() => {
                const newItemsPerPage = getItemsPerPageForScreen();
                if (newItemsPerPage !== itemsPerPage) { 
                    setupSlides(); 
                } else { 
                    positionTrack(true); 
                }
                updateButtonStates(); 
            }, 250);
        });

        if (originalSlidesCount > 0) setupSlides();
        else carouselWrapper.style.display = 'none';
    }

    initMultiItemCarousel('.certification-carousel-wrapper', 3, true);
    initMultiItemCarousel('.project-carousel-wrapper', 2, false); 

    // Project Modal Functionality
    const projectModal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalSkillsList = document.getElementById('modal-skills-list');
    const modalGithubLink = document.getElementById('modal-github-link');
    const modalDashboardLink = document.getElementById('modal-dashboard-link');
    const modalPowerBiEmbedContainer = document.getElementById('modal-powerbi-embed-container');
    const modalPowerBiIframe = document.getElementById('modal-powerbi-iframe');
    
    let modalCloseButtons = null;
    if (projectModal) {
        modalCloseButtons = projectModal.querySelectorAll('[data-micromodal-close]');
    }

    function openModal(project) {
        if (!projectModal || !modalTitle || !modalImage || !modalDescription || !modalSkillsList || !modalGithubLink || !modalDashboardLink || !modalPowerBiEmbedContainer || !modalPowerBiIframe) {
            console.error("One or more modal elements are missing from the DOM.");
            return;
        }

        modalTitle.textContent = project.title;
        modalImage.src = project.imageUrl;
        modalImage.alt = project.imageAlt;
        modalDescription.innerHTML = project.fullDescriptionHTML;
        modalSkillsList.textContent = project.skills;

        if (project.githubUrl) {
            modalGithubLink.href = project.githubUrl;
            modalGithubLink.style.display = 'inline-block';
        } else {
            modalGithubLink.style.display = 'none';
        }

        if (project.dashboardUrl) {
            modalDashboardLink.href = project.dashboardUrl;
            modalDashboardLink.textContent = project.iframeSrc ? 'View on NovyPro/Web' : 'View Live Dashboard';
            modalDashboardLink.style.display = 'inline-block';
        } else {
             modalDashboardLink.style.display = 'none';
        }
        
        if (project.iframeSrc) {
            modalPowerBiIframe.src = project.iframeSrc;
            modalPowerBiEmbedContainer.style.display = 'block';
        } else {
            modalPowerBiIframe.src = '';
            modalPowerBiEmbedContainer.style.display = 'none';
        }

        projectModal.classList.add('is-open');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; 
    }

    function closeModal() {
        if (!projectModal) return;
        projectModal.classList.remove('is-open');
        projectModal.setAttribute('aria-hidden', 'true');
        if (modalPowerBiIframe) modalPowerBiIframe.src = ''; 
        document.body.style.overflow = ''; 
    }

    // Event delegation for project card clicks
    const projectCarouselTrack = document.querySelector('.project-carousel-wrapper .multi-item-carousel-track');
    if (projectCarouselTrack) {
        projectCarouselTrack.addEventListener('click', (event) => {
            const card = event.target instanceof Element ? event.target.closest('.project-card') : null;
            if (card) {
                const slideElement = card.closest('.project-slide');
                if (slideElement && slideElement.dataset.projectId) {
                    const projectId = slideElement.dataset.projectId;
                    const project = projectData.find(p => p.id === projectId);
                    if (project) {
                        openModal(project);
                    } else {
                        console.error('Project data not found for ID:', projectId);
                    }
                } else {
                     console.error('Project slide or project ID not found for card:', card);
                }
            }
        });
    }


    if (modalCloseButtons) {
        modalCloseButtons.forEach(button => {
            button.addEventListener('click', closeModal);
        });
    }

    document.addEventListener('keydown', (event) => {
        if (projectModal && event.key === 'Escape' && projectModal.classList.contains('is-open')) {
            closeModal();
        }
    });
});
