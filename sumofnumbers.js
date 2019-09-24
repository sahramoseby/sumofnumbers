const testNum = [1, 2, 3, 4, 5];

function sumFor(list) {
  let total = 0;
  for(i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

function sumWhile(list) {
  let total = 0;
  i = 0;
  while(i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  } else {
    return list[0] + sumRecursion(list.slice(1, list.length))
  }
}

  function sumUnderscore(list) {
    return _.reduce(list, function(memo, num) {return memo + num;}, 0);
  }

console.log(sumFor(testNum));

console.log(sumWhile(testNum));

console.log(sumRecursion(testNum));

console.log(sumUnderscore(testNum));