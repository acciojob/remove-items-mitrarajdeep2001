//your JS code here. If required.
let colorSelect = document.querySelector('#colorSelect')
let button = document.querySelector('input')
button.addEventListener('click', () => {
	let selectedOption = colorSelect.options[colorSelect.selectedIndex]
	colorSelect.removeChild(selectedOption)
})