import curry from './curry'

function getSearchParams(key, url) {
  return new URL(url).searchParams.get(key)
}

export default getSearchParams

export const getSearchParamsWithCurry = curry(getSearchParams)
