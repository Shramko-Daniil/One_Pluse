const callusBtn = document.querySelector('#callus-btn');
const dropdown = document.querySelector('.callus-dropdown');
const arrow = document.querySelector('.arrow');
const extraPhones = document.querySelector('.extra-phones');
const searchBtn = document.querySelector('.search-btn');
const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('search-input');
const navigation = document.querySelector('.navigation');
const headerWrapper = document.querySelector('.header-wrapper');
const callusContainer = document.querySelector('.callus-container');
const phoneBtnHeaderControlsWrapper = document.querySelector(
	'.phone-btn__header-controls__wrapper'
);
const phoneBtnHeaderControls = document.querySelector(
	'.phone-btn__header-controls'
);
const callusDropdownMobile = document.querySelector('.callus-dropdown__mobile');

const header = document.querySelector('.header');
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
const callusBtnMobile = document.querySelector('#callus-btn--mobile');
const mobileSearchBtn = document.querySelector('#mobile-search-btn');
const langBtnMobilePanel = document.querySelector('#lang-btn--mobile-panel');
const headerWrapperInnerHeader = document.querySelector(
	'.header-wrapper__inner-header'
);

const headerWrapperIconUp = document.querySelector('.header-wrapper__icon-up');
const headerWrapperIconDown = document.querySelector(
	'.header-wrapper__icon-down'
);

const navOpenIconUp = document.querySelector('.nav-open__icon-up');
const navOpenIconDown = document.querySelector('.nav-open__icon-down');

const navigationWrapperInnerContent = document.querySelector(
	'.navigation-wrapper__innerContent'
);

const navigationMobileActions = document.querySelector(
	'.navigation-mobile-actions'
);

const navigationWrapperBottomsection = document.querySelector(
	'.navigation-wrapper__bottomsection'
);

const resetServiceSubmenus = () => {
	serviceSubmenus.forEach(item => {
		item.classList.remove('open');
	});
};

const setBurgerState = isOpen => {
	if (isOpen) {
		header.style.boxShadow = 'none';
		headerWrapperInnerHeader.style.borderBottom = '1px solid #D6DDE7';
		headerWrapperIconUp.style.display = 'block';
		headerWrapperIconDown.style.display = 'block';
	} else {
		header.style.boxShadow = '';
		headerWrapperInnerHeader.style.borderBottom = 'none';
		headerWrapperIconUp.style.display = 'none';
		headerWrapperIconDown.style.display = 'none';
		navOpenIconUp.style.display = 'none';
		navOpenIconDown.style.display = 'none';
	}
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
	if (phoneBtnHeaderControlsWrapper) {
		phoneBtnHeaderControlsWrapper.classList.toggle(
			'is-hidden',
			Boolean(isOpen)
		);
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
	if (callusBtnMobile) callusBtnMobile.style.display = 'none';
	if (langBtnMobilePanel) langBtnMobilePanel.style.display = 'none';
	if (mobileSearchBtn) mobileSearchBtn.style.display = 'none';

	setTimeout(() => {
		searchInput.focus();
	}, 100);
};

const closeSearchBar = () => {
	searchBar.classList.remove('is-active');
	if (navigation) navigation.style.display = '';
	if (searchBtn) searchBtn.style.display = '';
	if (callusContainer) callusContainer.style.display = '';
	if (callusBtnMobile) callusBtnMobile.style.display = '';
	if (langBtnMobilePanel) langBtnMobilePanel.style.display = '';
	if (mobileSearchBtn) mobileSearchBtn.style.display = '';
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

if (mobileSearchBtn) {
	mobileSearchBtn.addEventListener('click', e => {
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
		e.stopPropagation();
		servicesContainer.classList.toggle('open');
		let isOpen = false;
		isOpen = true;
		if (!servicesContainer.classList.contains('open')) {
			isOpen = false;
			resetServiceSubmenus();
		}

		if (isOpen) {
			if (window.matchMedia('(max-width: 720px)').matches) {
				headerWrapperIconUp.style.display = 'none';
				headerWrapperIconDown.style.display = 'none';
				navOpenIconUp.style.display = 'block';
				navOpenIconDown.style.display = 'block';
				navigationWrapperInnerContent.style.marginBottom = '280px';
			}
		} else {
			if (window.matchMedia('(max-width: 720px)').matches) {
				navigationWrapperInnerContent.style.marginBottom = '0px';
				headerWrapperIconUp.style.display = 'block';
				headerWrapperIconDown.style.display = 'block';
				navOpenIconUp.style.display = 'none';
				navOpenIconDown.style.display = 'none';
			}
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

//callus-dropdown__mobile

if (phoneBtnHeaderControls) {
	let isOpen;

	phoneBtnHeaderControls.addEventListener('click', e => {
		e.stopPropagation();
		isOpen = !isOpen;

		if (isOpen) {
			callusDropdownMobile.style.display = 'block';
			navigationMobileActions.style.display = 'none';
			navigationWrapperBottomsection.style.display = 'none';
			headerWrapperInnerHeader.style.borderBottom = 'none';
			setBurgerState(false);
		} else {
			callusDropdownMobile.style.display = 'none';
			navigationMobileActions.style.display = 'flex';
			navigationWrapperBottomsection.style.display = 'flex';
			headerWrapperInnerHeader.style.borderBottom = '1px solid #D6DDE7';
			setBurgerState(true);
		}
	});
}
