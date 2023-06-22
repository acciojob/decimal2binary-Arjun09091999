function threeSum(arr, target) {
// write your code here
	let closestSum = Infinity;
  let result;

  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Iterate through the array
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      // Check if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
        result = closestSum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // Found an exact match, so return the sum
        return sum;
      }
    }
  }

  return result;
}

module.exports = threeSum;
