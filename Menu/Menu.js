
const toggleMenu = (e) => {
  // Toggle the "menu--open" class on your menu refence. 
  e.stopPropagation()
  menu.classList.toggle('menu--open')
  TweenMax.from(menu, 0.2, {x:-200, delay: 0.05 });
  
}
document.body.addEventListener('click', () => {
  menu.classList.remove('menu--open')
  TweenMax.from(menu, 1, {x:200, delay: 0.05 });
})

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton  = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu


menuButton.addEventListener('click', toggleMenu)

const headerH1 = document.querySelector('.header h1')

headerH1.addEventListener('mouseenter', () => {
  headerH1.classList.add('animate');
  setTimeout(() => {
    headerH1.classList.remove('animate');
  }, 5000)
})

