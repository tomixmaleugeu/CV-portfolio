// Sélection du formulaire
const form = document.getElementById("contactForm");

// Écoute de l'événement "submit"
form.addEventListener("submit", function (event) {

    // Empêche l'envoi réel du formulaire
    event.preventDefault();

    // Sélection des champs
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");

    // Sélection des messages d’erreur et de succès
    const nameError = document.getElementById("nameError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    // Réinitialisation des messages
    nameError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    // Variable pour savoir si le formulaire est valide
    let isValid = true;

    // Vérification du champ nom
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Le nom doit être rempli";
        isValid = false;
    }

    // Vérification du champ message (au moins 10 caractères)
    if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Le message doit contenir au moins 10 caractères";
        isValid = false;
    }

    // Si toutes les conditions sont remplies
    if (isValid) {
        // Message de confirmation
        successMessage.textContent = "Message bien envoyé";

        // Vidage des champs
        nameInput.value = "";
        messageInput.value = "";
    }
});
