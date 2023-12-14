// NESTED FOR LOOP
const twoNumberSum = (array, targetSum) => {
  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i]
    for (let j = 1; j < array.length; j++) {
      let secondNum = array[j]
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum]
      }
    }
  }
}
console.log(twoNumberSum([2, 1, 5, 13, 9, -1], 8))

// HASH TABLE
// const twoNumberSumHash = (array, targetSum) => {
//   let hash = {}
//   for (let i = 0; i < array.length; i++) {
//     let current = array[i]
//     let match = targetSum - current
//     if (hash[match]) {
//       return [match, current]
//     } else {
//       hash[match] = true
//     }
//   }
// }
// console.log(twoNumberSumHash([2, 1, 5, 13, 9, -1], 8))

// const twoNumberSum2 = (array, targetSum) => {
//   let sorted = array.sort((a, b) => a - b)
//   let left = sorted[0]
//   let right = sorted[sorted.length - 1]
//   if (left + right === targetSum) {
//   }
//   // if (left + right < targetSum) {
//   //   right--
//   // } else {
//   //   left++
//   // }
//   // return [left, right]
// }

// console.log(twoNumberSum2([3, 2, 27, 13, 56, 5], 15))
