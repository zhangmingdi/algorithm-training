
function Tree(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
}
// 根据层序数组构造二叉树...边界判断的不是太好
export default function constructorTree(arr) {
    let root = null
    const end = arr.length - 1
    const hashMap = new Map()

    for (let i = 0; i <= end; i++) {
        const leftIndex = 2 * i + 1
        if (hashMap.has(i)) {
            const node = hashMap.get(i)
            if (leftIndex <= end) {
                node.left = arr[leftIndex] === null ? null : new Tree(arr[leftIndex])
                node.left && hashMap.set(leftIndex, node.left)
            } else {
                node.left = null
            }
            if (leftIndex + 1 <= end) {
                node.right = arr[leftIndex + 1] === null ? null : new Tree(arr[leftIndex + 1])
                node.right && hashMap.set(leftIndex + 1, node.right)
            } else {
                node.right = null
            }
        } else if (i === 0) {
            root = new Tree(arr[i])
            if (leftIndex <= end) {
                root.left = arr[leftIndex] === null ? null : new Tree(arr[leftIndex])
                root.left && hashMap.set(leftIndex, root.left)
            } else {
                root.left = null
            }
            if (leftIndex + 1 <= end) {
                root.right = arr[leftIndex + 1] === null ? null : new Tree(arr[leftIndex + 1])
                root.right && hashMap.set(leftIndex + 1, root.right)
            } else {
                root.right = null
            }
        }
    }
    return root
}

