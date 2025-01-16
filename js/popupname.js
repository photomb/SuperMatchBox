document.addEventListener('DOMContentLoaded', () => {
    openPopupButton.addEventListener('click', () => {
        popup.classList.remove('hidden');
      });
    
      // Fermer la popup
      closePopupButton.addEventListener('click', () => {
        popup.classList.add('hidden');
      });
      goButton = window.location.href = "gameplay.html"
      xButton.style.display = "none"
})