import test from 'ava'
import BinaryHeap from '../index'

test.beforeEach(t => {
  t.context.heap = new BinaryHeap()
})

test('iterate over a list', t => {
  let { heap } = t.context, i = 1
  heap.items = [1, 2, 3, 4]
  for (let item of heap) {
    t.is(item, i)
    i++
  }
})
