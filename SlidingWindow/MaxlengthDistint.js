let str = ["a", "a", "b", "c", "d", "g", "b", "f", "a"];

let start = 0;
let obj = {};
let maxLength = -1;
for (let i = 0; i < str.length; i++) {
  if (obj[str[i]]) {
    start = Math.max(start, obj[str[i]] + 1);
  }
  obj[str[i]] = i;
  maxLength = Math.max(maxLength, i - start + 1);
}
console.log(maxLength);


