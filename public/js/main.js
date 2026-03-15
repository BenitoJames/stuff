// ========================================
//  DYNAMIC ESTABLISHMENT RENDERING
// ========================================

// Helper: Generate star rating HTML
function generateStars(rating, totalReviews) {
  if (rating === 0) {
    return '☆☆☆☆☆ <small>(No reviews yet)</small>';
  }
  
  const fullStars = Math.floor(rating);
  const stars = '⭐'.repeat(fullStars);
  const reviewText = totalReviews === 1 ? 'review' : 'reviews';
  
  return `${rating} ${stars} (${totalReviews} ${reviewText})`;
}

// Helper: Generate tag HTML
function generateTags(tags) {
  return tags.map(tag => `<span class="tag">${tag}</span>`).join('\n          ');
}

// Helper: Create establishment card HTML
function createEstablishmentCard(establishment, buttonText = 'View Details') {
  const tagsString = establishment.tags.join(' ');
  
  return `
    <div class="card card-hover" data-tags="${tagsString}" data-rating="${establishment.rating}" data-id="${establishment.id}">
      <img src="${establishment.imageUrl}" alt="${establishment.name}" class="card-image">
      <h3>${establishment.name}</h3>
      <div class="stars">${generateStars(establishment.rating, establishment.totalReviews)}</div>
      <p>${establishment.description}</p>
      <div class="tag-container">
        ${generateTags(establishment.tags)}
      </div>
      <a href="details.html?id=${establishment.id}" class="btn btn-primary">${buttonText}</a>
    </div>
  `;
}

// ========================================
//  PAGE INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function () {
  
  // Check which page we're on
  const isIndexPage = document.querySelector('.hero') !== null;
  const hasEstablishmentsGrid = document.getElementById('establishments-grid') !== null;
  const isDetailsPage = document.getElementById('est-name') !== null;
  
  // Render establishments
  if (isIndexPage) {
    renderFeaturedEstablishments();
    initializeIndexSearch();
  }
  
  if (hasEstablishmentsGrid) {
    renderAllEstablishments();
    initializeFilters();
  }

  if (isDetailsPage) {
    renderEstablishmentDetails();
  }
});

// ========================================
//  RENDER FUNCTIONS
// ========================================

// Render featured establishments on index page
function renderFeaturedEstablishments() {
  const gridContainer = document.querySelector('.establishment-grid');
  if (!gridContainer) return;
  
  // Get top 3 highest rated establishments
  const featured = [...establishments]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
  
  gridContainer.innerHTML = featured
    .map(est => createEstablishmentCard(est, 'View Details'))
    .join('');
}

// Render establishments page
function renderEstablishmentDetails() {
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get('id');
  const id = parseInt(idParam);

  const est = establishments.find(item => item.id === id);

  if (!est || !idParam || isNaN(id)) {
    window.location.href = '404.html';
    return;
  }


  document.getElementById('est-name').textContent = est.name;
  document.getElementById('est-description').textContent = est.description;
  document.getElementById('est-cuisine').textContent = est.cuisineType;
  document.getElementById('est-price').textContent = est.priceRange;
  document.getElementById('est-location').textContent = est.location;
  document.getElementById('est-rating').innerHTML = generateStars(est.rating, est.totalReviews);
  document.getElementById('est-main-img').src = est.imageUrl;
  
  const mapLink = document.getElementById('est-map');
  if (mapLink) mapLink.href = est.mapUrl;

  const tagContainer = document.getElementById('est-tags');
  if (tagContainer) {
    tagContainer.innerHTML = generateTags(est.tags);
  }

  const galleryContainer = document.getElementById('est-gallery');
  if (galleryContainer && est.gallery) {
    const previewImages = est.gallery.slice(0, 3);
    const galleryHTML = previewImages.map(imgUrl => 
    `<img src="${imgUrl}" alt="Gallery preview" class="card-image">`
  ).join('');

  galleryContainer.innerHTML = `
    <div class="establishment-grid">
      ${galleryHTML}
    </div>
    <div style="text-align: center; margin-top: var(--spacing-sm);">
      <a href="gallery.html?id=${est.id}" class="btn btn-outline">View All Photos</a>
    </div>
  `;
  }
  renderReviews(est.id);
}


// ========================================
//  INDEX SEARCH SUGGESTIONS
// ========================================

