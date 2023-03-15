const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
        },
        next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
            },
        },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});