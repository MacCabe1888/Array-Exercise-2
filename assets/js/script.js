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
const someNineteenPlus = people.some(person => (new Date()).getFullYear() - person.year >= 19);
console.log({someNineteenPlus});
// Array.prototype.every() // Is everyone 19 or older?
const allNineteenPlus = people.every(person => (new Date()).getFullYear() - person.year >= 19);
console.log({allNineteenPlus});

// Array.prototype.find()
// "Find" is like "filter," but instead returns just the one you are looking for.
// Find the comment with the ID of 823423.
const findComment = commentID => comments.find(comment => comment.id == commentID);
const comment = findComment(823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with the ID of 823423.
const findCommentIndex = commentID => comments.findIndex(comment => comment.id == commentID);
const index = findCommentIndex(823423);
console.log(index);
// Delete the comment with this ID.
const updatedComments = [...comments];
updatedComments.splice(index, 1);
console.table(updatedComments);
