/**
 * Created by Administrator on 2016/3/21.
 */
!(function (doc, win) {
    var docEle = doc.documentElement,width = docEle.clientWidth>docEle.clientHeight?docEle.clientHeight+40:docEle.clientWidth;
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function () {
            width && (docEle.style.fontSize = 20 * (width / 375) + "px");
            if(window.orientation==0||width<docEle.clientHeight){
                window.vertical&&vertical();
            }else{
                window.transverse&&transverse();
            }
        };
    //console.info(evt);
    win.addEventListener("orientationchange", fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
}(document, window));

$(document).ready(function () {
    //异步
    $(document).on("ajaxComplete", function (event, response, settings) {

        var loginStatus = response.getResponseHeader("loginStatus");

        if (loginStatus == "accessDenied") {
            alert("登录超时，请重新登录");
            location.reload(true);
        } else if (loginStatus == "unauthorized") {
            alert("对不起，您暂时不能进行此操作！");
        } else if (loginStatus == "noMobile") {
            alert("请先绑定手机号再进行此操作!");
        }
    });

});

/**
 * @function 得到两个数的商
 */
function div(num1, num2) {
    var d1 = 0, d2 = 0, dou1, dou2;

    try {
        d1 = num1.toString().split(".")[1].length
    } catch (e) {
    }
    try {
        d2 = num2.toString().split(".")[1].length
    } catch (e) {
    }

    dou1 = Number(num1.toString().replace(".", ""));
    dou2 = Number(num2.toString().replace(".", ""));
    return (dou1 / dou2) * Math.pow(10, d2 - d1)
}

Number.prototype.div = function (num) {
    return div(this, num);
}
/**
 * @function 得到两个数乘积
 */
function accMul(num1, num2) {
    var len = 0, str1 = num1.toString(), str2 = num2.toString();
    try {
        len += str1.split(".")[1].length
    } catch (e) {
    }
    try {
        len += str2.split(".")[1].length
    } catch (e) {
    }
    return Number(str1.replace(".", "")) * Number(str2.replace(".", ""))
        / Math.pow(10, len);
}

Number.prototype.accMul = function (num) {
    return accMul(this, num);
}
/**
 * @function 得到两个数的和
 */
function add(num1, num2) {
    var n1, n2, p;
    try {
        n1 = num1.toString().split(".")[1].length
    } catch (e) {
        n1 = 0
    }
    try {
        n2 = num2.toString().split(".")[1].length
    } catch (e) {
        n2 = 0
    }
    p = Math.pow(10, Math.max(n1, n2));
    return (num1 * p + num2 * p) / p;
}

Number.prototype.add = function (num) {
    return add(this, num);
}
/*
 * @function 得到两个数的差
 */
function minus(num1, num2) {
    var n1, n2, p1, p2;
    try {
        n1 = num1.toString().split(".")[1].length
    } catch (e) {
        n1 = 0
    }
    try {
        n2 = num2.toString().split(".")[1].length
    } catch (e) {
        n2 = 0
    }
    p1 = Math.pow(10, Math.max(n1, n2));
    p2 = (n1 >= n2) ? n1 : n2;
    return ((num1 * p1 - num2 * p1) / p1).toFixed(p2);
}

Number.prototype.minus = function (num) {
    return minus(this, num);
}

function getEve() {
    var str = "click";
    if (isIos()) {
        str = "touchend";
    }
    return str;
}

function isIos () {
    return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

function preDe(e) {
    if (isIos()) {
        e.preventDefault();
    }
}


