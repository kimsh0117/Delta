function map(callback, inputs) {
  const result = []

  for (let i = 0; i < inputs.length; i++) {
    result.push(callback(inputs[i], i, inputs))
  }

  return result
}

export default map
