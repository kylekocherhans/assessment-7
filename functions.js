// Runtime: O(n^2)
// Space Complexity: O(1)
function addToZero(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === 0 ) {
                return true;
            }
        }
    }

    return false;
}

// console.log(addToZero([])); // false
// console.log(addToZero([1])); // false
// console.log(addToZero([1, 2, 3])); // false
// console.log(addToZero([1, 2, 3, -2])); // true


// RUNTIME: O(n^2)
// Space Complexity: O(1)
function hasUniqueChars(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
            return false;
            }
        }
    }

    return true;
}

// console.log(hasUniqueChars("Monday")); // true
// console.log(hasUniqueChars("Moonday")); // false


// RUNTIME: O(n)
// Space Complexity: O(1)
function isPangram(str){
    str = str.toLowerCase();
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    for (let i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }

    return true;
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!")); // true
// console.log(isPangram("I like cats, but not mice")); // false


// RUNTIME: O(n)
// Space Complexity: O(1)
function findLongestWord(words) {
    let longest = 0;

    words.forEach(word => {
        if (word.length > longest) {
            longest = word.length;
        }
    });

    return longest;
}

// console.log(findLongestWord(["hi", "hello"])); // 5
