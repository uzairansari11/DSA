let arr = [2, 3, 4, 5, 6, 7, 8, 9, 12, 12, 23, 44, 1, 3, 4, 8, 6, 5, 3]
/* all even must be on left and odd left */
/* Method   two pointer */
let n = arr.length

let i = 0
let j = n - 1

while (i < j) {

    while (arr[i] % 2 == 0 && i < j) {
        i++
    }

    while (arr[j] % 2 == 1 && i < j) {
        j--
    }

    if (arr[i] % 2 == 1 && arr[j] % 2 == 0) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}

console.log(arr)

/*
time  complexity O(n)
space complexcity O(1)
 */