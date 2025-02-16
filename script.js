document.querySelectorAll('.nav__links .link a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Add animation to the search box
  const searchBox = document.querySelector('.search__box');
  searchBox.addEventListener('mouseenter', () => {
    searchBox.style.borderBottomColor = '#fead53';
  });
  searchBox.addEventListener('mouseleave', () => {
    searchBox.style.borderBottomColor = '#fff';
  });