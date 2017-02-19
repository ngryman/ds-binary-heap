import test from 'ava'
import BinaryHeap from '../index'

test.beforeEach(t => {
  t.context.heap = new BinaryHeap()
})

test('inspect a heap', t => {
  let { heap } = t.context
  heap.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3]
  let res = heap.inspect().split('\n').map(l => l.trimRight())
  let expected = [
    '      ┌────── 1 ──────┐',
    '  ┌── 2 ──┐       ┌── 3 ──┐',
    '┌ 4 ┐   ┌ 5 ┐   ┌ 6 ┐     7',
    '8   9   0   1   2   3',
    ''
  ]
  t.is(res.length, expected.length)
  for (let i = 0; i < res.length; i++) {
    t.is(res[0], expected[0])
  }
})
