// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  let count = 0;
  let maxChar = '';

  // for loop for strings and arrays
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  // for loop for objects
  for (let key in chars) {  
    if (chars[key] > count) {
      count = chars[key];
      maxChar = key;
    }
  }

  return maxChar;
}

module.exports = maxChar;
