window.onload = function () {

    //Initialize Swiper 


    var swiperHero = new Swiper('.swiper-container.hero', {
        slidesPerView: 1,
        autoplay: {
            delay: 3000
        },
        slidesPerColumn: 1,
        loop: true, // it doesn't work with multiple rows 
        pagination: {
            el: '.hero .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hero .swiper-button-next',
            prevEl: '.hero .swiper-button-prev',
        }

    });


    var swiper1 = new Swiper('.swiper-container.i1', {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerColumn: 2,
        loop: false, // it doesn't work with multiple rows 
        pagination: {
            el: '.i1 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.i1 .swiper-button-next',
            prevEl: '.i1 .swiper-button-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            600: {
                slidesPerView: 4,
                slidesPerColumn: 1,
                loop: true
            }
        }
    });

    var swiper2 = new Swiper('.swiper-container.i2', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        //slidesPerColumn: 2,
        loop: true, // it doesn't work with multiple rows 
        pagination: {
            el: '.i2 .swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.i2 .swiper-button-next',
            prevEl: '.i2 .swiper-button-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            600: {
                slidesPerView: 3.5,
                slidesPerColumn: 1,
                loop: false,
                pagination: {
                    dynamicBullets: true
                },
            }
        }
    });

}