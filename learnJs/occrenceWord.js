let sentence = "apple banana apple orange banana apple";
let wordCount = {};

let words = sentence.trim().toLowerCase().split(/\s+/);

for (let word of words) {
  wordCount[word] = (wordCount[word] || 0) + 1;
}

console.log(wordCount);