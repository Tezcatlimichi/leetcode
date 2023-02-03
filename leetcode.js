// roman to integer                                             // roman to integer
let romanToInt = function (s) {
  let conversion = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let total = 0

  for (let i = 0; i < s.length; i++) {
    let currentInt = conversion[s.charAt(i)]
    let nextInt = conversion[s.charAt(i + 1)]

    let total = 0

    if (currentInt < nextInt) {
      total += nextInt - currentInt
      i++
    } else {
      total += currentInt
    }
  }
  return total
}
let s = 'III'
// s can also equal "LVIII" and "MCMXCIV"
//                                                                                                         Arrays & Hashing

// #2 Two Sum                                                       // # Two Sum

let nums = [3, 2, 4]
let target = 6

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
// time complexity : 0(N^2)
//space complexity : 0(1) - constant

//Two sum solved with Hashmap

const twoSumHash = (nums, target) => {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i]
    let complementPair = target - value
    if (map[complementPair] !== undefined) {
      return [map[complementPair], i]
    } else {
      map[value] = i
    }
  }
}
// time complexity : 0(N)
// space complexity : 0(N)

//                                                                                                    Contains Duplicate
//Given an integer array nums, return true if any value appears at least twice in the rray , and return false if every element is distinct

const containsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true
    }
  }
  return false
}

//brute force => T(n^2)
