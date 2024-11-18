# 2024/11/03 - 10 (Sun)
## (1) [M] 3. Longest Substring Without Repeating Characters
Q: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

A: https://algo.monster/liteproblems/3

## (2) [M] 8. String to Integer (atoi)
Q: https://leetcode.com/problems/string-to-integer-atoi/description/

A: https://leetcode.cn/problems/string-to-integer-atoi/solutions/184340/javascripttou-ji-qu-qiao-wu-xu-si-kao-yi-kan-jiu-h/

Utilize JS fucntions

```js
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const number = parseInt(str, 10);

    if(isNaN(number)) {
        return 0;
    } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
        return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
    } else {
        return number;
    }
};
```

A: More general
https://algo.monster/liteproblems/8

## (3) [E] 13. Roman to Integer

Q: https://leetcode.com/problems/roman-to-integer/description/

A: https://algo.monster/liteproblems/13
- Determine the sign: if current char smaller than next char
  - YES, apply '-'
  - NO, apply '+'

My solution:
Put all cases in the Map

## (4) [M] 15. 3Sum

Q: https://leetcode.com/problems/3sum/description/
A: https://algo.monster/liteproblems/15

## (5) [E] 26. Remove Duplicates from Sorted Array

Q: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
A: https://algo.monster/liteproblems/26

## (6) [M] 31. Next Permutation

Q: https://leetcode.com/problems/next-permutation/description/
A: https://algo.monster/liteproblems/31

## (7) [M] 43. Multiply Strings

Q: https://leetcode.com/problems/multiply-strings/description/
A: https://algo.monster/liteproblems/43

## (8) [M] 49. Group Anagrams
Q: https://leetcode.com/problems/group-anagrams/description/
A: https://algo.monster/liteproblems/49

## (9) [E] 67. Add Binary
Q: https://leetcode.com/problems/add-binary/description/

Frequently asked in Facebook phone interview.

## (10) [H] 76. Minimum Window Substring

Q: https://leetcode.com/problems/minimum-window-substring/description/

A: https://leetcode.cn/problems/minimum-window-substring/solutions/257359/zui-xiao-fu-gai-zi-chuan-by-leetcode-solution/

# 2024/11/04 - 06 (Mon)

## (11) [E] 88. Merge Sorted Array
https://leetcode.com/problems/merge-sorted-array/description/
A: https://algo.monster/liteproblems/88

## (12) [E] 125. Valid Palindrome
https://leetcode.com/problems/valid-palindrome/description/
A: https://algo.monster/liteproblems/125

## (13) [E] 157. Read N Characters Given Read4
Q: locked
https://algo.monster/liteproblems/157

## (14) [E] 158. Read N Characters Given read4 II - Call Multiple Times
Q: locked
https://algo.monster/liteproblems/158

## (15) [M] 2. Add Two Numbers
https://leetcode.com/problems/add-two-numbers/description/
https://algo.monster/liteproblems/2

## (16) [M] 21. Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists/description/
https://algo.monster/liteproblems/21

# 2024/11/05 - 04 (Tue)

## (17) [M] 143. Reorder List
https://leetcode.com/problems/reorder-list/description/

https://algo.monster/liteproblems/143

## (18) [M] 98. Validate Binary Search Tree

https://leetcode.com/problems/validate-binary-search-tree/description/
https://algo.monster/liteproblems/98

## (19) [M] 114. Flatten Binary Tree to Linked List
https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
https://algo.monster/liteproblems/114

## (20) [H] 124. Binary Tree Maximum Path Sum
https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
https://algo.monster/liteproblems/124


# 2024/11/06 - 07 (Wed)

## (21) [M] 133. Clone Graph
https://leetcode.com/problems/clone-graph/description/
https://algo.monster/liteproblems/133

## (22) [M] 199. Binary Tree Right Side View
https://leetcode.com/problems/binary-tree-right-side-view/description/
https://algo.monster/liteproblems/199

## (23) [M] 200. Number of Islands
https://leetcode.com/problems/number-of-islands/description/
https://algo.monster/liteproblems/200

