(function(){

  function lcd(mainInput) {

    var display = [
          [" _ ", "| |", "|_|"], /* Zero */
          ["   ", "  |", "  |"], /* One */
          [" _ ", " _|", "|_ "], /* Two */
          [" _ ", " _|", " _|"], /* Three */
          ["   ", "|_|", "  |"], /* Four */
          [" _ ", "|_ ", " _|"], /* Five */
          [" _ ", "|_ ", "|_|"], /* Six */
          [" _ ", "  |", "  |"], /* Seven */
          [" _ ", "|_|", "|_|"], /* Eight */
          [" _ ", "|_|", " _|"]  /* Nine */
    ];
    var line = [ [], [], [] ];
    var numAsArray = mainInput.toString().split('');

    numAsArray.forEach(function(numIn) {
      numIn = parseInt(numIn);
      for (var i = 0; i < 10; i++) {
        if (numIn === i) {
          pushToLines(i);
        }
      };
    });

    function pushToLines(i) {
      for (var j = 0; j < line.length; j++) {
        line[j].push(display[i][j]);
      }
    };

    console.log(line[0].join(' '));
    console.log(line[1].join(' '));
    console.log(line[2].join(' '));

  };

  lcd(001);
})();
