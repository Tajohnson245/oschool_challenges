var twoSum = function (nums, target) {
  //loop through nums array for each element i
  for (var i = 0; i < nums.length; i++) {
    // loop through nums array starting at i+1
    for (var j = i + 1; j < nums.length; j++) {
      // check if nums[i] + nums[i+1] = target
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
