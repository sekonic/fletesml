const iconMenu = document.querySelector('label#icon-menu');
const navbar = document.querySelector('#navbar');
iconMenu.addEventListener('click', () => {
  links.forEach((l) => l.classList.remove('selected'));
  iconMenu.classList.toggle('toggle');  
  (navbar.style.right === "0px")
    ? navbar.style.right = "-200px"
    : navbar.style.right = "0px";
});

const links = document.querySelectorAll('#navbar a');
links.forEach((link) => {    
  link.addEventListener('click', () => {
    let compStyles = window.getComputedStyle(navbar);
    let flowDirection = compStyles.getPropertyValue('flex-direction');
    if (flowDirection === 'column') {
      navbar.style.right = "-200px";
      iconMenu.classList.toggle('toggle');
    } else {
      links.forEach((l) => l.classList.remove('selected'));
      link.classList.add('selected');      
    }   
  });
});