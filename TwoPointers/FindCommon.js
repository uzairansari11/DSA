/* find common element in both array given array is sorted */

let arr1 = [1, 2, 3, 4, 5, 6, 9]
let size1 = arr1.length
let arr2 = [2, 3, 4, 5, 9]
let size2 = arr2.length


let i = 0
let j = 0

let ans = []

while (i < size1 && j < size2) {
    if (arr1[i] == arr2[j]) {
        ans.push(arr1[i])
        i++
        j++
    } else if (arr1[i] < arr2[j]) {
        i++
    }
    else {
        j++
    }
}

console.log(ans.length ? ans.join(" ") : -1)
