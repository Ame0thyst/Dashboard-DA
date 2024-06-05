
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // Jika href tidak dimulai dengan '#', biarkan default action terjadi
        });
    });
});
//untuk burger menu
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('#menu');

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
    });

    // Optional: menu otomatis tertutup setelah di klik
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.classList.remove('active');
      });
    });
  });
  
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button-home');
  button.addEventListener('click', () => {
      window.location.href = 'ht.html';  // Ganti dengan tautan yang diinginkan
  });
});
  
