// DOM Elements
const reviewForm = document.getElementById('reviewForm');
const establishmentSelect = document.getElementById('establishment');
const reviewTitle = document.getElementById('reviewTitle');
const reviewContent = document.getElementById('reviewContent');
const starsInput = document.getElementById('starsInput');
const ratingValue = document.getElementById('ratingValue');
const ratingText = document.getElementById('ratingText');
const tagContainer = document.getElementById('tagContainer');
const selectedTagsInput = document.getElementById('selectedTags');
const imageUpload = document.getElementById('imageUpload');
const uploadTrigger = document.getElementById('uploadTrigger');
const imagePreviewContainer = document.getElementById('imagePreviewContainer');
const cancelBtn = document.getElementById('cancelBtn');

// State
let currentRating = 0;
let selectedTags = [];
let uploadedImages = [];

// Initialize
function init() {
    populateEstablishments();
    setupEventListeners();
    setupCharacterCounters();
}

// Populate establishment dropdown
function populateEstablishments() {
    // Use establishments from data.js (already loaded globally)
    if (typeof establishments !== 'undefined') {
        establishments.forEach(est => {
            const option = document.createElement('option');
            option.value = est.id;
            option.textContent = est.name;
            establishmentSelect.appendChild(option);
        });
    } else {
        console.error('Establishments data not loaded from data.js');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Star rating
    const starButtons = starsInput.querySelectorAll('.star-btn');
    starButtons.forEach(btn => {
        btn.addEventListener('click', () => handleStarClick(btn));
        btn.addEventListener('mouseenter', () => handleStarHover(btn));
    });
    starsInput.addEventListener('mouseleave', resetStarHover);

    // Tag selection
    const tagButtons = tagContainer.querySelectorAll('.tag-selectable');
    tagButtons.forEach(btn => {
        btn.addEventListener('click', () => handleTagClick(btn));
    });

    // Image upload
    uploadTrigger.addEventListener('click', () => imageUpload.click());
    imageUpload.addEventListener('change', handleImageUpload);

    // Form submission
    reviewForm.addEventListener('submit', handleFormSubmit);

    // Cancel button
    cancelBtn.addEventListener('click', handleCancel);
}

// Character counter setup
function setupCharacterCounters() {
    // Title counter
    reviewTitle.addEventListener('input', () => {
        updateCharCount(reviewTitle, 100);
    });

    // Content counter
    reviewContent.addEventListener('input', () => {
        updateCharCount(reviewContent, 1000);
    });
}

// Update character count
function updateCharCount(element, maxLength) {
    const charCount = element.value.length;
    const counterElement = element.nextElementSibling;
    if (counterElement && counterElement.classList.contains('char-count')) {
        counterElement.textContent = `${charCount}/${maxLength}`;
        
        // Change color if approaching limit
        if (charCount > maxLength * 0.9) {
            counterElement.style.color = '#ff6b6b';
        } else {
            counterElement.style.color = 'var(--text-light)';
        }
    }
}

// Handle star rating click
function handleStarClick(btn) {
    const value = parseInt(btn.dataset.value);
    currentRating = value;
    ratingValue.value = value;
    
    // Update star display
    const starButtons = starsInput.querySelectorAll('.star-btn');
    starButtons.forEach((star, index) => {
        if (index < value) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });

    // Update rating text
    const ratingTexts = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
    ratingText.textContent = ratingTexts[value - 1];
    ratingText.style.color = 'var(--accent)';
}

// Handle star rating hover
function handleStarHover(btn) {
    const value = parseInt(btn.dataset.value);
    const starButtons = starsInput.querySelectorAll('.star-btn');
    
    starButtons.forEach((star, index) => {
        const icon = star.querySelector('.star-icon');
        if (index < value) {
            icon.style.fill = 'var(--accent)';
            icon.style.stroke = 'var(--accent)';
        } else {
            icon.style.fill = '#e0e0e0';
            icon.style.stroke = '#e0e0e0';
        }
    });
}

// Reset star hover effect
function resetStarHover() {
    const starButtons = starsInput.querySelectorAll('.star-btn');
    starButtons.forEach((star, index) => {
        const icon = star.querySelector('.star-icon');
        if (index < currentRating) {
            icon.style.fill = 'var(--accent)';
            icon.style.stroke = 'var(--accent)';
        } else {
            icon.style.fill = '#e0e0e0';
            icon.style.stroke = '#e0e0e0';
        }
    });
}

// Handle tag selection
function handleTagClick(btn) {
    const tag = btn.dataset.tag;
    
    if (btn.classList.contains('selected')) {
        // Remove tag
        btn.classList.remove('selected');
        selectedTags = selectedTags.filter(t => t !== tag);
    } else {
        // Add tag
        btn.classList.add('selected');
        selectedTags.push(tag);
    }
    
    // Update hidden input
    selectedTagsInput.value = JSON.stringify(selectedTags);
}

// Handle image upload
function handleImageUpload(e) {
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
        // Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
            alert(`${file.name} is too large. Maximum size is 5MB.`);
            return;
        }

        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert(`${file.name} is not an image file.`);
            return;
        }

        // Create preview
        const reader = new FileReader();
        reader.onload = (event) => {
            addImagePreview(event.target.result, file.name);
            uploadedImages.push(file);
        };
        reader.readAsDataURL(file);
    });

    // Clear input to allow re-uploading same file
    e.target.value = '';
}

// Add image preview
function addImagePreview(src, fileName) {
    const previewDiv = document.createElement('div');
    previewDiv.className = 'image-preview';
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = fileName;
    
    const removeBtn = document.createElement('button');
    removeBtn.className = 'image-preview-remove';
    removeBtn.type = 'button';
    removeBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
    `;
    removeBtn.addEventListener('click', () => {
        const index = Array.from(imagePreviewContainer.children).indexOf(previewDiv);
        uploadedImages.splice(index, 1);
        previewDiv.remove();
    });
    
    previewDiv.appendChild(img);
    previewDiv.appendChild(removeBtn);
    imagePreviewContainer.appendChild(previewDiv);
}

// Handle form submission
function handleFormSubmit(e) {
    // Validate rating
    if (currentRating === 0) {
        e.preventDefault();
        alert('Please select a rating');
        return;
    }

    // Set hidden inputs so server gets the values
    ratingValue.value = currentRating;
    selectedTagsInput.value = JSON.stringify(selectedTags);
}

// Handle cancel
function handleCancel() {
    if (confirm('Are you sure you want to cancel? Your review will not be saved.')) {
        window.history.back();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);

