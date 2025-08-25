// sandbox testing of arrays with reverse and filter

const numbers = [1, 2, 3, 4, 5];

// Reverse the array
const reversed = numbers.reverse();
console.log('Reversed:', reversed);

// Filter the array
const filtered = numbers.filter(num => num > 2);
console.log('Filtered:', filtered);


// This is the original array:
// It contains the numbers 1 through 5.

// reversed
// This array is created by calling numbers.reverse().
// The reverse() method reverses the order of the elements in the array in place.
// After this, numbers itself is now [5, 4, 3, 2, 1], and reversed points to the same array (since reverse() mutates the original array and returns it).
// filtered
// This array is created by calling numbers.filter(num => num > 2).
// The filter() method creates a new array containing only elements that pass the test (num > 2).
// Since numbers is now [5, 4, 3, 2, 1] (already reversed), filtered will be [5, 4, 3] (all numbers greater than 2).
// Summary:

// numbers starts as [1, 2, 3, 4, 5], but is reversed to [5, 4, 3, 2, 1].
// reversed is the same as the reversed numbers array.
// filtered contains only the values from the reversed array that are greater than 2: [5, 4, 3].