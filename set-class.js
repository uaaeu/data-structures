class Set {
  constructor() {
    this.dictionary = [];
  }
  has(element) {
    return this.dictionary.indexOf(element) !== -1;
  }
  values() {
    return this.dictionary;
  }
  add(el) {
    return this.has(el) ? false : Boolean(this.dictionary.push(el));
  }
  remove(el) {
    let dic = this.dictionary;
    return dic.indexOf(el) !== -1
      ? dic.splice(dic.indexOf(el), 1)
      : "Not found";
  }
  size() {
    return this.dictionary.length;
  }
}
