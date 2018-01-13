function arrange(arr) {
  let results = [];
  if (arr.length === 1) {
    results.push(arr)
    return results
  }
  arr.forEach((elem, index) => {
    let subArray = arr.filter((e,i) => i !== index)
    let subOptions = arrange(subArray)
    let answer = subOptions.forEach(option =>
      results.push([elem].concat(option))
    )
  })

  return results
}

console.log(arrange([1,2,3,4]))
