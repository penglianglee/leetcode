/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var removeNum = function(flag,i,array) {
  var size = i - flag;
  for(var n = flag; n<array.length-size;n++){
    array[n] = array[n+size];
  }
  for(var n = 0; n < size;n++){
    array.pop();
  }
}

var removeDuplicates = function(nums) {
  // flag记录每个数字出现的首个index
  // nb记录数字大小
  var flag = 0;
  var nb = nums[0];
  for (var i = 1; i < nums.length; i++) {
    if(nums[i]>nb) {
      removeNum(++flag,i,nums);
      nb = nums[flag];
      i = flag;
    }
  }
  if(nb == nums[nums.length-1]&&flag != nums.length-1){
    removeNum(++flag,nums.length,nums)
  }
  return nums.length;
};
// @lc code=end
/* 
Accepted
161/161 cases passed (240 ms)
Your runtime beats 11.01 % of javascript submissions
Your memory usage beats 6.35 % of javascript submissions (39.1 MB)
 */

