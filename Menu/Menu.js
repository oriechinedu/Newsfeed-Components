

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  if(menu.classList.contains('menu--open')) {
    TweenMax.to('.menu', .3, {width: '0px', display: 'none', opacity: 1});
    TweenMax.to('.menu ul li', .05, { opacity: 0});
    TweenMax.to('.articles', 1, { 'marginLeft': '0px'});
  } else {
    TweenMax.to('.menu', .2, {width: '350px', display: 'block',opacity: 1});
    TweenMax.to('.menu ul li', .05, { opacity: 1});
    TweenMax.to('.articles', 1, { 'marginLeft': '350px'});
  }
  menu.classList.toggle('menu--open')
 
}
document.querySelector('.articles').addEventListener('click', () => {
  if(menu.classList.contains('menu--open')) {
    toggleMenu()
  }
  
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

