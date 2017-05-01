// Fonction de génération du mot de passe

function randomPassword(length) {
  // je définis tous les caractères composant le mot de passe
  var characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
  // j'initialise la variable password vide
  var password = "";
  // je crée une boucle qui dit que tant que X != à la longueur de length, il faut ajouter un caractère de manière aléatoire
  for (var x = 0; x < length; x++) {
    var i = Math.floor(Math.random() * characters.length);
    password += characters.charAt(i);
  }
  return password;
}

// je crée la fonction qui sera appliquée lorsque je cliquerai sur le bouton "Generate"
function generate() {
  password_generator.row_password.value = randomPassword(password_generator.length.value);
}

// Fonction de copie du mot de passe

$("button").click(function(){
    $(".copy_password").select();
    document.execCommand('copy');
});
