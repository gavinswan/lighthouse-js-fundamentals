function range(start, end, step) {
  const newArray = [];
  for(let i = start; i <= end; i = i + step) {
    newArray.push(i);
  }
  return newArray;
}
console.log(range(-5, 2, 3));