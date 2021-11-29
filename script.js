//"use strict";
//
//console.log('test');
//
//const baseImage = [
//    '1.png', '2.png', '3.png', '4.png'
//];
//
//const onakaImage = [
//    '1.png', '2.png', '3.png', '4.png'
//];
//
//let baseChoice = '1.png';
//const baseDiv = document.getElementById('base');
//for (const imgName of baseImage) {
//    const img = document.createElement('img');
//    img.src = 'image/' + imgName;
//    img.size = '50';
//    baseDiv.appendChild(img);
//    img.addEventListener('click', () => {
//        baseChoice = imgName;
//    });
//}
//
//const btn = document.querySelector('button');
//btn.addEventListener('click', () => {
//    console.log(baseChoice);
//});
//

<!--
  jQuery(function($) {
    // 画像エリアクリックイベント
    $('.select-img').on('click', function(){
      $(this).toggleClass('selected');
      change_img();
    });

    // 画像変更処理
    function change_img(){
      var s_html = '';
      var i_z_index = 1;
      $('.select-img.selected').each(function(index, element){
          s_html += '<img src="' + $(element).find('img').eq(1).attr('src') + '" style="z-index:' + i_z_index + '">';
          i_z_index++;
      });
      // 要素削除
      $('#kisekae-area img').each(function(index, element){
        if(!$(this).hasClass('base-img')){
          $(this).remove();
        }
      });
      // 要素追加
      $('#kisekae-area').append(s_html);
    }
  });
-->

