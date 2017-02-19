import test from 'ava'
import util from 'util'
import BinaryHeap from '../index'

test.beforeEach(t => {
  t.context.heap = new BinaryHeap()
})

test('inspect a heap', t => {
  let { heap } = t.context
  heap.items = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7]
  let res = heap.inspect().split('\n').map(l => l.trimRight())
  let expected = [
    '      ┌────── 9 ──────┐',
    '  ┌── 8 ──┐       ┌── 7 ──┐',
    '┌ 6 ┐   ┌ 5 ┐   ┌ 4 ┐     3',
    '2   1   0   9   8   7',
    ''
  ]
  t.is(res.length, expected.length)
  for (let i = 0; i < res.length; i++) {
    t.is(res[i], expected[i])
  }
})

test('support colors', t => {
  let { heap } = t.context
  heap.items = [2, 1]
  let res = util.inspect(heap, { colors: true })
    .split('\n')
    .map(l => l.trimRight())
  let expected = [
    '\u001b[90m┌ \u001b[39m\u001b[33m2\u001b[39m\u001b[90m  \u001b[39m',
    '\u001b[90m\u001b[39m\u001b[33m1\u001b[39m\u001b[90m\u001b[39m',
    ''
  ]
  t.is(res.length, expected.length)
  for (let i = 0; i < res.length; i++) {
    t.is(res[i], expected[i])
  }
})
