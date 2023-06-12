
// https://leetcode.cn/problems/valid-palindrome-ii/description/
// 验证回文串 2
function isPalindrome(s, left, right, isFirst) {
  if (!s) return true
  let l = left
  let r = right
  while (l <= r) {
    if (s[l] === s[r]) {
      l++
      r--
      continue
    } else {
      if (isFirst) {
        return isPalindrome(s, l + 1, r, false) || isPalindrome(s, l, r - 1, false)
      }
      return false
    }

  }
  return true
}

var validPalindrome = function (s) {
  if (!s) return true
  let i = 0
  let j = s.length - 1
  return isPalindrome(s, i, j, true)
};

isSubsequence("axc", "ahbgdc")