import React from 'react'

function useClientSide() {
  const [isClientSide, setIsClientSide] = React.useState(false)

  React.useEffect(() => {
    setIsClientSide(true)
  }, [])

  return isClientSide
}

export default useClientSide
