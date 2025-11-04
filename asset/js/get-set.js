// $(document).ready(function(){
//   $(".c1").click(function(){
//   alert("mytext is: "+$('.test1').text());

//   });
// //   });
//   $(document).ready(function () {
//     $(".c1").click(function () {
//     $('.test1').text('goodbye');
//     });
//   });
6;
//   $(document).ready(function () {
//     $(".c1").click(function () {
//       $('.input').atter({
//         'type': 'password',
//         'class': 'input'

//       })
//     });
//   });
// $(document).ready(function () {
//   $("#link")
//     .text("7learn") // تغییر متن لینک
//     .attr("href", "https://www.7learn.com"); // تغییر آدرس لینک
// });
// 7
// $(document).ready(function () {
//   $(".c1").click(function () {
//     $("ul").append ('<li>متن آزمایشی</li>');
//   });
// });
// $(document).ready(function () {
//   $(".c2").click(function () {
//     $("ul").prepend("<p>متی</p>");
//   });
// });
// $(document).ready(function () {
//   $(".c4").click(function () {
//     $("ul").after("<p>hhhی</p>");
//   });
// });
// $(document).ready(function () {
//   $(".c5").click(function () {
//     $("ul").before("<p>ی</p>");
//   });
// });
// $(document).ready(function () {
//   $(".c1").click(function () {
//     $("ul").append("<li>hello Word </li>");
//   });
// });

// $(document).ready(function () {
//   $(".c2").click(function () {
//     $("ul").prepend("<p>hello Word</p>");
//   });
// });

// $(document).ready(function () {
//   $(".test").click(function () {
//     $("test").remove(p);
//   });
// });
// 8
// $(document).ready(function () {
//   $(".btn-1").click(function () {
//     $("div").addClass("add-class");
//   });
// });
15;

$(document).ready(function () {
  $(".accordion > li >div").click(function () {
    if ($(this).next().is(':hidden')) {
      $(".accordion ul").slideUp();
    }
    $(this).next("ul").slideToggle();
  });
  $(".accordion ul:eq(0)").show();
});
16
$(window).scroll(function () {
  if($(this) .scrollTop()>=50){
    $("#top").fadeIn();
  }else{
    $('#top').fadeOut();
  }
});
$('#top').click(function(e){
  e.preventDefault();
$('body,html').animate({
 scrollTop:0
},1000)
});
17
$(document).ready(function(){
$('.modal-link').click(function(e){
  e.preventDefault();
$('.modal').fadeIn();
});
$(".close .bg-modal").click(function (e) {
  e.preventDefault();
  $(".modal").fadeOut();
});
});
 Swal.fire({
   title: "success!",
   text: "You clicked the button!",
   icon: "success",
 });
20



