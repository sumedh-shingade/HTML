//write a js program to print odd and even numbers from array 


arr = [45, 87, 32, 15, 21, 54];
let oddnumbers = arr.filter((e) => {
  return e % 2 != 0;
});

// for even


/*
let oddnumbers = arr.filter((e) => {
  return e % 2 != 0;
});*/
console.log(oddnumbers);
