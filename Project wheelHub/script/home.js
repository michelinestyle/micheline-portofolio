function myFunction() {
    const menu = document.getElementById("navbarmenu");
    if (menu.className === "navbar") {
      menu.className += "responsive";
  
    } else {
      menu.className = "navbar";
  
    }
  }
  
  function ArrowFunction(){
  document.getElementById("submenuid").classList.toggle("show");
  }
  
  window.onclick = function (e) {
  if(!e.target.matches('.arrowdown')) {
    var dropdown = document.getElementById("submenuid");
  
  if(dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
    }
  }
  }

$(document).ready(function(){
    var productSlideIndex = 0;

    function showProductSlide(index) {
        var slides = $('#product-slider .slide');
        if (index >= slides.length) {
            productSlideIndex = 0;
        } else if (index < 0) {
            productSlideIndex = slides.length - 1;
        }
        var newTransform = 'translateX(' + (-productSlideIndex * 100) + '%)';
        $('#product-slider').css('transform', newTransform);
    }

    $('#right-product').click(function() {
        productSlideIndex++;
        showProductSlide(productSlideIndex);
    });

    $('#left-product').click(function() {
        productSlideIndex--;
        showProductSlide(productSlideIndex);
    });

    showProductSlide(productSlideIndex);
});

$(document).ready(function(){
    var serviceSlideIndex = 0;

    function showServiceSlide(index) {
        var slides = $('#service-slider .slide-service');
        if (index >= slides.length) {
            serviceSlideIndex = 0;
        } else if (index < 0) {
            serviceSlideIndex = slides.length - 1;
        }
        var newTransform = 'translateX(' + (-serviceSlideIndex * 100) + '%)';
        $('#service-slider').css('transform', newTransform);
    }

    $('#right-service').click(function() {
        serviceSlideIndex++;
        showServiceSlide(serviceSlideIndex);
    });

    $('#left-service').click(function() {
        serviceSlideIndex--;
        showServiceSlide(serviceSlideIndex);
    });

    showServiceSlide(serviceSlideIndex);
});