// ========== FADE-IN EFFECT (Intersection Observer) ==========
function setupFadeInEffect() {
  const fadeElements = document.querySelectorAll(
    ".fade-in-bottom-top, .fade-in-left-right, .fade-in-right-left, .fade-in-scale, .fade-in-stagger"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "-100px 0px",
      threshold: 0.2,
    }
  );

  fadeElements.forEach((element) => {
    observer.observe(element);
  });
}

// ========== FEATURE TOGGLE SYSTEM ==========
// This system uses the config.js file to enable/disable website features

function initializeFeatureToggles() {
  // Check if registration is disabled
  if (APP_CONFIG && !APP_CONFIG.features.registration) {
    disableRegistrationFeature();
  }
}

function disableRegistrationFeature() {
  console.log("Registration feature is disabled");

  // 1. Remove registration link from navigation
  const registrationLinks = document.querySelectorAll(
    'a[href="registration.html"]'
  );
  registrationLinks.forEach((link) => {
    link.style.display = "none";
  });

  // 2. If we're on the registration page, show maintenance message
  if (window.location.pathname.includes("registration.html")) {
    showMaintenancePage();
  }

  // 3. Remove any "Register" buttons that link to registration page
  const registerButtons = document.querySelectorAll("a.cta-button, a.conf-btn");
  registerButtons.forEach((button) => {
    if (button.href && button.href.includes("registration.html")) {
      button.style.display = "none";
    }
  });
}

