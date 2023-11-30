function pipe(value, ...funcs) {
  let acc = value
  for (const f of funcs) {
    acc = f(acc)
  }
  return acc
}

export default pipe
