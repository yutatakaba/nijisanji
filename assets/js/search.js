$(function () {
  searchWord = function(){
    var searchText = $(this).val(), // 検索ボックスに入力された値
        targetText;

    $('.target-area li').each(function() {
      targetText = $(this).text();

      // 検索対象となるリストに入力された文字列が存在するかどうかを判断
      if (targetText.indexOf(searchText) != -1) {
        $(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });
  };

  // searchWordの実行
  $('#search-text').on('input', searchWord);
});

$(function(){
    function slideMenu() {
        let activeState = $(".menu-list").hasClass("active");
        $(".menu-list").animate({right: activeState ? "0%" : "-120%"}, 400);
    }

    $(".hamberger").click(function(event){
        event.stopPropagation();
        $(".hamberger").toggleClass("open");
        $(".menu-list").toggleClass("active");
        slideMenu();
    });
});