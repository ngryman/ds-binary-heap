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
  heap.items = [1, 2, 3, 4]
  heap.pop()
  t.deepEqual(heap.items, [2, 4, 3])
})

test('choose the best of both children', t => {
  let { heap } = t.context
  heap.items = [1, 4, 2, 8, 16]
  heap.pop()
  t.deepEqual(heap.items, [2, 4, 16, 8])
})

test('handle equal child', t => {
  let { heap } = t.context
  heap.items = [1, 2, 8, 4, 16, 16]
  heap.pop()
  heap.pop()
  heap.pop()
  t.deepEqual(heap.items, [8, 16, 16])
})

test('return undefined if the heap is empty', t => {
  let { heap } = t.context
  t.notThrows(() => {
    let res = heap.pop()
    t.is(res, undefined)
    t.is(heap.items.length, 0)
  })
})
