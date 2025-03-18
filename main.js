document.getElementById('scrollLeft').addEventListener('click', function() {
    document.getElementById('scrollContainer').scrollBy({
      left: -320, // Sesuaikan dengan lebar kotak
      behavior: 'smooth'
    });
  });
  
  document.getElementById('scrollRight').addEventListener('click', function() {
    document.getElementById('scrollContainer').scrollBy({
      left: 320, // Sesuaikan dengan lebar kotak
      behavior: 'smooth'
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Tambahkan class 'visible' saat elemen masuk viewport
            }
        });
    }, {
        threshold: 0.1 // Sesuaikan threshold sesuai kebutuhan
    });

    elements.forEach(element => {
        observer.observe(element); // Observasi setiap elemen dengan class 'fade-in'
    });
});