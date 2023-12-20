document.addEventListener('DOMContentLoaded', () => {
    // Toggle navbar on menu-bar click
    let navbar = document.querySelector('.navbar');
    document.querySelector('#menu-bar').onclick = () => {
        navbar.classList.toggle('active');
    };

    // Toggle search bar on search click
    let search = document.querySelector('.search');
    document.querySelector('#search').onclick = () => {
        search.classList.toggle('active');
    };

    // Initialize Swiper for exclusive cupcakes
    var swiper = new Swiper(".blogs-row", {
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        },
    });
});
