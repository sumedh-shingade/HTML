function add(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log(sum);
}
add(10, 20, 30, 40, 50, 60);
