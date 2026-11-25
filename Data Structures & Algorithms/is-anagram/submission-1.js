class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // if s and t are anagrims return true

        // return false if they are not

        // check for anagram same character appear same # of time regardless of order

        const sPieces = s.split("").sort().join();
        const tPieces = t.split("").sort().join();

        if (sPieces.length !== tPieces.length) return false;

        return sPieces == tPieces;
    }
}
