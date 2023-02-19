

const sortArray = function (nums) {
  heapFy(nums)
  let j = nums.length - 1
  while (j > 0) {
    [nums[0], nums[j]] = [nums[j], nums[0]]
    j = j - 1
    if(j ==0)break
    updateHeapfy(nums, 0, j)
  }
  return nums
}

// 堆化数组
function heapFy (arr) {
  // 获取最近的非叶子结点
  let i = Math.floor(arr.length * 0.5) - 1
  while (i >= 0) {
    updateHeapfy(arr,i,arr.length-1)
    // const parent = arr[i]
    // const left = arr[ 2 * i + 1]
    // const right =2 *i +2>arr.length-1? -Infinity:arr[ 2 *i +2] 
    // let max
    // if (left >= right) {
    //   max = 2 * i + 1
    // } else {
    //   max = 2 *i +2
    // }
    // if (parent < arr[max]) {
    //   [arr[max], arr[i]] = [arr[i], arr[max]]
    // }
    --i
    // debugger
  }

}
function updateHeapfy (arr, start, end) {
  let i = start
  while (2 * i + 1 <= end) {
    const parent = arr[i]
    const left = arr[2 * i + 1 ]
    const right =2 *i +2<=end? arr[2 *i +2]: -Infinity
    let max
    if (left >= right) {
      max = 2 * i + 1
    } else {
      max = 2 *i +2
    }
    if (parent < arr[max]) {
      [arr[max], arr[i]] = [arr[i], arr[max]]
      i = max
    }else{
      i = 2 *i +1
    }
  }
}

console.log('sdsdsdsd',sortArray([-4,0,7,4,9,-5,-1,0,-7,-1]))
