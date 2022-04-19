$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}