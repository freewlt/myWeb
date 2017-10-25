/**
 * Created by Administrator on 2017/10/20.
 */
$(function(){
    //导航下拉列表
    $(".koss").hover(function(){
        $(".navbar").stop().fadeIn(100)
    },function(){
        $(".navbar").stop().fadeOut(100)
    });
    $('.navbar').mouseover(function () {
        $(".navbar").stop().fadeIn(100)
    });
    $('.navbar').mouseout(function () {
        $(".navbar").stop().fadeOut(100)
    });
})