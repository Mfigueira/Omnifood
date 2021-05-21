'use strict';

// *** Selectors
// * Buttons/Links
const mainBtn = document.querySelector('.hero-text-box .btn-full');
const secondaryBtn = document.querySelector('.hero-text-box .btn-ghost');
const linkToFood = document.querySelector('.link-to-food');
const linkToHowWorks = document.querySelector('.link-to-how-works');
const linkToCities = document.querySelector('.link-to-cities');
const linkToSignUp = document.querySelector('.link-to-sign-up');
const backToTopBtn = document.querySelector('.logo-sticky');
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
// * Sticky navigation
const navigation = document.querySelector('nav');
const stickyPoint = sectionFeatures.offsetTop;

// *** Scroll Event
window.onscroll = () => {
  // Sticky navigation logic
  if (window.pageYOffset >= stickyPoint) {
    navigation.classList.add('sticky-transition');
    setTimeout(() => {
      navigation.classList.add('sticky');
      navigation.classList.remove('sticky-transition');
    }, 150);

    // Animate Features
    animatedFeatures.forEach((el, i) => {
      const anim = el =>
        el.classList.add('animate__animated', 'animate__fadeInUp');
      setTimeout(() => anim(el), i * 150);
    });
  } else {
    navigation.classList.remove('sticky');
  }

  // Animate How it Works
  if (window.pageYOffset >= sectionHowWorks.offsetTop - 50)
    animatedMobile.classList.add('animate__animated', 'animate__fadeInLeft');

  // Animate Cities
  if (window.pageYOffset >= sectionCities.offsetTop - 50) {
    animatedCities.forEach((el, i) => {
      const anim = el =>
        el.classList.add('animate__animated', 'animate__fadeIn');
      setTimeout(() => anim(el), i * 200);
    });
  }

  // Animate Plan
  if (window.pageYOffset >= sectionPlans.offsetTop - 50)
    animatedPlan.classList.add('animate__animated', 'animate__pulse');
};

// Animate Title On load
animatedTitle.style.setProperty('--animate-duration', '2.5s');
animatedTitle.classList.add('animate__animated', 'animate__fadeInDown');

// *** Scroll to Sections Events
const scrollToSection = (e, section) => {
  e.preventDefault();
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

mainBtn.addEventListener('click', e => scrollToSection(e, sectionPlans));

secondaryBtn.addEventListener('click', e =>
  scrollToSection(e, sectionFeatures)
);

linkToFood.addEventListener('click', e => scrollToSection(e, sectionFeatures));

linkToHowWorks.addEventListener('click', e =>
  scrollToSection(e, sectionHowWorks)
);

linkToCities.addEventListener('click', e => scrollToSection(e, sectionCities));

linkToSignUp.addEventListener('click', e => scrollToSection(e, sectionPlans));

backToTopBtn.addEventListener('click', e => scrollToSection(e, header));
