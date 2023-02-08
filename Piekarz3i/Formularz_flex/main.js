const elementSelect = document.querySelector('#elementSelect');
const elementText = document.querySelector('#elementText');
const elementDate = document.querySelector('#elementDate');
const elementPadding = document.querySelector('#elementPadding');
const elementMargin = document.querySelector('#elementMargin');
const elementColor = document.querySelector('#elementColor');
const elementColorBg = document.querySelector('#elementColorBg');
const elementLetterSpacing = document.querySelector('#elementLetterSpacing');
const elementUpgrade = document.querySelectorAll('[name="elementUpgrade"]');
const elementAlign = document.querySelectorAll('[name="elementAlign"]');
const submitButton = document.querySelector('#submitButton');
const display = document.querySelector('#display');
const form = document.querySelector('form');

form.addEventListener('submit', function (evt) {
	evt.preventDefault();
	const element = document.createElement(elementSelect.value);
	element.innerHTML = `Element ${elementSelect.value} z tekstem ${elementText.value} oraz datą ${elementDate.value}`;

	element.style.padding = `${elementPadding.value}rem`;
	element.style.margin = `${elementMargin.value}rem`;
	element.style.color = elementColor.value;
	element.style.backgroundColor = elementColorBg.value;
	element.style.letterSpacing = `${elementLetterSpacing.value}rem`;
	for (let i = 0; i < elementAlign.length; i++) {
		if (elementAlign[i].checked) {
			element.style.textAlign = elementAlign[i].value;
		}
	}
	for (let i = 0; i < elementUpgrade.length; i++) {
		if (elementUpgrade[i].checked) {
			element.style.textDecoration += elementUpgrade[i].value;
		}
	}
	display.appendChild(element);
});
