'use strict';

const modalform = document.querySelector('.modal');
const closemodal = document.querySelector('.closeBtn');
const overlay = document.querySelector('.overlay');
const openAccount = document.querySelector('.openBtn');
const header = document.querySelector('.header');
const learnMore = document.querySelector('.learnMore-btn');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');
const navFeature = document.querySelector('.nav-feature');
const navOperations = document.querySelector('.nav-operations');

const openBTN = function () {
  modalform.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeBTN = function () {
  modalform.classList.add('hidden');
  overlay.classList.add('hidden');
};

openAccount.addEventListener('click', openBTN);

closemodal.addEventListener('click', closeBTN);

overlay.addEventListener('click', closeBTN);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalform.classList.contains('hidden')) {
    closeBTN();
  }
});

const message = document.createElement('div');
message.classList.add('cookies');

message.innerHTML =
  'we are here to improve our communication <button class = "btn">Got it</button>';

header.prepend(message);

document.querySelector('.btn').addEventListener('click', function () {
  message.remove();
});

learnMore.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  //   window.learnMore(
  //     s1coords.left + window.pageXOffset,
  //     s1coords.top + window.pageYOffset
  //   );
  section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav--links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('.nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
