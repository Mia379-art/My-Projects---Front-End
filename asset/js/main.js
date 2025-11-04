// $(document) .ready(function(){
//   $('.test').hide(1000);
// });
//  $(document).ready(function () {
//     $("input").focus(function(){
//       $(this).css("background-color","gray");
//       $(".click").hide(1000);
//     });
//   });
// $(document).ready(function () {
//   $(".c1").hover(function () {
//     $(".test1").slideUp("");
//   });
//   $(".c2").hover(function () {
//     $(".test1").slideDown("");
//   });
//   $(".c3").hover(function () {
//   $(".test1").slideToggle("");
// });
// });
// $(document).ready(function(){
//   $(".button").click(function () {
//      alert("Hey there! Welcome to 7learn");
   
//   });
// });
// $(document).ready(function(){
//   $(".c1").click(function(){
//   var x = $(".button");
//   x .animate ({width:'200px',height:'100px'},1000);
//   x.animate({ width: "400px", height: "200px", right:"200px", },);
//   x.animate({ width: "400px", height: "200px", right: "250px" });
//   x.animate({ width: "400px", height: "200px", right: "300px" });
   
//   });
//   });
//  $(document).ready(function () {
//    $(".c1").click(function () {
//      var x = $(".c1");
//      x.animate({ fontSize: "100px" }, 1000);
//    });
//  });
var clock = $(".clock").FlipClock({
  clockFace: "DailyCounter",
  autoStart: false,
  callbacks: {
    stop: function () {
      $(".message").html("The clock has stopped!");
    },
  },
});
// set time
clock.setTime(220880);

// countdown mode
clock.setCountdown(true);

// start the clock
clock.start();
