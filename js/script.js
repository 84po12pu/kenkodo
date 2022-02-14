'use strict';

//workshopスライドショー

$('.slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 5,//スライドを画面に5枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
        {
        breakpoint: 1300,//モニターの横幅が1300px未満の見せ方
        settings: {
            slidesToShow: 4,//スライドを画面に4枚見せる
        }
    },
    {
        breakpoint: 701,//モニターの横幅が701px未満の見せ方
        settings: {
            slidesToShow: 2.5,//スライドを画面に2.5枚見せる
        }
    }
]
});





//スクロールpagetop

window.onscroll = function(evt) {
    const position = document.documentElement.scrollTop || document.body.scrollTop;
  
    if (position >= 300) {
      document.getElementById('page-top').classList.add('open');
    } else {
      document.getElementById('page-top').classList.remove('open');
    }
  };