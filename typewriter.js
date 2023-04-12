const sentence = "hello there from lighthouse labs";

const printSentance = function(sentance) {
  for (const index in sentence) {
    // Use the timer to delay each letter
    setTimeout(() => {
      // prints each letter on same line:
      process.stdout.write(sentence[index]);
      // increase the delay on each letter, * by the current index
    }, index * 300);

  }

  // Create a new line after the letters finish printing
  setTimeout(() => {
    console.log();
    // Test that the next string prints on a new line
    process.stdout.write("next line");
  }, 300 * sentance.length);
};

printSentance(sentence);

