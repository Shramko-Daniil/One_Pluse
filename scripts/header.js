document.addEventListener('DOMContentLoaded', () => {
	const body = document.body;
	const header = document.getElementById('header');
	const backdrop = document.getElementById('backdrop');

	// Helper function to toggle body scroll
	const toggleBodyScroll = isLocked => {
		body.style.overflow = isLocked ? 'hidden' : '';
	};

	// Helper function to show/hide backdrop
	const toggleBackdrop = isVisible => {
		backdrop.classList.toggle('is-visible', isVisible);
	};

	// --- Desktop: Phone Dropdown ---
	const phoneToggleDesktop = document.getElementById('phone-toggle-desktop');
	const phoneListDesktop = document.getElementById('phone-list-desktop');

	if (phoneToggleDesktop) {
		phoneToggleDesktop.addEventListener('click', () => {
			phoneListDesktop.classList.toggle('is-open');
		});

		// Close dropdown if clicking outside
		document.addEventListener('click', e => {
			if (
				!phoneToggleDesktop.contains(e.target) &&
				!phoneListDesktop.contains(e.target)
			) {
				phoneListDesktop.classList.remove('is-open');
			}
		});
	}

	// --- Desktop: Search Bar ---
	const searchToggleBtn = document.getElementById('search-toggle-btn');
	const searchCloseBtn = document.getElementById('search-close-btn');

	if (searchToggleBtn && searchCloseBtn && header) {
		searchToggleBtn.addEventListener('click', () => {
			header.classList.add('search-is-open');
			// Focus the input field
			header.querySelector('.header__search-bar input').focus();
		});

		searchCloseBtn.addEventListener('click', () => {
			header.classList.remove('search-is-open');
		});
	}

	// --- Mobile: Main Menu ---
	const menuToggleBtn = document.getElementById('menu-toggle-btn');
	const mobileMenu = document.getElementById('mobile-menu');

	if (menuToggleBtn && mobileMenu) {
		menuToggleBtn.addEventListener('click', () => {
			mobileMenu.classList.add('is-open');
			toggleBackdrop(true);
			toggleBodyScroll(true);
		});

		// Find all close buttons inside the menu
		mobileMenu.querySelectorAll('[data-action="close-menu"]').forEach(btn => {
			btn.addEventListener('click', () => {
				mobileMenu.classList.remove('is-open');
				toggleBackdrop(false);
				toggleBodyScroll(false);
				// Reset panels to main
				resetMenuPanels();
			});
		});
	}

	// --- Mobile Menu: Panel Navigation ---
	const navPanelTriggers = mobileMenu.querySelectorAll('.nav-panel-trigger');
	const navPanelBacks = mobileMenu.querySelectorAll('.nav-panel-back');

	navPanelTriggers.forEach(trigger => {
		trigger.addEventListener('click', e => {
			e.preventDefault();
			const targetPanelId = trigger.dataset.target;
			const targetPanel = mobileMenu.querySelector(
				`[data-panel="${targetPanelId}"]`
			);
			if (targetPanel) {
				targetPanel.classList.add('is-active');
			}
		});
	});

	navPanelBacks.forEach(backBtn => {
		backBtn.addEventListener('click', () => {
			const currentPanel = backBtn.closest('.mobile-menu__panel');
			if (currentPanel) {
				currentPanel.classList.remove('is-active');
			}
		});
	});

	// Function to reset all panels to the main one
	const resetMenuPanels = () => {
		mobileMenu.querySelectorAll('.mobile-menu__panel').forEach(panel => {
			if (panel.dataset.panel === 'panel-main') {
				panel.classList.add('is-active');
			} else {
				panel.classList.remove('is-active');
			}
		});
	};

	// --- Mobile: Phone Panel ---
	const phoneToggleMobile = document.getElementById('phone-toggle-mobile');
	const phoneCloseBtn = document.getElementById('phone-close-btn');
	const mobilePhonePanel = document.getElementById('mobile-phone-panel');

	if (phoneToggleMobile && mobilePhonePanel && phoneCloseBtn) {
		phoneToggleMobile.addEventListener('click', () => {
			mobilePhonePanel.classList.add('is-open');
			toggleBackdrop(true);
			toggleBodyScroll(true);
		});

		phoneCloseBtn.addEventListener('click', () => {
			mobilePhonePanel.classList.remove('is-open');
			toggleBackdrop(false);
			toggleBodyScroll(false);
		});
	}

	// --- General: Close panels with backdrop click ---
	backdrop.addEventListener('click', () => {
		if (mobileMenu.classList.contains('is-open')) {
			mobileMenu.classList.remove('is-open');
			resetMenuPanels();
		}
		if (mobilePhonePanel.classList.contains('is-open')) {
			mobilePhonePanel.classList.remove('is-open');
		}
		toggleBackdrop(false);
		toggleBodyScroll(false);
	});
});
