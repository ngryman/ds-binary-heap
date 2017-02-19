<p align="center">
  <img alt="ds-binary-heap" src="https://raw.githubusercontent.com/ngryman/artworks/master/ds-binary-heap/heading/ds-binary-heap@2x.png" width="280">
</p>

<p align="center">
  A binary heap data structure in JavaScript.
</p>

<p align="center">
  <a href="//travis-ci.org/ngryman/ds-binary-heap">
    <img alt="Build Status" src="https://img.shields.io/travis/ngryman/ds-binary-heap.svg">
  </a>
  <a href="//codecov.io/github/ngryman/ds-binary-heap">
    <img alt="Coverage" src="https://img.shields.io/codecov/c/github/ngryman/ds-binary-heap.svg">
  </a>
</p>

* * *

## Big-O

[![Greenkeeper badge](https://badges.greenkeeper.io/ngryman/ds-binary-heap.svg)](https://greenkeeper.io/)

        | Access | Search | Insertion  | Deletion
------- | ------ | ------ | ---------- | --------
Average | `Θ(1)` | `Θ(n)` | `Θ(1)`     | `Θ(log n)`
Worst   | `O(1)` | `O(n)` | `O(log n)` | `O(log n)`

## Install

```bash
yarn add ds-binary-heap
```

## API

### constructor

Create a new binary heap.

**Parameters**

-   `scorer` **\[[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)]** Function used to score an item.
-   `comparer` **\[[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)]** Function used to compare two items scores.

### push

Push an item to the heap.

**Parameters**

-   `item` **Any** 

**Examples**

```javascript
heap.push(1)
heap.push('foo')
heap.push({ foo: 'bar' })
```

### pop

Return the root of the heap and remove it.

**Examples**

```javascript
heap.pop() // Hip-Hop! Ok...
// => 1
```

Returns **Any** item

### peek

Return the root of the heap.

**Examples**

```javascript
heap.peek()
// => 1
```

Returns **Any** item

### clear

Remove all items form the heap.

**Examples**

```javascript
heap.clear()
```

### entries

Return an array containing all the items.

**Examples**

```javascript
heap.entries()
// => [ 1, 'foo', { foo: 'bar' }]
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

### inspect

Return a string representation of the list.

**Parameters**

-   `depth` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `opts` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
list.inspect()
// => [ 1, 'foo', { foo: 'bar' }]
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### length

Return the number of items in the list.

**Examples**

```javascript
list.length()
// => 3
```

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

### iterator

Iterate over the list.

**Examples**

```javascript
for (let item of list) {
  console.log(item)
}
// => 1
// => 'foo'
// => { foo: 'bar' }
```

## License

MIT © [Nicolas Gryman](http://ngryman.sh)
