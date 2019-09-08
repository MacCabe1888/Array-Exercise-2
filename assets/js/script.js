const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good!", id: 823423 },
  { text: "You are the best!", id: 2039842 },
  { text: "Ramen is my favorite food ever!", id: 123523 },
  { text: "Nice!", id: 542328 }
];

// "Some" and "Every" Checks
// Array.prototype.some() // Is at least one person 19 or older?
// Array.prototype.every() // Is everyone 19 or older?

// Array.prototype.find()
// "Find" is like "filter," but instead returns just the one you are looking for.
// Find the comment with the ID of 823423.

// Array.prototype.findIndex()
// Find the comment with the ID of 823423.
// Delete the comment with this ID.