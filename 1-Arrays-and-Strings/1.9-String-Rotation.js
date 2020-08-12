let errorTypes = {
  EMPTYSTRING: 'emptyString',
  INVALIDTYPE: 'invalidType',
}

function validate(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    error(errorTypes.EMPTYSTRING)
    return false
  }
  if (typeof s1 !== 'string' || typeof s2 !== 'string') {
    error(errorTypes.INVALIDTYPE)
    return false
  }
  return true
}

function error(type) {
  switch (type) {
    case errorTypes.EMPTYSTRING:
      console.log('ERROR: STRING CANNOT BE EMPTY')
      break
    case errorTypes.INVALIDTYPE:
      console.log('ERROR: PARAMETERS MUST BE STRINGS')
      break
    default:
      console.log('GENERAL ERROR')
  }
}

//using only one call of includes(), check to see if one string is a rotation of another
//TIME COMPLEXITY: validation is O(1), copying s1 is O(n) and includes is O(n), so total O is O(N)
//SPACE COMPLEXITY:
function stringRotation(s1, s2) {
  let validated = validate(s1, s2)
  if (!validated) return 'STRING ROTATION ENDED EARLY'
  if (s1 === s2) return true
  if (s1.length !== s2.length) return false
  let bigS1 = s1 + s1
  return bigS1.includes(s2) ? true : false
}

console.log(stringRotation('D', ['elloh'])) //ERROR MUST BE STRING
console.log(stringRotation('', 'elloh')) //ERROR CANNOT BE EMPTY
console.log(stringRotation('str', 'strr')) //false
console.log(stringRotation('hello', 'elloh')) //true
console.log(stringRotation('hello', 'ellah')) //false
console.log(stringRotation('hello', 'oelhl')) //false
console.log(stringRotation('12345', '45123')) //true

//hello
//ohell
