let arr = [1, 5, -1, 1];
let k = 5;
let n = arr.length;

/* if pair exists print yes else no */

/* Method 1  Brute Force*/
let flag = "No";
for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    if (arr[i] + arr[j] == k) {
      flag = "Yes";
      break;
    }
  }
}
console.log(flag);

/* 
Time Complexcity O(n2)
Space Complexcity O(1)
*/

/* ------------------------------------------------ */
/* Method 2  two pointer */
let flag2 = "No";
arr = arr.sort((a, b) => a - b);

let i = 0;
let j = n - 1;

while (i < j) {
  if (arr[i] + arr[j] < k) {
    i++;
  } else if (arr[i] + arr[j] > k) {
    j--;
  } else {
    flag2 = "Yes";
    break;
  }
}
console.log(flag2);
/* 
Time Complexcity O(nlogn)
Space Complexcity O(1)
*/

/* ------------------------------------------------ */

/* Method 3 using object */
let obj = {};
for (let i = 0; i < n; i++) {
  obj[arr[i]] = arr[i];
}
let flag3 = "No";
for (let i = 0; i < n; i++) {
  let diff = k - arr[i];
  let key = obj[diff];
  if (key) {
    flag3 = "Yes";
    break;
  }
}
console.log(flag3);

/* 
Time Complexcity O(n)
Space Complexcity O(n)
*/
