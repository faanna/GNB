let lis = document.querySelectorAll('#gnb>li');

lis.forEach((el, index) => {
	el.addEventListener('mouseenter', () => {
		let sub = el.querySelector('.sub');
		sub.style.display = 'block';
		el.querySelector('a').classList.add('on');
	});
	el.addEventListener('mouseleave', () => {
		let sub = el.querySelector('.sub');
		sub.style.display = 'none';
		el.querySelector('a').classList.remove('on');
	});
});

window.addEventListener('scroll', () => {
	let scroll = window.scrollY;
	let header = document.querySelector('#header');

	if (scroll > 0) {
		header.classList.add('on');
	} else if (scroll == 0) {
		header.classList.remove('on');
	}
});
