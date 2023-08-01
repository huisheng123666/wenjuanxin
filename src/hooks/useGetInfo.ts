import { useEffect, useState } from 'react'

export default function useGetInfo() {
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState<string>('')

  useEffect(() => {
    getInfo().then(info => {
      setLoading(false)
      setInfo(info)
    })
  }, [])

  return { loading, info }
}

function getInfo(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Date.now().toString())
    }, 1500)
  })
}
