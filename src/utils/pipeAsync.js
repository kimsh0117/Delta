function pipeAsync(value, ...funcs) {
  let acc = value
  for (const f of funcs) {
    acc = acc.then(e => f(e))
  }
  return acc
}

export default pipeAsync
