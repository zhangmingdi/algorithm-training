import list from './list'


let last


// 反转整个链表
function reviseList(list) {

    function doRevise(node) {
        // 相当于进入这个点
        if (node.next === null) {
            last = node
            return node
        } else {
            const preNode = doRevise(node.next)
            preNode.next = node
            node.next = null
            return node
        }

    }
    doRevise(list._head)
}
// reviseList(list)

// 反转部分链表
function reviseSomeList(header, i) {

    let num = 0
    let newHeader
    let record

    function doRevise(node) {
        num++
        // 相当于进入这个点
        if (num === i) {
            record = node.next
            newHeader = node
            return node
        } else {
            const preNode = doRevise(node.next)
            preNode.next = node
            node.next = null
            return node
        }

    }
    doRevise(header).next = record

    return newHeader
}
// reviseSomeList(list, 3)
// console.log('gggggggg', reviseSomeList(list._head, 4));

// 反转区间链表
function reviseIncludeList(header, from, to) {

    if (from === 1) {
        return reviseSomeList(header, to)
    } else {
        const newheader = reviseIncludeList(header.next, from - 1, to - 1)
        header.next = newheader
        return header
    }


}
// console.log('222', reviseIncludeList(list._head, 2, 4),);

// reviseIncludeList(list)
// 递归循环写法
function reveseFor(head) {
    let pre = null
    let cur = head
    let newHead
    while (cur) {
        if (cur.next === null) {
            newHead = cur
        }
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return newHead
}


function reveseForSome(head, from, to) {
    let preLeft
    let left
    let right
    let rightNext


    let vitual = {}
    vitual.next = head
    preLeft = vitual
    for (let i = 0; i < from - 1; i++) {
        preLeft = preLeft.next
    }

    right = preLeft
    left = preLeft.next
    for (let i = 0; i <= to - from; i++) {
        right = right.next
    }
    rightNext = right.next

    preLeft.next = null
    right.next = null

    const newHead = reveseFor(left)

    preLeft.next = newHead
    left.next = rightNext
    return vitual.next
}

console.log('333', reveseForSome(list._head, 1, 4));

