var largestNumber = function(side1, side2, side3) {
  if (side1 > side2) {
    return side1;
  }
  else if (side2 > side3){
    return side2;
  }
  else {
    return side3;
  }
}

var twoSmallerSides = function(largestNumber) {
  
}

$(function() {
  $("#triangle-tracker").submit(function(event) {
    event.preventDefault();
    var side1 = $("#side1").val();
    var side2 = $("#side2").val();
    var side3 = $("#side3").val();

    side1 = parseFloat(side1);
    side2 = parseFloat(side2);
    side3 = parseFloat(side3);

    if () {
      if(side1 === side2 && side2 === side3) {
        $(".equilateral").show();
      }
      else if (side1 === side2 || side2 === side3 || side1 === side3) {
        $(".isosceles").show();
      }
      else {
        $(".scalene").show();
      }
    }
    else {
      $(".not-triangle").show();
    }
    }
  });
});
