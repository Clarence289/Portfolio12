window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 250);
});

function toggleMenu(){
  const nav = document.querySelector('.nav');
  const social_list =  document.querySelector('.social-list');
  const header = document.querySelector('.header');

  header.classList.toggle('bg-color')
  nav.classList.toggle('active');
  social_list.classList.toggle('active');
}