function initializeIndexSearch() {
  const input = document.getElementById('index-search-input');
  const results = document.getElementById('index-search-results');
  const button = document.getElementById('index-search-btn');
  const wrapper = input?.closest('.search-input-wrapper');

  if (!input || !results) return;

  const maxResults = 5;

  function getMatches(term) {
    if (!term) return [];
    const query = term.toLowerCase();

    return establishments.filter(est => {
      const haystack = `${est.name} ${est.description} ${est.cuisineType} ${est.location} ${est.tags.join(' ')}`.toLowerCase();
      return haystack.includes(query);
    }).slice(0, maxResults);
  }

  function renderResults(items) {
    if (!items.length) {
      results.innerHTML = '<div class="search-result-empty">No matches found</div>';
      results.classList.add('is-open');
      return;
    }

    results.innerHTML = items.map(est => {
      const ratingText = est.rating > 0 ? `${est.rating} stars` : 'No reviews yet';
      return `
        <a class="search-result-item" href="details.html?id=${est.id}">
          <img src="${est.imageUrl}" alt="${est.name}" class="search-result-image">
          <div>
            <div class="search-result-title">${est.name}</div>
            <div class="search-result-meta">${ratingText} · ${est.cuisineType}</div>
          </div>
        </a>
      `;
    }).join('');

    results.classList.add('is-open');
  }

  function clearResults() {
    results.classList.remove('is-open');
    results.innerHTML = '';
  }

  function updateResults() {
    const term = input.value.trim();
    if (!term) {
      clearResults();
      return;
    }
    renderResults(getMatches(term));
  }

  function goToTopMatch() {
    const term = input.value.trim();
    if (!term) return;
    const matches = getMatches(term);
    if (matches.length > 0) {
      window.location.href = `details.html?id=${matches[0].id}`;
    } else {
      renderResults([]);
    }
  }

  input.addEventListener('input', updateResults);
  input.addEventListener('focus', updateResults);
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      goToTopMatch();
    }
  });

  if (button) {
    button.addEventListener('click', event => {
      event.preventDefault();
      goToTopMatch();
    });
  }

  document.addEventListener('click', event => {
    if (wrapper && !wrapper.contains(event.target) && !button?.contains(event.target)) {
      clearResults();
    }
  });
}

// Render all establishments on establishments page
function renderAllEstablishments() {
  const gridContainer = document.getElementById('establishments-grid');
  if (!gridContainer) return;
  
  gridContainer.innerHTML = establishments
    .map(est => createEstablishmentCard(est, 'View Details'))
    .join('');
}

// ========================================
//  FILTER FUNCTIONALITY
// ========================================

function initializeFilters() {
  const searchInput = document.getElementById('search-input');
  const tagFilters = document.querySelectorAll('.tag-filter');
  const ratingFilter = document.getElementById('rating-filter');
  const clearFiltersBtn = document.getElementById('clear-filters');
  const gridContainer = document.getElementById('establishments-grid');
  
  // Filter function
  function applyFilters() {
    if (!gridContainer) return;
    const searchTerm = searchInput?.value.toLowerCase() || '';
    const selectedTags = Array.from(tagFilters)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
    const minRatingRaw = ratingFilter?.value.trim() || '';
    const minRatingNum = minRatingRaw ? Number(minRatingRaw) : null;
    const hasMinRating = Number.isFinite(minRatingNum);

    const filtered = establishments.filter(est => {
      let visible = true;

      if (searchTerm) {
        const searchText = `${est.name} ${est.description} ${est.cuisineType} ${est.location} ${est.tags.join(' ')}`.toLowerCase();
        visible = visible && searchText.includes(searchTerm);
      }

      if (selectedTags.length > 0 && visible) {
        visible = selectedTags.some(tag => est.tags.includes(tag));
      }

      if (hasMinRating && visible) {
        visible = Number(est.rating) >= minRatingNum;
      }

      return visible;
    });

    gridContainer.innerHTML = filtered
      .map(est => createEstablishmentCard(est, 'View Details'))
      .join('');
  }
  
  // Event listeners
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
  
  tagFilters.forEach(filter => {
    filter.addEventListener('change', applyFilters);
  });
  
  if (ratingFilter) {
    ratingFilter.addEventListener('change', applyFilters);
    ratingFilter.addEventListener('input', applyFilters);
  }
  
  // Clear filters
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', function () {
      if (searchInput) searchInput.value = '';
      tagFilters.forEach(cb => cb.checked = false);
      if (ratingFilter) ratingFilter.value = '';
      applyFilters();
    });
  }
}

