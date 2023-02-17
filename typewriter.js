
const printSentance = function(sentance) {
  for (let i = 0; i < sentance.length; i++) {
    setTimeout(() => {
      // prints each letter on same line:
      process.stdout.write(sentance[i]);
    }, 50 * i);
  }
};

printSentance("print it");


