// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Tab Switching Functionality (only on gallery page)
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeBtn = document.querySelector('.lightbox-close');
const prevBtn = document.querySelector('.lightbox-prev');
const nextBtn = document.querySelector('.lightbox-next');

let currentImageIndex = 0;
let imageArray = [];

// Populate image array from gallery items
galleryItems.forEach((item, index) => {
    const imgSrc = item.getAttribute('data-src');
    const imgAlt = item.querySelector('img').getAttribute('alt');
    imageArray.push({ src: imgSrc, alt: imgAlt });
    
    item.addEventListener('click', () => {
        openLightbox(index);
    });
});

function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

function updateLightboxImage() {
    if (imageArray.length > 0) {
        lightboxImage.src = imageArray[currentImageIndex].src;
        lightboxImage.alt = imageArray[currentImageIndex].alt;
    }
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageArray.length) % imageArray.length;
    updateLightboxImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageArray.length;
    updateLightboxImage();
}

// Event Listeners for Lightbox
if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
}

if (prevBtn) {
    prevBtn.addEventListener('click', showPrevImage);
}

if (nextBtn) {
    nextBtn.addEventListener('click', showNextImage);
}

// Close lightbox when clicking outside the image
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        showPrevImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
});