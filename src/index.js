function bigger(a, b) {
  return b - a;
}

class Sorter {
  constructor() {
    this.arr=[]; 
    this.compareFunctionM = bigger();
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var newArr = [];
    for(var i = 0; i < indices.length; i++)
      newArr.push(this.arr[indices[i]]);
    indices.sort();
    newArr.sort(this.compareFunctionM);
    for(var i = 0; i < indices.length; i++)
      this.arr[indices[i]] = newArr[i];
    return this.arr;
  }

  setComparator(compareFunction) {
    this.compareFunctionM = compareFunction;
  }
}

module.exports = Sorter;