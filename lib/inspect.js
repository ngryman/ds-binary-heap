const repeat = (n, c = ' ') => c.repeat(n)

const drawLink = (start, end) =>
  (stylize, len, child) => stylize(len >= 2
    ? child
      ? repeat(1, start) + repeat(len - 2, '─') + repeat(1, end)
      : repeat(len, ' ')
    : '', 'undefined')

const drawLeftLink = drawLink('┌', ' ')
const drawRightLink = drawLink(' ', '┐')

function inspectLvl(items, stylize, height, level) {
  if (level > height) return ''

  let start = Math.pow(2, level - 1) - 1
  let end = 2 * start + 1
  let charLength = Math.pow(2, height - level)

  let out = ''

  // initial padding
  if (level < height) {
    out += repeat(charLength - 2)
  }

  // link + item + link
  for (let i = start, j = end; i < end && i < items.length; i++) {
    out += drawLeftLink(stylize, charLength, j++ < items.length)
    out += stylize(items[i], 'number')
    out += drawRightLink(stylize, charLength, j++ < items.length)
    out += repeat(Math.max(3, 2 * charLength - 1))
  }

  // next line
  out += '\n' + inspectLvl(items, stylize, height, ++level)

  return out
}

export default function inspect({ items }, stylize) {
  let height = Math.ceil(Math.log2(items.length + 1))
  return inspectLvl(items, stylize, height, 1)
}
