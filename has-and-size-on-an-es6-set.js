function checkSet(arrToBeSet, checkValue){
   // Use .has and .size on an ES6 Set
   const set = new Set(arrToBeSet);
   const result = [set.has(checkValue), set.size];
   return result;
}

checkSet([ 1, 2, 3], 2); // Should return [ true, 3 ]
