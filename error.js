let menu = document.querySelector('.menu-icon');
let navigationmenu = document.querySelector('.menu');

menu.onclick = () => {
    navigationmenu.classList.toggle('active');
    menu.classList.toggle('move');
}


var swiper = new Swiper(".trend-cont", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });