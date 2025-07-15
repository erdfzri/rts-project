/**
* Template Name: Strategy
* Template URL: https://bootstrapmade.com/strategy-bootstrap-agency-template/
* Updated: Jun 06 2025 with Bootstrap v5.3.6
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
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

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }

 
    /**
   * Projects Page Filtering
   */
  function initProjectsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons in this control group
        this.parentNode.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Here you would typically filter the projects
        // For this demo, we're just changing the button state
      });
    });
  }

  /**
   * Initialize Projects Page
   */
  function initProjectsPage() {
    if (document.querySelector('.projects-container')) {
      initProjectsFilter();
      
      // Initialize any other projects page specific functionality
    }
  }

  // Initialize everything when the DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initProjectsPage();
  });

  /**
 * Improved Mobile Navigation
 */
function initMobileNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.navmenu ul');
  const navLinks = document.querySelectorAll('.navmenu a');
  
  // Toggle mobile menu
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });
  
  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 992) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 992) {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });
}

/**
 * Active Link Highlighting
 */
function setActiveLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navmenu a');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 100)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initMobileNav();
  setActiveLink();
});

// Animasi untuk floating elements
function initAboutAnimations() {
  const profileContainer = document.querySelector('.profile-container');
  
  if (profileContainer) {
    // Parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 20;
      const y = (window.innerHeight / 2 - e.pageY) / 20;
      profileContainer.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
}

document.addEventListener('DOMContentLoaded', initAboutAnimations);

// Testimonial Slider Functionality
// Custom Scrollbar Functionality
function initTestimonialScrollbar() {
  const track = document.querySelector('.testimonial-track');
  const thumb = document.querySelector('.scrollbar-thumb');
  const scrollTrack = document.querySelector('.scrollbar-track');
  if (!track || !thumb || !scrollTrack) return;

  // Update thumb position on scroll
  function updateThumb() {
    const scrollWidth = track.scrollWidth - track.clientWidth;
    const scrollLeft = track.scrollLeft;
    const thumbWidth = Math.max(track.clientWidth / track.scrollWidth * scrollTrack.offsetWidth, 40);
    const maxThumbMove = scrollTrack.offsetWidth - thumbWidth;
    const thumbLeft = scrollWidth ? (scrollLeft / scrollWidth) * maxThumbMove : 0;
    thumb.style.width = thumbWidth + 'px';
    thumb.style.left = thumbLeft + 'px';
  }
  track.addEventListener('scroll', updateThumb);
  window.addEventListener('resize', updateThumb);
  updateThumb();

  // Drag scrollbar
  let isDragging = false;
  let startX, startScrollLeft;
  thumb.addEventListener('mousedown', function(e) {
    isDragging = true;
    startX = e.clientX;
    startScrollLeft = track.scrollLeft;
    document.body.style.cursor = 'grabbing';
    e.preventDefault();
  });
  document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const scrollWidth = track.scrollWidth - track.clientWidth;
    const thumbWidth = thumb.offsetWidth;
    const maxThumbMove = scrollTrack.offsetWidth - thumbWidth;
    const percent = dx / maxThumbMove;
    track.scrollLeft = startScrollLeft + percent * scrollWidth;
  });
  document.addEventListener('mouseup', function() {
    isDragging = false;
    document.body.style.cursor = '';
  });
  // Click on scrollbar track
  scrollTrack.addEventListener('mousedown', function(e) {
    if (e.target === thumb) return;
    const rect = scrollTrack.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const thumbWidth = thumb.offsetWidth;
    const maxThumbMove = scrollTrack.offsetWidth - thumbWidth;
    const percent = x / maxThumbMove;
    const scrollWidth = track.scrollWidth - track.clientWidth;
    track.scrollLeft = percent * scrollWidth;
  });
}

document.addEventListener('DOMContentLoaded', initTestimonialScrollbar);

// Floating effect for service cards
function initServiceAnimations() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach((card, index) => {
    // Add delay based on position for staggered animation
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Mouse move parallax effect
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

// Service Cards 3D Tilt Effect
function initServiceTilt() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const x = e.clientX - card.getBoundingClientRect().left;
      const y = e.clientY - card.getBoundingClientRect().top;
      
      const centerX = card.offsetWidth / 2;
      const centerY = card.offsetHeight / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.querySelector('.card-inner').style.transform = 
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.querySelector('.card-inner').style.transform = 'rotateX(0) rotateY(0)';
    });
  });
}

// Client Cards Glow Effect
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

document.addEventListener('DOMContentLoaded', () => {
  initServiceTilt();
  initClientGlow();
});


