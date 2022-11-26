import fetch from "cross-fetch"
import path from "path"

const DownloadButton = ({ url, children, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      onClick={() => {
        fetch(url, {
          method: "GET",
        })
          .then((response) => {
            if (response.status !== 200) {
              throw new Error("Sorry, I could not find that file.")
            }
            return response.blob()
          })
          .then((blob) => {
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.style.display = "none"
            a.href = url
            const filename = path.basename(url)
            a.setAttribute("download", filename)
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
          })
      }}
    >
      {children}
    </button>
  )
}

export default DownloadButton
