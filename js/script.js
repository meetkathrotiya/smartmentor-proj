$(".hamburger").on('click', function() {
    $(".main_menu").toggleClass("mobile_menu");
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 45,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1399: {
            slidesPerView: 3,
            spaceBetween: 45,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});