## (24) [M] 236. Lowest Common Ancestor of a Binary Tree
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
https://algo.monster/liteproblems/236

## (25) [E] 257. Binary Tree Paths
https://leetcode.com/problems/binary-tree-paths/description/
https://algo.monster/liteproblems/257

## (26) [M] 17. Letter Combinations of a Phone Number
https://leetcode.com/problems/binary-tree-paths/description/
https://algo.monster/liteproblems/17

## (27) [M] 46. Permutations

https://leetcode.com/problems/permutations/
https://algo.monster/liteproblems/46


# 2024/11/07 - 03 (Thu)

## (28) [M] 47. Permutations II
https://leetcode.com/problems/permutations-ii/description/
https://algo.monster/liteproblems/47

## (29) *[M] 29. Divide Two Integers
https://leetcode.com/problems/permutations-ii/description/
https://algo.monster/liteproblems/29

## (30) [M] 33. Search in Rotated Sorted Array
https://leetcode.com/problems/search-in-rotated-sorted-array/description/

# 2024/11/08 - 02 (Fri)

## (31) [M] 34. Find First and Last Position of Element in Sorted Array
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

S_1: https://algo.monster/liteproblems/34
- find left bound
- first one = left bound of target number
- last one = (left bound of target number + 1) - 1

S_2: [Easier understanding solution](./Solutions/LC_34.mov)
- find first & last with flag
 
S_3: https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/504484/zai-pai-xu-shu-zu-zhong-cha-zhao-yuan-su-de-di-3-4/
- Same as S_2 more cleaner code

## (32) [M] 50. Pow(x, n)
https://leetcode.com/problems/powx-n/description/
https://algo.monster/liteproblems/50


# 2024/11/09 - 08 (Sat)

## (33) [M] 56. Merge Intervals
https://leetcode.com/explore/interview/card/facebook/54/sorting-and-searching-3/310/
https://algo.monster/liteproblems/56

## (34) [M] 162. Find Peak Element
https://leetcode.com/problems/find-peak-element/description/
https://algo.monster/liteproblems/163

## (35) *[M] 146. LRU Cache
https://leetcode.com/problems/lru-cache/description/

[Offical Solution](./Solutions/LC_146.mov)
- linked list + map
- built in: Map

## (36) *[M] 173. Binary Search Tree Iterator
https://leetcode.com/problems/binary-search-tree-iterator/description/
https://algo.monster/liteproblems/173

## (37) [M] 211. Design Add and Search Words Data Structure
https://leetcode.com/problems/design-add-and-search-words-data-structure/description/

## (38) *[H] 297. Serialize and Deserialize Binary Tree

https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/
https://algo.monster/liteproblems/297

**Frequently asked in Facebook phone interview.**

## (39) *[H] 282. Expression Add Operators
https://leetcode.com/problems/expression-add-operators/description/
https://algo.monster/liteproblems/282

## (40) *[M] 567 | 438. Find All Anagrams in a String
https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
https://algo.monster/liteproblems/438

[Solution](./Solutions/LC_438.mov)

# 2024/11/10 - 10 (Sun)
## (41) 438 | 567. Permutation in String
https://leetcode.com/problems/permutation-in-string/description/
https://algo.monster/liteproblems/567

## (42) X-[E] 953. Verifying an Alien Dictionary
https://leetcode.com/problems/verifying-an-alien-dictionary/description/


## (43) [M] 986. Interval List Intersections
https://leetcode.com/problems/interval-list-intersections/description/
https://algo.monster/liteproblems/986
- smatter way to find intersection

## (44) [M] 161. One Edit Distance - P
https://leetcode.com/problems/one-edit-distance/description/
https://algo.monster/liteproblems/161
- smatter way: don't need to iterate whole string, find the diff position and check compare remaning substring

## (45) [M] 238. Product of Array Except Self
https://leetcode.com/problems/product-of-array-except-self/description/
https://algo.monster/liteproblems/238

## (46) *[H] 273. Integer to English Words
https://leetcode.com/problems/integer-to-english-words/description/
https://algo.monster/liteproblems/273

[Solution](./Solutions/LC_273.mov)

