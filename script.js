// =====================
// SIDEBAR FUNCTIONALITY
// =====================

const menuToggle = document.getElementById('menuToggle');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Open sidebar
menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

// Close sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Close sidebar when clicking overlay
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Close sidebar when clicking on a link
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// =====================
// SMOOTH SCROLLING
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================
// ACTIVE LINK HIGHLIGHT
// =====================

window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    // Update header nav links
    document.querySelectorAll('.nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// =====================
// CTA BUTTON FUNCTIONALITY
// =====================

const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        const gallerySection = document.querySelector('#images');
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// =====================
// GALLERY ITEMS INTERACTION
// =====================

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        console.log(`Gallery item ${index + 1} clicked`);
        // Add your custom functionality here
    });
});

// =====================
// DOCUMENT ITEMS INTERACTION
// =====================

const documentItems = document.querySelectorAll('.document-item');
documentItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        console.log(`Document item ${index + 1} clicked`);
        // Add your custom functionality here
    });
});

// =====================
// RESPONSIVE MENU HANDLING
// =====================

// Auto-close sidebar on window resize if screen becomes larger
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
});

// =====================
// PAGE LOAD ANIMATION
// =====================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('Wilben.in website loaded successfully!');
