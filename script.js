'use strict'; // Best practice: enable strict mode

document.addEventListener('DOMContentLoaded', function() {

    // --- Navigation for Mobile ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinksForJs = document.querySelectorAll('.nav-links li a'); // Renamed variable to avoid conflict

    if (burger && nav) {
        burger.addEventListener('click', () => {
            const isOpened = nav.classList.toggle('nav-active');
            burger.setAttribute('aria-expanded', isOpened.toString()); // Ensure string value for attribute
            burger.classList.toggle('toggle');

            // Animate Links
            document.querySelectorAll('.nav-links li').forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Focus management for accessibility
            if (isOpened && navLinksForJs.length > 0) {
                navLinksForJs[0].focus(); // Focus the first link when menu opens
            } else {
                burger.focus(); // Return focus to burger when menu closes
            }
        });
    }

    // Close mobile nav when a link is clicked
    navLinksForJs.forEach(link => {
        link.addEventListener('click', () => {
            if (nav && nav.classList.contains('nav-active')) { // Added null check for nav
                nav.classList.remove('nav-active');
                if (burger) { // Added null check for burger
                    burger.classList.remove('toggle');
                    burger.setAttribute('aria-expanded', 'false');
                    burger.focus(); // Return focus to burger
                }
                document.querySelectorAll('.nav-links li').forEach(lnk => lnk.style.animation = ''); // Reset animation
            }
        });
    });

    // Keyboard accessibility for mobile menu (Escape key to close)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav && nav.classList.contains('nav-active')) { // Added null check
            nav.classList.remove('nav-active');
            if (burger) { // Added null check
                burger.classList.remove('toggle');
                burger.setAttribute('aria-expanded', 'false');
                burger.focus();
            }
            document.querySelectorAll('.nav-links li').forEach(lnk => lnk.style.animation = '');
        }
    });


    // --- Smooth Scrolling for Navigation Links (desktop and mobile) ---
    const allSmoothScrollLinks = document.querySelectorAll('header .nav-links a'); // Corrected variable name
    allSmoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                const headerEl = document.querySelector('header'); // Get header element
                const headerOffset = headerEl ? headerEl.offsetHeight : 70; // Dynamic header height or fallback

                if (targetSection) {
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Set current year in footer ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Email De-obfuscation ---
    const emailLinks = document.querySelectorAll('.email-link');
    emailLinks.forEach(link => {
        try {
            const userEncoded = link.dataset.user;
            const domainEncoded = link.dataset.domain;

            if (!userEncoded || !domainEncoded) {
                console.warn('Email link is missing data attributes:', link);
                return;
            }

            const user = atob(userEncoded);
            const domain = atob(domainEncoded);
            const emailAddress = `${user}@${domain}`;

            link.href = `mailto:${emailAddress}`;
        } catch (e) {
            console.error('Error decoding email for link:', link, e);
            link.textContent = 'Email (error)';
            link.href = '#';
            link.style.pointerEvents = 'none';
        }
    });


    // --- Intersection Observer for Animations ---
    const sections = document.querySelectorAll('.section-padding');
    const sectionObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, sectionObserverOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)';
        sectionObserver.observe(section);
    });

});