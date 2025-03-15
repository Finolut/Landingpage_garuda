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