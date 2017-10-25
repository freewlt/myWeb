/**
 * Created by zhaoyunlong on 2017/2/9.
 */
var productChoose=[
    [1,1,1,1,1,1,1,1,1,2,4,4,8,8,8,8,8,8,16,16,32,32],//sslType
    [1,1,1,2,2,2,4,4,4,1,1,1,1,1,2,2,4,4,1,1,1,2],//company
    [1,2,4,1,2,4,1,2,4,1,1,2,1,2,1,2,1,2,1,2,4,4]];//protectType
// jQuery
var sslType="未选择",company="未选择",protectType="未选择",domainCount="1个",orderTime="未选择",orderCount="1个";
mArray=["未选择","未选择","未选择","1个","未选择","1个"];
$(document).ready(function () {
    //alert("jQuery for order");
    var arr1=[0,0,0];
    $("#order-choose").find("button").click(function() {
        $('#order-choose').find("button").show();
        var arr2=[0,0,0];
        switch ($(this).val()){
            case "sslType":
                mArray[0]=$(this).text();
                $(this).parentsUntil($(".panel")).parent().find("p").text($(this).data("des"));
                arr1[0]=$(this).data("type");
                break;
            case "company":
                mArray[1]=$(this).text();
                $(this).parentsUntil($(".panel")).parent().find("p").text($(this).data("des"));
                arr1[1]=$(this).data("type");
                break;
            case "protectType":
                mArray[2]=$(this).text();
                $(this).parentsUntil($(".panel")).parent().find("p").text($(this).data("des"));
                arr1[2]=$(this).data("type");
                if ($(this).text()!="多个域名"){
                    $("option").hide();
                    $("option").first().show();
                    mArray[3]="1个";
                }
                else {
                    $("option").show();
                }
                break;
            case "orderTime":
                mArray[4]=$(this).text();
                break;
            default:
                break;
        }
        var temp = [0,0,0];
        for (j = 0; j < 22; j++) {
            if (productChoose[0][j] == arr1[0]||arr1[0]==0) {
                temp[1] = temp[1] | productChoose[1][j];
                temp[2] = temp[2] | productChoose[2][j];
            }
        }
        arr2=temp;
        temp=[0,0,0];
        for (j = 0; j < 22; j++) {
            if (productChoose[1][j] == arr1[1]||arr1[1]==0) {
                temp[0] = temp[0] | productChoose[0][j];
                temp[2] = temp[2] | productChoose[2][j];
            }
        }
        arr2[0]=temp[0];
        arr2[2]=arr2[2]&temp[2];
        temp=[0,0,0];
        for (j = 0; j < 22; j++) {
            if (productChoose[2][j] == arr1[2]||arr1[2]==0) {
                temp[0] = temp[0] | productChoose[0][j];
                temp[1] = temp[1] | productChoose[1][j];
            }
        }
        arr2[0]=arr2[0]&temp[0];
        arr2[1]=arr2[1]&temp[1];
        //alert("arr2: "+arr2);//
        updateTable(mArray);
        $(this).siblings().removeClass("btn-primary");
        $(this).addClass("btn-primary");
        var tempPanel=$("#order-choose").find(".panel").first();
        for (i=0;i<6;i++){
            if (arr2[0]%2!=1){
                //alert(i);
                tempPanel.find("button").eq(i).hide();
            }
            arr2[0]=parseInt(arr2[0]/2);
        }
        tempPanel=tempPanel.next();
        for (i=0;i<3;i++)
        {
            if (arr2[1]%2!=1){
                //alert(i);
                tempPanel.find("button").eq(i).hide();
            }
            arr2[1]=parseInt(arr2[1]/2);
        }
        tempPanel=tempPanel.next();
        for (i=0;i<3;i++)
        {
            if (arr2[2]%2!=1){
                //alert(i);
                tempPanel.find("button").eq(i).hide();
            }
            arr2[2]=parseInt(arr2[2]/2);
        }
    });
    $("#domainCount").change(function () {
        mArray[3]=$("option:selected").text()+"个";
        updateTable(mArray);
    });
    $("#orderCount").change(function(){
        var value = $(this).val();
        if((/^(\+|-)?\d+$/.test( value ))&&value>0){
            mArray[5]=value+"个";
            updateTable(mArray);
        }else{
            alert("数量中请输入正整数！");
            $(this).val("1");
        }
    });
    for(i=1;i<=100;i++){
        $("select").append("<option>"+i+"</option>");
    }
});
function updateTable(arr) {
    var x;
    var tempTr=$("tr").first();
    for(x in arr){
        tempTr.children().eq(1).text(arr[x]);
        tempTr=tempTr.next();
    }
}
