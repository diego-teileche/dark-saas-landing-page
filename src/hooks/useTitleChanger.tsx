import { useEffect, useState } from "react"

interface titleChangerProps {
  defaultTitle: string
  blurTitle: string
}

export const useTitleChanger = ({
  defaultTitle,
  blurTitle,
}: titleChangerProps) => {
  const [originalTitle, setOriginalTitle] = useState(defaultTitle)

  useEffect(() => {
    document.title = defaultTitle

    const handleBlur = () => {
      document.title = blurTitle
    }

    const handleFocus = () => {
      document.title = originalTitle
    }

    window.addEventListener("blur", handleBlur)
    window.addEventListener("focus", handleFocus)

    return () => {
      window.removeEventListener("blur", handleBlur)
      window.removeEventListener("focus", handleFocus)
    }
  }, [defaultTitle, originalTitle, blurTitle])

  return setOriginalTitle
}
