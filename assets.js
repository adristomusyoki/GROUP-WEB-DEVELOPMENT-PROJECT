document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle (if implementing a hamburger menu)
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      document.querySelector('nav ul').classList.toggle('active');
    });
  }

  // Quick View Modal Functionality
  const quickViewButtons = document.querySelectorAll('.quick-view-btn');
  quickViewButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const modalId = btn.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });

  // Close Modal When 'x' is Clicked
  const modalCloseButtons = document.querySelectorAll('.modal .close');
  modalCloseButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      btn.parentElement.parentElement.style.display = 'none';
    });
  });

  // Close modal if clicking outside the modal content
  window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });

  // Additional JavaScript for filters, sorting, or form validation can be added here.
});
