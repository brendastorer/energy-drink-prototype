$(document).ready(function(){

  var drinks = ["citrus-burst", "kiwi-strawberry", "triple-berry", "lemon-lime-rush", "grape-fusion", "blue-raspberry", "black-cherry", "wild-peach"];
  console.log (drinks [0]);

  $(".block").toggle(function() {
    $(this).animate({ backgroundColor: "#c33a89" }, 1500);
    },function() {
    $(this).animate({ backgroundColor: "#cc3012" }, 1500);
    },function() {
    $(this).animate({ backgroundColor: "#52a534" }, 1500);
    },function() {
    $(this).animate({ backgroundColor: "#724598" }, 1500);
    },function() {
    $(this).animate({ backgroundColor: "#0c71b7" }, 1500);
    },function() {
    $(this).animate({ backgroundColor: "#990b0d" }, 1500);
    },function() {
    $(this).animate({ backgroundColor: "#e5644f" }, 1500);
    },function() {
    $(this).animate({ backgroundColor: "#f47c08" }, 1500);
  });
});
