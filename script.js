const label = document.querySelector('label');
const navbar = document.querySelector('#navbar');
label.addEventListener('click', () => {
  label.classList.toggle('toggle');  
  (navbar.style.right === "0px")
    ? navbar.style.right = "-200px"
    : navbar.style.right = "0px";
});

const links = document.querySelectorAll('#navbar a');
links.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.style.right = "-200px";
    label.classList.toggle('toggle'); 
  });
});