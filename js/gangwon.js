(function($){
    
    //네비게이션: slideDown() slideUp()
   /*  $('.main-btn').mouseenter(function(){
        $('.sub').stop().slideUp(0);
        $(this).next().stop().slideDown(300);

        $('.main-btn').removeClass('on');
        $(this).addClass('on');
    });

    $('#nav').mouseleave(function(){
        $('.sub').stop().slideUp(300, function(){
            $('.main-btn').delay(300).removeClass('on');
        });
    }); */

    //부드럽게 보이고(fadeIn(300)) 부드럽게 사라지고 (fadeOut(0))
    $('.main-btn').mouseenter(function(){
        $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);

        $('.main-btn').removeClass('on');
        $(this).addClass('on');
    });

    $('#nav').mouseleave(function(){
        $('.sub').stop().fadeOut(300, function(){
            $('.main-btn').delay(300).removeClass('on');
        });
    });

    //메인슬라이드
    let cnt=0;
    const slideWrap = $('.slide-wrap');
    const n = 3; //전체 슬라이드 갯수

    //1.메인슬라이드함수
    function mainSlide(){
        slideWrap.animate({left: `${-100*cnt}%`},600, function(){
            cnt>n-1?cnt=0:cnt;
            slideWrap.animate({left: `${-100*cnt}%`},0);
        });
    }
    //2.다음카운트함수
    function nextCount(){
        cnt++;
        mainSlide();
    }
    //3.자동타이머함수
    function autoTimer(){
        setInterval(nextCount, 3000);
    }
    autoTimer();

    //공지사함 & 갤러리 탭메뉴 클릭 이벤트
    //갤러리버튼
    $('.gallery-btn').click(function(){
        $('.notice-btn').addClass('on');
        $('.gallery-btn').addClass('on');
        $('.notice-box').addClass('on');
        $('.gallery-box').addClass('on');

    });
    //공지사항버튼
    $('.notice-btn').click(function(){
        $('.notice-btn').removeClass('on');
        $('.gallery-btn').removeClass('on');
        $('.notice-box').removeClass('on');
        $('.gallery-box').removeClass('on');

    });
    //레이어팝업창
    $('.link-btn').click(function(){
        $('#modal').stop().fadeIn(1000);
    });
    $('.close-btn').click(function(){
        $('#modal').stop().fadeOut(300);
    });

})(jQuery);