import test from 'ava'
import BinaryHeap from '../index'

test.beforeEach(t => {
  t.context.heap = new BinaryHeap()
})

test('return the top item', t => {
  let { heap } = t.context
  heap.items = [1, 2, 3]
  let res = heap.peek()
  t.is(res, 1)
})

test('return undefined if the heap is empty', t => {
  let { heap } = t.context
  let res = heap.peek()
  t.is(res, undefined)
})
