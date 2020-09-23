var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Create a Hash Table
  this.add = (key, val) => {
    const theHash = hash(key);
    if(!this.collection.hasOwnProperty(theHash)){
      this.collection[theHash] = {}
    }
    this.collection[theHash][key] = val;
  }

  this.remove = key => {
    const hashedObj = this.collection[hash(key)];
    if(hashedObj.hasOwnProperty(key)) {
      delete hashedObj[key]
    }
    if(!Object.keys(hashedObj).length) {
      delete this.collection[hash(key)]
    }
  }

  this.lookup = key => {
    const theHash = hash(key);
    if(this.collection.hasOwnProperty(theHash)){
      return this.collection[theHash][key]
    }
    return null
  }
};
