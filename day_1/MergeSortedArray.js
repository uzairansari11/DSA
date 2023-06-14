/* Merge two sorted array in assending order */

/* Constraint length might not be the same of both array  */

let arr1 = [1, 3, 4, 5, 6, 9];

let arr2 = [2, 4, 5, 9, 11, 40, 30, 90];

let n1 = arr1.length;

let n2 = arr2.length;

let arr3 = new Array(n1 + n2);

let i = 0;
let j = 0;
let k = 0;

while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
        arr3[k] = arr1[i];
        i++;
        k++;
    } else {
        arr3[k] = arr2[j];
        j++;
        k++;
    }
}
while (i < n1) {
    arr3[k] = arr1[i];
    i++;
    k++;
}
while (j < n2) {
    arr3[k] = arr1[i];
    arr3[k] = arr2[j];
    j++;
    k++;
}
console.log(arr3);

/* 
Time Complexcity O(n1+n2)
Space Complexcity O(n1+n2)
*/