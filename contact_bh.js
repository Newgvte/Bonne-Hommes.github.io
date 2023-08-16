function contact() {
    // Cette fonction affichera un message à l'utilisateur pour confirmer ou non le formulaire.

    nom = document.getElementById('nom').value;
    prenom = document.getElementById('prenom').value;
    message = document.getElementById('message').value;

    console.log(nom) // important pour déboguer
    console.log(prenom) // important pour déboguer
    console.log(message) // important pour déboguer
    {
        if (message == "") {
            alert("Le champ Message n'est pas remplie");
            return false;
        }
        return document.getElementById('reception').value="Bonjour " + nom + " " + prenom + ", nous avons bien reçu votre message.";
    }
}