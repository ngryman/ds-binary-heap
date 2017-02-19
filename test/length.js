import test from 'ava'
import BinaryHeap from '../index'

test.beforeEach(t => {
  t.context.heap = new BinaryHeap()
})

test('return the number of items', t => {
  let { heap } = t.context
  heap.items = [1, 2, 3]
  t.is(heap.length, heap.items.length)
  t.is(heap.length, 3)
})
