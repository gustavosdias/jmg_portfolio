

var actualSlide = $('#menu li:first-child > a');
 $(actualSlide)[0].click();

// $('#menu a').on('click', function(){
//     actualSlide = $(this);
// });

// window.addEventListener("hashchange", function (event) {
//     $(window).scrollTop(0);
//   });



// $('a').click(function (e) {
//     var x = window.pageXOffset,
//         y = window.pageYOffset;
    
//     $(window).one('scroll', function () {
//         window.scrollTo(x, y);
//     });
// });


window.onresize = function(event) {
    //Toda vez que tiver resize, recentraliza div 
    $(actualSlide)[0].click();
};