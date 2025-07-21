

(function() {
  "use strict";

 

const translations = {
        id: {
            title: "rtsprojects | Editor Profesional",
            "nav-home": "Beranda",
            "nav-services": "Layanan",
            "nav-about": "Tentang",
            "nav-clients": "Klien",
            "nav-contact": "Kontak",
            "nav-portfolio": "Portofolio",
            "hero-title": "DESAIN <span>KREATIF</span>",
            "hero-description": "Temukan strategi inovatif untuk komunikasi visual yang berdampak. Kami mengubah ide menjadi kenyataan yang menarik, memastikan merek Anda menonjol di pasar yang ramai.",
            "hero-explore-services": "JELAJAHI LAYANAN",
            "hero-contact-me": "HUBUNGI SAYA",
            "about-name": "Erry Sandy",
            "about-title": "Co-Founder rtsprojects",
            "about-bio": "Saya mengubah cuplikan biasa menjadi karya sinematik. Dengan latar belakang teori film dan pengalaman lebih dari 7 tahun dalam pascaproduksi, saya menghadirkan presisi teknis dan visi artistik dalam setiap proyek.",
            "about-skill-1": "Ahli Adobe Premiere Pro, After Effects, dan DaVinci Resolve",
            "about-skill-2": "Arah kreatif & penceritaan visual",
            "about-skill-3": "Pengoperasian kamera untuk dokumenter & film pendek",
            "about-service-link": "Lihat Layanan",
            "about-tools": "Alat Editing",
            "about-clients": "150+ Klien",
            "about-experience": "Tahun Pengalaman",
            "about-experience-desc": "Bekerja sama dengan merek dan agensi global",
            "services-title": "Layanan <span>Kami</span>",
            "services-description": "Solusi profesional sesuai kebutuhan kreatif Anda",
            "service-video-editor-title": "Video Editor",
            "service-video-editor-desc": "Editing video profesional untuk konten sinematik, promosi, dan media sosial dengan color grading tingkat lanjut.",
            "service-video-editor-feature-1": "Editing Sinematik",
            "service-video-editor-feature-2": "Grafis Bergerak",
            "service-video-editor-feature-3": "Color Grading",
            "service-visual-artist-title": "Visual Artist",
            "service-visual-artist-desc": "Ilustrasi digital, manipulasi foto, dan desain grafis untuk branding dan proyek pribadi.",
            "service-visual-artist-feature-1": "Ilustrasi Digital",
            "service-visual-artist-feature-2": "Manipulasi Foto",
            "service-visual-artist-feature-3": "Desain Grafis",
            "service-visual-jockey-title": "Visual Jockey",
            "service-visual-jockey-desc": "Performa visual langsung untuk acara, konser, dan klub dengan animasi serta efek real-time.",
            "service-visual-jockey-feature-1": "Mixer Visual Langsung",
            "service-visual-jockey-feature-2": "Animasi Real-time",
            "service-visual-jockey-feature-3": "Pengaturan Visual Acara",
            "service-ai-content-title": "AI Content",
            "service-ai-content-desc": "Pembuatan konten berbasis AI termasuk teks, gambar, dan peningkatan video otomatis.",
            "service-ai-content-feature-1": "Generasi Teks AI",
            "service-ai-content-feature-2": "Pembuatan Gambar AI",
            "service-ai-content-feature-3": "Peningkatan Video AI",
            "service-link": "Detail Layanan <i class=\"fas fa-arrow-right\"></i>",
            "clients-title": "Dipercaya <span>Oleh</span>",
            "clients-description": "Beberapa merek dan agensi yang percaya pada kami",
            "cta-badge": "Penawaran Khusus!",
            "cta-title": "Tingkatkan Cerita Visual Anda Hari Ini",
            "cta-description": "Maksimalkan potensi konten Anda dengan editing profesional, narasi kuat, dan hasil sinematik. Biarkan kami mengubah cuplikan mentah Anda menjadi visual memukau yang menginspirasi.",
            "cta-feature-1": "Editing Sinematik",
            "cta-feature-2": "Visual Kreatif",
            "cta-feature-3": "Proses Cepat",
            "cta-start-project": "Mulai Proyek Anda",
            "cta-see-services": "Lihat Layanan",
            "contact-title": "Hubungi <span>Kami</span>",
            "contact-description": "Mari buat sesuatu yang luar biasa bersama",
            "contact-text": "Untuk konsultasi atau pemesanan jasa editing, silakan langsung klik tombol WhatsApp di bawah ini.",
            "contact-whatsapp": "Hubungi via WhatsApp",
            "contact-alt": "Atau hubungi kami melalui",
            "footer-about": "Layanan editing foto dan video profesional untuk mewujudkan visi kreatif Anda dengan penceritaan visual yang memukau.",
            "footer-links-title": "Tautan Cepat",
            "footer-services-title": "Layanan",
            "footer-service-video-editor": "Editor Video",
            "footer-service-visual-artist": "Seniman Visual",
            "footer-service-visual-jockey": "Visual Jockey",
            "footer-service-ai-content": "Konten AI",
            "footer-newsletter-title": "Buletin",
            "footer-newsletter-desc": "Berlangganan untuk tips editing dan penawaran khusus",
            "footer-newsletter-placeholder": "Email Anda",
            "footer-copyright": "© 2025 rtsprojects. Seluruh hak cipta dilindungi.",
            "footer-privacy": "Kebijakan Privasi",
            "footer-terms": "Syarat & Ketentuan"
        },
        en: {
            title: "rtsprojects | Professional Editor",
            "nav-home": "Home",
            "nav-services": "Services",
            "nav-about": "About",
            "nav-clients": "Clients",
            "nav-contact": "Contact",
            "nav-portfolio": "Portfolio",
            "hero-title": "CREATIVE <span>DESIGN</span>",
            "hero-description": "Discover innovative strategies for impactful visual communication. We transform ideas into captivating realities, ensuring your brand stands out in a crowded market.",
            "hero-explore-services": "EXPLORE SERVICES",
            "hero-contact-me": "CONTACT ME",
            "about-name": "Erry Sandy",
            "about-title": "Co-Founder rtsprojects",
            "about-bio": "I transform ordinary footage into cinematic masterpieces. With a background in film theory and over 7 years of post-production experience, I bring technical precision and artistic vision to every project.",
            "about-skill-1": "Expert in Adobe Premiere Pro, After Effects, and DaVinci Resolve",
            "about-skill-2": "Creative direction & visual storytelling",
            "about-skill-3": "Camera operation for documentaries & short films",
            "about-service-link": "View Services",
            "about-tools": "Editing Tools",
            "about-clients": "150+ Clients",
            "about-experience": "Years of Experience",
            "about-experience-desc": "Collaborating with global brands and agencies",
            "services-title": "Our <span>Services</span>",
            "services-description": "Professional solutions tailored to your creative needs",
            "service-video-editor-title": "Video Editor",
            "service-video-editor-desc": "Professional video editing for cinematic content, promotions, and social media with advanced color grading.",
            "service-video-editor-feature-1": "Cinematic Editing",
            "service-video-editor-feature-2": "Motion Graphics",
            "service-video-editor-feature-3": "Color Grading",
            "service-visual-artist-title": "Visual Artist",
            "service-visual-artist-desc": "Digital illustrations, photo manipulation, and graphic design for branding and personal projects.",
            "service-visual-artist-feature-1": "Digital Illustration",
            "service-visual-artist-feature-2": "Photo Manipulation",
            "service-visual-artist-feature-3": "Graphic Design",
            "service-visual-jockey-title": "Visual Jockey",
            "service-visual-jockey-desc": "Live visual performances for events, concerts, and clubs with real-time animations and effects.",
            "service-visual-jockey-feature-1": "Live Visual Mixer",
            "service-visual-jockey-feature-2": "Real-time Animation",
            "service-visual-jockey-feature-3": "Event Visual Setup",
            "service-ai-content-title": "AI Content",
            "service-ai-content-desc": "AI-based content creation including text, images, and automated video enhancements.",
            "service-ai-content-feature-1": "AI Text Generation",
            "service-ai-content-feature-2": "AI Image Creation",
            "service-ai-content-feature-3": "AI Video Enhancement",
            "service-link": "Service Details <i class=\"fas fa-arrow-right\"></i>",
            "clients-title": "Trusted <span>By</span>",
            "clients-description": "Some brands and agencies that trust us",
            "cta-badge": "Special Offer!",
            "cta-title": "Elevate Your Visual Story Today",
            "cta-description": "Maximize your content’s potential with professional editing, powerful narratives, and cinematic results. Let us transform your raw footage into stunning visuals that inspire.",
            "cta-feature-1": "Cinematic Editing",
            "cta-feature-2": "Creative Visuals",
            "cta-feature-3": "Fast Process",
            "cta-start-project": "Start Your Project",
            "cta-see-services": "View Services", 
            "contact-title": "Contact <span>Us</span>",
            "contact-description": "Let’s create something extraordinary together",
            "contact-text": "For consultations or booking editing services, please click the WhatsApp button below.",
            "contact-whatsapp": "Contact via WhatsApp",
            "contact-alt": "Or reach us through",
            "footer-about": "Professional photo and video editing services to bring your creative vision to life with captivating visual storytelling.",
            "footer-links-title": "Quick Links",
            "footer-services-title": "Services",
            "footer-service-video-editor": "Video Editor",
            "footer-service-visual-artist": "Visual Artist",
            "footer-service-visual-jockey": "Visual Jockey",
            "footer-service-ai-content": "AI Content",
            "footer-newsletter-title": "Newsletter",
            "footer-newsletter-desc": "Subscribe for editing tips and special offers",
            "footer-newsletter-placeholder": "Your Email",
            "footer-copyright": "© 2025 rtsprojects. All rights reserved.",
            "footer-privacy": "Privacy Policy",
            "footer-terms": "Terms & Conditions"
        }
    };


/**
 * Toggle language dropdown visibility (Desktop)
 */
function toggleLanguageDropdown(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('language-options');
    if (dropdown) {
        dropdown.classList.toggle('active');
        console.log('Desktop dropdown toggled, active:', dropdown.classList.contains('active'));
    } else {
        console.error('Desktop dropdown (#language-options) not found');
    }
}

/**
 * Toggle language dropdown visibility (Mobile)
 */
function toggleLanguageDropdownMobile(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('language-options-mobile');
    if (dropdown) {
        dropdown.classList.toggle('active');
        console.log('Mobile dropdown toggled, active:', dropdown.classList.contains('active')); // Debugging
    } else {
        console.error('Mobile dropdown (#language-options-mobile) not found');
    }
}

/**
 * Change language function
 */
function changeLanguage(lang) {
    // Update translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key] || element.innerHTML;
        if (element.children.length > 0) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = translation;
            element.innerHTML = '';
            Array.from(tempDiv.childNodes).forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    element.appendChild(document.createTextNode(node.textContent));
                } else {
                    element.appendChild(node.cloneNode(true));
                }
            });
        } else {
            element.innerHTML = translation;
        }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = translations[lang][key] || element.placeholder || '';
    });

    // Update document title
    document.title = translations[lang]['title'] || document.title;

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update selected language display (Desktop)
    const selectedLang = document.querySelector('.navmenu .selected-lang');
    if (selectedLang) {
        const flagSrc = lang === 'id' ? 'img/indonesia.png' : 'img/inggris.png';
        const langText = lang === 'id' ? 'Indonesia' : 'English';
        selectedLang.innerHTML = `<img src="${flagSrc}" alt="${langText}" class="flag-icon">${langText}<i class="fas fa-chevron-down"></i>`;
    }

    // Update selected language display (Mobile)
    const mobileSelectedLang = document.querySelector('.language-switcher-mobile .selected-lang');
    if (mobileSelectedLang) {
        const flagSrc = lang === 'id' ? 'img/indonesia.png' : 'img/inggris.png';
        const langText = lang === 'id' ? 'Indonesia' : 'English';
        mobileSelectedLang.innerHTML = `<img src="${flagSrc}" alt="${langText}" class="flag-icon">${langText}<i class="fas fa-chevron-down"></i>`;
    }

    // Save language preference
    localStorage.setItem('language', lang);

    // Tutup semua dropdown setelah memilih bahasa
    const desktopDropdown = document.getElementById('language-options');
    const mobileDropdown = document.getElementById('language-options-mobile');
    if (desktopDropdown) {
        desktopDropdown.classList.remove('active');
        console.log('Desktop dropdown closed after language change'); // Debugging
    }
    if (mobileDropdown) {
        mobileDropdown.classList.remove('active');
        console.log('Mobile dropdown closed after language change'); // Debugging
    }

    // Refresh AOS
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

