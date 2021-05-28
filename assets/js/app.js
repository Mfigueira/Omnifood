'use strict';

// *** Elements/Selectors
// * Buttons
const btnBackToTop = document.querySelector('.logo-sticky');
const btnMobileNav = document.querySelector('.mobile-nav-btn');
// * Sections
const header = document.querySelector('header');
const sectionFeatures = document.querySelector('.section-features');
const sectionHowWorks = document.querySelector('.section-steps');
const sectionCities = document.querySelector('.section-cities');
const sectionPlans = document.querySelector('.section-plans');
// * Animated elements
const animatedTitle = document.querySelector('h1');
const animatedFeatures = document.querySelectorAll('.section-features .box');
const animatedMobile = document.querySelector('.animated-mobile');
const animatedCities = document.querySelectorAll('.section-cities .box');
const animatedPlan = document.querySelector('.animated-plan');
// * Mobile nav
const navUl = document.querySelector('nav ul');
// * Sticky navigation
const navigation = document.querySelector('nav');

// *** Animations
const stickHeader = () => {
  navigation.classList.add('sticky-transition');
  setTimeout(() => {
    navigation.classList.add('sticky');
    navigation.classList.remove('sticky-transition');
  }, 150);
};

const unStickHeader = () => navigation.classList.remove('sticky');

const animateFeatures = () =>
  animatedFeatures.forEach((el, i) => {
    const anim = el =>
      el.classList.add('animate__animated', 'animate__fadeInUp');
    setTimeout(() => anim(el), i * 150);
  });

const animateHowWorks = () =>
  animatedMobile.classList.add('animate__animated', 'animate__fadeInLeft');

const animateCities = () =>
  animatedCities.forEach((el, i) => {
    const anim = el => el.classList.add('animate__animated', 'animate__fadeIn');
    setTimeout(() => anim(el), i * 200);
  });

const animatePlan = () =>
  animatedPlan.classList.add('animate__animated', 'animate__pulse');

const animateTitle = () => {
  animatedTitle.style.setProperty('--animate-duration', '2.5s');
  animatedTitle.classList.add('animate__animated', 'animate__fadeInDown');
};

const scrollToSection = (e, section) => {
  e.preventDefault();
  section.scrollIntoView({ behavior: 'smooth' });
};

// Animate Title On load
animateTitle();

// *** Events
window.onscroll = () => {
  window.pageYOffset >= sectionFeatures.offsetTop
    ? stickHeader() || animateFeatures()
    : unStickHeader();
  window.pageYOffset >= sectionHowWorks.offsetTop - 50 && animateHowWorks();
  window.pageYOffset >= sectionCities.offsetTop - 50 && animateCities();
  window.pageYOffset >= sectionPlans.offsetTop - 50 && animatePlan();
};

btnMobileNav.addEventListener('click', () =>
  navUl.classList.toggle('transition-nav-in')
);

btnBackToTop.addEventListener('click', e => scrollToSection(e, header));

header.addEventListener(
  'click',
  e =>
    e.target.classList.contains('nav__link') &&
    scrollToSection(e, document.querySelector(e.target.getAttribute('href')))
);
