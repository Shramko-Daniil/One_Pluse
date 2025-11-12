const callusBtn = document.querySelector('.callus-btn');
const dropdown = document.querySelector('.callus-dropdown');
const arrow = document.querySelector('.arrow');
const extraPhones = document.querySelector('.extra-phones');

// Toggle main dropdown
callusBtn.addEventListener('click', e => {
	e.stopPropagation();
	dropdown.classList.toggle('show');
});

// Toggle additional phones
arrow.addEventListener('click', e => {
	e.stopPropagation();
	extraPhones.classList.toggle('show');
	// Arrow stays static, no content change
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
	dropdown.classList.remove('show');
	extraPhones.classList.remove('show');
});
