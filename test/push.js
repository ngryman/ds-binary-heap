import test from 'ava'
import BinaryHeap from '../index'

test.beforeEach(t => {
  t.context.heap = new BinaryHeap()
})

test('push an item into the heap', t => {
  let { heap } = t.context
  heap.push(1)
  t.is(heap.items.length, 1)
  t.deepEqual(heap.items, [1])
})

test('push items into the heap and keep the better item at the top', t => {
  let { heap } = t.context
  heap.push(4)
  heap.push(3)
  heap.push(2)
  heap.push(1)
  t.is(heap.items.length, 4)
  t.deepEqual(heap.items, [1, 2, 3, 4])
})

test('handle equal items', t => {
  let { heap } = t.context
  heap.push(2)
  heap.push(2)
  heap.push(1)
  heap.push(1)
  t.deepEqual(heap.items, [1, 1, 2, 2])
})
