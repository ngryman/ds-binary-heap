import test from 'ava'
import BinaryHeap from '../index'

test.beforeEach(t => {
  t.context.heap = new BinaryHeap()
})

test('remove all items from the heap', t => {
  let { heap } = t.context
  heap.items = [1, 2, 3]
  heap.clear()
  t.is(heap.items.length, 0)
})
