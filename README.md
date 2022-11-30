# Projet calculator-js
Calculatrice JavaScript générée sur le DOM

<p align="center">
    <img src="https://samsara.live/images/calculatrice/calculatrice.jpg" alt="calculatrice JavaScript" height="250">
</p>

Version double et indépendantes les unes des autres
<p align="center">
    <img src="https://samsara.live/images/calculatrice/2calculatrices.jpg" alt="2 calculatrices JavaScript indépendantes" height="250">
</p>

Contenu du fichier app.js :  
```javascript
  import Calculator from './calculator.js';
  // import Calculator from './calculator_all-linked.js';

  ('use strict');

  let calc1 = new Calculator('1');
  let calc2 = new Calculator('2');
   ```

Consignes: 
  - Trois fichiers .js sont présents dans public: 
  `app.js` : fichier qui importe et instancie les calculatrices,  
  `calculator.js` : fichier à utiliser dans app.js si on veut deux calculatrices indépendantes    
  `calculator_all-linked.js` : fichier à utiliser dans app.js si on veut deux calculatrices dépendantes l'une de l'autre    
  - A l'exécution du code, 2 calculatrices fonctionnelles et indépendantes apparaissent dans le navigateur
  - Un seul `addEventListener` est utilisé pour le code de la calculatrice
  - L'HTML est généré par le JavaScript via le DOM, le CSS est à part dans son fichier `style.css`

A rendre: Lien git du projet
