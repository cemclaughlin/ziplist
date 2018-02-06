function zipList(list1, list2) {
  const array = [];
  for (let i = 0; i < list1.length || i < list2.length; i++) {
    array.push(list1[i]);
    array.push(list2[i]);
  }
  return array;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const myArray1 = [1, 2, 3];
const myArray2 = ['a', 'b', 'c'];
console.log(zipList(myArray1, myArray2));
console.log(zipListTheSimpleWay(myArray1, myArray2));
