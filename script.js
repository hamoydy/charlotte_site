document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Affiche un message de confirmation pour l'utilisateur
    alert('Merci pour votre message ! Nous vous répondrons bientôt.');

    // Envoie le formulaire
    e.target.submit();
});
