function curry(func) {
  return function curreid(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function (...args2) {
        return curreid.apply(this, args.concat(args2))
      }
    }
  }
}

export default curry
