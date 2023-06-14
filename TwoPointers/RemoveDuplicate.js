let arr = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5]

let j = 0

for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i] !== arr[i + 1]) {
        arr[j] = arr[i]
        j++
    }
}

arr[j] = arr[arr.length - 1]
j++

for (let i = 0; i < j; i++) {
    console.log(arr[i])
}

/* 

Time Complexcity O(n)
Space Complexcity O(1)

*/