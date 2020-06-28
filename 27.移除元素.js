/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */


var delElement = function(array, index) {
  for(let i = index; i < array.length-1; i++) {
    array[i] = array[i+1];
  }
  array.pop();
}

var removeElement = function(nums, val) {
  // 从后往前遍历可以减少移动元素的次数
  for (let i = nums.length - 1; -1 < i; i--) {
    if (nums[i] == val) {
      delElement(nums,i);
    }
  }
  return nums.length;
};
// @lc code=end
/* 
Accepted
113/113 cases passed (72 ms)
Your runtime beats 52.37 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (33.1 MB)
*/

