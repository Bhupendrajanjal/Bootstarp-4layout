const cl = console.log;

// const owl = document.querySelector(".owl-carousel");

$('#tmSlider').owlCarousel({
    margin:10,
    responsive : {
        loop:true,
        nav:true,
        1000 :{
            items : 5,
            loop:true,
            nav:true,
            navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>']
        }
    }
})
// cl($('.tmSlider'))