$(function(){

  //取得各圖片座標
  var po1 = $('.pic1').position().left;
  var po2 = $('.pic2').position().left;
  var po3 = $('.pic3').position().left;
  var po4 = $('.pic4').position().left;
  var po5 = $('.pic5').position().left;

  //點擊後圖片移動
  $('.sel li').click(function(){
    console.log('.sel li')
    var N = $(this).attr('class').substr(3)

    if(N == 1){
      $('.pics').css('left', -po1);
      console.log(N);
    }
    if(N == 2){
      $('.pics').css('left', -po2-5);
    }
    if(N == 3){
      $('.pics').css('left', -po3-10);
    }
    if(N == 4){
      $('.pics').css('left', -po4);
    }
    if(N == 5){
      $('.pics').css('left', -po5);
    }

    // switch(N){
    //   case '1':
    //   $('.pics').css('left', -po1);
    //   break;

    //   case '2':
    //   $('.pics').css('left', -po2);
    //   break;

    //   case '3':
    //   $('.pics').css('left', -po3);
    //   break;

    //   case '4':
    //   $('.pics').css('left', -po4);
    //   break;

    //   case '5':
    //   $('.pics').css('left', -po5);
    //   break;
    // }

  })

  //點擊時按鈕加上 class
  $('.sel li').click(function(){
    $('.sel li').removeClass('btnNow');
    $(this).addClass('btnNow');
  })
})




