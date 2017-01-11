$(function(){
    //pcサイトは新規タブで開く
    $('.pc,.pc a').attr('target','_blank');

    //ドロワーナビのドロップダウン
    $('#dNav #mainNav > li.plus > a').click(function(){
        $(this).parents().toggleClass('active');
        $(this).next().not('animated').slideToggle();
        return false;
    });

    //ハンガーメニューボタン
    $('.menu-trigger').click(function(){
        $(this).not('animated').toggleClass('active');
    });

    //黒背景タップ時のハンガーボタンの挙動を調整
    $('.overlay').click(function(){
        if($('#dNav_sw').prop('checked') == true) {
            $('.menu-trigger').removeClass('active');
        } else {
            $('.menu-trigger').addClass('active');
        }
    })

    //トップへ戻る
    $(window).scroll(function() {
        scrollDirection();
    });

    function scrollDirection() {
        var now = $(window).scrollTop();
        if(now > 500){
            $(".pagetop").addClass("ac");
        }else{
            $(".pagetop").removeClass("ac");
        }
    }

    $(".pagetop a").click(function(){
        $("html,body").animate({scrollTop:0},"slow");
        return false;
    });
});

$(window).load(function(){
    $('.loading').fadeOut(1500,function(){
        $('.loading').remove();
        $('html,body').css('height','auto');
    });
    $('main').addClass('active');
});