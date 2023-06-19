/* given an array find the subarray with value sum K if exists return true else false */

let arr = [1, 4, 20, 10, 3, 2, 1, 3]

let K = 33

let sum = 0

let j = 0

let flag = 'No'

for (let i = 0; i < arr.length; i++) {

    while (j < arr.length && sum < K) {

        sum = sum + arr[j]

    }

    if (sum == K) {
        flag = 'Yes'
        break
    }

    sum = sum - arr[i]
}

console.log(flag)

/* 
 space complexcity wil be order of 1 .


 Time Complexicity  will be order of n or O(n)

 Reason ---  in worst case outer loop will run N times
 but the inner loop will run only one time 
*/