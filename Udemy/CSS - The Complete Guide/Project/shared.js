const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');

// console.dir(backdrop);
// console.dir(backdrop.style);

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    // modal.className = 'open';
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

const closeModal = () => {
  // modal.style.display = 'none';
  // backdrop.style.display = 'none';
  if (modal) {
    modal.classList.remove('open');
  };
  backdrop.classList.remove('open');
}

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', () => {
  closeModal();
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
})

toggleButton.addEventListener('click', () => {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  // mobileNav.style.display = "block";
  backdrop.classList.add('open');
})

ctaButton.addEventListener('animationstart', (event) => {
  console.log('Animation started', event);
})

ctaButton.addEventListener('animationend', (event) => {
  console.log('Animation ended', event);
})

ctaButton.addEventListener('animationiteration', (event) => {
  console.log('Animation iteration', event);
})