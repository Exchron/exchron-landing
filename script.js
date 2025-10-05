// FAQ Functionality
document.addEventListener('DOMContentLoaded', function () {
	const faqItems = document.querySelectorAll('.faq-item');

	faqItems.forEach((item, index) => {
		const question = item.querySelector('.faq-question');

		question.addEventListener('click', function () {
			const isOpen = item.classList.contains('open');

			// Close all other FAQ items
			faqItems.forEach((faqItem) => {
				faqItem.classList.remove('open');
			});

			// Toggle current item
			if (!isOpen) {
				item.classList.add('open');
			}
		});
	});
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
	const navLinks = document.querySelectorAll('a[href^="#"]');

	navLinks.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();

			const targetId = this.getAttribute('href');
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		});
	});
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function () {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px',
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate-fade-in-up');
			}
		});
	}, observerOptions);

	// Observe elements that should animate on scroll
	const animateElements = document.querySelectorAll(
		'.feature-card, .key-feature-card, .step, .tech-spec, .faq-item',
	);
	animateElements.forEach((el) => {
		observer.observe(el);
	});
});

// Header scroll effect
window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');
	if (window.scrollY > 50) {
		header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
		header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
	} else {
		header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
		header.style.boxShadow = 'none';
	}
});

// Button click effects
document.addEventListener('DOMContentLoaded', function () {
	const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');

	buttons.forEach((button) => {
		button.addEventListener('click', function (e) {
			// Create ripple effect
			const ripple = document.createElement('span');
			const rect = this.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = e.clientX - rect.left - size / 2;
			const y = e.clientY - rect.top - size / 2;

			ripple.style.width = ripple.style.height = size + 'px';
			ripple.style.left = x + 'px';
			ripple.style.top = y + 'px';
			ripple.style.position = 'absolute';
			ripple.style.borderRadius = '50%';
			ripple.style.background = 'rgba(255, 255, 255, 0.3)';
			ripple.style.pointerEvents = 'none';
			ripple.style.animation = 'ripple 0.6s ease-out';

			this.style.position = 'relative';
			this.style.overflow = 'hidden';
			this.appendChild(ripple);

			setTimeout(() => {
				ripple.remove();
			}, 600);
		});
	});
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
	const nav = document.querySelector('.nav');
	nav.classList.toggle('mobile-open');
}

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function () {
	const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
	const nav = document.querySelector('.nav');
	const navOverlay = document.querySelector('.nav-overlay');
	const navLinks = document.querySelectorAll('.nav-link, .nav-cta');

	if (mobileMenuToggle) {
		mobileMenuToggle.addEventListener('click', function () {
			const isOpen = nav.classList.contains('mobile-open');

			if (isOpen) {
				closeMobileMenu();
			} else {
				openMobileMenu();
			}
		});
	}

	// Close menu when clicking on overlay
	if (navOverlay) {
		navOverlay.addEventListener('click', closeMobileMenu);
	}

	// Close menu when clicking on nav links
	navLinks.forEach((link) => {
		link.addEventListener('click', closeMobileMenu);
	});

	// Close menu on escape key
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			closeMobileMenu();
		}
	});

	function openMobileMenu() {
		nav.classList.add('mobile-open');
		mobileMenuToggle.classList.add('active');
		navOverlay.classList.add('active');
		document.body.style.overflow = 'hidden';
	}

	function closeMobileMenu() {
		nav.classList.remove('mobile-open');
		mobileMenuToggle.classList.remove('active');
		navOverlay.classList.remove('active');
		document.body.style.overflow = '';
	}

	// Close menu on window resize if it gets too large
	window.addEventListener('resize', function () {
		if (window.innerWidth > 768) {
			closeMobileMenu();
		}
	});
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function () {
	const images = document.querySelectorAll('img');

	const imageObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const img = entry.target;
				img.style.opacity = '0';
				img.style.transition = 'opacity 0.3s ease';

				img.addEventListener('load', () => {
					img.style.opacity = '1';
				});

				observer.unobserve(img);
			}
		});
	});

	images.forEach((img) => {
		imageObserver.observe(img);
	});
});

// Form submission handlers (for future contact forms)
function handleContactForm(event) {
	event.preventDefault();

	// Add your form submission logic here
	console.log('Contact form submitted');

	// Show success message
	const successMessage = document.createElement('div');
	successMessage.textContent =
		"Thank you for your message! We'll get back to you soon.";
	successMessage.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;

	document.body.appendChild(successMessage);

	setTimeout(() => {
		successMessage.remove();
	}, 5000);
}

// Add slide-in animation for notifications
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(notificationStyle);
