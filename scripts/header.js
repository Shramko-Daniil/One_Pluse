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
const serviceSubmenus = document.querySelectorAll(
	'.services-dropdown__el--has-children'
);
const burgerBtn = document.getElementById('burger-btn');
const navigationWrapper = document.getElementById('navigation-wrapper');
const navigationClose = document.getElementById('navigation-close');
const langBtnMobile = document.querySelector('.lang-btn--mobile');
const callusBtnMobile = document.querySelector('.callus-btn--mobile');

const resetServiceSubmenus = () => {
	serviceSubmenus.forEach(item => {
		item.classList.remove('open');
	});
};

const setBurgerState = isOpen => {
	if (!burgerBtn) return;
	burgerBtn.classList.toggle('is-open', Boolean(isOpen));
};

const toggleMobileAuxButtons = isOpen => {
	if (langBtnMobile) {
		langBtnMobile.classList.toggle('is-hidden', Boolean(isOpen));
	}
	if (callusBtnMobile) {
		callusBtnMobile.classList.toggle('is-hidden', !Boolean(isOpen));
	}
};

toggleMobileAuxButtons(false);

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
		if (!servicesContainer.classList.contains('open')) {
			resetServiceSubmenus();
		}
	});
}

serviceSubmenus.forEach(item => {
	const toggle = item.querySelector('.services-link__toggle');
	if (!toggle) return;

	toggle.addEventListener('click', e => {
		e.stopPropagation();
		item.classList.toggle('open');
	});
});

// ======================
// 🌐 GLOBAL CLICK HANDLERS
// ======================
document.addEventListener('click', e => {
	if (
		navigationWrapper &&
		navigationWrapper.classList.contains('open') &&
		!navigationWrapper.contains(e.target) &&
		!burgerBtn?.contains(e.target)
	) {
		navigationWrapper.classList.remove('open');
		document.body.classList.remove('no-scroll');
		setBurgerState(false);
		toggleMobileAuxButtons(false);
	}

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
		resetServiceSubmenus();
	}
});

// Close search bar on Escape key
document.addEventListener('keydown', e => {
	if (e.key === 'Escape' && navigationWrapper?.classList.contains('open')) {
		navigationWrapper.classList.remove('open');
		document.body.classList.remove('no-scroll');
		setBurgerState(false);
		toggleMobileAuxButtons(false);
	}

	if (e.key === 'Escape' && searchBar.classList.contains('is-active')) {
		closeSearchBar();
	}
});

if (burgerBtn && navigationWrapper) {
	burgerBtn.addEventListener('click', e => {
		e.stopPropagation();
		const isOpen = navigationWrapper.classList.toggle('open');
		setBurgerState(isOpen);
		toggleMobileAuxButtons(isOpen);
		document.body.classList.toggle('no-scroll', isOpen);
	});
} else {
	console.warn('Burger button or navigation wrapper not found');
}

if (navigationClose) {
	navigationClose.addEventListener('click', () => {
		navigationWrapper?.classList.remove('open');
		document.body.classList.remove('no-scroll');
		setBurgerState(false);
		toggleMobileAuxButtons(false);
	});
}
