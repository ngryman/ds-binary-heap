import test from 'ava'
import BinaryHeap from '../index'

test.beforeEach(t => {
  t.context.heap = new BinaryHeap()
})

test('return the top item and remove it', t => {
  let { heap } = t.context
  heap.items = [1, 2, 3]
  let res = heap.pop()
  t.is(res, 1)
  t.is(heap.items.length, 2)
})

test('keep best item at the top', t => {
  let { heap } = t.context
  heap.items = [1, 3, 2]
  heap.pop()
  t.deepEqual(heap.items, [2, 3])
})

test('return undefined if the heap is empty', t => {
  let { heap } = t.context
  t.notThrows(() => {
    let res = heap.pop()
    t.is(res, undefined)
    t.is(heap.items.length, 0)
  })
})
