function toggleContent(section) {
    var content = document.getElementById('content' + section);
    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
  }

  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 12000); // Zmiana co 12 sekundy
  }
  
  function currentSlide(n) {
      slideIndex = n;
      showSlides();
  }