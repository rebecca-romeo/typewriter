
const printSentance = function(sentance) {
  // Loop over each letter in the sentance
  for (let i = 0; i < sentance.length; i++) {
    // Use the timer to delay each letter
    setTimeout(() => {
      // prints each letter on same line:
      process.stdout.write(sentance[i]);
      // increase the delay on each letter, * by the current index
    }, 50 * i);
    setTimeout(() => {
      // Create a new line after the letters finish printing
      console.log();
    }, 50 * sentance.length);
  }
};

printSentance("print it");