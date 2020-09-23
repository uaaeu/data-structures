var Map = function() {
  this.collection = {};
  // Create a Map Data Structure
  this.add = (key, value) => {
    if(!this.has(key)){
      this.collection[key] = value;
    }
  }

  this.remove = (key) => {
    if(this.collection.hasOwnProperty(key)) {
      this.collection.delete(key);
    }
  }

  this.get = (key) => {
    return this.collection[key];
  }

  this.has = (key) => {
    if(this.collection.hasOwnProperty(key)){
      return true;
    } else {
      return false;
    }
  }

  this.values = () => {
    let ar = [];
    for(let i in this.collection){
      ar.push(this.collection[i]);
    }
    return ar;
  }

  this.size = () => {
    return Object.keys(this.collection).length
  }

  this.clear = () => {
    this.collection = {}
  }
};
