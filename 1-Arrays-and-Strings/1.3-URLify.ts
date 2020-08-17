//URLify string with whitespace to string with %20 and expect whitespace at end or near to be trimmed
let TC1p3: {
  noTrim: string
  frontTrim: string
  backTrim: string
  bothTrim: string
  emptyString: string
}

TC1p3 = {
  noTrim: 'the face of my face',
  frontTrim: ' the time of my life',
  backTrim: 'the miles that I walked ',
  bothTrim: '   are all I can think of  ',
  emptyString: '',
}

//time O(n), space O(1)
function URLify(str: string): string {
  if (str === '') return ''
  let spaceRegex = /\s/gi
  return str.trim().replace(spaceRegex, '%20')
}

console.group('URLify quick tests')
console.log(URLify(TC1p3.noTrim))
console.log(URLify(TC1p3.frontTrim))
console.log(URLify(TC1p3.backTrim))
console.log(URLify(TC1p3.bothTrim))
console.log(URLify(TC1p3.emptyString)) //-1
console.groupEnd()
