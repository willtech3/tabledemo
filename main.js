(function() {
  var data = [
     ['','USA_1990', 'USA_2000', 'USA_2005', 'USA_2010','Canada_1990', 'Canada_2000', 'Canada_2014', 'Mexico_2000', 'Mexico_2010'],
     ['TOTPOP', '17', '21', '30', '40', '1', '2', '5', '3', '6'],
     ['TOTMALE', '0', '1', '2', '3', '4', '5', '6', '7', '8'],
     ['TOTFEMALE', '0', '1', '2', '3', '4', '5', '6', '7', '8'],
     ['VARIABLE1', '0', '1', '2', '3', '4', '5', '6', '7', '8'],
     ['VARIABLE2', '0', '1', '2', '3', '4', '5', '6', '7', '8'],
     ['VARIABLE3', '0', '1', '2', '3', '4', '5', '6', '7', '8'],
     ['VARIABLE4', '0', '1', '2', '3', '4', '5', '6', '7', '8'],
     ['VARIABLE5', '0', '1', '2', '3', '4', '5', '6', '7', '8'],
  ];

  var container = document.getElementById("tableContainer");
  var table;
  table = new Handsontable(container, {
    data: data,
    startRows: 8,
    startCols: 10,
  });

  console.log("I'm actually running and doing something!");
}());
