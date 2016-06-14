var runEquation = function(checkObject) {
  if(checkObject.operation == "+") {
    return Number(checkObject.x) + Number(checkObject.y);
  } if(checkObject.operation == "-") {
    return Number(checkObject.x) - Number(checkObject.y);
  } if(checkObject.operation == "*") {
    return Number(checkObject.x) * Number(checkObject.y);
  } if(checkObject.operation == "/") {
    return Number(checkObject.x) / Number(checkObject.y);
  }
};

module.exports = runEquation;
