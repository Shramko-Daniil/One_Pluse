const callusBtn = document.querySelector('.callus-btn');
const dropdown = document.querySelector('.callus-dropdown');
const arrow = document.querySelector('.arrow');
const extraPhones = document.querySelector('.extra-phones');
const searchBtn = document.querySelector('.search-btn');
const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('search-input');
const navigation = document.querySelector('.navigation');
const headerWrapper = document.querySelector('.header-wrapper');
const callusContainer = document.querySelector('.callus-container');

// Toggle main dropdown
callusBtn.addEventListener('click', e => {
	e.stopPropagation();
	dropdown.classList.toggle('show');
});

// Toggle additional phones
arrow.addEventListener('click', e => {
	e.stopPropagation();
	extraPhones.classList.toggle('show');
});

// Open search bar
const openSearchBar = () => {
	searchBar.classList.add('is-active');
	if (navigation) navigation.style.display = 'none';
	if (searchBtn) searchBtn.style.display = 'none';
	if (callusContainer) callusContainer.style.display = 'none';

	setTimeout(() => {
		searchInput.focus();
	}, 100);
};

// Close search bar
const closeSearchBar = () => {
	searchBar.classList.remove('is-active');
	if (navigation) navigation.style.display = '';
	if (searchBtn) searchBtn.style.display = '';
	if (callusContainer) callusContainer.style.display = '';
	searchInput.value = '';
};

// Toggle search bar
searchBtn.addEventListener('click', e => {
	e.stopPropagation();
	if (searchBar.classList.contains('is-active')) {
		closeSearchBar();
	} else {
		openSearchBar();
	}
});

// Close dropdown when clicking outside
document.addEventListener('click', e => {
	if (!callusBtn.contains(e.target) && !dropdown.contains(e.target)) {
		dropdown.classList.remove('show');
		extraPhones.classList.remove('show');
	}
	if (
		!searchBtn.contains(e.target) &&
		!searchBar.contains(e.target) &&
		searchBar.classList.contains('is-active')
	) {
		closeSearchBar();
	}
});

// Close search bar on Escape key
document.addEventListener('keydown', e => {
	if (e.key === 'Escape' && searchBar.classList.contains('is-active')) {
		closeSearchBar();
	}
});