## (47) *[E] 283. Move Zeroes
https://leetcode.com/problems/move-zeroes/description/
https://algo.monster/liteproblems/283

## (48) [M] 340. Longest Substring with At Most K Distinct Characters - P
https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/description/
https://algo.monster/liteproblems/340

## (49) [M] 138. Copy List with Random Pointer
https://leetcode.com/problems/copy-list-with-random-pointer/description/
https://algo.monster/liteproblems/138

## (50) *[M] 721. Accounts Merge
https://leetcode.com/problems/accounts-merge/description/
https://algo.monster/liteproblems/721

# 2024/11/11 - 4 (Mon)
## (51) X-[M] 468. Validate IP Address
https://leetcode.com/problems/validate-ip-address/description/

## (52) [M] 560. Subarray Sum Equals K
https://leetcode.com/problems/subarray-sum-equals-k/description/
https://algo.monster/liteproblems/560

## (53) X-[E] 680. Valid Palindrome II
https://leetcode.com/problems/valid-palindrome-ii/description/

## (54) [H] 269. Alien Dictionary
https://leetcode.com/problems/alien-dictionary/description/

[Solution](./Solutions/LC_269.mov)

# 2024/11/12 - 5 (Tue)
## (55) *[H] 301. Remove Invalid Parentheses
https://leetcode.com/problems/remove-invalid-parentheses/description/

## (56) *[H] 10. Regular Expression Matching
https://leetcode.com/problems/regular-expression-matching/description/
[DP solution](https://algo.monster/liteproblems/10)
[Recursive](./Solutions/LC_10.js)
[Official](./Solutions/LC_10.mov)

## (57) X-[M] 78.Subsets
https://leetcode.com/problems/subsets/description/

## (58) X-[E] 278. First Bad Version
https://leetcode.com/problems/first-bad-version/description/

## (59) X-[E]349. Intersection of Two Arrays
https://leetcode.com/problems/intersection-of-two-arrays/description/


# 2024/11/13 - ? (Web)
## (60) X-[E] 350.Intersection of Two Arrays II
## (61) [M] 247. Strobogrammatic Number II
https://leetcode.com/problems/strobogrammatic-number-ii/description/

## (62) X-[E] 543. Diameter of Binary Tree
https://leetcode.com/problems/diameter-of-binary-tree/description/

# 2024/11/14 - 0 (Thu)

# 2024/11/15 - 2 (Fri)
## (63) *[H] 317-Shortest Distance from All Buildings
https://leetcode.com/problems/shortest-distance-from-all-buildings/description/
https://algo.monster/liteproblems/317

## (65) *785. Is Graph Bipartite?
https://leetcode.com/problems/is-graph-bipartite/description/
https://algo.monster/liteproblems/785

## (66) X-[M] 426.Convert Binary Search Tree to Sorted Doubly Linked List
https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/description/


## (67)


# Facebook Phone interview

## (9) [E] 67. Add Binary
Q: https://leetcode.com/problems/add-binary/description/

## (38) *[H] 297. Serialize and Deserialize Binary Tree

https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/
https://algo.monster/liteproblems/297

## (46) *[H] 273. Integer to English Words
https://leetcode.com/problems/integer-to-english-words/description/
https://algo.monster/liteproblems/273

[Solution](./Solutions/LC_273.mov)

## (55) *[H] 986. Interval List Intersections
https://leetcode.com/problems/interval-list-intersections/description/
https://algo.monster/liteproblems/986

## (26) [M] 17. Letter Combinations of a Phone Number
https://leetcode.com/problems/binary-tree-paths/description/
https://algo.monster/liteproblems/17

## (55) *[H] 301. Remove Invalid Parentheses
https://leetcode.com/problems/remove-invalid-parentheses/description/

#  Facebook online assessment.

## (45) [M] 238. Product of Array Except Self
https://leetcode.com/problems/product-of-array-except-self/description/
https://algo.monster/liteproblems/238

## (26) [M] 17. Letter Combinations of a Phone Number
https://leetcode.com/problems/binary-tree-paths/description/
https://algo.monster/liteproblems/17
