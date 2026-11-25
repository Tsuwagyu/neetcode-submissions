class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // nums = array of integers
        // target = one integer

        // return nums[i] and nums[j] so that their indeces values equal to target value when added

        
        for (let i = 0; i < nums.length; i++) {

            for (let j = i + 1; j < nums.length; j++) {

                if (nums[i] + nums[j] == target) {

                    return [i, j];
                }
            } 

        }







    }

}
