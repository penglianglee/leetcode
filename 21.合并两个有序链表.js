/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 == null && l2 == null) {
    return l1;
  }  
  var l = new ListNode();
  var tail = new ListNode();
  tail = l;

  while (l1 != null || l2 != null) {
      // 如果一个链表节点数值大于另一个链表节点数值
      // 则尾插法插入较小的那个链表的值，
      // 同时较小链表往后移一位

      // 如果某一个链表为空，则直接将另一个链表的节点依次插入
      if (l1 == null) {
        while (l2 != null) {
          tail.val = l2.val;
          l2 = l2.next;
          if(l2 != null){
            tail.next = new ListNode();
            tail = tail.next;  
          }
        }
        continue;
      }
      if (l2 == null) {
        while (l1 != null) {
          tail.val = l1.val;
          l1 = l1.next;
          if(l1 != null){
            tail.next = new ListNode();
            tail = tail.next;  
          }
        }
        continue;
      }

      if (l1.val > l2.val) {
        tail.val = l2.val;
        l2 = l2.next;
        tail.next = new ListNode();
        tail = tail.next;
      } else {
        tail.val = l1.val;
        l1 = l1.next;
        tail.next = new ListNode();
        tail = tail.next;
      }
    }
    return l;
};
// @lc code=end

/* 
Accepted
208/208 cases passed (88 ms)
Your runtime beats 27.4 % of javascript submissions
Your memory usage beats 35.29 % of javascript submissions (36.2 MB)
*/