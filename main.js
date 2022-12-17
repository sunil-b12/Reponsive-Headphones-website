// Hamburger Toogle

const toggleBtn = document.querySelector(".toggle-btn")
const primaryNav = document.querySelector(".primary-navigation")


toggleBtn.addEventListener('click', ()=>{
    primaryNav.classList.toggle("open")
    toggleBtn.classList.toggle("toggle")
})


// Slider

const slider = new A11YSlider(document.querySelector(".slider"), {
    slidesToShow: 1,
    arrows: true, // arrows enabled 767px and down
    dots: false,
    responsive: {
        500: {
            slidesToShow: 2,
            arrows: true,
        },
        768: {
            slidesToShow: 3,
            arrows: true,
        },
        960: {
            slidesToShow: 3,
            arrows: true,
        },
        1280: {
            disable: false,
            slidesToShow: 4,
            arrows: true,
        }
        }
  });



/* OwlCarousel */
$(document).ready(function(){
    $('.product-slide').owlCarousel({
        loop:true,
        margin:80,
        nav:false,
        dots: false,
        responsive:{
          0:{
              items:1
          },
          450:{
            items:2
        },
        800:{
            items:3
        },
        1140:{
            items:4
        }
          
      }
  
    })
  });