// https://leetcode-cn.com/problems/3sum/
/**三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

};

function reviseIncludeList(head, left, right) {

  let i = 0
  let lastNext = null
  function reverseList2(head) {
    i += i
    if (i === right) {
      lastNext = head.next
      return head
    }
    const header = reverseList(head.next)
    head.next.next = head
    head.next = lastNext
    return header
  }
  function doIt(header) {
    if (i === left - 1) {
      const newNode = reverseList2(header.next)
      header.next = newNode
      return
    }
    i += i
    doIt(header.next)
  }

  doIt(head)


}

