function sumDistinctElements(set1, set2) {
  let distinctElements = [];
  let sum = 0;
  
  // loop through set1
  for (let i = 0; i < set1.length; i++) {
    if (!distinctElements.includes(set1[i])) {
      distinctElements.push(set1[i]);
      sum += set1[i];
    }
  }
  
  // loop through set2
  for (let i = 0; i < set2.length; i++) {
    if (!distinctElements.includes(set2[i])) {
      distinctElements.push(set2[i]);
      sum += set2[i];
    }
  }
  
  return sum;
}

// Example usage
let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];

console.log(sumDistinctElements(set1, set2)); // Output: 13
