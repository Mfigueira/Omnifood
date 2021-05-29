'use strict';

// *** Elements/Selectors
// * Sections
const header = document.querySelector('header');
const nav = header.querySelector('nav');
const navUl = nav.querySelector('ul');
const sectionFeatures = document.querySelector('.section-features');
const sectionHowWorks = document.querySelector('.section-steps');
const sectionCities = document.querySelector('.section-cities');
const sectionPlans = document.querySelector('.section-plans');
// * Animated elements
const animatedSections = document.querySelectorAll('.animated-section');
const animatedTitle = document.querySelector('h1');
const animatedFeatures = document.querySelectorAll('.section-features .box');
const animatedMobile = document.querySelector('.animated-mobile');
const animatedCities = document.querySelectorAll('.section-cities .box');
const animatedPlan = document.querySelector('.animated-plan');
// * Buttons
const btnMobileMenu = document.querySelector('.mobile-menu-btn');

// *** Animations
class Animator {
  static features() {
    animatedFeatures.forEach((el, i) => {
      const anim = el =>
        el.classList.add('animate__animated', 'animate__fadeInUp');
      setTimeout(() => anim(el), i * 150);
    });
  }

  static steps() {
    animatedMobile.classList.add('animate__animated', 'animate__fadeInLeft');
  }

  static cities() {
    animatedCities.forEach((el, i) => {
      const anim = el =>
        el.classList.add('animate__animated', 'animate__fadeIn');
      setTimeout(() => anim(el), i * 200);
    });
  }

  static plans() {
    animatedPlan.classList.add('animate__animated', 'animate__pulse');
  }

  static title() {
    animatedTitle.style.setProperty('--animate-duration', '2.5s');
    animatedTitle.classList.add('animate__animated', 'animate__fadeInDown');
  }
}

// * Animate Title On load
Animator.title();

// *** Intersection Observer API for animations
// * Sticky header
const slideInHeader = (add = true) => {
  nav.classList.add('sticky-transition');
  setTimeout(() => {
    add ? nav.classList.add('sticky') : nav.classList.remove('sticky');
    nav.classList.remove('sticky-transition');
  }, 150);
};

const stickHeader = entries => {
  const [entry] = entries;
  if (Math.abs(entry.boundingClientRect.y) < nav.getBoundingClientRect().height)
    return;
  !entry.isIntersecting ? slideInHeader() : slideInHeader(false);
};

const headerObserver = new IntersectionObserver(stickHeader, {
  root: null,
  threshold: 0,
  rootMargin: `-1px`,
});

headerObserver.observe(header);

// * Animated sections
const animateSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  Animator[entry.target.dataset.animate]();
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(animateSection, {
  root: null,
  threshold: 0.9,
});

animatedSections.forEach(section => sectionObserver.observe(section));

// *** Events listeners
btnMobileMenu.addEventListener('click', () =>
  navUl.classList.toggle('transition-nav-in')
);

header.addEventListener('click', e => {
  e.preventDefault();
  const clicked = e.target.closest('.nav__link');
  if (!clicked) return;
  document
    .querySelector(clicked.getAttribute('href'))
    .scrollIntoView({ behavior: 'smooth' });
});
