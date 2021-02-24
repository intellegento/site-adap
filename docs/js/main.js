window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs-item"),
        playBtn = document.querySelector("#playVideo"),
        video = document.querySelector("#video");
playBtn.addEventListener('click', function() {
    video.play();
    video.setAttribute('controls', 'controls');
    playBtn.style.display = "none";
});
video.addEventListener('ended', function() {
    this.src = this.src;
    playBtn.style.display = "block";
    video.removeAttribute('controls');
})
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            tabs.forEach(otherItem => {
                if (otherItem.classList.contains("tabs-item-active")) {
                    otherItem.classList.remove("tabs-item-active");
                }
            })
            elem.classList.add("tabs-item-active")
        });
    });
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<div class="carousel-arrow carousel-prev"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="carousel-arrow carousel-next"><i class="fas fa-chevron-right"></i></div>'
    });
    $('#buyNowBtn').on('click', popupOpen);
    $('.popup-close').on('click', () => {
        $('.popup').removeClass('popup-active');
        $('body').css('overflow', 'visible');
    });
    function popupOpen() {
        $('.popup').addClass('popup-active');
        $('body').css('overflow', 'hidden');
    }
    $('a[href^="#"]').click(function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
      });
});