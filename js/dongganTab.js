// <!--崩溃欺骗(JS 版)-->
var oldTitle = document.title;
var titleTime; //標題恢復計時器
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.querySelector("[rel='icon']").setAttribute("href", "/images/favicon-16x16-next.png");
    document.title = '╭(°A°`)╮ 页面崩溃啦 ~ | 量子广告！';
    clearTimeout(titleTime);
  } else {
    document.title = '(ฅ>ω<*ฅ) 噫又好了~';
    document.querySelector("[rel='icon']").setAttribute("href", "/images/favicon-16x16-next.png");
    titleTime = setTimeout(function () {
      document.title = oldTitle;
    }, 1000);
  }
});


// <!--崩溃欺骗(Jquery 版)-->
// var OriginTitile = document.title;
//  var titleTime;
//  document.addEventListener('visibilitychange', function () {
//      if (document.hidden) {
//          $('[rel="icon"]').attr('href', "/images/favicon-16x16-next.png");
//          document.title = '╭(°A°`)╮ 页面崩溃啦 ~ | 量子广告！';
//          clearTimeout(titleTime);
//      }
//      else {
//          $('[rel="icon"]').attr('href', "/images/favicon-16x16-next.png");
//          document.title = '(ฅ>ω<*ฅ) 噫又好了~' + OriginTitile;
//          titleTime = setTimeout(function () {
//              document.title = OriginTitile;
//          }, 2000);
//      }
//  });