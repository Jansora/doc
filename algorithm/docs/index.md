---
title: 算法笔记 - Jansora
order: 10
hero:
title: 算法笔记
desc: 📖 学习算法的点点滴滴
actions:
- text: 快速开始
link: /leetcode/1
---


```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    
    int maxValue = Integer.MIN_VALUE;
    
    public int maxPathSum(TreeNode root) {
        getMaxSubTree(root);
        return maxValue;
        
    }
    public int getMaxSubTree(TreeNode root) {
        if (root == null) {
            return 0;
        }

        int current = root.val;
 
        int left = getMaxSubTree(root.left);
        int right = getMaxSubTree(root.right);
        
        updateMax(current);
        updateMax(current + left);
        updateMax(current + right);
        updateMax(current + left + right);
        return max(current, max(current + left, current + right));
    }
    public int max(int left, int right) {    
       return left > right ? left : right;
    }
    public void updateMax(int compare) {
          System.out.println(compare + " " + this.maxValue);
        if (compare > this.maxValue) {
            this.maxValue = compare;
        }
     
    }
    
}
```
