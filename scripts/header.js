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

// 👇 Добавленные селекторы для меню "Услуги"
const servicesBtn = document.getElementById('services-btn');
const servicesContainer = document.querySelector(
	'.services-dropdown__container'
);

// ======================
// 📞 CALL US DROPDOWN
// ======================
if (callusBtn && dropdown) {
	callusBtn.addEventListener('click', e => {
		e.stopPropagation();
		dropdown.classList.toggle('show');
	});
}

if (arrow && extraPhones) {
	arrow.addEventListener('click', e => {
		e.stopPropagation();
		extraPhones.classList.toggle('show');
	});
}

// ======================
// 🔍 SEARCH BAR
// ======================
const openSearchBar = () => {
	searchBar.classList.add('is-active');
	if (navigation) navigation.style.display = 'none';
	if (searchBtn) searchBtn.style.display = 'none';
	if (callusContainer) callusContainer.style.display = 'none';

	setTimeout(() => {
		searchInput.focus();
	}, 100);
};

const closeSearchBar = () => {
	searchBar.classList.remove('is-active');
	if (navigation) navigation.style.display = '';
	if (searchBtn) searchBtn.style.display = '';
	if (callusContainer) callusContainer.style.display = '';
	searchInput.value = '';
};

if (searchBtn) {
	searchBtn.addEventListener('click', e => {
		e.stopPropagation();
		if (searchBar.classList.contains('is-active')) {
			closeSearchBar();
		} else {
			openSearchBar();
		}
	});
}

// ======================
// 🧑‍💻 SERVICES DROPDOWN (Новая логика)
// ======================
if (servicesBtn && servicesContainer) {
	servicesBtn.addEventListener('click', e => {
		e.stopPropagation(); // Предотвращаем немедленное закрытие
		servicesContainer.classList.toggle('open');
	});
}

// ======================
// 🌐 GLOBAL CLICK HANDLERS
// ======================
document.addEventListener('click', e => {
	// Close call-us dropdown
	if (
		callusBtn &&
		dropdown &&
		!callusBtn.contains(e.target) &&
		!dropdown.contains(e.target)
	) {
		dropdown.classList.remove('show');
		extraPhones?.classList.remove('show');
	}

	// Close search bar
	if (
		searchBtn &&
		searchBar &&
		!searchBtn.contains(e.target) &&
		!searchBar.contains(e.target) &&
		searchBar.classList.contains('is-active')
	) {
		closeSearchBar();
	}

	// 👇 Обновленная логика для закрытия меню "Услуги"
	// Close service dropdown
	if (
		servicesContainer &&
		!servicesContainer.contains(e.target) &&
		servicesContainer.classList.contains('open')
	) {
		servicesContainer.classList.remove('open');
	}
});

// Close search bar on Escape key
document.addEventListener('keydown', e => {
	if (e.key === 'Escape' && searchBar.classList.contains('is-active')) {
		closeSearchBar();
	}
});
