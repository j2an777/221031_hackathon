function slideShow() {
    var i;
    var x = document.getElementsByClassName("imgs");  //slide1에 대한 dom 참조
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
    }
    index++;
    if (index > x.length) {
        index = 1;  //인덱스가 초과되면 1로 변경
    }   
    x[index-1].style.display = "block";  //해당 인덱스는 block으로
    setTimeout(slideShow, 2000);   //함수를 4초마다 호출
 
}

$(document).ready(function() {
    $(window).scroll( function() {
      $('.element1').each(function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},2000);
        }
      });
    }); 
});
  