import { useEffect } from "react"
export const scrollTop = (x, y) => {
    useEffect(() => {
        window.scrollTo(x,y)
    })
}