let monAge = 39 
const monPrenom = "Vanessa"





let messageBienvenue = "Bonjour, je m'appelle " + monPrenom + ", j'ai " + monAge + " ans. "

let messagePerso = messageBienvenue + monPrenom



console.log(messageBienvenue)


// let moi ={
//     nom: "Blanchet",
//     prenom: "Vanessa",
//     age: 39,
//     couleurPreferee: "rouge", 
//     metier: "Développeuse Web"
// }




// console.log(moi);

// let presentation = "Bonjour, je m'appelle " + moi.prenom + " " + moi.nom + ", " + "j'ai " + moi.age + " ans."

// console.log(presentation);

let mesInfos = ["Nom", "Prénom", "Age", "Métier", "Nombre d'enfants"]


mesInfos.push("Couleur préférée")

mesInfos.pop()

let mesTrucs = mesInfos

console.log(mesTrucs);


//! Interations avec les boutons et addEventListener

let bouton = document.getElementById("bouton")

console.log("j'affiche mon bouton : " +bouton);

bouton.addEventListener("click", function () {
    console.log("je détecte le clic");
})