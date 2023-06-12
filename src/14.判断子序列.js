var isSubsequence = function (s, t) {
  if (!s) return true
  if (!t) return false
  let j = 0
  for (let i = 0; i < s.length; i++) {
    while (j < t.length) {
      if (t.charAt(j) === s.charAt(i)) {
        debugger
        if (i === s.length - 1) return true
        j++
        break
      } else {
        if (j === t.length - 1) return false
        j++
      }
    }
  }
  return false
};