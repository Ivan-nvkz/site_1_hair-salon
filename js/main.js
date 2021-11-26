// Плавный скролл

$(document).ready(function () {
   $(".menu a , .arrow-top-mobile").on("click", function (e) {
      e.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({ scrollTop: top }, 1500);
   });
});


// Аккордеон
$(function () {
   $('.panel-hedding').click(function () {
      $(this).toggleClass('in').next().slideToggle();
      $('.panel-hedding').not(this).removeClass('in').next().slideUp();
   });
});

// Слайдер
new Swiper('.master-swiper-container', {
   // Стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
   },
   loop: true,
   speed: 1000,

});


// Модальное окно
$(function () {
   $('.form-btn').click(function () {
      $('.modal').addClass('modal__active');
   });

   $('.modal__close-button').click(function () {
      $('.modal').removeClass('modal__active');
   });
});


// Google Карта

// let map;

// function initMap() {
//    map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: 53.892293593912754, lng: 87.12555534757544 },
//       zoom: 17,
//    });
// }

// Меню бургер
$(function () {

   $(".menu__btn, .menu a ").on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');

   });

});


//Очистка формы
$(function () {

   $(".form")[0].reset();

});

