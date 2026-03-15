// ===== USERS =====
const users = [
  {
    username: "Robert Robertson",
    avatar: "",
    bio: "I love food and coffee.",
    bookmarks: [1001, 1003],
    reviews: [
      { establishmentId: 1001, rating: 5, content: "Amazing silog meals!" },
      { establishmentId: 1003, rating: 4, content: "Great Filipino comfort food." }
    ]
  },
  {
    username: "Maria",
    avatar: "assets/img/avatar2.jpg",
    bio: "Student foodie and cafe hopper.",
    bookmarks: [1002, 1004],
    reviews: [
      { establishmentId: 1002, rating: 4, content: "Cozy spot, good pasta!" }
    ]
  }
];

// ===== MOCK ESTABLISHMENTS =====
const establishments = [
  { id: 1001, name: "Ate Rica's Bacsilog", imageUrl: "../assets/img/aterica-main.jpg" },
  { id: 1002, name: "The Barn", imageUrl: "../assets/img/thebarn-main.jpg" },
  { id: 1003, name: "AMS Golden Plate Restaurant", imageUrl: "../assets/img/ams-main.jpg" },
  { id: 1004, name: "24 Chicken", imageUrl: "../assets/img/24chicken-main.jpg" }
];

// ===== SELECT THE MOCK USER =====
const currentUser = users[0]; // Just pick Robert for demo

// ===== POPULATE PROFILE HEADER =====
document.getElementById("profile-avatar").src = currentUser.avatar || "../assets/img/default-avatar.png";
document.getElementById("profile-username").textContent = currentUser.username ;
document.getElementById("profile-bio").textContent = currentUser.bio || "No bio yet.";

// ===== POPULATE BOOKMARKS =====
const bookmarkContainer = document.getElementById("bookmark-container");
bookmarkContainer.innerHTML = "";

if (currentUser.bookmarks.length > 0) {
  currentUser.bookmarks.forEach(id => {
    const place = establishments.find(e => e.id === id);
    if (!place) return;

    const card = document.createElement("div");
    card.className = "card card-hover";
    card.innerHTML = `
      <img src="${place.imageUrl}" alt="${place.name}" class="card-image">
      <h4>${place.name}</h4>
    `;
    bookmarkContainer.appendChild(card);
  });
} else {
  bookmarkContainer.innerHTML = "<p>No bookmarks yet.</p>";
}

// ===== POPULATE REVIEWS =====
const reviewContainer = document.getElementById("reviews-container");
reviewContainer.innerHTML = "";

if (currentUser.reviews.length > 0) {
  currentUser.reviews.forEach(review => {
    const place = establishments.find(e => e.id === review.establishmentId);

    const card = document.createElement("div");
    card.className = "review-card card card-hover";
    card.innerHTML = `
      <h4>${place ? place.name : "Unknown Place"}</h4>
      <div class="stars">${"⭐".repeat(review.rating)}</div>
      <p>${review.content}</p>
    `;
    reviewContainer.appendChild(card);
  });
} else {
  reviewContainer.innerHTML = "<p>No reviews yet.</p>";
}

/* ======================== */
/*       EDIT PROFILE       */
/* ======================== */

const avatarInput = document.getElementById("avatar");
const avatarPreview = document.getElementById("avatarPreview");
const bioInput = document.getElementById("bio");

    // Avatar preview
    avatarInput.addEventListener("change", function () {
        const file = avatarInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                avatarPreview.src = e.target.result;
                avatarPreview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

