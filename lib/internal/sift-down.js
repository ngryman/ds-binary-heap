export default function siftDown({ items, scorer, comparer }, k) {
  let length = items.length
  let item = items[k]
  let score = scorer(item)
  // eslint-disable-next-line
  while (true) {
    let left = k * 2 + 1
    let right = k * 2 + 2
    let swap
    if (left < length) {
      let leftScore = scorer(items[left])
      if (comparer(score, leftScore) > 0) {
        swap = left
      }
      if (right < length) {
        let rightScore = scorer(items[right])
        if (
          comparer(score, rightScore) > 0 &&
          comparer(leftScore, rightScore) > 0) {
          swap = right
        }
      }
    }
    if (null == swap) break
    items[k] = items[swap]
    items[swap] = item
    k = swap
  }
}
