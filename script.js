(function(){
  var display = [
        [" _ ", "| |", "|_|"],
        ["   ", "  |", "  |"],
        [" _ ", " _|", "|_ "],
        [" _ ", " _|", " _|"],
        ["   ", "|_|", "  |"],
        [" _ ", "|_ ", " _|"],
        [" _ ", "|_ ", "|_|"],
        [" _ ", "  |", "  |"],
        [" _ ", "|_|", "|_|"],
        [" _ ", "|_|", " _|"]
  ];
  var line1 = [],
      line2 = [],
      line3 = [];
  function lcd(mainInput) {
    var numAsArray = mainInput.toString().split('');
    function pushToLines(i) {
        line1.push(display[i][0]);
        line2.push(display[i][1]);
        line3.push(display[i][2]);
    };
    numAsArray.forEach(function(numIn) {
      numIn = parseInt(numIn);
      for (var i = 0; i < 10; i++) {
        if (numIn === i) {
          pushToLines(i);
        }
      };
    });
    console.log(line1.join(' '));
    console.log(line2.join(' '));
    console.log(line3.join(' '));
  };
  lcd(888);
})();
