'use strict';

// *** Elements/Selectors
// * Sections
const header = document.querySelector('header');
const navigation = header.querySelector('nav');
const navUl = navigation.querySelector('ul');
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
// * Buttons
const btnMobileMenu = document.querySelector('.mobile-menu-btn');

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
