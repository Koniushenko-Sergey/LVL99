// const slider = document.querySelector(".slider");
// const container = document.querySelector(".slider__container");
// const slides = document.querySelector(".slide");
// const navigations = document.querySelector(".navigation");

// let activeOrder = 0;

// init();

// function init() {
//     for (let i = 0; i < slides.length; i++) {
//         const slide = slides[i];

//         slide.dataset.order = i;
        
//     }

//     activeOrder = Math.floor(slides.length / 2);

//     update()
// }

// function update() {
//     const { width, height } = container.getBoundingClientRect()

//     for (let i = 0; i < slides.length; i++) {
//         const leftSlide = document.querySelector
//             (`.slide[data-order="${activeOrder - i}"]`
//             );
        
//         if (leftSlide) {
//             leftSlide.style.left = `${width / 2}px`;
//         }
        
//          const rightSlide = document.querySelector
//              (`.slide[data-order="${activeOrder + i}"]`
//              );
//     }
// }

var mobMenu = function (state) {
    document.getElementById('mobMenu').style.display = state;
    document.getElementById('filter').style.display = state;
};