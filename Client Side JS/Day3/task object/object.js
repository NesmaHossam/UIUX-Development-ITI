// 1. write a script that allows you to create a rectangle object that

// • Should have width and height properties.
// • Implement two methods for calculating its area and perimeter return value.
// • Implement displayInfo() function to display a message declaring the width, height,
// area and perimeter of the created object.

var obj = {
  width: 20,
  height: 10,
  area: function () {
    return obj.width * obj.height;
  },
  parameter: function () {
    return 2 * (obj.width + obj.height);
  },

  displayInfo: function () {
    console.log(
      "width= " +
        obj.width +
        " height = " +
        obj.height +
        " area= " +
        obj.area() +
        " parameter= " +
        obj.parameter()
    );
  },
};

obj.displayInfo();
