// Sélectionnez le lien "Contact" dans la barre de navigation
const contactLink = document.querySelector('a[href="#contact"]');

// Sélectionnez le formulaire de contact
const contactForm = document.getElementById('contact-form');

// Sélectionnez le bouton de fermeture du formulaire
const closeFormButton = document.getElementById('close-form');

// Ajoutez un écouteur d'événement pour ouvrir le formulaire de contact
contactLink.addEventListener('click', () => {
    contactForm.style.display = 'flex';
});

// Ajoutez un écouteur d'événement pour fermer le formulaire de contact
closeFormButton.addEventListener('click', () => {
    contactForm.style.display = 'none';
});

// Empêchez la fermeture du formulaire lorsque l'utilisateur clique à l'intérieur du formulaire
contactForm.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Ajoutez un écouteur d'événement pour fermer le formulaire lorsque l'utilisateur clique à l'extérieur du formulaire
document.addEventListener('click', () => {
    if (contactForm.style.display === 'flex') {
        contactForm.style.display = 'none';
    }
});
