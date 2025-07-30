document.addEventListener('DOMContentLoaded', () => {

  /* ====== Mobile-nav toggle ====== */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.querySelector('#main-nav ul');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navToggle.classList.toggle('open');
    navToggle.innerHTML = navMenu.classList.contains('show')
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  /* ====== Video filters ====== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const videoItems = document.querySelectorAll('.video-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // activate clicked button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      videoItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
          setTimeout(()=>item.classList.remove('hide'),10);
        } else {
          item.classList.add('hide');
          setTimeout(()=>item.style.display='none',300);
        }
      });
    });
  });

});
