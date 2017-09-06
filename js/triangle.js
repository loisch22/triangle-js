
function Triangle(side1Input, side2Input, side3Input) {
  this.side1 = side1Input;
  this.side2 = side2Input;
  this.side3 = side3Input;

}

Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  }
};

exports.triangleModule = Triangle;
