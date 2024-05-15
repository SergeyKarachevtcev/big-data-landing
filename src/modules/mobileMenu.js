'use strict';

function mobileMenu() {
  const mobileBtn = document.querySelector('.mobile-btn_open');
  const mobileBtnClose = document.querySelector('.btn_close');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu_closed');
    mobileMenu.classList.add('mobile-menu_active');
    document.body.style.overflow = 'hidden';
  });
  mobileBtnClose.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu_closed');
    mobileMenu.classList.remove('mobile-menu_active');
    document.body.style.overflow = 'auto';
  });
}

export default mobileMenu;
