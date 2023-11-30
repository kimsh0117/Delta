import add from '@/utils/add'
import pipe from '@/utils/pipe'
import { RAWG_BASE_URL } from '@/constants'

describe('add(a, b)', () => {
  it('should add the given arguments a and b', () => {
    expect(add(1)(2)).toBe(3)

    expect(add(3, 4)).toBe(7)

    expect(pipe(1, add(3))).toBe(4)

    expect(pipe('a', add('b'))).toBe('ba')

    expect(
      pipe(`/platforms?key=${process.env.RAWG_BASE_URL}`, add(RAWG_BASE_URL)),
    ).toBe('https://api.rawg.io/api/platforms?key=undefined')
  })
})
