const swiper = new Swiper('.swiper-container.main-slider', {
    spaceBetween: 30,
    effect: 'fade',
    autoplay: {
        delay: 12000,
    },
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            /*
            if (window.innerWidth < 991) {
                return `<span class="${className}">${index + 1}</span>`;
            } else {
                return `<span class="${className} active">
                            <svg class="circ" width="90" height="90">
                                <text class="circ-text" x="40" y="-40" fill="#fff">${index + 1}</text>
                                <circle class="circ1" cx="46" cy="46" r="33" stroke="#fff" stroke-width="4" fill="none"/>
                                <circle cx="46" cy="46" r="33" stroke="#fff" stroke-width="1" fill="none"/>
                            </svg>
                        </span>`;
            } */
            return `<span class="${className}">${index + 1}</span>`;
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

const productGalleryThumbs = new Swiper('.swiper-container.product-slider.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

const productGalleryTop = new Swiper('.swiper-container.product-slider.gallery-top', {
    spaceBetween: 10,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productGalleryThumbs
    }
});