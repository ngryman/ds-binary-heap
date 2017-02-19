export default function siftUp({ items, scorer, comparer }, k) {
  let item = items[k]
  let score = scorer(item)
  while (k > 0) {
    let parentK = Math.floor((k + 1) / 2) - 1
    let parent = items[parentK]
    if (comparer(score, scorer(parent)) >= 0) break
    items[parentK] = item
    items[k] = parent
    k = parentK
  }
}
