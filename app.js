//**********Selcet Your Shape **************************************/

var selectedShape = parseInt(
  prompt(
    "Welcome to the best shape simulator in the planet\nPlease select the shape:\n1) Square\n2) Rectangle\n3) Triangle"
  )
);

switch (selectedShape) {
  case 1:
    makeSquare();
    break;
  case 2:
    makeRectangle();
    break;
  case 3:
    makeTriangle();
    break;
  default:
    alert("please select 1 / 2 or 3 for the shape type");
    break;
}
//**********Select Interior of Shape *******************************/
function selectedInt() {
  var selectedInt = parseInt(
    prompt(
      "please select the shape content:\n1)******\n2)***  ***\n3)1234\n4)54321"
    )
  );
  return selectedInt;
}

//****************** Makes Square **********************************/

function makeSquare() {
  var length = parseInt(prompt("Selected square length please"));
  switch (selectedInt()) {
    case 1:
      makeFullRectangle(length, length);
      break;
    case 2:
      makeScopeRectangle(length, length);
      break;
    case 3:
      numberUpSquare(length);
      break;
    case 4:
      numberDownSquare(length);
      break;

    default:
      alert("please select 1 / 2 or 3/4");
      break;
  }
  calcPerimeterSquare(length);
}
function numberUpSquare(length) {
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= length; j++) {
      if (i > length) {
        document.write(i + " ");
      } else {
        document.write(j + " ");
      }
    }
    document.write("<br>");
  }
}
function numberDownSquare(length) {
  for (let i = length; i > 0; i--) {
    for (let j = length; j > 0; j--) {
      if (length < i) {
        document.writeln(i + " ");
      } else {
        document.writeln(j + " ");
      }
    }
    document.write("<br>");
  }
}
//****************** Makes Rectangle **********************************/

function makeRectangle() {
  var heightUserInput = parseInt(prompt("Select rectangle height please"));
  var widthUserInput = parseInt(prompt("Select rectangle width please"));
  switch (selectedInt()) {
    case 1:
      makeFullRectangle(heightUserInput, widthUserInput);
      break;
    case 2:
      makeScopeRectangle(heightUserInput, widthUserInput);
      break;
    case 3:
      numberUpRectangle(heightUserInput, widthUserInput);
      break;
    case 4:
      numberDownRectangle(heightUserInput, widthUserInput);
      break;

    default:
      alert("please select 1 / 2 or 3/4");
      break;
  }
  rectangleCalculate(heightUserInput, widthUserInput);
}
function makeFullRectangle(height, width) {
  for (let i = 0; i < height; i++) {
    document.writeln("*");
    for (let j = 0; j < width; j++) {
      document.writeln("*");
    }
    document.write("<br>");
  }
}
function makeScopeRectangle(height, width) {
  for (let i = 0; i <= height; i++) {
    for (let j = 0; j <= width; j++) {
      if (i === 0 || i === height || j === 0 || j === width) {
        document.writeln("*");
      } else {
        document.write("&nbsp;  ");
      }
    }
    document.write("<br>");
  }
}
function numberUpRectangle(height, width) {
  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      if (i > height) {
        document.writeln(i + " ");
      } else {
        document.write(j + " ");
      }
    }
    document.write("<br>");
  }
}
function numberDownRectangle(height, width) {
  for (let i = height; i > 0; i--) {
    for (let j = width; j > 0; j--) {
      if (height < i) {
        document.writeln(i + " ");
      } else {
        document.writeln(j + " ");
      }
    }
    document.write("<br>");
  }
}

//****************** Makes Triangle **********************************/

function makeTriangle() {
  var length = parseInt(prompt("Selected triangle length please"));
  switch (selectedInt()) {
    case 1:
      makeFullTriangle(length);
      break;
    case 2:
      makeScopeTriangle(length);
      break;
    case 3:
      numberUpTriangle(length);
      break;
    case 4:
      numberDownTriangle(length);
      break;

    default:
      alert("please select 1 / 2 or 3/4");
      break;
  }
  triangleCalculate(length);
}
function makeFullTriangle(length) {
  for (let i = 0; i <= length; i++) {
    for (let j = 0; j <= i; j++) {
      document.writeln("*");
    }
    document.write("<br>");
  }
}
function makeScopeTriangle(length) {
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === 1 || i === length) {
        document.writeln("* ");
      } else {
        document.write("&nbsp;  ");
      }
    }
    document.write("<br>");
  }
}

function numberUpTriangle(length) {
  for (let i = 0; i <= length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j < 10 && j > 0) {
        document.writeln("0" + j + " ");
      } else {
        document.writeln(j + " ");
      }
    }
    document.write("<br>");
  }
}
function numberDownTriangle(length) {
  for (let i = length; i >= 0; i--) {
    for (let j = length; j >= i; j--) {
      if (j < 10 && j > 0) {
        document.writeln("0" + j + " ");
      } else {
        document.writeln(j + " ");
      }
    }
    document.write("<br>");
  }
}
//*****************Parameter,Area calculation ******************/
function calcPerimeterSquare(length) {
  var perimeter = length / 4;
  var area = length * length;
  document.writeln(`</br> Area: ${area} </br> Perimeter:  ${perimeter}`);
}
function calcPerimeterTriangle(length) {
  var perimeter = length * 3;
  document.writeln(`Perimeter: ${perimeter}`);
}

function rectangleCalculate(height, width) {
  let perimeter = (height + width) * 2;
  let area = height * width;
  document.write(
    "</br> Rectangle Perimeter: " + perimeter + "</br> Rectangle Area: " + area
  );
}

function triangleCalculate(length) {
  let hypotenuse = Math.sqrt(Math.pow(length, 2) * 2);
  let perimeter = le * 2 + hypotenuse;
  let area = (le * le) / 2;
  document.write(
    "</br> Triangle Perimeter: " + perimeter + "</br> Triangle Area: " + area
  );
}
