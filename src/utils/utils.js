function merge(list1, list2) {
  let mergedList = list1.slice()

  for (let item of list2) {
    const idToCheck = item.id
    const exists = mergedList.some(existingItem => existingItem.id === idToCheck)
    if (!exists) {
      mergedList.push(item)
    }
  }
  return mergedList
}

export { merge }