// ========================================
//  REVIEW RENDERING
// ========================================

function renderReviews(establishmentId) {
  const reviewsContainer = document.getElementById('reviews-container');
  const noReviewsDiv = document.getElementById('no-reviews');
  
  if (!reviewsContainer) return;

  // Filter reviews for this establishment
  const establishmentReviews = reviews.filter(review => review.establishmentId === establishmentId);

  if (establishmentReviews.length === 0) {
    reviewsContainer.style.display = 'none';
    if (noReviewsDiv) noReviewsDiv.style.display = 'block';
    return;
  }

  reviewsContainer.style.display = 'block';
  if (noReviewsDiv) noReviewsDiv.style.display = 'none';

  // Sort by most helpful first
  const sortedReviews = [...establishmentReviews].sort((a, b) => b.helpful - a.helpful);

  reviewsContainer.innerHTML = sortedReviews.map(review => createReviewCard(review)).join('');
  
  // Attach event listeners to vote buttons
  attachVoteListeners();
}

function createReviewCard(review) {
  const reviewDate = new Date(review.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return `
    <div class="review-card" data-review-id="${review.id}">
      <div class="review-header">
        <img src="${review.userAvatar}" alt="${review.username}" class="review-avatar">
        <div class="review-user-info">
          <div class="review-username">${review.username}</div>
          <div class="review-date">${reviewDate}</div>
        </div>
      </div>
      
      <div class="review-rating">${generateStars(review.rating, 1)}</div>
      
      <h4 class="review-title">${review.title}</h4>
      
      <p class="review-content">${review.content}</p>
      
      <div class="review-actions">
        <button class="vote-btn vote-helpful" data-review-id="${review.id}" data-vote-type="helpful">
          👍 Helpful (${review.helpful})
        </button>
        <button class="vote-btn vote-unhelpful" data-review-id="${review.id}" data-vote-type="unhelpful">
          👎 Not Helpful (${review.unhelpful})
        </button>
      </div>
    </div>
  `;
}

function attachVoteListeners() {
  const voteButtons = document.querySelectorAll('.vote-btn');
  
  voteButtons.forEach(button => {
    button.addEventListener('click', function() {
      const reviewId = parseInt(this.dataset.reviewId);
      const voteType = this.dataset.voteType;
      
      // Find the review
      const review = reviews.find(r => r.id === reviewId);
      if (!review) return;

      // Check if already voted (stored in localStorage)
      const voteKey = `vote_${reviewId}`;
      const existingVote = localStorage.getItem(voteKey);

      if (existingVote === voteType) {
        // Remove vote
        if (voteType === 'helpful') {
          review.helpful--;
        } else {
          review.unhelpful--;
        }
        localStorage.removeItem(voteKey);
        this.classList.remove('voted');
      } else {
        // Add or change vote
        if (existingVote) {
          // Remove old vote
          if (existingVote === 'helpful') {
            review.helpful--;
          } else {
            review.unhelpful--;
          }
          const otherButton = this.parentElement.querySelector(`.vote-${existingVote}`);
          if (otherButton) otherButton.classList.remove('voted');
        }
        
        // Add new vote
        if (voteType === 'helpful') {
          review.helpful++;
        } else {
          review.unhelpful++;
        }
        localStorage.setItem(voteKey, voteType);
        this.classList.add('voted');
      }

      // Update button text
      const helpfulBtn = this.parentElement.querySelector('.vote-helpful');
      const unhelpfulBtn = this.parentElement.querySelector('.vote-unhelpful');
      
      if (helpfulBtn) {
        helpfulBtn.innerHTML = `👍 Helpful (${review.helpful})`;
      }
      if (unhelpfulBtn) {
        unhelpfulBtn.innerHTML = `👎 Not Helpful (${review.unhelpful})`;
      }
    });

    // Set initial voted state
    const reviewId = parseInt(button.dataset.reviewId);
    const voteType = button.dataset.voteType;
    const voteKey = `vote_${reviewId}`;
    const existingVote = localStorage.getItem(voteKey);
    
    if (existingVote === voteType) {
      button.classList.add('voted');
    }
  });
}
