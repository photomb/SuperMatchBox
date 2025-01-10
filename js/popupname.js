document.addEventListener('DOMContentLoaded', () => {
    openPopupButton.addEventListener('click', () => {
        popup.classList.remove('hidden');
      });
    
      // Fermer la popup
      closePopupButton.addEventListener('click', () => {
        popup.classList.add('hidden');
      });
})