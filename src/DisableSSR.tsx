import { useEffect, useState } from "react"

export const useSSR = () => {
  const [ssr, setSSR] = useState(true)

  useEffect(() => {
    setSSR(false)
  }, [])

  return { ssr }
}

export function DisableSSR({ children }) {
  const { ssr } = useSSR()
  return (
    <div>
      {!ssr && children}
    </div>
  )
}
