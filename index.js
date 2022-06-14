const toggleMenu = document.querySelector('.menu');
const closeBtn = document.querySelector('#close-btn');
const menuItems = document.querySelectorAll('.menu-item');
function openNav() {
  document.querySelector('.mobile-menu').classList.add('active');
  toggleMenu.classList.add('invisible');
  document.querySelector('.menu-item').classList.add('open-menu');
}

toggleMenu.addEventListener('click', openNav);

function closeNav() {
  document.querySelector('.mobile-menu').classList.remove('active');
  toggleMenu.classList.remove('invisible');
  document.body.style.overflow = 'auto';
  document.querySelector('.menu-item').classList.remove('open-menu');
}

closeBtn.addEventListener('click', closeNav);

menuItems.forEach((item) => {
  item.addEventListener('click', closeNav);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});