document.addEventListener('DOMContentLoaded', function() {
  // Modal YouTube logic
  document.querySelectorAll('.project-card a[data-yt]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const ytId = this.getAttribute('data-yt');
      document.getElementById('youtube-iframe').src = `https://www.youtube.com/embed/${ytId}?autoplay=1`;
      document.getElementById('youtube-modal').style.display = 'flex';
    });
  });

  document.querySelector('.youtube-modal-close').onclick = function() {
    document.getElementById('youtube-modal').style.display = 'none';
    document.getElementById('youtube-iframe').src = '';
  };
});

function initProjectsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class dari semua button
            filterButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class ke button yang diklik
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter').toLowerCase();
            
            // Filter projek
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category').toLowerCase();
                
                if (filterValue === 'all' || category.includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Reset pagination setelah filter
            if (typeof initPagination === 'function') {
                initPagination();
            }
        });
    });
}

// Fungsi untuk pagination
function initPagination() {
  const pageLinks = document.querySelectorAll('.page-link');
  const projectCards = document.querySelectorAll('.project-card');
  const cardsPerPage = 6;
  let currentPage = 1;
  
  function showPage(page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    
    projectCards.forEach((card, index) => {
      if (index >= startIndex && index < endIndex && card.style.display !== 'none') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    
    // Update active class pagination
    pageLinks.forEach(link => {
      link.classList.remove('active');
      if (parseInt(link.textContent) === page) {
        link.classList.add('active');
      }
    });
    
    // Enable/disable prev/next buttons
    document.querySelector('.page-link:first-child').classList.toggle('disabled', page === 1);
    document.querySelector('.page-link:last-child').classList.toggle('disabled', 
      page === Math.ceil(projectCards.length / cardsPerPage));
    
    currentPage = page;
  }
  
  // Event listeners untuk pagination
  pageLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (this.classList.contains('disabled')) return;
      
      if (this.querySelector('.fa-chevron-left')) {
        showPage(currentPage - 1);
      } else if (this.querySelector('.fa-chevron-right')) {
        showPage(currentPage + 1);
      } else {
        showPage(parseInt(this.textContent));
      }
    });
  });
  
  // Tampilkan halaman pertama saat load
  showPage(1);
}

document.addEventListener('DOMContentLoaded', function() {
  initProjectsFilter();
  initPagination();
  
  // Untuk project card dengan video YouTube
  document.querySelectorAll('.project-card[data-category="video"]').forEach(card => {
    card.addEventListener('click', function(e) {
      if (!e.target.closest('.project-link')) {
        const iframe = this.querySelector('iframe');
        if (iframe) {
          // Tampilkan video fullscreen atau modal
          // Implementasi sesuai kebutuhan Anda
        }
      }
    });
  });
});

// Fungsi untuk modal video
function initVideoModal() {
    const modal = document.getElementById("videoModal");
    const modalIframe = document.getElementById("ytPlayer");
    const closeBtn = document.querySelector(".close-modal");
    const videoLinks = document.querySelectorAll(".view-video");
    
    // Buka modal ketika video diklik
    videoLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const videoId = this.getAttribute("data-ytid");
            modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; // Mencegah scroll di background
        });
    });
    
    // Tutup modal
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        modalIframe.src = ""; // Hentikan video
        document.body.style.overflow = "auto";
    });
    
    // Tutup modal ketika klik di luar konten
    window.addEventListener("click", function(e) {
        if (e.target == modal) {
            modal.style.display = "none";
            modalIframe.src = "";
            document.body.style.overflow = "auto";
        }
    });
    
    // Tutup modal dengan tombol ESC
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && modal.style.display === "flex") {
            modal.style.display = "none";
            modalIframe.src = "";
            document.body.style.overflow = "auto";
        }
    });
}

// Panggil fungsi ketika DOM siap
document.addEventListener('DOMContentLoaded', function() {
    initVideoModal();
    // Fungsi lainnya...
});

// Preloader dan animasi awal
document.addEventListener('DOMContentLoaded', function() {
  // Set timeout untuk preloader
  setTimeout(function() {
    document.getElementById('preloader').style.opacity = '0';
    setTimeout(function() {
      document.getElementById('preloader').style.display = 'none';
      
      // Trigger AOS refresh setelah preloader hilang
      AOS.refresh();
      
      // Animasi khusus untuk elemen hero
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        setTimeout(function() {
          heroContent.style.transition = 'all 0.8s ease-out';
          heroContent.style.opacity = '1';
          heroContent.style.transform = 'translateY(0)';
        }, 100);
      }
    }, 500);
  }, 1000);
});
})();