'use strict';

// *** Elements/Selectors
// * Buttons/Links
const btnMain = document.querySelector('.hero-text-box .btn-full');
const btnSecondary = document.querySelector('.hero-text-box .btn-ghost');
const btnBackToTop = document.querySelector('.logo-sticky');
const btnMobileNav = document.querySelector('.mobile-nav-btn');
const linkToFood = document.querySelector('.link-to-food');
const linkToHowWorks = document.querySelector('.link-to-how-works');
const linkToCities = document.querySelector('.link-to-cities');
const linkToSignUp = document.querySelector('.link-to-sign-up');
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
const stickyPoint = sectionFeatures.offsetTop;

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

const scrollToSection = (e, section) => {
  e.preventDefault();
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

// *** Events
window.onscroll = () => {
  window.pageYOffset >= stickyPoint ? stickHeader() : unStickHeader();
  window.pageYOffset >= sectionFeatures.offsetTop && animateFeatures();
  window.pageYOffset >= sectionHowWorks.offsetTop - 50 && animateHowWorks();
  window.pageYOffset >= sectionCities.offsetTop - 50 && animateCities();
  window.pageYOffset >= sectionPlans.offsetTop - 50 && animatePlan();
};

btnMain.addEventListener('click', e => scrollToSection(e, sectionPlans));

btnSecondary.addEventListener('click', e =>
  scrollToSection(e, sectionFeatures)
);

btnBackToTop.addEventListener('click', e => scrollToSection(e, header));

btnMobileNav.addEventListener('click', () =>
  navUl.classList.toggle('transition-nav-in')
);

linkToFood.addEventListener('click', e => scrollToSection(e, sectionFeatures));

linkToHowWorks.addEventListener('click', e =>
  scrollToSection(e, sectionHowWorks)
);

linkToCities.addEventListener('click', e => scrollToSection(e, sectionCities));

linkToSignUp.addEventListener('click', e => scrollToSection(e, sectionPlans));
