function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var constructMaximumBinaryTree = function (nums) {
    if (nums.length === 0) return null
    if (nums.length <= 1) return new TreeNode(nums[0])
    let index = 0
    let max = nums[0]

    for (let i = 1; i <= nums.length - 1; i++) {
        if (nums[i] > max) {
            index = i
            max = nums[i]
        }
    }


    const left = constructMaximumBinaryTree(nums.slice(0, index))
    const right = constructMaximumBinaryTree(nums.slice(index + 1))

    const root = new TreeNode(max, left, right)

    return root
}

// const i = constructMaximumBinaryTree([3, 2, 1, 6, 0, 5])
// console.log('ggggg', i);

var merge = function (nums1, m, nums2, n) {
    let newList = []
    let num1 = 0
    let num2 = 0
    while (num1 < m && num2 < n) {
        debugger
        if (nums1[num1] <= nums2[num2]) {
            newList.push(nums1[num1])
            num1++
        } else {
            newList.push(nums2[num2])
            num2++
        }
    }
    if (num1 === m) {
        newList = newList.concat(nums2.slice(num2, n))
    } else if (num2 == n) {
        newList = newList.concat(nums1.slice(num1, m))
    }
    return newList
};

// console.log('ssssssssss', merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// 寻找重复数 二分法
// var findDuplicate = function (nums) {

//     let left = nums[0]
//     let right = nums[0]
//     do {
//         left = nums[left]
//         right = nums[nums[right]]
//     }
//     while (left !== right)
//     left = nums[0]
//     while (left !== right) {
//         left = nums[left]
//         right = nums[right]
//     }
//     return left
// };
// console.log('ssssssssss', findDuplicate([1, 3, 4, 2, 2]));

// function merges(l, mid, r, arr) {
//     const newArr = []
//     let p1 = l
//     let p2 = mid + 1
//     let p3 = 0
//     while (p1 <= mid && p2 <= r) {
//         const target = arr[p1] > arr[p2] ? arr[p2++] : arr[p1++];
//         newArr.push(target)
//     }
//     while (p1 <= mid) {
//         newArr.push(arr[p1++])
//     }
//     while (p2 <= r) {
//         newArr.push(arr[p2++])
//     }

//     for (let i = l; i <= r; i++) {
//         arr[i] = newArr[p3++]
//     }

// }
function mergeing(l, mid, r, arr) {
    let minTotal = 0
    const newArr = []
    let p1 = l
    let p2 = mid + 1
    let p3 = 0

    while (p1 <= mid && p2 <= r) {
        debugger
        const target = arr[p1] > arr[p2] ? arr[p2] : arr[p1]
        minTotal += arr[p2] > arr[p1] ? arr[p1] * (r - p2 + 1) : 0
        arr[p1] > arr[p2] ? p2++ : p1++
        debugger
        newArr.push(target)
    }
    while (p1 <= mid) {
        newArr.push(arr[p1++])
    }
    while (p2 <= r) {
        minTotal += arr[p2] * (r - p2)
        newArr.push(arr[p2++])
    }
    for (let i = l; i <= r; i++) {
        arr[i] = newArr[p3++]
    }
    return minTotal
}

const s = "ab", t = "eidbaooo"
var sortArray = function (arr) {
    function doSortArray(array, left, right) {
        if (left === right) return 0
        const mid = Math.floor(right + (left - right) / 2)
        const a = doSortArray(array, left, mid)
        debugger
        const b = doSortArray(array, mid + 1, right)
        return a + b + mergeing(left, mid, right, array)
    }
    return doSortArray(arr, 0, arr.length - 1)

};


console.log('sssss', sortArray([1, 3, 4, 2, 5]))