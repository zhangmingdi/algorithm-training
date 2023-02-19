// 两数之和
// https://leetcode-cn.com/problems/two-sum/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i)
    }
};


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




/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  let left = 0
  let right = left+1
  let third = right+1
  const arr=[]
  for(;left<nums.length-2;++left,right=left+1,third=right+1){
      for(;right<nums.length;++right,third=right+1){
          for(;third<nums.length;third++){
              if(nums[left]+nums[right]+nums[third]===0){
                  arr.push([nums[left],nums[right],nums[third]])
              }
          }
      }
  }
};