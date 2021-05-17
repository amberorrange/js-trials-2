"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(i);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  for (const i in items) {
    if (i % 2 === 0){
      console.log(items[i]);
    };
  }
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code

  let smallestItemsList = items.sort();

  const smallestItemsList = items.slice(0, n);



  return smallestItemsList;

  
}
