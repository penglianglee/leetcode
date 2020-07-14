/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var i, j = 0, max = 0, index = new Array(128,0),start = 0;
  for(i=0;i<s.length;i++)
  {
    if(index[s.charCodeAt(i)]>start)
      {
        count = i - start;
        if(count>max)
        {
          max = count;
        }
        start = index[s.charCodeAt(i)];
      }
      index[s.charCodeAt(i)] = i + 1;
  }
  count = i-start;
  return count>max?count:max;
};
// @lc code=end
/* 
Accepted
987/987 cases passed (104 ms)
Your runtime beats 68.21 % of javascript submissions
Your memory usage beats 71.23 % of javascript submissions (38.3 MB)
*/

