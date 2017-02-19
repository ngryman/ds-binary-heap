import siftDown from './internal/sift-down'

export default function pop(heap) {
  let item = heap.items[0]
  let last = heap.items.pop()
  if (heap.items.length > 0) {
    heap.items[0] = last
    siftDown(heap, 0)
  }
  return item
}
