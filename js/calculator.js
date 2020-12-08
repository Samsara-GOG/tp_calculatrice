'use strict';

// this.querySelector acces a la 2e calculatrice pour accrocher les modifs

const body = document.body;
// const button = document.querySelector("button");
let resultat = document.querySelector(".block__resultat");



const num = document.querySelector(".num")

// Signes d'opérateurs
const addition = document.querySelector(".addition");
const minus = document.querySelector(".minus");
const virg = document.querySelector(".virg");
const multiply = document.querySelector(".multiply");
const egal = document.querySelector(".egal");

// Nombres
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");

function changeResultat(event) {
    if button.classList.contains()
    const nb = event.target.textContent;
    console.log(nb);
    resultat.textContent += addition.textContent;
}

const button = document.querySelector("button");
button.addEventListener("click", changeResultat);

// export class Calculator {
    //     constructor(nbLifes, pseudo, mana) {
    //         this.mana = mana;
    //     }
    
    //     spell() {
    //         if(this.mana >= 10) {
    //             console.log("Foudre");
    //             this.mana-=10;
    //         }
    //         else {
    //             console.log("A PU MANAAAA");
    //         }
    //     }
// }

// Génération de la calculatrice
// const blockMain = document.createElement('div');
// body.append(blockMain);
// blockMain.classList.add('block');
// blockMain.textContent = "Blabla";

// function createButton(class, content) {
//     const button = document.createElement("button");
//     button.classList.add(class);
//     button.textContent = content;
//     blockMain.append()
// }

// createButton("btn")

// function createLinkInNav(url, text) {
//     const link = document.createElement("a");
//     link.href = url;
//     link.textContent = text;
//     nav.append(link);
// }

// createLinkInNav("/","Accueil");
// createLinkInNav("/services", "Mes services");
// createLinkInNav("/contact", "Contact");


// function changeResultat(event) {
//     const nb = event.target.textContent;
//     console.log(nb);
//     resultat = button.textContent;
// }

// const button = document.querySelector("button");
// button.addEventListener("click", changeResultat);


// A voir
// function changeImg(event) {
//     const nb = event.target.textContent;
//     console.log(nb);

//     const img = document.querySelector('#imgPoney');
    
//     img.src = `img/img-${nb}.jpg`;
//     //La même chose que 
//     // img.src = "img/img-" + nb + ".jpg";
// }

// const buttons = document.querySelector("#buttons");
// buttons.addEventListener("click", changeImg);


// function calcul(event) {

//     console.log(event.target);
//     console.log(12)
//     if (button.textContent == "AC" ) {
//         resultat.document.textContent = 0;
//     }

//     // console.log(resultat.textContent);

//     // console.log(eval('2 + 2'));
//     // expected output: 4
// }
// // Au click du bouton, la fonction calcul se lance
// button.addEventListener("click", calcul);



// Exemple de Classe
// class Menu {

//     clickNav(event) {
//         console.log(event.target)
//     }

//     constructor() {
//         /* 1.Création de l'élément */
//         const nav = document.createElement('nav');

//         /* 2.Paramétrage de l'élément */
//         nav.classList.add("menu");
//         // C'est la même quand il n'y a pas de classe avant
//         // nav.className = "menu";

//         /* 3.Placement de l'élément dans le dom */
//         document.body.append(nav);


//         const link = document.createElement('a');
//         link.textContent = "Accueil";
//         nav.append(link);

//         nav.addEventListener('click',this.clickNav);

//     }
// }

