class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sortedStrs = strs.map(word => word.split("").toSorted().join(""))
        const subArray = [];
        const visited = new Set();

        for (let i = 0; i < sortedStrs.length; i++) {
            if (visited.has(i)) continue;
            let loopArray = [];
            loopArray.push(strs[i])
            visited.add(i);
            for (let j = i + 1; j < sortedStrs.length; j++) {
                if (sortedStrs[i] === sortedStrs[j]) {
                    loopArray.push(strs[j]);
                    visited.add(j);
                }
            }
            subArray.push(loopArray);
        }

        return subArray;

    }
}
