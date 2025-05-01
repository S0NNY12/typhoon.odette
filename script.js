// Toggle the sidebar (for both mobile and desktop)
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}

// Popup content handler
function showPopup(type) {
  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popup-text');

  if (type === 'info') {
    popupText.innerHTML = `<h3>What are Typhoons?</h3><p>Typhoons are intense tropical storms that bring heavy rain, strong winds, and flooding. They can cause severe damage to infrastructure, homes, and agriculture.</p>`;
  } else if (type === 'solutions') {
    popupText.innerHTML = `<h3>Solutions to Typhoon Damage</h3><p>These include early warning systems, emergency preparedness programs, community shelters, and stronger building codes.</p>`;
  }

  popup.classList.remove('hidden');
}

// Close the popup
function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('hidden');
}

// Close popup when clicking outside of it
window.addEventListener('click', function (e) {
  const popup = document.getElementById('popup');
  if (e.target === popup) {
    closePopup();
  }
});

// FAQ toggle function
function toggleFaq(button) {
  const answer = button.nextElementSibling;
  answer.classList.toggle('hidden');
  button.classList.toggle('active');
  
  // Toggle the plus/minus icon
  const icon = button.querySelector('i');
  icon.classList.toggle('icon-plus');
  icon.classList.toggle('icon-minus');
}

// Attach event listeners to FAQ toggle buttons
document.addEventListener('DOMContentLoaded', () => {
  const faqButtons = document.querySelectorAll('.togglefaq');

  faqButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      toggleFaq(button);
    });
  });
});

// Toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});