/**
 * Initialize language switcher
 */
function initLanguageSwitcher() {
    // Set bahasa awal tanpa membuka dropdown
    const savedLang = localStorage.getItem('language') || 'id';
    changeLanguage(savedLang);

    // Pastikan dropdown tersembunyi saat inisialisasi
    const desktopDropdown = document.getElementById('language-options');
    const mobileDropdown = document.getElementById('language-options-mobile');
    
    if (desktopDropdown) {
        desktopDropdown.classList.remove('active');
        console.log('Desktop dropdown initialized, active:', desktopDropdown.classList.contains('active')); // Debugging
    } else {
        console.error('Desktop dropdown (#language-options) not found during initialization');
    }
    
    if (mobileDropdown) {
        mobileDropdown.classList.remove('active');
        console.log('Mobile dropdown initialized, active:', mobileDropdown.classList.contains('active')); // Debugging
    } else {
        console.error('Mobile dropdown (#language-options-mobile) not found during initialization');
    }

    // Event listener untuk desktop language options
    const desktopOptions = document.querySelectorAll('#language-options li');
    desktopOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            event.stopPropagation();
            const lang = option.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Event listener untuk mobile language options
    const mobileOptions = document.querySelectorAll('#language-options-mobile li');
    mobileOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            event.stopPropagation();
            const lang = option.getAttribute('data-lang');
            changeLanguage(lang);
            // Tutup mobile menu setelah memilih bahasa
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileNavToggle = document.getElementById('mobile-nav-toggle');
            if (mobileMenu && mobileNavToggle) {
                mobileMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
                mobileNavToggle.querySelector('i').classList.add('fa-bars');
                mobileNavToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    // Tutup dropdown saat klik di luar
    document.addEventListener('click', (e) => {
        const desktopDropdown = document.getElementById('language-options');
        const desktopSelectedLang = document.querySelector('.navmenu .selected-lang');
        const mobileDropdown = document.getElementById('language-options-mobile');
        const mobileSelectedLang = document.querySelector('.language-switcher-mobile .selected-lang');

        if (desktopDropdown && desktopSelectedLang && !desktopDropdown.contains(e.target) && !desktopSelectedLang.contains(e.target)) {
            desktopDropdown.classList.remove('active');
            console.log('Desktop dropdown closed on outside click');
        }
        if (mobileDropdown && mobileSelectedLang && !mobileDropdown.contains(e.target) && !mobileSelectedLang.contains(e.target)) {
            mobileDropdown.classList.remove('active');
            console.log('Mobile dropdown closed on outside click');
        }
    });

    // Pastikan selected-lang memiliki event listener untuk toggle
    const desktopSelectedLang = document.querySelector('.navmenu .selected-lang');
    if (desktopSelectedLang) {
        desktopSelectedLang.addEventListener('click', toggleLanguageDropdown);
    } else {
        console.error('Desktop selected-lang not found');
    }

    const mobileSelectedLang = document.querySelector('.language-switcher-mobile .selected-lang');
    if (mobileSelectedLang) {
        mobileSelectedLang.addEventListener('click', toggleLanguageDropdownMobile);
    } else {
        console.error('Mobile selected-lang not found');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    const savedLang = localStorage.getItem('language') || 'id';
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        languageSwitcher.value = savedLang;
        window.changeLanguage = changeLanguage;
        changeLanguage(savedLang); // Panggil changeLanguage dengan bahasa awal
    }

    // Inisialisasi semua fungsi
    initLanguageSwitcher(); // Tambahkan ini
    initMobileNav();
    aosInit();
    navmenuScrollspy();
});
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.remove();
                    if (typeof AOS !== 'undefined') {
                        AOS.refresh();
                    }
                }, 500);
            }, 1000);
        });
    }

    /**
     * Mobile navigation
     */
    function initMobileNav() {
        const mobileNavToggle = document.getElementById('mobile-nav-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuClose = document.getElementById('mobile-menu-close');

        if (mobileNavToggle && mobileMenu && mobileMenuClose) {
            mobileNavToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                document.body.classList.toggle('no-scroll');
                mobileNavToggle.querySelector('i').classList.toggle('fa-bars');
                mobileNavToggle.querySelector('i').classList.toggle('fa-times');
            });

            mobileMenuClose.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
               
                mobileNavToggle.querySelector('i').classList.add('fa-bars');
                mobileNavToggle.querySelector('i').classList.remove('fa-times');
            });

            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                   
                    mobileNavToggle.querySelector('i').classList.add('fa-bars');
                    mobileNavToggle.querySelector('i').classList.remove('fa-times');
                });
            });
        }
    }

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        function toggleScrollTop() {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
        scrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        window.addEventListener('load', toggleScrollTop);
        document.addEventListener('scroll', toggleScrollTop);
    }

    /**
     * Animation on scroll
     */
    function aosInit() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 600,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
        }
    }

    /**
     * Navmenu scrollspy
     */
    function navmenuScrollspy() {
        const navmenulinks = document.querySelectorAll('.navmenu a, .mobile-menu a');
        function updateActiveLink() {
            navmenulinks.forEach(navmenulink => {
                if (!navmenulink.hash) return;
                const section = document.querySelector(navmenulink.hash);
                if (!section) return;
                const position = window.scrollY + 200;
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navmenulinks.forEach(link => link.classList.remove('active'));
                    navmenulink.classList.add('active');
                } else {
                    navmenulink.classList.remove('active');
                }
            });
        }
        window.addEventListener('scroll', updateActiveLink);
        window.addEventListener('load', updateActiveLink);
    }

    /**
     * Initialize all functions
     */
    document.addEventListener('DOMContentLoaded', () => {
        // Set initial language
        const savedLang = localStorage.getItem('language') || 'id';
        const languageSwitcher = document.getElementById('language-switcher');
        if (languageSwitcher) {
            languageSwitcher.value = savedLang;
            // Bind changeLanguage globally
            window.changeLanguage = changeLanguage;
            changeLanguage();
        }

        initMobileNav();
        aosInit();
        navmenuScrollspy();
    });

    /**
     * About section animations
     */


    /**
     * Service cards animations
     */
    function initServiceAnimations() {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.addEventListener('mousemove', (e) => {
                const x = e.clientX - card.getBoundingClientRect().left;
                const y = e.clientY - card.getBoundingClientRect().top;
                const centerX = card.clientWidth / 2;
                const centerY = card.clientHeight / 2;
                const moveX = (x - centerX) / 20;
                const moveY = (y - centerY) / 20;
                card.style.transform = `translateY(-10px) translate(${moveX}px, ${moveY}px) scale(1.02)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
        });
    }

    document.addEventListener('DOMContentLoaded', initServiceAnimations);

    /**
     * Client cards glow effect
     */
    function initClientGlow() {
        const clientCards = document.querySelectorAll('.client-card');
        clientCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const x = e.clientX - card.getBoundingClientRect().left;
                const y = e.clientY - card.getBoundingClientRect().top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    }

    document.addEventListener('DOMContentLoaded', initClientGlow);

 /**
 * Client Modal Functionality
 */
function initClientModal() {
    const modal = document.getElementById('clientModal');
    const modalImg = document.querySelector('.client-modal-img');
    const modalTitle = document.querySelector('.client-modal-title');
    const modalDesc = document.querySelector('.client-modal-desc');
    const modalProjects = document.querySelector('.client-modal-projects');
    const modalClose = document.querySelector('.client-modal-close');
    const clientImages = document.querySelectorAll('.client-img');

    // Debugging: Periksa apakah elemen ditemukan
    console.log('clientModal:', modal);
    console.log('clientImages found:', clientImages.length);

    // Pastikan modal tersembunyi saat inisialisasi
    if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    } else {
        console.error('Modal element (#clientModal) not found');
        return;
    }

    // Pasang event listener untuk setiap gambar klien
    clientImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            console.log(`Client image ${index} clicked`); // Debugging

            const imgSrc = img.getAttribute('data-modal-img');
            const imgTitle = img.getAttribute('alt')?.replace(' Logo', '') || 'Client';
            const imgDesc = img.getAttribute('data-modal-desc') || 'No description available';
            let projects = {};
            try {
                const projectsData = img.getAttribute('data-modal-projects');
                if (projectsData) {
                    projects = JSON.parse(projectsData);
                }
            } catch (e) {
                console.error('Error parsing projects JSON for image', index, e);
            }

            // Isi konten modal
            if (modalImg) modalImg.src = imgSrc;
            if (modalTitle) modalTitle.textContent = imgTitle;
            if (modalDesc) modalDesc.textContent = imgDesc;

            // Generate project lists
            const projectsContent = document.querySelector('.projects-content');
            if (projectsContent) {
                projectsContent.innerHTML = ''; // Clear previous content
                if (Object.keys(projects).length > 0) {
                    modalProjects.style.display = 'block';
                    for (const [category, items] of Object.entries(projects)) {
                        const categoryTitle = document.createElement('h5');
                        categoryTitle.textContent = category;
                        projectsContent.appendChild(categoryTitle);
                        const ul = document.createElement('ul');
                        items.forEach(item => {
                            const li = document.createElement('li');
                            li.textContent = item;
                            ul.appendChild(li);
                        });
                        projectsContent.appendChild(ul);
                    }
                } else {
                    modalProjects.style.display = 'none';
                }
            }

            // Tampilkan modal
            modal.style.display = 'flex';
            modal.setAttribute('aria-hidden', 'false');
        });
    });

    // Close modal on close button click
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
           
        });
    }

    // Close modal on outside click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                modal.setAttribute('aria-hidden', 'true');
               
            }
        });
    }

    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
           
        }
    });
}

// Initialize client modal when DOM is loaded
document.addEventListener('DOMContentLoaded', initClientModal);
})();