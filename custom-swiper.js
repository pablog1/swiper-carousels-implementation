window.onload = function () {
  //Initialize Swiper

  var swiperHero = new Swiper(".swiper-container.hero", {
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
    },
    slidesPerColumn: 1,
    loop: true, // it doesn't work with multiple rows
    pagination: {
      el: ".hero .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".hero .swiper-button-next",
      prevEl: ".hero .swiper-button-prev",
    },
  });

  var swiper1 = new Swiper(".swiper-container.i1", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerColumn: 2,
    loop: false, // it doesn't work with multiple rows
    pagination: {
      el: ".i1 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".i1 .swiper-button-next",
      prevEl: ".i1 .swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      600: {
        slidesPerView: 4,
        slidesPerColumn: 1,
        loop: true,
      },
    },
  });

  var swiper2 = new Swiper(".swiper-container.i2", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    //slidesPerColumn: 2,
    loop: true, // it doesn't work with multiple rows
    pagination: {
      el: ".i2 .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".i2 .swiper-button-next",
      prevEl: ".i2 .swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      600: {
        slidesPerView: 3.5,
        slidesPerColumn: 1,
        loop: false,
        pagination: {
          dynamicBullets: true,
        },
      },
    },
  });

  var swiper3 = new Swiper(".swiper-container.i3", {
    slidesPerView: 3,
    spaceBetween: 20,
    //slidesPerColumn: 2,
    loop: false, // it doesn't work with multiple rows
    pagination: {
      el: ".i3 .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: false,
    navigation: {
      nextEl: ".i3 .swiper-button-next",
      prevEl: ".i3 .swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      600: {
        slidesPerView: 5.2,
        slidesPerColumn: 1,
        pagination: false,
      },
    },
  });

  //resize
  const info = document.querySelector("#info");
  const fixWidth = 1500 + 15;
  let diff, newMargin;
  calcLeftMargin();
  reportWindowSize();

  window.addEventListener("resize", ()=>{
    reportWindowSize();
    calcLeftMargin();
  });

  function reportWindowSize() {
    info.innerHTML = `
    That is a 1500px Fix Div<br>
    height = ` + window.innerHeight + `<br>
    width = `+ window.innerWidth + `<br>
    FixWidth = `+ fixWidth + `<br>
    newleftMargin = (width - fixWidth ) / 2 = `+ newMargin + `<br>`;
  }
  function calcLeftMargin(){
    let firstItem = document.querySelector(".swiper-container.i3 .first-item");
    // Set margin
    //diff = window.innerWidth / 2 * 0.2;
    diff= 0;
    let newFixWidth = fixWidth + diff; //correct error;
    newMargin = (window.innerWidth  - newFixWidth) /2;

    console.log('diff = ' + diff + 'fixWidth = ' + newFixWidth + ' marginLeft = ' + newMargin);

    if(window.innerWidth>= 1500)firstItem.style.marginLeft = newMargin + "px";
    else firstItem.style.marginLeft ="0px";
  }
};
