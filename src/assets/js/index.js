/**
 * Created by Administrator on 2017/10/20.
 */
$(function(){
    $(".pagination a").click(function(){
        var index = $(this).index();
        $(".content .pageFirBox").eq(index).show().siblings().hide();
    })
})