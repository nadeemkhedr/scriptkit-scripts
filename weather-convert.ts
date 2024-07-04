// Name: Weather Degree Converter

import '@johnlindquist/kit'

let convertToF = (c) => {
  return (c * 9) / 5 + 32
}

const convertToC = (f) => {
  return ((f - 32) * 5) / 9
}

const getDegreeWithType = (input) => {
  const matchRegex = /(\d+)(f|c)/i
  const result = matchRegex.exec(input)
  if (!result) {
    // try to be smart, if the user enters a number
    // we default degree to C if degree is < 50 and F if not
    const numberOnly = parseInt(input, 10)
    if (numberOnly) {
      const degreeType = numberOnly <= 50 ? 'c' : 'f'
      return {
        degree: numberOnly,
        type: degreeType,
      }
    }
    return null
  }
  return {
    degree: parseInt(result[1], 10),
    type: result[2].toLowerCase(),
  }
}

const degreeConverter = (input) => {
  const degreeResult = getDegreeWithType(input)
  if (!degreeResult) {
    return "You need to enter the unit in this format '30c' or '90f'"
  }

  const { degree, type } = degreeResult
  let oDegree = null
  let oType = null
  if (type === 'c') {
    oDegree = convertToF(degree)
    oType = 'F'
  } else {
    oDegree = convertToC(degree)
    oType = 'C'
  }
  return `${oDegree.toFixed(1)}°${oType}`
}

const deg = await arg(
  'Enter degress in °C or °F',
  (input) =>
    `<div class="text-2xl flex justify-center items-center p-5">
${input ? degreeConverter(input) : `Waiting for input`}
</div>`,
)

div(degreeConverter(deg))