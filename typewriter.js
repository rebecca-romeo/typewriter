

const sentence = "hello there";
for (const char of sentence) {
  setTimeout(() => {
    // prints each letter in the same line:
    process.stdout.write(char);
  }, 1000)
}

