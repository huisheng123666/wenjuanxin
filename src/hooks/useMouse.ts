import { useEffect, useState } from 'react'

export default function useMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const mouseEventHandler = (event: MouseEvent) => {
    setX(event.clientX)
    setY(event.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseEventHandler)

    return () => {
      window.removeEventListener('mousemove', mouseEventHandler)
    }
  }, [])

  return { x, y }
}
