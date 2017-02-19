import push from './lib/push'
import pop from './lib/pop'
import peek from './lib/peek'
import clear from './lib/clear'
import entries from './lib/entries'
import inspect from './lib/inspect'
import iterator from './lib/iterator'

const score = item => item

const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0

const identity = (a) => a

export default class BinaryHeap {
  /**
   * Create a new binary heap.
   *
   * @param {Function} [scorer] Function used to score an item.
   * @param {Function} [comparer] Function used to compare two items scores.
   */
  constructor(scorer = score, comparer = compare) {
    this.items = []
    this.scorer = scorer
    this.comparer = comparer
  }

  /**
   * Push an item to the heap.
   *
   * @example
   * heap.push(1)
   * heap.push('foo')
   * heap.push({ foo: 'bar' })
   *
   * @param {*} item
   */
  push(item) {
    push(this, item)
  }

  /**
   * Return the root of the heap and remove it.
   *
   * @example
   * heap.pop() // Hip-Hop! Ok...
   * // => 1
   *
   * @return {*} item
   */
  pop() {
    return pop(this)
  }

  /**
   * Return the root of the heap.
   *
   * @example
   * heap.peek()
   * // => 1
   *
   * @return {*} item
   */
  peek() {
    return peek(this)
  }

  /**
   * Remove all items form the heap.
   *
   * @example
   * heap.clear()
   */
  clear() {
    clear(this)
  }

  /**
   * Return an array containing all the items.
   *
   * @example
   * heap.entries()
   * // => [ 1, 'foo', { foo: 'bar' }]
   *
   * @return {Array}
   */
  entries() {
    return entries(this)
  }

  /**
   * Return a string representation of the list.
   *
   * @param {Number} depth
   * @param {Object} opts
   * @example
   * list.inspect()
   * // => [ 1, 'foo', { foo: 'bar' }]
   *
   * @return {String}
   */
  inspect(depth, opts) {
    return inspect(this, opts ? opts.stylize : identity)
  }

  /**
   * Return the number of items in the list.
   *
   * @example
   * list.length()
   * // => 3
   *
   * @return {Number}
   */
  get length() {
    return this.items.length
  }

  /**
   * Iterate over the list.
   *
   * @example
   * for (let item of list) {
   *   console.log(item)
   * }
   * // => 1
   * // => 'foo'
   * // => { foo: 'bar' }
   */
  * [Symbol.iterator]() {
    yield* iterator(this)
  }
}
