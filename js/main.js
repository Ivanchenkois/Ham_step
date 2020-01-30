//tabs//
window.onload = function () {
    document.querySelector('.service-tabs-header').addEventListener('click',fTabs);

    function fTabs(event) {
        // console.log(event);
        if (event.target.className == 'service-tab-h') {
            let dataTab = event.target.getAttribute('data-tab');
            let tabH = document.getElementsByClassName('service-tab-h');
            for (let i =0; i<tabH.length; i++) {
                tabH[i].classList.remove('active');
            }
            event.target.classList.add('active');
            let tabBody = document.getElementsByClassName('service-tab-b');
            for (let i = 0; i < tabBody.length; i++) {
                if (dataTab==i){
                    tabBody[i].style.display = 'flex';
                }else {
                    tabBody[i].style.display = 'none';
                }
            }
        }
    }
}
//amazing-photo menu//
$(document).ready(function() {
    $('.menu-all').click(function () {
        $('[class^=amazing-photo]').show();
    });

    $('.menu-graphic').click(function () {
        $('[class^=amazing-photo]').hide();
        $('[class*=amazing-photo-graphic]').show();
    });

    $('.menu-web').click(function () {
        $('[class^=amazing-photo]').hide();
        $('[class*=amazing-photo-web]').show();
    });

    $('.menu-landing').click(function () {
        $('[class^=amazing-photo]').hide();
        $('[class*=amazing-photo-landing]').show();
    });

    $('.menu-wordpress').click(function () {
        $('[class^=amazing-photo]').hide();
        $('[class*=amazing-photo-wordpress]').show();
    });
});


$(document).ready(function() {
    $(".people-say-container").slick({
        arrows: false,
        dots: true,
        customPaging: function(slider, i) {
            return `<div class="people-say-dots"><img src="image/they/Layer${i +
            1}.png" /></div>`;
        },
        appendDots: $(".people-say-dots")
    });
    $(".people-say-carousel-nav .people-say-prev-slide").click(function() {
        $(".people-say-container").slick("slickPrev");
    });
    $(".people-say-carousel-nav .people-say-next-slide").click(function() {
        $(".people-say-container").slick("slickNext");
    });
});