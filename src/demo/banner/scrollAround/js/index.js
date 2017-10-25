/**
 * Created by JD on 2016/4/27.
 */
var mySwiper = new Swiper('.swiper', {
    autoplay: 5000,
    pagination : '.swiper-pagination',
    paginationType : 'fraction',
    loop:true
});
var per = new Swiper('.swiper-om',{
    freeMode : true,
    slidesPerView : "auto"
});

$(function(){
    var gd = $(".swiper-pagination-total").text();
    var swi = setInterval(edg,30);
    $(".scrollbar-act").css("width",100/gd+"%");
    function edg(){
        var idn = $(".swiper-pagination-current").text()-1;
        $(".scrollbar-act").css("left",idn/gd*100+"%");
    }
});