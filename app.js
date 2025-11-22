function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

function openSearch() {
  alert("Search functionality");
}

function openAccount() {
  alert("Account functionality");
}

function openCart() {
  alert("Cart functionality");
}

const announcements = [
  "Your safety, our priority.",
  "Flat 30% Off — Limited Time Offer!",
  "Made for hospitals. Built for safety.",
];
let currentIndex = 0;

function updateAnnouncement() {
  const text = document.querySelector(".announcement-text span");
  text.textContent = announcements[currentIndex];
}

function nextAnnouncement() {
  currentIndex = (currentIndex + 1) % announcements.length;
  updateAnnouncement();
}

function previousAnnouncement() {
  currentIndex =
    (currentIndex - 1 + announcements.length) % announcements.length;
  updateAnnouncement();
}


//hero
  
    // Simple progressive enhancement: smooth scroll + CTA analytics stub
    document.getElementById('shopBtn').addEventListener('click', function(e){
      e.preventDefault();
      console.log('CTA: shop now clicked');
      // Use smooth scroll if available
      const target = document.querySelector('#shop');
      if(target) target.scrollIntoView({behavior:'smooth'});
      else window.location.hash = '#shop';
    });

    // Accessibility: reduce motion if user prefers (double-check JS side)
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(prefersReduced){
      document.querySelectorAll('.box').forEach(b=>b.style.animation='none');
    }
  
    //search bar
    function openSearch() {
    document.getElementById("searchOverlay").classList.add("active");
    document.getElementById("searchInput").focus();
}

function closeSearch() {
    document.getElementById("searchOverlay").classList.remove("active");
    document.getElementById("searchInput").value = "";
    document.getElementById("searchResults").innerHTML =
        '<p class="search-placeholder">Type to search…</p>';
}

/* ESC to close */
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeSearch();
});

/* SEARCH SUGGESTIONS DEMO */
const dummyData = [
    "Surgical Gloves",
    "Face Mask",
    "Medcrew Sanitizer",
    "Cotton Roll",
    "Surgical Tape",
    "Medical Apron",
    "Medcrew Scrub Suit",
];

document.getElementById("searchInput").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const container = document.getElementById("searchResults");

    if (query.length < 1) {
        container.innerHTML = '<p class="search-placeholder">Type to search…</p>';
        return;
    }

    const results = dummyData.filter(item =>
        item.toLowerCase().includes(query)
    );

    if (!results.length) {
        container.innerHTML = '<p class="search-placeholder">No results found</p>';
        return;
    }

    container.innerHTML = results
        .map(item => `<div class="search-item">${item}</div>`)
        .join("");
});
