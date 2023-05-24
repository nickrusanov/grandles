if (
	document.querySelector('.products__filters') &&
	document.querySelector('.nav-desktop')
) {
	const productsFilters = document.querySelector('.products__filters');
	const productsSticky = document.querySelector('.products__sticky');
	const nav = document.querySelector('.nav-desktop');

	let scrollPosition;
	let productsStickyTop = 0;

	window.addEventListener('scroll', () => {
		const productsFiltersTop = productsFilters.offsetTop;
		const productsFiltersHeight = productsFilters.offsetHeight;
		const productsStickyHeight = productsSticky.offsetHeight;
		const viewportHeight = window.innerHeight;
		const navHeight = nav.offsetHeight;

		const scrollPositionOld = scrollPosition;
		scrollPosition = window.scrollY;

		const isProductsStickyFixed = productsSticky.classList.contains(
			'products__sticky--fx'
		);
		const isProductsStickyAbsolute = productsSticky.classList.contains(
			'products__sticky--abs-btm'
		);

		if (
			scrollPosition + (isProductsStickyFixed ? navHeight + 20 : 0) <
			productsFiltersTop
		) {
			productsSticky.className = 'products__sticky';

			return;
		}

		if (
			scrollPosition - (isProductsStickyFixed ? 20 : 0) + viewportHeight >
			productsFiltersTop + productsFiltersHeight
		) {
			productsSticky.className = 'products__sticky products__sticky--abs-btm';

			return;
		}

		if (isProductsStickyFixed) {
			const isBottomFixed = productsSticky.classList.contains(
				'products__sticky--btm'
			);

			const isScrollUp = scrollPositionOld > scrollPosition;

			if ((isBottomFixed && isScrollUp) || (!isBottomFixed && !isScrollUp)) {
				productsStickyTop = isBottomFixed
					? scrollPosition +
					  viewportHeight -
					  productsStickyHeight -
					  productsFiltersTop
					: scrollPosition - productsFiltersTop;

				productsSticky.className = 'products__sticky products__sticky--rl';
				productsSticky.style.top = productsStickyTop + 'px';
			}

			return;
		}

		if (
			scrollPosition < productsStickyTop + productsFiltersTop ||
			(isProductsStickyAbsolute &&
				scrollPosition <
					productsFiltersTop + productsFiltersHeight - productsStickyHeight)
		) {
			productsSticky.className =
				'products__sticky products__sticky--fx products__sticky--tp';

			productsStickyTop = 0;
			productsSticky.style.setProperty('--shift', navHeight + 20 + 'px');
			productsSticky.style.top = '';

			return;
		}

		if (
			scrollPosition + viewportHeight >
				productsFiltersTop + productsStickyHeight + productsStickyTop &&
			!isProductsStickyAbsolute
		) {
			productsSticky.className =
				'products__sticky products__sticky--fx products__sticky--btm';

			productsStickyTop = 0;
			productsSticky.style.top = '';
		}
	});
}
