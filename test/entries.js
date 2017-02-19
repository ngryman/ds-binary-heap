import test from 'ava'
import BinaryHeap from '../index'

test.beforeEach(t => {
  t.context.heap = new BinaryHeap()
})

test('return an array of entries', t => {
  let { heap } = t.context
  heap.items = [1, 2, 3, 4]
  let res = heap.entries()
  t.not(res, heap.items)
  t.deepEqual(res, heap.items)
})
