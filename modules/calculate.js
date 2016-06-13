var runEquation = function(x, y, type) {
  if(type == "+") {
    return x + y;
  } if(type == "-") {
    return x - y;
  } if(type == "*") {
    return x * y;
  } if(type == "/") {
    return x / y;
  }
};

module.exports = runEquation;
