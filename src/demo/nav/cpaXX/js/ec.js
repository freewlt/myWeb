/**
 * Created by Administrator on 2016/11/28.
 */
$(function () {

    // 下拉列表
    $(".nav-menu").hover(function () {
        $(this).find(".nav-con-list").stop().slideDown(500);
    }, function () {
        $(this).find(".nav-con-list").stop().slideUp(500);
    });

    //左侧菜单
    $(".treebox .level1>a").click(function (){
        $(".treebox .level2 li>a").removeClass('red');
        $(".treebox a.icc").removeClass('icc');
        if($(this).hasClass('current')){
            $(this).removeClass('current').next().slideUp()
        }
        else if($(this).hasClass('home')){
            $(this).addClass('current').parent().siblings().children('a').removeClass('current').next().slideUp()
        }
        else{
            $(this).addClass('current').next().slideDown()
                .parent().siblings().children('a').removeClass('current').next().slideUp()         
        }

        return false;  
    });
    //左侧菜单下的子菜单
    $(".treebox .level2 li>a").click(function(){
        $(".treebox .level2 li>a").removeClass('red');
        $(this).addClass('red').parent().parent().prev().removeClass('current').addClass('icc')
    })
    
})