function showMaintenancePage() {
  // Replace the entire page content with maintenance message
  document.body.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta
      name="viewport"
      content="width=device-width, initial-scale=0.8, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
            <title>Registration Coming Soon - INTAC</title>
            <link rel="stylesheet" href="css/style2.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </head>
        <body>
            <header class="modern-header">
                <div class="header-container container">
                    <div class="logo-container">
                        <a href="index.html" class="logo">
                            <img src="public/img/brands/intac_logo-header.webp" alt="INTAC Logo" class="logo-img" />
                        </a>
                    </div>
                    <nav class="main-nav">
                        <ul class="nav-list">
                            <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                            <li class="nav-item"><a href="conference.html" class="nav-link">Conference</a></li>
                            <li class="nav-item"><a href="registration.html" class="nav-link">Visitor Registration</a></li>
                            <li class="nav-item"><a href="news.html" class="nav-link">News</a></li>
                            <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                        </ul>
                    </nav>
                    <button class="mobile-menu-toggle" aria-label="Toggle menu">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </header>

            <section class="maintenance-hero">
                <div class="container">
                    <div class="maintenance-content">
                        <div class="maintenance-icon">
                            <i class="fas fa-tools"></i>
                        </div>
                        <h1>Registration Coming Soon</h1>
                        <p class="maintenance-subtitle">
                            ${APP_CONFIG.maintenance.registrationMessage}
                        </p>
                        <div class="maintenance-features">
                            <div class="feature-item">
                                <i class="fas fa-calendar-alt"></i>
                                <span>${APP_CONFIG.event.date}</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${APP_CONFIG.event.venue}</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-clock"></i>
                                <span>${APP_CONFIG.event.time}</span>
                            </div>
                        </div>
                        <div class="maintenance-actions">
                            <a href="conference.html" class="cta-button primary">Explore Conference</a>
                            <a href="contact.html" class="cta-button secondary">Contact Us for Updates</a>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="modern-footer">
      <div class="container-footer">
        <div class="footer-content">
          <div class="footer-section footer-about">
            <div class="footer-logo">
              <a href="index.html" class="logo">
                <img src="public/img/brands/intac_logo-footer.webp" alt="INTAC Logo" />
              </a>
            </div>
            <p class="footer-description">
              The International Tourism, Cultures Exhibition & Conference
              (INTAC) is the premier platform connecting global tourism
              professionals and celebrating diverse cultures.
            </p>
            <div class="social-links">
              <a
                href="https://www.facebook.com/intac.my"
                class="social-link"
                aria-label="Facebook"
                target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/intac.my"
                class="social-link"
                aria-label="Instagram"
                target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li>
                <a href="index.html#hero-background-container">Home</a>
              </li>
              <li><a href="conference.html#overview">About INTAC</a></li>
              <li>
                <a href="conference.html#conf-prog-sec">Conference Program</a>
              </li>
              <li><a href="#">Exhibitors</a></li>
              <li><a href="registration.html">Visitor Registration</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Resources</h4>
            <ul class="footer-links">
              <li><a href="news.html#news-update-sec">News & Updates</a></li>
              <li><a href="news.html#gallery-sec">Media Gallery</a></li>
              <li><a href="#">Travel Information</a></li>
              <li><a href="contact.html#faq-sec">FAQ</a></li>
              <li><a href="contact.html#contact-sec">Contact Us</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Contact Info</h4>
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-text">
                  <p>Malaysia International Exhibition & Showroom (MIES)</p>
                  <p>Kuala Lumpur, Malaysia</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div class="contact-text">
                  <p>+603 1234 5678</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">✉️</div>
                <div class="contact-text">
                  <p>info@intac.my</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-copyright">
            <p>
              &copy; 2026 International Tourism, Cultures Exhibition &
              Conference, All rights reserved.
            </p>
          </div>
          <div class="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>

            <style>
                .maintenance-hero {
                    min-height: 80vh;
                    display: flex;
                    align-items: center;
                    background: linear-gradient(135deg, var(--dark) 0%, var(--dark-light) 100%);
                    color: var(--white);
                    text-align: center;
                    padding: 8rem 0 4rem;
                }
                
                .maintenance-content {
                    max-width: 600px;
                    margin: 0 auto;
                }
                
                .maintenance-icon {
                    font-size: 4rem;
                    color: var(--primary-light);
                    margin-bottom: 2rem;
                }
                
                .maintenance-content h1 {
                    font-size: 3rem;
                    margin-bottom: 1.5rem;
                }
                
                .maintenance-subtitle {
                    font-size: 1.2rem;
                    opacity: 0.9;
                    margin-bottom: 3rem;
                    line-height: 1.6;
                }
                
                .maintenance-features {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 3rem;
                    flex-wrap: wrap;
                }
                
                .feature-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.8rem 1.2rem;
                    border-radius: 25px;
                    backdrop-filter: blur(10px);
                    font-size: 0.9rem;
                }
                
                .maintenance-actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                }
            </style>
            
            <script src="js/main2.js"></script>
        </body>
        </html>
    `;
}

// Initialize feature toggles when the page loads
document.addEventListener("DOMContentLoaded", function () {
  initializeFeatureToggles();
});

// integrated-main.js - Consolidated JavaScript for INTAC without Slider Integration
document.addEventListener("DOMContentLoaded", function () {
  // ========== PERFORMANCE UTILITIES ==========
  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ========== CORE INITIALIZERS ==========
  initializeMobileMenu();
  initializeHeaderScroll();
  initializePageSpecificFunctions();
  initializeCommonEventHandlers();

  // ========== HOME PAGE FUNCTIONS ==========
  function initializeHomePage() {
    // Statistics counter
    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
      initializeStatisticsCounter();
    }

    // Initialize interactive gallery
    initializeInteractiveGallery();
  }

  // ========== INTERACTIVE GALLERY ==========
  function initializeInteractiveGallery() {
    const gallerySection = document.querySelector(".interactive-gallery");
    if (!gallerySection) return;

    // Add click handlers for each box
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.addEventListener("click", function () {
        const fullText =
          this.querySelector(".letter").textContent +
          this.querySelector(".rest").textContent;
        console.log(`Gallery item clicked: ${fullText}`);
        // You can add navigation or modal functionality here
      });
    });

    // Add keyboard navigation for accessibility
    document.addEventListener("keydown", function (e) {
      const activeBox = document.querySelector(".box:hover");
      if (!activeBox) return;

      const boxes = Array.from(document.querySelectorAll(".box"));
      const currentIndex = boxes.indexOf(activeBox);

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        boxes[currentIndex - 1].focus();
      } else if (e.key === "ArrowRight" && currentIndex < boxes.length - 1) {
        boxes[currentIndex + 1].focus();
      } else if (e.key === "Enter" || e.key === " ") {
        activeBox.click();
      }
    });

    // Add focus styles for accessibility
    boxes.forEach((box) => {
      box.setAttribute("tabindex", "0");
      box.addEventListener("focus", function () {
        this.style.outline = "2px solid var(--primary)";
        this.style.outlineOffset = "2px";
      });
      box.addEventListener("blur", function () {
        this.style.outline = "none";
      });
    });
  }

  // ========== STATISTICS COUNTER ==========
  function initializeStatisticsCounter() {
    const counters = document.querySelectorAll(".stat-number");
    if (counters.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold: 0.3}
    );

    observer.observe(document.querySelector(".stats-section"));

    function animateCounters() {
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-count");
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            counter.textContent = target.toLocaleString();
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current).toLocaleString();
          }
        }, 16);
      });
    }
  }

  // ========== CORE FUNCTIONALITY ==========
  function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const navList = document.querySelector(".nav-list");

    if (!mobileMenuToggle || !navList) return;

    mobileMenuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenuToggle.classList.toggle("active");
      navList.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    // Close menu when clicking on links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          closeMobileMenu();
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        window.innerWidth <= 768 &&
        navList.classList.contains("active") &&
        !e.target.closest(".nav-list") &&
        !e.target.closest(".mobile-menu-toggle")
      ) {
        closeMobileMenu();
      }
    });

    function closeMobileMenu() {
      mobileMenuToggle.classList.remove("active");
      navList.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  }

  // Enhanced Header Scroll Function
  function initializeHeaderScroll() {
    const header = document.querySelector(".modern-header");
    if (!header) {
      console.warn("Header element not found");
      return;
    }

    const throttledScrollHandler = throttle(() => {
      if (window.scrollY > 100) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    }, 100);

    window.addEventListener("scroll", throttledScrollHandler, {passive: true});

    // Initialize on load
    throttledScrollHandler();
  }

  // Make sure this function is called in your DOMContentLoaded event
  document.addEventListener("DOMContentLoaded", function () {
    initializeHeaderScroll();
  });

  function initializePageSpecificFunctions() {
    // Home page functionality
    if (document.querySelector(".modern-hero")) {
      initializeHomePage();
    }

    // Interactive slider functionality
    if (document.querySelector(".interactive-slider-section")) {
      // The slider is already initialized in the DOMContentLoaded event
      // but you can add any additional initialization here if needed
    }

    // Conference page functionality
    if (document.querySelector(".conf-hero")) {
      initializeConferencePage();
    }

    // Registration page functionality
    if (document.querySelector(".reg-hero")) {
      initializeRegistrationPage();
    }

    // News page functionality
    if (document.querySelector(".news-hero")) {
      initializeNewsPage();
    }
    if (document.querySelector(".modern-themes-section")) {
      initializeModernThemes();
    }
  }

  function initializeCommonEventHandlers() {
    // Handle register buttons
    document.addEventListener("click", (e) => {
      const button = e.target.closest(".cta-button.primary, .conf-btn.primary");
      if (button && button.textContent.includes("Register")) {
        e.preventDefault();
        window.location.href = "registration.html";
      }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Use passive event listeners for better scrolling performance
    document.addEventListener("touchstart", function () {}, {passive: true});
    document.addEventListener("touchmove", function () {}, {passive: true});
  }

  // ========== CONFERENCE PAGE ==========
  function initializeConferencePage() {
    const scheduleTabs = document.querySelectorAll(".schedule-tab");
    if (scheduleTabs.length > 0) {
      scheduleTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const dayId = tab.getAttribute("data-day");

          document
            .querySelectorAll(".schedule-tab")
            .forEach((t) => t.classList.remove("active"));
          document
            .querySelectorAll(".schedule-day")
            .forEach((d) => d.classList.remove("active"));

          tab.classList.add("active");
          const targetDay = document.getElementById(dayId);
          if (targetDay) targetDay.classList.add("active");
        });
      });
    }
  }

  // ========== MODERN THEMES ==========
  function initializeModernThemes() {
    const themeCards = document.querySelectorAll(".theme-modern-card");
    if (!themeCards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold: 0.1}
    );

    themeCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(card);
    });
  }

  // ========== REGISTRATION PAGE ==========
  function initializeRegistrationPage() {
    const registrationForm = document.getElementById("registrationForm");
    if (!registrationForm) return;

    const formSteps = document.querySelectorAll(".reg-form-step");
    const processSteps = document.querySelectorAll(".reg-step");
    let currentStep = 1;

    showStep(currentStep);

    document.querySelectorAll(".btn-next").forEach((button) => {
      button.addEventListener("click", () => {
        if (validateStep(currentStep)) {
          currentStep++;
          showStep(currentStep);
          updateProcessSteps();
        }
      });
    });

    document.querySelectorAll(".btn-prev").forEach((button) => {
      button.addEventListener("click", () => {
        currentStep--;
        showStep(currentStep);
        updateProcessSteps();
      });
    });

    const optionCards = document.querySelectorAll(".reg-option-card");
    optionCards.forEach((card) => {
      card.addEventListener("click", function () {
        optionCards.forEach((c) => c.classList.remove("selected"));
        this.classList.add("selected");
        const radio = this.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });

    function showStep(stepNumber) {
      formSteps.forEach((step) => {
        step.classList.remove("active");
        if (parseInt(step.dataset.step) === stepNumber) {
          step.classList.add("active");
        }
      });
    }

    function updateProcessSteps() {
      processSteps.forEach((step) => {
        step.classList.remove("active");
        if (parseInt(step.dataset.step) <= currentStep) {
          step.classList.add("active");
        }
      });
    }

    function validateStep(step) {
      return true;
    }
  }

  // ========== NEWS PAGE ==========
  function initializeNewsPage() {
    const newsFilterButtons = document.querySelectorAll(".news-filter-btn");
    if (newsFilterButtons.length > 0) {
      newsFilterButtons.forEach((button) => {
        button.addEventListener("click", function () {
          newsFilterButtons.forEach((btn) => btn.classList.remove("active"));
          this.classList.add("active");

          const filterValue = this.getAttribute("data-filter");
          const newsCards = document.querySelectorAll(".news-card");

          newsCards.forEach((card) => {
            if (
              filterValue === "all" ||
              card.getAttribute("data-category") === filterValue
            ) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        });
      });
    }
  }
});

// Enhanced Gallery Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Gallery variables
  let currentImages = [];
  let currentFilter = "all";
  let currentView = "grid";
  let visibleCount = 8;

  // Initialize gallery
  initGallery();

  function initGallery() {
    setupGalleryFilters();
    setupViewOptions();
    setupLightbox();
    setupLoadMore();
  }

  function setupGalleryFilters() {
    const filterButtons = document.querySelectorAll(".gallery-filter-btn");

    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to clicked button
        this.classList.add("active");

        currentFilter = this.dataset.filter;
        filterGallery();
      });
    });
  }

  function setupViewOptions() {
    const viewButtons = document.querySelectorAll(".view-option-btn");

    viewButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        viewButtons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to clicked button
        this.classList.add("active");

        currentView = this.dataset.view;
        changeViewLayout();
      });
    });
  }

  function filterGallery() {
    const galleryItems = document.querySelectorAll(".news-gallery-item");

    galleryItems.forEach((item) => {
      if (currentFilter === "all" || item.dataset.category === currentFilter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  function changeViewLayout() {
    const galleryGrid = document.querySelector(".news-gallery-grid");

    // Remove all layout classes
    galleryGrid.classList.remove("compact", "masonry");

    // Add selected layout class
    if (currentView !== "grid") {
      galleryGrid.classList.add(currentView);
    }
  }

  function setupLightbox() {
    const lightbox = document.querySelector(".gallery-lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const lightboxCaption = document.querySelector(".lightbox-caption");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.querySelector(".lightbox-prev");
    const nextBtn = document.querySelector(".lightbox-next");

    let currentIndex = 0;

    // Open lightbox when gallery item is clicked
    document.querySelectorAll(".news-gallery-item").forEach((item, index) => {
      item.addEventListener("click", function () {
        const img = this.querySelector("img");
        const title = this.querySelector("h3").textContent;

        currentIndex = index;
        openLightbox(img.src, title);
      });
    });

    function openLightbox(src, caption) {
      lightboxImage.src = src;
      lightboxCaption.textContent = caption;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.classList.remove("active");
      document.body.style.overflow = "auto";
    }

    function navigateLightbox(direction) {
      const items = document.querySelectorAll(".news-gallery-item");
      currentIndex = (currentIndex + direction + items.length) % items.length;

      const newItem = items[currentIndex];
      const img = newItem.querySelector("img");
      const title = newItem.querySelector("h3").textContent;

      openLightbox(img.src, title);
    }

    // Event listeners
    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", () => navigateLightbox(-1));
    nextBtn.addEventListener("click", () => navigateLightbox(1));

    // Close on background click
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("active")) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    });
  }

  function setupLoadMore() {
    const loadMoreBtn = document.querySelector(".load-more-btn");

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", function () {
        this.classList.add("loading");
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

        // Simulate loading delay
        setTimeout(() => {
          visibleCount += 8;
          loadMoreImages();
          this.classList.remove("loading");
          this.innerHTML = '<i class="fas fa-plus"></i> Load More Images';

          // Hide button if all images are loaded
          const totalItems =
            document.querySelectorAll(".news-gallery-item").length;
          if (visibleCount >= totalItems) {
            this.style.display = "none";
          }
        }, 1000);
      });
    }
  }

  function loadMoreImages() {
    const items = document.querySelectorAll(".news-gallery-item");

    items.forEach((item, index) => {
      if (index < visibleCount) {
        item.style.display = "block";
      }
    });
  }
});

// Message Viewer Functionality
function initializeMessageViewer() {
  const navButtons = document.querySelectorAll(".nav-btn");
  const messageContents = document.querySelectorAll(".message-content");

  // Handle navigation button clicks
  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const messageId = this.getAttribute("data-message");

      // Update active navigation button
      navButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Show corresponding message content
      messageContents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === `${messageId}-content`) {
          content.classList.add("active");
        }
      });

      // Smooth scroll to top of message viewer
      document.querySelector(".message-viewer").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // Handle direct links from slider
  if (window.location.hash) {
    const targetMessage = window.location.hash.replace("#", "");
    const correspondingButton = document.querySelector(
      `[data-message="${targetMessage}"]`
    );

    if (correspondingButton) {
      correspondingButton.click();

      // Add highlight effect
      const targetContent = document.getElementById(`${targetMessage}-content`);
      if (targetContent) {
        targetContent.style.animation = "none";
        setTimeout(() => {
          targetContent.style.animation = "fadeInUp 0.6s ease";
        }, 10);
      }
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeMessageViewer();
});

// ========== GLOBAL FUNCTIONS ==========
// Loading state management
if (document.readyState === "loading") {
  document.documentElement.classList.add("loading");
}

window.addEventListener("load", () => {
  document.documentElement.classList.remove("loading");
  document.documentElement.classList.add("loaded");
});

// Scroll-to-top functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
if (scrollToTopBtn) {
  window.onscroll = function () {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      scrollToTopBtn.style.display = "flex";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ========== INTERACTIVE SLIDER ==========
function initSlider() {
  if (typeof gsap === "undefined" || typeof Draggable === "undefined") {
    console.warn("GSAP plugins not available. Slider initialization skipped.");
    return;
  }

  gsap.registerPlugin(Draggable, InertiaPlugin);

  const wrapper = document.querySelector('[data-slider="list"]');
  const slides = gsap.utils.toArray('[data-slider="slide"]');
  const nextButton = document.querySelector('[data-slider="button-next"]');
  const prevButton = document.querySelector('[data-slider="button-prev"]');

  let activeElement;
  const totalSlides = slides.length;
  let autoSlideInterval;
  let isAutoSliding = true;

  const loop = horizontalLoop(slides, {
    paused: true,
    draggable: true,
    center: false,
    onChange: (element, index) => {
      activeElement && activeElement.classList.remove("active");
      const nextSibling = element.nextElementSibling || slides[0];
      nextSibling.classList.add("active");
      activeElement = nextSibling;
      updateTextContent(nextSibling);
    },
  });

  // Slide click handlers
  slides.forEach((slide, i) =>
    slide.addEventListener("click", () => {
      resetAutoSlide();
      loop.toIndex(i - 1, {ease: "power3", duration: 0.725});
    })
  );

  // Initial load
  const initialActiveSlide = document.querySelector(
    '[data-slider="slide"].active'
  );
  if (initialActiveSlide) {
    updateTextContent(initialActiveSlide, 0);
  }

  nextButton.addEventListener("click", () => {
    resetAutoSlide();
    loop.next({ease: "power3", duration: 0.725});
  });

  prevButton.addEventListener("click", () => {
    resetAutoSlide();
    loop.previous({ease: "power3", duration: 0.725});
  });

  // Auto-slide function with precise timing
  function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      if (isAutoSliding) {
        loop.next({ease: "power3", duration: 0.725});
      }
    }, 7000);
  }

  function resetAutoSlide() {
    isAutoSliding = false;
    clearInterval(autoSlideInterval);

    setTimeout(() => {
      isAutoSliding = true;
      startAutoSlide();
    }, 7000);
  }

  // Start auto-slide on initialization
  startAutoSlide();

  // Pause auto-slide on hover
  const sliderContainer = document.querySelector(".cloneable");
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", () => {
      isAutoSliding = false;
      clearInterval(autoSlideInterval);
    });

    sliderContainer.addEventListener("mouseleave", () => {
      isAutoSliding = true;
      startAutoSlide();
    });
  }

  function updateTextContent(slideElement, delay = 0.5) {
    const titleElement = document.querySelector(".slider-title");
    const descriptionElement = document.querySelector(".slider-description");

    const newTitle = slideElement.getAttribute("data-title");
    const newDescription = slideElement.getAttribute("data-description");
    const readMoreLink = slideElement.getAttribute("data-readmore") || "#";

    if (!titleElement || !descriptionElement) return;

    const outTimeline = gsap.timeline();
    outTimeline
      .to([titleElement, descriptionElement], {
        y: "-100%",
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        stagger: 0.05,
      })
      .call(() => {
        titleElement.textContent = newTitle;

        // Create description with read more link
        descriptionElement.innerHTML = "";
        const descriptionText = document.createElement("span");
        descriptionText.textContent = newDescription;
        descriptionElement.appendChild(descriptionText);

        // Add read more link
        const readMoreSpan = document.createElement("span");
        readMoreSpan.className = "read-more-link";
        readMoreSpan.innerHTML = ` <a href="${readMoreLink}" class="slider-read-more">Read more</a>`;
        descriptionElement.appendChild(readMoreSpan);

        gsap.set([titleElement, descriptionElement], {y: "100%"});
      });

    gsap.to([titleElement, descriptionElement], {
      y: "0%",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.05,
      delay: delay,
    });
  }

  function horizontalLoop(items, config) {
    let timeline;
    items = gsap.utils.toArray(items);
    config = config || {};

    gsap.context(() => {
      let onChange = config.onChange,
        lastIndex = 0,
        tl = gsap.timeline({
          repeat: config.repeat,
          onUpdate:
            onChange &&
            function () {
              let i = tl.closestIndex();
              if (lastIndex !== i) {
                lastIndex = i;
                onChange(items[i], i);
              }
            },
          paused: config.paused,
          defaults: {ease: "none"},
          onReverseComplete: () =>
            tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        spaceBefore = [],
        xPercents = [],
        curIndex = 0,
        indexIsDirty = false,
        center = config.center,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
          config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
        timeOffset = 0,
        container =
          center === true
            ? items[0].parentNode
            : gsap.utils.toArray(center)[0] || items[0].parentNode,
        totalWidth,
        getTotalWidth = () =>
          items[length - 1].offsetLeft +
          (xPercents[length - 1] / 100) * widths[length - 1] -
          startX +
          spaceBefore[0] +
          items[length - 1].offsetWidth *
            gsap.getProperty(items[length - 1], "scaleX") +
          (parseFloat(config.paddingRight) || 0),
        populateWidths = () => {
          let b1 = container.getBoundingClientRect(),
            b2;
          items.forEach((el, i) => {
            widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(
              (parseFloat(gsap.getProperty(el, "x", "px")) / widths[i]) * 100 +
                gsap.getProperty(el, "xPercent")
            );
            b2 = el.getBoundingClientRect();
            spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
            b1 = b2;
          });
          gsap.set(items, {
            xPercent: (i) => xPercents[i],
          });
          totalWidth = getTotalWidth();
        },
        timeWrap,
        populateOffsets = () => {
          timeOffset = center
            ? (tl.duration() * (container.offsetWidth / 2)) / totalWidth
            : 0;
          center &&
            times.forEach((t, i) => {
              times[i] = timeWrap(
                tl.labels["label" + i] +
                  (tl.duration() * widths[i]) / 2 / totalWidth -
                  timeOffset
              );
            });
        },
        getClosest = (values, value, wrap) => {
          let i = values.length,
            closest = 1e10,
            index = 0,
            d;
          while (i--) {
            d = Math.abs(values[i] - value);
            if (d > wrap / 2) {
              d = wrap - d;
            }
            if (d < closest) {
              closest = d;
              index = i;
            }
          }
          return index;
        },
        populateTimeline = () => {
          let i, item, curX, distanceToStart, distanceToLoop;
          tl.clear();
          for (i = 0; i < length; i++) {
            item = items[i];
            curX = (xPercents[i] / 100) * widths[i];
            distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
            distanceToLoop =
              distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(
              item,
              {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
              },
              0
            )
              .fromTo(
                item,
                {
                  xPercent: snap(
                    ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                  ),
                },
                {
                  xPercent: xPercents[i],
                  duration:
                    (curX - distanceToLoop + totalWidth - curX) /
                    pixelsPerSecond,
                  immediateRender: false,
                },
                distanceToLoop / pixelsPerSecond
              )
              .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
          }
          timeWrap = gsap.utils.wrap(0, tl.duration());
        },
        refresh = (deep) => {
          let progress = tl.progress();
          tl.progress(0, true);
          populateWidths();
          deep && populateTimeline();
          populateOffsets();
          deep && tl.draggable
            ? tl.time(times[curIndex], true)
            : tl.progress(progress, true);
        },
        onResize = () => refresh(true),
        proxy;
      gsap.set(items, {x: 0});
      populateWidths();
      populateTimeline();
      populateOffsets();
      window.addEventListener("resize", onResize);

      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex && index !== curIndex) {
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        if (time < 0 || time > tl.duration()) {
          vars.modifiers = {time: timeWrap};
        }
        curIndex = newIndex;
        vars.overwrite = true;
        gsap.killTweensOf(proxy);
        return vars.duration === 0
          ? tl.time(timeWrap(time))
          : tl.tweenTo(time, vars);
      }

      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.closestIndex = (setCurrent) => {
        let index = getClosest(times, tl.time(), tl.duration());
        if (setCurrent) {
          curIndex = index;
          indexIsDirty = false;
        }
        return index;
      };
      tl.current = () => (indexIsDirty ? tl.closestIndex(true) : curIndex);
      tl.next = (vars) => toIndex(tl.current() + 1, vars);
      tl.previous = (vars) => toIndex(tl.current() - 1, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true);

      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }

      if (config.draggable && typeof Draggable === "function") {
        proxy = document.createElement("div");
        let wrap = gsap.utils.wrap(0, 1),
          ratio,
          startProgress,
          draggable,
          dragSnap,
          lastSnap,
          initChangeX,
          wasPlaying,
          align = () =>
            tl.progress(
              wrap(startProgress + (draggable.startX - draggable.x) * ratio)
            ),
          syncIndex = () => tl.closestIndex(true);

        typeof InertiaPlugin === "undefined" &&
          console.warn(
            "InertiaPlugin required for momentum-based scrolling and snapping."
          );

        draggable = Draggable.create(proxy, {
          trigger: items[0].parentNode,
          type: "x",
          onPressInit() {
            let x = this.x;
            gsap.killTweensOf(tl);
            wasPlaying = !tl.paused();
            tl.pause();
            startProgress = tl.progress();
            refresh();
            ratio = 1 / totalWidth;
            initChangeX = startProgress / -ratio - x;
            gsap.set(proxy, {x: startProgress / -ratio});
          },
          onDrag: align,
          onThrowUpdate: align,
          overshootTolerance: 0,
          inertia: true,
          snap(value) {
            if (Math.abs(startProgress / -ratio - this.x) < 10) {
              return lastSnap + initChangeX;
            }
            let time = -(value * ratio) * tl.duration(),
              wrappedTime = timeWrap(time),
              snapTime = times[getClosest(times, wrappedTime, tl.duration())],
              dif = snapTime - wrappedTime;
            Math.abs(dif) > tl.duration() / 2 &&
              (dif += dif < 0 ? tl.duration() : -tl.duration());
            lastSnap = (time + dif) / tl.duration() / -ratio;
            return lastSnap;
          },
          onRelease() {
            syncIndex();
            draggable.isThrowing && (indexIsDirty = true);
          },
          onThrowComplete: () => {
            syncIndex();
            wasPlaying && tl.play();
          },
        })[0];
        tl.draggable = draggable;
      }

      tl.closestIndex(true);
      lastIndex = curIndex;
      onChange && onChange(items[curIndex], curIndex);
      timeline = tl;
      return () => window.removeEventListener("resize", onResize);
    });
    return timeline;
  }
}

// ========== SLIDER POSITION CONTROLLER ==========
function setupSliderPositionControls() {
  const sliderList = document.querySelector('[data-slider="list"]');
  const isMobile = window.innerWidth <= 768;

  if (!sliderList || !isMobile) return;

  sliderList.style.setProperty("--slider-offset-x", "0px");
  sliderList.style.setProperty("--slider-offset-y", "0px");
  sliderList.style.setProperty("--slider-scale", "1");

  sliderList.style.transform = `translate3d(var(--slider-offset-x), var(--slider-offset-y), 0) scale(var(--slider-scale))`;
}

// ========== ENHANCED MOBILE HANDLER ==========
function handleMobileResize() {
  const isMobile = window.innerWidth <= 768;
  const sliderContainer = document.querySelector(".cloneable");
  const sliderList = document.querySelector('[data-slider="list"]');
  const buttons = document.querySelectorAll(".button");

  if (sliderContainer) {
    if (isMobile) {
      sliderContainer.style.touchAction = "pan-y";

      buttons.forEach((button) => {
        button.style.minWidth = "44px";
        button.style.minHeight = "44px";
      });

      setupSliderPositionControls();

      if (sliderList) {
        if (window.innerWidth <= 480) {
          sliderList.style.setProperty("--slider-offset-x", "-15px");
          sliderList.style.setProperty("--slider-scale", "0.95");
        } else {
          sliderList.style.setProperty("--slider-offset-x", "0px");
          sliderList.style.setProperty("--slider-scale", "1");
        }

        if (window.innerHeight < 500) {
          sliderList.style.setProperty("--slider-offset-y", "-10px");
          sliderList.style.setProperty("--slider-scale", "0.9");
        }
      }
    } else {
      sliderContainer.style.touchAction = "";

      buttons.forEach((button) => {
        button.style.minWidth = "";
        button.style.minHeight = "";
      });
    }
  }
}

// ========== TEST SLIDER POSITION ==========
function testSliderPosition(position = "center", offset = 20) {
  const sliderList = document.querySelector('[data-slider="list"]');
  if (!sliderList) return;

  sliderList.classList.add("js-controlled");

  const positions = {
    left: `translateX(-${offset}px)`,
    right: `translateX(${offset}px)`,
    top: `translateY(-${offset}px)`,
    bottom: `translateY(${offset}px)`,
    center: "translate(0, 0)",
    "top-left": `translate(-${offset}px, -${offset}px)`,
    "top-right": `translate(${offset}px, -${offset}px)`,
    "bottom-left": `translate(-${offset}px, ${offset}px)`,
    "bottom-right": `translate(${offset}px, ${offset}px)`,
  };

  sliderList.style.setProperty(
    "transform",
    positions[position] || positions.center,
    "important"
  );

  console.log(`✅ Slider position: ${position}, offset: ${offset}px`);
}

// Make it globally available for testing
window.testSliderPosition = testSliderPosition;

// ========== MAIN INITIALIZATION (SINGLE DOMCONTENTLOADED) ==========
document.addEventListener("DOMContentLoaded", function () {
  setupFadeInEffect();
  initializeVideoHero();
  initializeStatsCounter();
  initializeVideoHighlights();

  // Initialize the slider if the section exists (from original code)
  if (document.querySelector(".interactive-slider-section")) {
    initSlider();
    handleMobileResize();
    window.addEventListener("resize", handleMobileResize);
    setupSliderPositionControls();
  }
});

// ========== VIDEO HERO INITIALIZATION ==========
function initializeVideoHero() {
  const video = document.getElementById("heroVideo");
  if (!video) return;

  // Optional: Add a simple check to ensure video plays on mobile devices
  // where autoplay might be restricted.
  video.addEventListener("loadedmetadata", function () {
    video.play().catch((error) => {
      console.log(
        "Autoplay prevented. User interaction may be required.",
        error
      );
      // Fallback: Show a play button if autoplay fails
      // This part is left as a comment for simplicity, but is a good practice.
      // const playButton = document.createElement('button');
      // playButton.textContent = 'Play Video';
      // document.querySelector('.hero-overlay').appendChild(playButton);
      // playButton.addEventListener('click', () => video.play());
    });
  });
}

// ========== STATS COUNTER ==========
function initializeStatsCounter() {
  const statsSection = document.querySelector(".stats-section");
  if (!statsSection) return;

  const counters = statsSection.querySelectorAll(".stat-number");
  if (counters.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    },
    {threshold: 0.5} // Trigger when 50% of the section is visible
  );

  observer.observe(statsSection);

  function animateCounters() {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-count");
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current).toLocaleString();
        }
      }, 16);
    });
  }
}

// ========== COUNTDOWN TIMER ==========
function initializeCountdownTimer() {
  const countdownTimer = document.getElementById("countdownTimer");
  if (!countdownTimer) return;

  const eventDate = new Date("July 10, 2026 00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results
    document.getElementById("days").textContent = days
      .toString()
      .padStart(3, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");

    // If the countdown is finished
    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("days").textContent = "000";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
    }
  }

  // Update the countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Initial call to avoid delay
  updateCountdown();
}

// Add this to your DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
  // ... existing code ...
  initializeCountdownTimer();
});

// ========== COUNTDOWN 5-IMAGE SLIDER ==========
function initializeCountdownSlider() {
  const slides = document.querySelectorAll(".countdown-slider .slide");
  if (slides.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slides.length;
  const slideInterval = 5000; // 5 seconds per slide

  function showNextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove("active");

    // Move to next slide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Add active class to new slide
    slides[currentSlide].classList.add("active");
  }

  // Start the slider
  let sliderInterval = setInterval(showNextSlide, slideInterval);

  // Optional: Pause on hover
  const countdownContainer = document.querySelector(".countdown-container");
  if (countdownContainer) {
    countdownContainer.addEventListener("mouseenter", () => {
      clearInterval(sliderInterval);
    });

    countdownContainer.addEventListener("mouseleave", () => {
      sliderInterval = setInterval(showNextSlide, slideInterval);
    });
  }
}

// Add to your DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  initializeCountdownSlider();
});

// ========== HIGHLIGHTS VIDEO FUNCTIONALITY ==========
function initializeVideoHighlights() {
  // DOM Elements for highlights video
  const videoPoster = document.getElementById("highlightsVideoPoster");
  const videoEmbed = document.getElementById("highlightsVideoEmbed");
  const videoPlayer = document.getElementById("highlightsVideoPlayer");
  const playButton = document.getElementById("highlightsPlayButton");

  // If no highlights video elements exist, exit
  if (!videoPoster || !videoEmbed || !videoPlayer || !playButton) return;

  // Video Configuration - REPLACE THIS WITH YOUR YOUTUBE VIDEO ID
  const VIDEO_ID = "9bVFBBvhSfs"; // ← CHANGE THIS to your YouTube video ID
  let isPlaying = false;

  // Initialize video
  function initVideo() {
    // Set up video player
    const videoUrl = `https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&color=white`;
    videoPlayer.src = videoUrl;

    // Play button event
    playButton.addEventListener("click", toggleVideo);

    // Add keyboard shortcut
    document.addEventListener("keydown", (e) => {
      // Only trigger if video is in view or active
      if (videoPoster.style.opacity !== "0") {
        if (e.code === "Space" || e.code === "Enter") {
          e.preventDefault();
          toggleVideo();
        }
        if (e.code === "Escape" && isPlaying) {
          pauseVideo();
        }
      }
    });
  }

  // Toggle video play/pause
  function toggleVideo() {
    if (!isPlaying) {
      playVideo();
    } else {
      pauseVideo();
    }
  }

  // Play video
  function playVideo() {
    if (!isPlaying) {
      // Add autoplay to video URL
      videoPlayer.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&color=white`;

      // Show video, hide poster
      videoPoster.style.opacity = "0";
      videoPoster.style.pointerEvents = "none";

      setTimeout(() => {
        videoEmbed.classList.add("active");
      }, 300);

      // Update UI
      const playIcon = playButton.querySelector("i");
      if (playIcon) {
        playIcon.className = "fas fa-pause";
      }
      isPlaying = true;

      // Add playing class to container
      document
        .querySelector(".highlights-video-container")
        .classList.add("playing");
    }
  }

  // Pause video
  function pauseVideo() {
    if (isPlaying) {
      // Send pause command to iframe
      videoPlayer.src = videoPlayer.src.replace("autoplay=1", "autoplay=0");

      // Hide video, show poster
      videoEmbed.classList.remove("active");
      setTimeout(() => {
        videoPoster.style.opacity = "1";
        videoPoster.style.pointerEvents = "auto";
      }, 300);

      // Update UI
      const playIcon = playButton.querySelector("i");
      if (playIcon) {
        playIcon.className = "fas fa-play";
      }
      isPlaying = false;

      // Remove playing class
      document
        .querySelector(".highlights-video-container")
        .classList.remove("playing");
    }
  }

  // Initialize video functionality
  initVideo();

  // Add hover effect to stats in highlights section
  const statItems = document.querySelectorAll(".video-stats .stat-item");
  statItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-3px)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)";
    });
  });
}

