// GLOBAL VARIABLES



const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const carLeft = document.getElementById("carLeft");
const carRight = document.getElementById("carRight");

// CAROUSEL


carLeft.addEventListener('click', (event)=>{
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
})

carRight.addEventListener('click', (event)=>{
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
})

