// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const establishmentName = document.getElementById('establishmentName');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxUser = document.getElementById('lightboxUser');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

// State
let currentFilter = 'all';
let currentImageIndex = 0;
let filteredImages = [];
let galleryData = [];

// Initialize
function init() {
    loadEstablishmentData();
    setupEventListeners();
}

// Load establishment data from URL and populate gallery
function loadEstablishmentData() {
    const urlParams = new URLSearchParams(window.location.search);
    const estId = parseInt(urlParams.get('id'));
    
    // Find establishment from data.js
    if (typeof establishments !== 'undefined') {
        const establishment = establishments.find(est => est.id === estId);
        
        if (establishment) {
            // Set establishment name
            establishmentName.textContent = establishment.name;
            
            // Convert gallery images to galleryData format
            if (establishment.gallery && establishment.gallery.length > 0) {
                galleryData = establishment.gallery.map((imageUrl, index) => ({
                    id: index + 1,
                    imageUrl: imageUrl,
                    caption: `${establishment.name} - Photo ${index + 1}`,
                    userName: 'Community Photo',
                    userAvatar: 'https://via.placeholder.com/40',
                    category: 'food', // Default category, could be enhanced later
                    establishmentId: estId
                }));
            } else {
                galleryData = [];
            }
        } else {
            establishmentName.textContent = 'Establishment Not Found';
            galleryData = [];
        }
    } else {
        console.error('Establishments data not loaded from data.js');
        establishmentName.textContent = 'Error Loading Data';
        galleryData = [];
    }
    
    // Render the gallery
    renderGallery();
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => handleFilterClick(btn));
    });

    // Lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPreviousImage);
    lightboxNext.addEventListener('click', showNextImage);

    // Close lightbox on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyPress);
}

// Handle filter button click
function handleFilterClick(btn) {
    // Update active state
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update filter
    currentFilter = btn.dataset.filter;
    renderGallery();
}

// Render gallery
function renderGallery() {
    // Filter images
    filteredImages = currentFilter === 'all' 
        ? galleryData 
        : galleryData.filter(img => img.category === currentFilter);

    // Clear gallery
    galleryGrid.innerHTML = '';

    // Check if empty
    if (filteredImages.length === 0) {
        renderEmptyState();
        return;
    }

    // Render images
    filteredImages.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        galleryGrid.appendChild(galleryItem);
    });
}

// Create gallery item
function createGalleryItem(image, index) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.onclick = () => openLightbox(index);

    div.innerHTML = `
        <img src="${image.imageUrl}" alt="${image.caption}">
        <div class="gallery-item-overlay">
            <div class="gallery-item-user">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                </svg>
                ${image.userName}
            </div>
        </div>
    `;

    return div;
}

// Render empty state
function renderEmptyState() {
    galleryGrid.innerHTML = `
        <div class="gallery-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
            </svg>
            <h3>No photos yet</h3>
            <p>Be the first to share photos of this establishment!</p>
        </div>
    `;
}

// Open lightbox
function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Update lightbox content
function updateLightboxContent() {
    const image = filteredImages[currentImageIndex];
    
    lightboxImage.src = image.imageUrl;
    lightboxImage.alt = image.caption;
    lightboxCaption.textContent = image.caption;
    lightboxUser.textContent = `Photo by ${image.userName}`;

    // Update navigation button states
    lightboxPrev.style.display = currentImageIndex === 0 ? 'none' : 'flex';
    lightboxNext.style.display = currentImageIndex === filteredImages.length - 1 ? 'none' : 'flex';
}

// Show previous image
function showPreviousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateLightboxContent();
    }
}

// Show next image
function showNextImage() {
    if (currentImageIndex < filteredImages.length - 1) {
        currentImageIndex++;
        updateLightboxContent();
    }
}

// Handle keyboard navigation
function handleKeyPress(e) {
    if (!lightbox.classList.contains('active')) return;

    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            showPreviousImage();
            break;
        case 'ArrowRight':
            showNextImage();
            break;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
