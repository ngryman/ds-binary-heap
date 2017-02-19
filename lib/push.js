import siftUp from './internal/sift-up'

export default function push(heap, item) {
  const { items } = heap
  items.push(item)
  siftUp(heap, items.length - 1)
}
