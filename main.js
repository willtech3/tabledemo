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
    rowHeaders: function(row) {
      return "<span style='background-color:green;'>one</span><span style='background-color:red'>two</span>";
    },
    colHeaders: function(col) {
      var html = "";
      switch(col) {
        case 1:
          html = "U.S.";
          break;
        case 5:
          html = "Canada";
          break;
        case 8:
          html = "Mexico";
          break;
        default:
          html = "";
          break;
      }
      return html;
    },
    autoColumnSize: true,
    afterRenderer: function() {
      var thecount = 0;
      var totalNumCountries;
      var countryElem;
      var indexOfCountryElem;
      var thsAfterCountryElem;
      var allThs = $(".htCore tr:first th");
      totalNumCountries = _.size(_.filter(allThs, function(item){ return $(item).text().trim() !== "" }));
      var getIndexOfCountryElem = function(elem) {
        return _.indexOf(allThs, elem)
      }
      if(thecount >= totalNumCountries) return;
        allThs.each(function(item) {
        var $th = $(this);
        if($th.text().trim() !== "") {
          countryElem = $th[0];
          var index = getIndexOfCountryElem(countryElem);
          var ths = allThs.slice(index);
          var text = "";
          var i = 1;
          var total = 1;
          while(text === "" && i < ths.length) {
            var nextText = $(ths[i]).text().trim();
            if(nextText === "") {
              total += 1;
              i += 1;
              debugger
              allThs.remove($(ths[i]));
            }else {
             text = "asdfasdf";
            }
          }
          debugger
          $(countryElem).attr('colspan', total);
          thecount += 1;
        }
      });
    }
  });
}());
