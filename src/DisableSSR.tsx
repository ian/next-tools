import { useEffect, useState } from "react"

export default function DisableSSR({ children }) {
  const [ssr, setSSR] = useState(true)
  useEffect(() => {
    setSSR(false)
  }, [])

  return (
    <div>
      {!ssr && children}
    </div>
  )
}
