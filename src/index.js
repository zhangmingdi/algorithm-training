function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var constructMaximumBinaryTree = function (nums) {
    if (nums.length === 0) return null
    if (nums.length <= 1) return new TreeNode(nums[0])
    debugger
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