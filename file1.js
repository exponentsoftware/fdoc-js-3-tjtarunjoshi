// Write a function called convertArrayToObject which can convert the array to a structured object.

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

let ans = [];
function convertArrayToObject(students) {
  students.forEach((student) => {
    ans.push({ name: student[0], skills: student[1], scores: student[2] });
  });
  return ans;
}

console.log(convertArrayToObject(students));
