let arr = [1, 0, 0, 1, 0, 1, 1, 0, 1, 0];

/* Method 1  Brute Force*/

let ans = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    ans.push(arr[i]);
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 1) {
    ans.push(arr[i]);
  }
}

console.log(ans);

/*
time  complexity O(n)
space complexcity O(n)
 
*/
/* ------------------------------------------------ */
/* Method 2  two pointer */

let i = 0;
let j = arr.length - 1;

while (i < j) {
  while (arr[i] == 0 && i < j) {
    i++;
  }

  while (arr[j] == 1 && i < j) {
    j--;
  }

  if (arr[i] == 1 && arr[j] == 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}
console.log(arr);
/*
time  complexity O(n)
space complexcity O(1)
 */
