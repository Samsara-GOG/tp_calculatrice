'use strict';

export default class Calculator {
	constructor(numID) {
		// Génération de la calculatrice
		const calc = document.createElement('div');
		calc.classList.add('calculator');
		calc.setAttribute('id', `calc-id${numID}`);
		document.body.append(calc);

		const screen = document.createElement('input');
		screen.type = 'text';
		screen.value = '0';
		screen.disabled = true;
		screen.classList.add('calculator__screen');
		screen.setAttribute('id', `screen-id${numID}`);
		calc.append(screen);

		const calc_keys = document.createElement('div');
		calc_keys.classList.add('calculator__keys');
		calc_keys.setAttribute('id', `keys-id${numID}`);
		screen.after(calc_keys);

		const btnOperator = (btnElement, btnType, btnValue, btnHTML, btnClass) => {
			const btnNum = document.createElement(btnElement);
			btnNum.type = btnType;
			btnNum.value = btnValue;
			btnNum.innerHTML = btnHTML;
			btnNum.classList.add(btnClass);
			calc_keys.append(btnNum);
		};

		const btnNumber = (btnElement, btnType, btnValue, btnHTML) => {
			const btnNum = document.createElement(btnElement);
			btnNum.type = btnType;
			btnNum.value = btnValue;
			btnNum.innerHTML = btnHTML;
			calc_keys.append(btnNum);
		};

		btnOperator('button', 'button', '+', '+', 'operator');
		btnOperator('button', 'button', '-', '-', 'operator');
		btnOperator('button', 'button', '*', '&times;', 'operator');
		btnOperator('button', 'button', '/', '&divide;', 'operator');

		btnNumber('button', 'button', '7', '7');
		btnNumber('button', 'button', '8', '8');
		btnNumber('button', 'button', '9', '9');
		btnNumber('button', 'button', '4', '4');
		btnNumber('button', 'button', '5', '5');
		btnNumber('button', 'button', '6', '6');
		btnNumber('button', 'button', '1', '1');
		btnNumber('button', 'button', '2', '2');
		btnNumber('button', 'button', '3', '3');

		btnNumber('button', 'button', '0', '0');
		btnOperator('button', 'button', '.', '.', 'decimal');
		btnOperator('button', 'button', 'clear', 'AC', 'clear');

		btnOperator('button', 'button', '=', '=', 'equal');

		// Fonctionnalités des touches et des opérations

		// Création de l'objet calculator pour initier les propriétés de l'écran affiché
		const calculator = {
			displayValue: '0',
			firstOperand: null,
			waitingForSecondOperand: false,
			operator: null,
		};
		// Nombre à afficher ou pas en fonction de l'entrée
		const inputDigit = (digit) => {
			const { displayValue, waitingForSecondOperand } = calculator;

			if (waitingForSecondOperand === true) {
				calculator.displayValue = digit;
				calculator.waitingForSecondOperand = false;
			} else {
				calculator.displayValue =
					displayValue === '0' ? digit : displayValue + digit;
			}
		};

		// Gestion de la virgule
		const inputDecimal = (dot) => {
			// si on entre une virgule et que l'on est en attente du second opérande
			if (calculator.waitingForSecondOperand === true) {
				// on affiche la virgule après le 0
				calculator.displayValue = '0.';
				// et on attend plus le second opérand car il faut compléter
				// les chiffres après la virgule
				calculator.waitingForSecondOperand = false;
				return;
			}

			// Si la valeur affichée ne contient pas déjà une virgule
			if (!calculator.displayValue.includes(dot)) {
				// Ajoute la virgule flottante
				calculator.displayValue += dot;
			}
		};

		// 1er cas : l'utilisateur touche un opérateur
		// après avoir entré le premier nombre
		const handleOperator = (nextOperator) => {
			// Destructure les propriétés de l'objet calculator
			const { firstOperand, displayValue, operator } = calculator;
			// `parseFloat` convertit le contenu en chaîne de caractères
			// de `displayValue` en nombre à virgule flottante
			const inputValue = parseFloat(displayValue);
			calculator.displayValue = nextOperator;
			// s'il existe déjà un opérateur et qu'un 1er opérand existe,
			// en attente donc du second opérande
			if (operator && calculator.waitingForSecondOperand) {
				// alors on remplace la valeur de la propriété opérator
				// par le nouvel opérateur et on renvoie sans faire de calcul
				calculator.operator = nextOperator;
				calculator.displayValue = operator;
				return;
			}

			// vérifie que `firstOperand` est nul (donc vide) et que `inputValue`
			// est l'inverse d'une valeur `NaN`, donc est un nombre
			if (firstOperand === null && !isNaN(inputValue)) {
				// Met à jour la propriété `firstOperand` donc
				// enregistre le nombre dans firstOperand
				calculator.firstOperand = inputValue;

				// sinon si c'est un opérateur
			} else if (operator) {
				// on calcule l'opération
				const result = calculate(firstOperand, inputValue, operator);
				// on converti le résultat en nombre à virgule flottante
				// à 7 chiffres max, et on arrondit avec parseFloat pour les zéros inutiles
				// après la virgule pour la valeur affichée pour éviter le bug
				// d'un calcul simple avec un résultat complexe ex 0.1 + 0.3 = 0.300...10^13

				calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
				// et on l'enregistre dans firstOperand pour le prochain calcul
				calculator.firstOperand = result;
			}

			// Le premier opérande est entré, le prochain nombre sera automatiquement
			// considéré et enregistré comme le second opérande
			calculator.waitingForSecondOperand = true;
			// Enregistrement de l'opérateur cliqué dans la propriété operator
			calculator.operator = nextOperator;
		};

		// 2e cas : l'utilisateur clique sur un opérateur
		// après avoir entré le second opérande
		const calculate = (firstOperand, secondOperand, operator) => {
			if (operator === '+') {
				return firstOperand + secondOperand;
			} else if (operator === '-') {
				return firstOperand - secondOperand;
			} else if (operator === '*') {
				return firstOperand * secondOperand;
			} else if (operator === '/') {
				return firstOperand / secondOperand;
			}
			calculator.displayValue = operator;

			// l'opérateur est forcément `=` alors on renvoie le second opérande
			return secondOperand;
		};

		// Remise à zéro de toutes les propriétés de l'objet calculator
		const resetCalculator = () => {
			calculator.displayValue = '0';
			calculator.firstOperand = null;
			calculator.waitingForSecondOperand = false;
			calculator.operator = null;
		};

		const updateDisplay = (_id) => {
			const display = document.getElementById(`screen-id${_id}`);
			display.value = calculator.displayValue;
		};

		updateDisplay(numID);

		const keys = document.querySelectorAll(`#keys-id${numID}`);

		keys.forEach((item) => {
			item.addEventListener('click', (event) => {
				const { target } = event;
				const { value } = target;

				// console.log(value);

				// Vérifie si l'élément cliqué est un bouton
				// Sinon, la fonction s'arrête
				if (!target.matches('button')) {
					return;
				}

				switch (value) {
					case '+':
					case '-':
					case '*':
					case '/':
					case '=':
						handleOperator(value);
						break;
					case '.':
						inputDecimal(value);
						break;
					case 'clear':
						resetCalculator();
						break;
					default:
						// Vérifie si la clé est un nombre entier
						if (Number.isInteger(parseFloat(value))) {
							inputDigit(value);
						}
				}
				updateDisplay(numID);
			});
		});
	}
}
