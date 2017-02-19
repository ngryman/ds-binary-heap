export default function siftDown({ items, scorer, comparer }, k) {
  let length = items.length
  let item = items[k]
  let score = scorer(item)
  while (true) {
    let swapK
    let leftK = Math.floor(k * 2 + 1)
    let rightK = Math.floor(k * 2 + 2)
    if (leftK < length - 1) {
      let left = items[leftK]
      if (comparer(score, scorer(left)) < 0) {
        swapK = leftK
      }
      if (rightK < length - 1) {
        let right = items[rightK]
        if (comparer(score, scorer(right)) < 0) {
          swapK = rightK
        }
      }
    }
    if (null == swapK) break
    items[k] = items[swapK]
    items[swapK] = item
    k = swapK
  }
}
