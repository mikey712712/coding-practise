/*
 You are given an array(list) strarr of strings and an integer k. 
 Your task is to return the first longest string consisting of k 
 consecutive strings taken in the array.
*/

function longestConsec(strarr, k) {
    const combArr = []
    let longest = ''
    for (let i = 0; i < strarr.length - k; i++) {
      let concat = ''
      for (let w = 0; w < k; w++) {
        concat += strarr[w]
      }
      combArr.push(concat)
    }
    for (let j = 0; j < combArr.length; j++) {
      for (let l = j + 1; l < combArr.length; l++) {
        if (combArr[j].length < combArr[l].length) {
          longest = combArr[l]
        }
      }
    }
  return longest
}
