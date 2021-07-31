$(function(){
    //변수
    let sct;
    const fixHeader = $('.header__bottom');
    const onMenu = $('.on-menu');
    const body = $('body');

    //scroll 함수 시작
    $(window).scroll( ()=> {
        sct = $(window).scrollTop();
        console.log(sct);

        //sct 100부터 header-bottom은 fixed가 되기
        let scrollfix = sct >= 100;
        fixHeader.toggleClass('fixed',scrollfix);
    })
    //scroll 함수 끝


    //header의 nav 호버하면 color가 회색 되기
    $('.nav, .my-list').hover(function () {$(this).toggleClass('hover');})


    //호버하면 .item-list 하위 img들의 src 변경하기
    $('.item-list li').hover(function () {
        $(this).find('img').attr('src', function (i, src) {
            return src.replace('.jpg', '_h.jpg')
        })
    }, function () {
        $(this).find('img').attr('src', function (i, src) {
            return src.replace('_h.jpg', '.jpg')
        })
    })

    //hamenu 동작
    $('.hamenu').on('click', ()=> { 
        onMenu.addClass('on');
        body.addClass('on');
    })
    $('.close').on('click', ()=> {
        onMenu.removeClass('on');
        body.removeClass('on');
    })

    //on-menu의 + -를 누르면 slide toggle
    $('.slide-toggle-btn').on('click', ()=>{
        $('.slide-toggle').slideToggle(500);
        $('.plus, .minus').toggleClass('on');
    })

    //슬릭 슬라이더
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        arrows: true,
      });
});